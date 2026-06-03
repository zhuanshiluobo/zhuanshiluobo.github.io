export const posts = [
  {
    id: 1,
    title: '我的第一篇博客',
    date: '2026-06-01',
    summary: '这是博客的第一篇文章，记录了我的技术学习之旅的开始。',
    content: `
      <p>欢迎来到我的博客！这是我的第一篇文章。</p>
      <h2>为什么要写博客？</h2>
      <p>写博客是一个很好的学习和总结方式。通过写作，我可以：</p>
      <ul>
        <li>加深对知识的理解</li>
        <li>记录学习过程中的点滴</li>
        <li>与他人分享和交流</li>
      </ul>
      <h2>关于我</h2>
      <p>我是一名前端开发者，热衷于探索新技术。目前主要使用 Vue 和 React 进行开发。</p>
      <p>在接下来的文章中，我会分享更多关于前端开发的内容，包括但不限于：</p>
      <ul>
        <li>Vue 3 组件开发技巧</li>
        <li>前端性能优化实践</li>
        <li>CSS 布局心得</li>
        <li>工具和插件的使用</li>
      </ul>
      <p>期待与大家一起进步！</p>
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
    title: 'CSS Grid 布局实战',
    date: '2026-06-03',
    summary: '通过实际案例学习 CSS Grid 布局，快速掌握现代网页布局方式。',
    content: `
      <p>CSS Grid 是一种强大的二维布局系统，它可以同时处理行和列，非常适合构建复杂的页面布局。</p>
      <h2>基础概念</h2>
      <p>Grid 布局由容器（Grid Container）和项目（Grid Items）组成。通过定义行和列来创建网格布局。</p>
      <h2>创建 Grid 容器</h2>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}</code></pre>
      <h2>常用属性</h2>
      <ul>
        <li><code>grid-template-columns</code> - 定义列的数量和宽度</li>
        <li><code>grid-template-rows</code> - 定义行的数量和高度</li>
        <li><code>gap</code> - 设置网格间距</li>
        <li><code>grid-column</code> / <code>grid-row</code> - 控制项目跨越的列/行</li>
      </ul>
      <h2>实战案例</h2>
      <p>下面是一个经典的「圣杯布局」实现：</p>
      <pre><code>.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}</code></pre>
      <p>相比 Flexbox，Grid 在处理二维布局时更加直观和强大。</p>
    `,
    tags: ['CSS', '前端']
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    title: 'JavaScript Promise 详解',
    date: '2026-05-25',
    summary: '从回调地狱到优雅的异步编程，全面理解 Promise 的工作机制。',
    content: `
      <p>Promise 是 JavaScript 异步编程的核心，理解它对每个前端开发者都至关重要。</p>
      <h2>什么是 Promise？</h2>
      <p>Promise 是一个代表异步操作最终完成或失败的对象。它有三种状态：</p>
      <ul>
        <li><strong>pending</strong> - 初始状态</li>
        <li><strong>fulfilled</strong> - 操作成功</li>
        <li><strong>rejected</strong> - 操作失败</li>
      </ul>
      <h2>基本用法</h2>
      <pre><code>const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功！')
  }, 1000)
})

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('完成'))</code></pre>
      <h2>async / await</h2>
      <p><code>async/await</code> 是 Promise 的语法糖，让异步代码看起来像同步代码：</p>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('请求失败:', error)
  }
}</code></pre>
      <h2>Promise 静态方法</h2>
      <ul>
        <li><code>Promise.all()</code> - 等待所有 Promise 完成</li>
        <li><code>Promise.race()</code> - 返回最先完成的 Promise</li>
        <li><code>Promise.allSettled()</code> - 等待所有 Promise 完成（无论成功失败）</li>
      </ul>
      <p>掌握 Promise，是进阶 JavaScript 的必经之路。</p>
    `,
    tags: ['JavaScript', '前端']
  }
]
