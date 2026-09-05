import assert from 'node:assert/strict'
import { markdownToHtml } from './markdown-to-html.mjs'

const rendered = markdownToHtml(`
# 一级标题
##### 五级标题

+ 加号列表
- 减号列表

1. 有序列表
2. 第二项

> 引用 **加粗**

[链接](https://example.com) 和 ![图片](https://example.com/image.png)

| 列一 | 列二 |
| --- | --- |
| A | B |

---

~~删除线~~、*斜体*、\`行内代码\`

\`\`\`js
console.log('code')
\`\`\`
`)

for (const expected of [
  '<h1>一级标题</h1>',
  '<h5>五级标题</h5>',
  '<ul>',
  '<ol>',
  '<blockquote>',
  '<strong>加粗</strong>',
  '<a href="https://example.com" target="_blank" rel="noopener noreferrer">链接</a>',
  '<img src="https://example.com/image.png" alt="图片" loading="lazy">',
  '<table>',
  '<hr>',
  '<s>删除线</s>',
  '<em>斜体</em>',
  '<code>行内代码</code>',
  '<pre><code class="language-js">'
]) {
  assert.ok(rendered.includes(expected), `缺少预期输出：${expected}`)
}

const compatibility = markdownToHtml(`
<h7>旧文章标题

<h5>下一个标题

\`\`\`单行代码\`\`\`

<img width="100" alt="Issue 图片" src="https://github.com/user-attachments/assets/12345678-1234-1234-1234-123456789abc" />

<script>alert('xss')</script>
`)

assert.ok(compatibility.includes('<h6>旧文章标题</h6>'))
assert.ok(compatibility.includes('<h5>下一个标题</h5>'))
assert.ok(!compatibility.includes('旧文章标题#####'))
assert.ok(compatibility.includes('<pre><code>单行代码'))
assert.ok(compatibility.includes('<img src="https://github.com/user-attachments/assets/12345678-1234-1234-1234-123456789abc" alt="Issue 图片" loading="lazy">'))
assert.ok(!compatibility.includes('<script>'))
assert.ok(compatibility.includes('&lt;script&gt;'))

console.log('Markdown 格式测试通过')
