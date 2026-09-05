import fs from 'node:fs/promises'
import path from 'node:path'
import { markdownToHtml as renderMarkdown } from './markdown-to-html.mjs'

const postsFile = path.resolve('src/data/posts.js')
const issueNumber = Number(process.env.ISSUE_NUMBER || 0)
const issueTitle = process.env.ISSUE_TITLE || ''
const issueBody = process.env.ISSUE_BODY || ''
const issueUrl = process.env.ISSUE_URL || ''
const issueCreatedAt = process.env.ISSUE_CREATED_AT || ''
const issueLabels = parseIssueLabels(process.env.ISSUE_LABELS || '')

if (!issueNumber || !issueTitle || !issueBody.trim()) {
  throw new Error('Missing issue metadata. ISSUE_NUMBER, ISSUE_TITLE, and ISSUE_BODY are required.')
}

const metadata = parseMetadata(issueBody)
const title = metadata.title || issueTitle
const summary = metadata.summary || firstPlainLine(issueBody)
const tags = parseTags(metadata.tags || issueLabels)
const content = removeDuplicateTitle(metadata.content || stripMetadata(issueBody), title)

if (!summary) {
  throw new Error('Missing post summary. Add `summary: ...` to the issue body.')
}

if (!content.trim()) {
  throw new Error('Missing post content.')
}

const postsModule = await import(`${pathToFileUrl(postsFile)}?t=${Date.now()}`)
const posts = postsModule.posts || []
const existingIndex = posts.findIndex((post) => post.issueNumber === issueNumber)
const nextId = existingIndex >= 0 ? posts[existingIndex].id : nextPostId(posts)
const date = normalizePublishedAt(
  metadata.date
    || (existingIndex >= 0 ? posts[existingIndex].date : issueCreatedAt || new Date().toISOString())
)

const post = {
  id: nextId,
  issueNumber,
  source: issueUrl,
  title,
  date,
  summary,
  content: renderMarkdown(content),
  tags
}

if (existingIndex >= 0) {
  posts[existingIndex] = post
} else {
  posts.push(post)
}

posts.sort((a, b) => Number(a.id) - Number(b.id))
await fs.writeFile(postsFile, `export const posts = ${formatValue(posts)}\n`, 'utf8')

function parseMetadata(body) {
  const result = {}
  const lines = body.replace(/\r\n/g, '\n').split('\n')
  let index = 0

  for (; index < lines.length; index += 1) {
    const line = lines[index]
    const match = /^([a-zA-Z][\w-]*|摘要|标签|标题|日期)\s*[:：]\s*(.*)$/.exec(line)
    if (!match) {
      break
    }

    const key = {
      摘要: 'summary',
      标签: 'tags',
      标题: 'title',
      日期: 'date'
    }[match[1]] || match[1].toLowerCase()

    result[key] = match[2].trim()
  }

  result.content = lines.slice(index).join('\n').trim()
  return result
}

function stripMetadata(body) {
  return parseMetadata(body).content
}

function parseTags(value) {
  const values = Array.isArray(value) ? value : String(value || '').split(/,|\uFF0C/)

  return values
    .map((tag) => tag.trim())
    .filter((tag) => tag && !['blog', 'blog-post', 'wontfix'].includes(tag.toLowerCase()))
}

function parseIssueLabels(value) {
  try {
    const labels = JSON.parse(value)
    return Array.isArray(labels) ? labels : []
  } catch {
    return []
  }
}

function removeDuplicateTitle(markdown, title) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const firstContentIndex = lines.findIndex((line) => line.trim())

  if (firstContentIndex >= 0) {
    const heading = /^#\s+(.+)$/.exec(lines[firstContentIndex].trim())
    if (heading && heading[1].trim() === title.trim()) {
      lines.splice(firstContentIndex, 1)
    }
  }

  return lines.join('\n').trim()
}

function firstPlainLine(body) {
  const line = stripMetadata(body)
    .split('\n')
    .map((item) => item.trim())
    .find((item) => item && !/^#+\s+/.test(item) && !/^<img\b/i.test(item)) || ''
  const plain = line
    .replace(/&(?:emsp|nbsp);/gi, '')
    .replace(/\*\*|~~|`|\*/g, '')
    .trim()

  return plain.length > 80 ? `${plain.slice(0, 80)}…` : plain
}

function nextPostId(posts) {
  return posts.reduce((max, post) => Math.max(max, Number(post.id) || 0), 0) + 1
}

function normalizePublishedAt(value) {
  const publishedAt = String(value || '').trim()

  if (/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
    return `${publishedAt}T00:00:00+08:00`
  }

  if (Number.isNaN(Date.parse(publishedAt))) {
    throw new Error(`Invalid post date: ${publishedAt}`)
  }

  return publishedAt.replace(/\.\d{3}(?=Z$|[+-]\d{2}:\d{2}$)/, '')
}

function formatValue(value, indent = 0) {
  const space = '  '.repeat(indent)
  const nextSpace = '  '.repeat(indent + 1)

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]'
    }

    if (value.every((item) => typeof item !== 'object')) {
      return `[${value.map((item) => formatValue(item, indent)).join(', ')}]`
    }

    return `[\n${value.map((item) => `${nextSpace}${formatValue(item, indent + 1)}`).join(',\n')}\n${space}]`
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
    return `{\n${entries.map(([key, item]) => `${nextSpace}${key}: ${formatValue(item, indent + 1)}`).join(',\n')}\n${space}}`
  }

  return JSON.stringify(value)
}

function pathToFileUrl(filePath) {
  return `file://${filePath.replace(/\\/g, '/')}`
}
