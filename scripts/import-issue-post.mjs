import fs from 'node:fs/promises'
import path from 'node:path'

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

    const image = githubImageToHtml(line)
    if (image) {
      flushParagraph()
      flushList()
      html.push(image)
      continue
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line)
    if (heading) {
      flushParagraph()
      flushList()
      const level = Math.max(2, heading[1].length)
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`)
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
    .replace(/&amp;(emsp|nbsp);/gi, '&$1;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
    .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}

function githubImageToHtml(line) {
  const trimmed = line.trim()
  const htmlImage = /^<img\b([^>]*)\/?\s*>$/i.exec(trimmed)

  if (htmlImage) {
    const src = readHtmlAttribute(htmlImage[1], 'src')
    const alt = readHtmlAttribute(htmlImage[1], 'alt') || ''
    return safeGitHubImage(src, alt)
  }

  const markdownImage = /^!\[([^\]]*)\]\((\S+?)(?:\s+["'][^"']*["'])?\)$/.exec(trimmed)
  if (markdownImage) {
    return safeGitHubImage(markdownImage[2], markdownImage[1])
  }

  return ''
}

function readHtmlAttribute(attributes, name) {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i')
  const match = pattern.exec(attributes)
  return match ? (match[1] ?? match[2] ?? '') : ''
}

function safeGitHubImage(src, alt) {
  if (!src) {
    return ''
  }

  try {
    const url = new URL(src)
    const isCurrentAttachment = url.hostname === 'github.com'
      && /^\/user-attachments\/assets\/[0-9a-f-]+$/i.test(url.pathname)
    const isLegacyAttachment = url.hostname === 'user-images.githubusercontent.com'

    if (url.protocol !== 'https:' || (!isCurrentAttachment && !isLegacyAttachment)) {
      return ''
    }

    return `<img src="${escapeHtml(url.href)}" alt="${escapeHtml(alt)}" loading="lazy">`
  } catch {
    return ''
  }
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
