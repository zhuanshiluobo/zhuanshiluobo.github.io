# 转石萝卜的博客

基于 Vue 3 + Vite 构建的个人技术博客。

入口：[zhuanshiluobo.github.io](https://zhuanshiluobo.github.io/)

## 功能

- 文章列表首页，按日期倒序排列
- 文章详情页，支持 HTML 富文本渲染
- 标签分类
- 响应式布局，适配移动端
- Hash 路由模式，兼容 GitHub Pages

## 技术栈

- Vue 3 (Composition API)
- Vue Router 4 (Hash 模式)
- Vite 8

## 项目结构

```
zhuanshiluobo_blog/
├── public/              静态资源（构建时直接复制到输出目录）
├── src/
│   ├── assets/          CSS 样式
│   │   ├── base.css     颜色变量与基础重置
│   │   └── main.css     全局布局样式
│   ├── components/      公共组件
│   │   └── BlogHeader.vue  顶部导航栏
│   ├── data/            数据
│   │   └── posts.js     博客文章数据
│   ├── router/          路由
│   │   └── index.js     Hash 路由配置
│   ├── views/           页面
│   │   ├── Home.vue     首页（文章列表）
│   │   └── Post.vue     文章详情页
│   ├── App.vue          根组件
│   └── main.js          入口文件
├── index.html            HTML 模板
├── vite.config.js        Vite 配置
└── .github/workflows/    GitHub Actions 自动部署
```

## 本地开发

```sh
npm install
npm run dev
```

浏览器访问 `http://localhost:5173`。

## 构建与部署

### 构建

```sh
npm run build
```

构建产物输出到 `docs/` 目录。

### 部署

推送代码到 `master` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。无需手动操作。

部署流程：
1. 推送代码 → 触发 Actions 工作流
2. Actions 执行 `npm ci && npm run build`
3. 构建产物通过 `actions/upload-pages-artifact` 上传
4. `actions/deploy-pages` 部署到 `zhuanshiluobo.github.io`

## 添加文章

在 `src/data/posts.js` 中添加新条目：

```js
{
  id: 6,
  title: '文章标题',
  date: '2026-06-04',
  summary: '文章摘要，显示在首页列表中。',
  content: `
    <p>文章正文，支持 HTML 标签。</p>
    <h2>二级标题</h2>
    <p>段落内容...</p>
    <pre><code>代码块</code></pre>
  `,
  tags: ['标签1', '标签2']
}
```

保存后提交推送，Actions 会自动更新线上内容。
