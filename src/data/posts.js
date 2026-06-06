export const posts = [
  {
    id: 1,
    title: "我的第一篇博客",
    date: "2026-06-04",
    summary: "这是博客的第一篇文章。",
    content: "\n      <p>欢迎来到我的博客！这是我的第一篇文章。</p>\n    ",
    tags: ["随笔", "前端"]
  },
  {
    id: 2,
    title: "Vue 3 Composition API 入门",
    date: "2026-06-02",
    summary: "深入浅出地介绍 Vue 3 Composition API 的核心概念和实际应用。",
    content: "\n      <p>Vue 3 引入了 Composition API，这是一种全新的组织组件逻辑的方式。</p>\n      <h2>为什么需要 Composition API？</h2>\n      <p>在 Vue 2 中，我们使用 Options API，当组件变得复杂时，逻辑会分散在 data、methods、computed 等选项中，难以维护和复用。</p>\n      <p>Composition API 允许我们将相关逻辑组合在一起，使代码更加清晰和可复用。</p>\n      <h2>核心 API</h2>\n      <h3>ref 和 reactive</h3>\n      <p><code>ref</code> 用于包装基本类型数据，<code>reactive</code> 用于包装对象类型数据。</p>\n      <pre><code>import { ref, reactive } from 'vue'\n\nconst count = ref(0)\nconst state = reactive({\n  name: '张三',\n  age: 25\n})</code></pre>\n      <h3>computed</h3>\n      <p><code>computed</code> 用于创建计算属性，它会自动追踪依赖并缓存结果。</p>\n      <pre><code>import { computed, ref } from 'vue'\n\nconst count = ref(0)\nconst double = computed(() => count.value * 2)</code></pre>\n      <h3>watch</h3>\n      <p><code>watch</code> 用于监听数据变化并执行副作用。</p>\n      <h2>总结</h2>\n      <p>Composition API 为我们提供了更灵活的方式来组织代码，特别适合大型项目和逻辑复用场景。</p>\n    ",
    tags: ["Vue", "前端"]
  },
  {
    id: 3,
    title: "Git 常用命令速查",
    date: "2026-05-28",
    summary: "整理 Git 日常开发中最常用的命令，让你不再依赖 GUI 工具。",
    content: "\n      <p>掌握 Git 命令行是每个开发者的必备技能。本文整理了日常开发中最常用的 Git 命令。</p>\n      <h2>基础操作</h2>\n      <pre><code>git init          # 初始化仓库\ngit clone <url>   # 克隆仓库\ngit status        # 查看状态\ngit add .         # 暂存所有更改\ngit commit -m \"\"  # 提交更改</code></pre>\n      <h2>分支操作</h2>\n      <pre><code>git branch             # 查看分支\ngit branch <name>      # 创建分支\ngit checkout <name>    # 切换分支\ngit merge <name>       # 合并分支\ngit branch -d <name>   # 删除分支</code></pre>\n      <h2>远程操作</h2>\n      <pre><code>git push origin main    # 推送到远程\ngit pull origin main    # 拉取远程更新\ngit remote -v           # 查看远程地址</code></pre>\n      <h2>撤销操作</h2>\n      <pre><code>git reset HEAD <file>   # 取消暂存\ngit checkout -- <file>  # 撤销文件修改\ngit revert <commit>     # 撤销某次提交</code></pre>\n      <p>熟记这些命令，可以大幅提升日常开发效率。</p>\n    ",
    tags: ["Git", "工具"]
  },
  {
    id: 4,
    issueNumber: 6,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/6",
    title: "测试从需求（lssues）提交 5",
    date: "2026-06-06",
    summary: "摘要：首页显示简短摘要。",
    content: "<p>摘要：首页显示简短摘要。 标签：博客</p>\n<p>请在这里写正文。</p>\n<p>支持的Markdown：</p>\n<p># 一级标题 #5 到别的链接</p>\n<ul><li>段落</li><li><code>行内代码</code></li><li><strong>加粗文字</strong></li><li>*斜体文字*</li><li>~~删除线~~</li><li>项目列表</li><li>代码块</li><li>&gt;引用</li><li>---</li><li>分割线</li></ul>",
    tags: ["Blog"]
  },
  {
    id: 5,
    issueNumber: 8,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/8",
    title: "测试tag能否提交",
    date: "2026-06-06",
    summary: "test",
    content: "<p>test</p>",
    tags: ["Blog"]
  },
  {
    id: 6,
    issueNumber: 9,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/9",
    title: "测试非选择有tag能否提交",
    date: "2026-06-06",
    summary: "依旧测试",
    content: "<p>依旧测试</p>",
    tags: ["Blog"]
  }
]
