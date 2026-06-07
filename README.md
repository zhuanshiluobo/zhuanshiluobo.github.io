# zhuanshiluobo 的博客

这是一个基于 Vue 3 + Vite 构建的个人技术博客。

线上地址：[https://zhuanshiluobo.github.io/](https://zhuanshiluobo.github.io/)

## 使用方法

### 1. 发布文章

文章数据保存在 `src/data/posts.js`。你可以直接在这个文件里新增文章，也可以通过 GitHub Issue 导入文章。

Issue 正文建议使用下面的格式：

````md
标题：文章标题
日期：2026-06-07
摘要：文章摘要，展示在首页列表中
标签：Vue, 前端

这里开始写正文内容。

正文支持常见 Markdown 写法，例如：

## 二级标题

- 列表项
- 另一个列表项

```js
console.log('hello')
```
````

说明：

- `标题`、`日期`、`摘要`、`标签` 是可选元数据
- 如果不写 `标题`，会默认使用 Issue 标题
- 如果不写 `日期`，会默认使用当天日期
- 如果不写 `摘要`，会从正文第一段提取
- `标签` 支持逗号分隔，例如 `Vue, 前端`

提交 Issue 后，仓库里的自动化流程会读取内容、更新文章数据并重新部署站点。

## 构建与部署

### 构建

```sh
npm run build
```

构建产物会输出到 `docs/` 目录。

### 部署

仓库配置了 GitHub Actions，向 `master` 分支推送代码后会自动执行：

1. 安装依赖
2. 执行 `npm run build`
3. 将 `docs/` 作为 GitHub Pages 产物上传
4. 自动部署到站点

如果你是直接改文章内容，通常只需要提交并推送到 `master` 即可。

## 项目结构

```text
zhuanshiluobo_blog/
├── public/              静态资源
├── src/
│   ├── assets/          CSS 样式
│   ├── components/      公共组件
│   ├── data/            文章数据
│   ├── router/          路由配置
│   └── views/           页面
├── scripts/             文章导入脚本
├── docs/                构建产物
└── .github/workflows/   GitHub Actions 自动部署
```

## 技术栈

- Vue 3
- Vue Router 4
- Vite 8

## 文章数据示例

如果你想手动新增文章，可以在 `src/data/posts.js` 中添加一条记录。字段建议保持下面这些：

```js
{
  id: 6,
  title: '文章标题',
  date: '2026-06-07',
  summary: '文章摘要，显示在首页列表中',
  content: `
    <p>文章正文，支持 HTML 标签。</p>
    <h2>二级标题</h2>
    <p>更多内容...</p>
    <pre><code>代码块</code></pre>
  `,
  tags: ['标签1', '标签2']
}
```

保存后提交到 `master` 分支，GitHub Pages 会自动更新。
