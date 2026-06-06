import fs from 'node:fs/promises'
import path from 'node:path'

const postsFile = path.resolve('src/data/posts.js')
const issueNumber = Number(process.env.ISSUE_NUMBER || 0)
const issueTitle = process.env.ISSUE_TITLE || ''
const issueBody = process.env.ISSUE_BODY || ''
const issueUrl = process.env.ISSUE_URL || ''

if (!issueNumber || !issueTitle || !issueBody.trim()) {
  throw new Error('Missing issue metadata. ISSUE_NUMBER, ISSUE_TITLE, and ISSUE_BODY are required.')
}

const metadata = parseMetadata(issueBody)
const title = metadata.title || issueTitle
const date = metadata.date || new Date().toISOString().slice(0, 10)
const summary = metadata.summary || firstPlainLine(issueBody)
const tags = parseTags(metadata.tags)
const content = metadata.content || stripMetadata(issueBody)

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

const post = {
  id: nextId,
  issueNumber,
  source: issueUrl,
  title,
  date,
  summary,
  content: markdownToHtml(content),
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
  if (!value) {
    return []
  }

  return value
    .split(/,|\uFF0C/)
    .map((tag) => tag.trim())
    .filter((tag) => tag && tag.toLowerCase() !== 'blog')
}

function firstPlainLine(body) {
  return stripMetadata(body)
    .split('\n')
    .map((line) => line.replace(/^#+\s*/, '').trim())
    .find(Boolean) || ''
}

function nextPostId(posts) {
  return posts.reduce((max, post) => Math.max(max, Number(post.id) || 0), 0) + 1
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html = []
  let paragraph = []
  let list = []
  let code = []
  let inCode = false

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${paragraph.join(' ')}</p>`)
      paragraph = []
    }
  }

  const flushList = () => {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`)
      list = []
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.startsWith('```')) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`)
        code = []
        inCode = false
      } else {
        flushParagraph()
        flushList()
        inCode = true
      }
      continue
    }

    if (inCode) {
      code.push(rawLine)
      continue
    }

    if (!line.trim()) {
      flushParagraph()
      flushList()
      continue
    }

    const heading = /^(#{2,3})\s+(.+)$/.exec(line)
    if (heading) {
      flushParagraph()
      flushList()
      html.push(`<h${heading[1].length}>${inlineMarkdown(heading[2])}</h${heading[1].length}>`)
      continue
    }

    const listItem = /^[-*]\s+(.+)$/.exec(line)
    if (listItem) {
      flushParagraph()
      list.push(listItem[1])
      continue
    }

    paragraph.push(inlineMarkdown(line.trim()))
  }

  flushParagraph()
  flushList()

  if (inCode) {
    html.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`)
  }

  return html.join('\n')
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
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
