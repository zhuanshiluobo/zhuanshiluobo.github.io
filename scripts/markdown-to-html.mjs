import MarkdownIt from 'markdown-it'

const markdown = new MarkdownIt({
  html: false,
  breaks: false,
  linkify: true,
  typographer: false
})

const defaultLinkOpen = markdown.renderer.rules.link_open
  || ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options))

markdown.renderer.rules.link_open = (tokens, index, options, env, self) => {
  const token = tokens[index]
  const hrefIndex = token.attrIndex('href')
  const href = hrefIndex >= 0 ? token.attrs[hrefIndex][1] : ''

  if (/^https?:\/\//i.test(href)) {
    token.attrSet('target', '_blank')
    token.attrSet('rel', 'noopener noreferrer')
  }

  return defaultLinkOpen(tokens, index, options, env, self)
}

const defaultImage = markdown.renderer.rules.image
  || ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options))

markdown.renderer.rules.image = (tokens, index, options, env, self) => {
  tokens[index].attrSet('loading', 'lazy')
  return defaultImage(tokens, index, options, env, self)
}

export function markdownToHtml(source) {
  return markdown.render(normalizeMarkdown(source)).trim()
}

export function normalizeMarkdown(source) {
  return String(source || '')
    .replace(/\r\n?/g, '\n')
    .replace(/^[\t ]*<img\b([^>]*)\/?[\t ]*>[\t ]*$/gim, (_match, attributes) => {
      const src = readHtmlAttribute(attributes, 'src')
      const alt = readHtmlAttribute(attributes, 'alt') || ''
      return isSafeImageUrl(src) ? `![${escapeMarkdownLabel(alt)}](${src})` : ''
    })
    .replace(/^[\t ]*<h(\d+)>[\t ]*(.*?)[\t ]*(?:<\/h\1>)?[\t ]*$/gim, (_match, level, text) => {
      const normalizedLevel = Math.min(Math.max(Number(level) || 1, 1), 6)
      return `${'#'.repeat(normalizedLevel)} ${text}`
    })
    .replace(/^[\t ]*```([^`\n]+)```[\t ]*$/gm, (_match, code) => `\`\`\`\n${code.trim()}\n\`\`\``)
}

function readHtmlAttribute(attributes, name) {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'=<>\u0060]+))`, 'i')
  const match = pattern.exec(attributes)
  return match ? (match[1] ?? match[2] ?? match[3] ?? '') : ''
}

function isSafeImageUrl(value) {
  if (!value) {
    return false
  }

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

function escapeMarkdownLabel(value) {
  return String(value).replace(/([\\\[\]])/g, '\\$1')
}
