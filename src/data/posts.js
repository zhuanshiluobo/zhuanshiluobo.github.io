export const posts = [
  {
    id: 1,
    title: '我的第一篇博客',
    date: '2026-06-04',
    summary: '这是博客的第一篇文章。',
    content: `
      <p>欢迎来到我的博客！这是我的第一篇文章。</p>
    `,
    tags: ['随笔', '前端']
  },
  {
    id: 2,
    title: 'Vue 3 Composition API 入门',
    date: '2026-06-02',
    summary: '深入浅出地介绍 Vue 3 Composition API 的核心概念和实际应用。',
    content: `
      <p>Vue 3 引入了 Composition API，这是一种全新的组织组件逻辑的方式。</p>
      <h2>为什么需要 Composition API？</h2>
      <p>在 Vue 2 中，我们使用 Options API，当组件变得复杂时，逻辑会分散在 data、methods、computed 等选项中，难以维护和复用。</p>
      <p>Composition API 允许我们将相关逻辑组合在一起，使代码更加清晰和可复用。</p>
      <h2>核心 API</h2>
      <h3>ref 和 reactive</h3>
      <p><code>ref</code> 用于包装基本类型数据，<code>reactive</code> 用于包装对象类型数据。</p>
      <pre><code>import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({
  name: '张三',
  age: 25
})</code></pre>
      <h3>computed</h3>
      <p><code>computed</code> 用于创建计算属性，它会自动追踪依赖并缓存结果。</p>
      <pre><code>import { computed, ref } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)</code></pre>
      <h3>watch</h3>
      <p><code>watch</code> 用于监听数据变化并执行副作用。</p>
      <h2>总结</h2>
      <p>Composition API 为我们提供了更灵活的方式来组织代码，特别适合大型项目和逻辑复用场景。</p>
    `,
    tags: ['Vue', '前端']
  },
  {
    id: 3,
    title: 'Git 常用命令速查',
    date: '2026-05-28',
    summary: '整理 Git 日常开发中最常用的命令，让你不再依赖 GUI 工具。',
    content: `
      <p>掌握 Git 命令行是每个开发者的必备技能。本文整理了日常开发中最常用的 Git 命令。</p>
      <h2>基础操作</h2>
      <pre><code>git init          # 初始化仓库
git clone <url>   # 克隆仓库
git status        # 查看状态
git add .         # 暂存所有更改
git commit -m ""  # 提交更改</code></pre>
      <h2>分支操作</h2>
      <pre><code>git branch             # 查看分支
git branch <name>      # 创建分支
git checkout <name>    # 切换分支
git merge <name>       # 合并分支
git branch -d <name>   # 删除分支</code></pre>
      <h2>远程操作</h2>
      <pre><code>git push origin main    # 推送到远程
git pull origin main    # 拉取远程更新
git remote -v           # 查看远程地址</code></pre>
      <h2>撤销操作</h2>
      <pre><code>git reset HEAD <file>   # 取消暂存
git checkout -- <file>  # 撤销文件修改
git revert <commit>     # 撤销某次提交</code></pre>
      <p>熟记这些命令，可以大幅提升日常开发效率。</p>
    `,
    tags: ['Git', '工具']
  }
]
