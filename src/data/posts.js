export const posts = [
  {
    id: 1,
    title: "我的第一篇博客",
    date: "2026-06-04T16:07:12+08:00",
    summary: "这是博客的第一篇文章。",
    content: "\n      <p>欢迎来到我的博客！这是我的第一篇文章。</p>\n    ",
    tags: ["随笔", "前端"]
  },
  {
    id: 2,
    title: "Vue 3 Composition API 入门",
    date: "2026-06-02T00:00:00+08:00",
    summary: "深入浅出地介绍 Vue 3 Composition API 的核心概念和实际应用。",
    content: "\n      <p>Vue 3 引入了 Composition API，这是一种全新的组织组件逻辑的方式。</p>\n      <h2>为什么需要 Composition API？</h2>\n      <p>在 Vue 2 中，我们使用 Options API，当组件变得复杂时，逻辑会分散在 data、methods、computed 等选项中，难以维护和复用。</p>\n      <p>Composition API 允许我们将相关逻辑组合在一起，使代码更加清晰和可复用。</p>\n      <h2>核心 API</h2>\n      <h3>ref 和 reactive</h3>\n      <p><code>ref</code> 用于包装基本类型数据，<code>reactive</code> 用于包装对象类型数据。</p>\n      <pre><code>import { ref, reactive } from 'vue'\n\nconst count = ref(0)\nconst state = reactive({\n  name: '张三',\n  age: 25\n})</code></pre>\n      <h3>computed</h3>\n      <p><code>computed</code> 用于创建计算属性，它会自动追踪依赖并缓存结果。</p>\n      <pre><code>import { computed, ref } from 'vue'\n\nconst count = ref(0)\nconst double = computed(() => count.value * 2)</code></pre>\n      <h3>watch</h3>\n      <p><code>watch</code> 用于监听数据变化并执行副作用。</p>\n      <h2>总结</h2>\n      <p>Composition API 为我们提供了更灵活的方式来组织代码，特别适合大型项目和逻辑复用场景。</p>\n    ",
    tags: ["Vue", "前端"]
  },
  {
    id: 3,
    title: "Git 常用命令速查",
    date: "2026-05-28T00:00:00+08:00",
    summary: "整理 Git 日常开发中最常用的命令，让你不再依赖 GUI 工具。",
    content: "\n      <p>掌握 Git 命令行是每个开发者的必备技能。本文整理了日常开发中最常用的 Git 命令。</p>\n      <h2>基础操作</h2>\n      <pre><code>git init          # 初始化仓库\ngit clone <url>   # 克隆仓库\ngit status        # 查看状态\ngit add .         # 暂存所有更改\ngit commit -m \"\"  # 提交更改</code></pre>\n      <h2>分支操作</h2>\n      <pre><code>git branch             # 查看分支\ngit branch <name>      # 创建分支\ngit checkout <name>    # 切换分支\ngit merge <name>       # 合并分支\ngit branch -d <name>   # 删除分支</code></pre>\n      <h2>远程操作</h2>\n      <pre><code>git push origin main    # 推送到远程\ngit pull origin main    # 拉取远程更新\ngit remote -v           # 查看远程地址</code></pre>\n      <h2>撤销操作</h2>\n      <pre><code>git reset HEAD <file>   # 取消暂存\ngit checkout -- <file>  # 撤销文件修改\ngit revert <commit>     # 撤销某次提交</code></pre>\n      <p>熟记这些命令，可以大幅提升日常开发效率。</p>\n    ",
    tags: ["Git", "工具"]
  },
  {
    id: 4,
    issueNumber: 6,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/6",
    title: "测试从需求（lssues）提交 5",
    date: "2026-06-06T14:55:29Z",
    summary: "摘要：首页显示简短摘要。",
    content: "<p>摘要：首页显示简短摘要。 标签：博客</p>\n<p>请在这里写正文。</p>\n<p>支持的Markdown：</p>\n<p># 一级标题 #5 到别的链接</p>\n<ul><li>段落</li><li><code>行内代码</code></li><li><strong>加粗文字</strong></li><li>*斜体文字*</li><li>~~删除线~~</li><li>项目列表</li><li>代码块</li><li>&gt;引用</li><li>---</li><li>分割线</li></ul>",
    tags: ["Blog"]
  },
  {
    id: 5,
    title: "守望先锋：占点分析",
    date: "2026-08-21T15:09:29+08:00",
    summary: "守望先锋占点分析，提供完整 Word 文档下载。",
    content: "\n      <p>本文的完整内容整理在 Word 文档中，可通过下方按钮下载原始文件。</p>\n      <div class=\"download-card\">\n        <strong>守望先锋-占点分析.docx</strong>\n        <span>Word 文档 · 约 177 KB</span>\n        <a\n          class=\"download-link\"\n          href=\"/downloads/overwatch-point-capture-analysis.docx\"\n          download=\"守望先锋-占点分析.docx\"\n        >下载完整文档</a>\n      </div>\n    ",
    tags: ["守望先锋", "游戏分析"]
  },
  {
    id: 6,
    title: "《游城拓荒：铸基者》v0.4.0-alpha 版本更新策划案",
    date: "2026-08-21T15:25:31+08:00",
    summary: "围绕 3D 棋盘与地图导航、底部角色手牌、资源计数板和对局界面布局展开的 v0.4.0-alpha 发布策划。",
    content: "\n      <p>本文整理《游城拓荒：铸基者》v0.4.0-alpha 版本更新策划案。该版本以“更好观察、更快确认、更少打断”为体验方向，不新增基础规则。</p>\n      <p><strong>前置版本：</strong>v0.3.0-alpha<br>\n      <strong>版本状态：</strong>待合并开发内容的发布策划<br>\n      <strong>策划范围：</strong>3D 棋盘与地图导航、底部角色手牌、资源计数板、设置与显示、对局界面布局优化<br>\n      <strong>文档日期：</strong>2026 年 8 月 20 日</p>\n\n      <div class=\"download-card\">\n        <strong>0.4.0-alpha更新策划案.docx</strong>\n        <span>原始 Word 文档 · 约 31 KB</span>\n        <a\n          class=\"download-link\"\n          href=\"/downloads/you-cheng-tuo-huang-v0.4.0-alpha-plan.docx\"\n          download=\"0.4.0-alpha更新策划案.docx\"\n        >下载完整文档</a>\n      </div>\n    ",
    tags: ["游城拓荒", "游戏开发", "版本策划"]
  },
  {
    id: 7,
    title: "守望先锋系统拆解案",
    date: "2026-08-25T17:59:57+08:00",
    summary: "拆解《守望先锋》的系统框架、目标玩法与竞技规则，并评析英雄协作、成长商业化及整体体验的优缺点。",
    content: "\n      <p>本次系统拆解整理为 Excel 分析文档与 XMind 系统框架图，两份原始文件可在下方完整下载。</p>\n      <div class=\"download-card\">\n        <strong>守望先锋系统拆解案.xlsx</strong>\n        <span>原始 Excel 文档 · 约 1.95 MB</span>\n        <a\n          class=\"download-link\"\n          href=\"/downloads/overwatch-system-breakdown.xlsx\"\n          download=\"守望先锋系统拆解案.xlsx\"\n        >下载完整文档</a>\n      </div>\n      <div class=\"download-card\">\n        <strong>守望先锋系统框架.xmind</strong>\n        <span>原始 XMind 文档 · 约 320 KB</span>\n        <a\n          class=\"download-link\"\n          href=\"/downloads/overwatch-system-framework.xmind\"\n          download=\"守望先锋系统框架.xmind\"\n        >下载完整文档</a>\n      </div>\n    ",
    tags: ["守望先锋", "游戏分析"]
  },
  {
    id: 8,
    title: "关于模型",
    date: "2026-08-29T23:38:35+08:00",
    summary: "记录 Blender 模型资源网站与 Unity 导入方案，并汇总《游城拓荒》手卡、过场动画及收藏室功能的开发进展。",
    content: "\n      <p>你说得对，但是gpt 5.6sol xhigh在连上blender的mcp之后也是个****，完全听不懂人话，所以我只能自己上网找资料智能工人了。</p>\n\n      <h2>模型网站</h2>\n      <p>&emsp;这个网站能找到一些免费的资源，但是是英文，所以还是得靠一下伟大的翻译。</p>\n      <pre><code>https://sketchfab.com/feed</code></pre>\n      <p>&emsp;老牌网站模之屋，懂得都懂。</p>\n      <pre><code>https://www.aplaybox.com/</code></pre>\n\n      <h2>解决方案</h2>\n      <p>&emsp;一些<strong>关于.blend文件怎么导入到unity里还能用而不是变成一堆奇奇怪怪的材质</strong>的解决方案的连接。</p>\n      <pre><code>https://blog.csdn.net/2301_80167941/article/details/153050985</code></pre>\n\n      <h2>demo开发</h2>\n      <h3>新功能追加</h3>\n\n      <h3>手卡动画</h3>\n      <p>&emsp;是的，我看不下去这个<strong>僵硬的要死的</strong>手卡动画了，明天开始b站找点视频看看我们最好的sol改的石山代码，他完美的做到了我不提及的功能一概不做，甚至提示词里明确的两个边界一样当没看见（把手卡拿出来有动画放回去不做了，把手卡弹出有动画收回不做了），<s>听你探讨这些精彩的问题，我连手头的准备工作都得放下，令人佩服，博士，我真的服了</s></p>\n      <p>&emsp;今天算是搞了个大概，除了收回问题都解决了，<strong>奥特曼你的5h限制是⑩</strong>，plus基本不能干活pro5x勉强够用pro20x贵的要死买不起。</p>\n      <img src=\"/images/about-model-hand-card.png\" alt=\"手卡动画开发效果\">\n\n      <h3>过场动画</h3>\n      <p>&emsp;改了好几版，最后敲定的方案是展示至纯源石的模型在中间，闲着没事和联机等网络的时候可以拖着玩，布兰德。<s>模型还是整现成的，只写了个转动和惯性代码</s></p>\n      <p>&emsp;下一步要做的是小tips和进度条适配，我得想个办法找找参考，不然我都不知道写点什么，总不能抄规则书吧，那我之前做的规则书页面又小丑了。</p>\n      <img src=\"/images/about-model-transition.png\" alt=\"至纯源石过场动画效果\">\n\n      <h3>收藏室及成就</h3>\n      <p>&emsp;成就导向的游戏进程才是完整的，没有成就玩起来没意思。我准备把那个获得的成就整个类似三角洲的收藏室，关键性成就直接送你个纪念品<s>不是yj特有的限时纪念理智药</s>，你可以获得3D模型之后跑去收藏室页面转着玩，目前找的两个模型是源石和文武龙泡泡，<s>得想个办法把罗德岛搬过来·</s></p>\n      <p>&emsp;后续更新，近期没空。</p>\n\n      <h2>碎碎念环节</h2>\n      <p>&emsp;这个github.io的测试需求5我不是把issus关了吗怎么还能路由到，什么b问题我服了。</p>\n      <p>&emsp;买个域名怎么备案这么久，还要8个工作日审核才能上线。</p>\n    ",
    tags: ["游城拓荒", "更新", "建模"]
  },
  {
    id: 9,
    issueNumber: 11,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/11",
    title: "测试拖动到issues里的图片能否上传",
    date: "2026-08-30T07:28:37Z",
    summary: "测试图片能否上传",
    content: "<p>测试图片能否上传</p>\n<img src=\"https://github.com/user-attachments/assets/b85160e3-ea6b-442d-84f9-c7a43e8dfbd3\" alt=\"Image\" loading=\"lazy\">",
    tags: []
  },
  {
    id: 10,
    issueNumber: 12,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/12",
    title: "博客上线",
    date: "2026-08-30T15:01:27Z",
    summary: "在搞备案的时候顺便搞了下SSL证书，nginx对于发布这一块确实厉害，就是宝塔面板和gpt下了两次导致中间排查问题了半小时，结果就是现在的宝塔面板上显示还是没有…",
    content: "<p>&emsp;在搞备案的时候顺便搞了下SSL证书，nginx对于发布这一块确实厉害，就是宝塔面板和gpt下了两次导致中间排查问题了半小时，结果就是现在的宝塔面板上显示还是没有ssl，但是依然可以通过访问https往里进，就很奇怪，明明备案还没过的说。  不管怎么说现在国内总算是可以通过输入zhuanshiluobo.me访问了，<strong>可喜可贺可喜可贺</strong>。</p>\n<p>&emsp;我说真的现在的技术栈虽然我看得懂但是真的很菜，样式依托的同时还没给多少修改的空间，我迟早得重构整个页面，至少也得加个音乐播放器、动态背景和数据库，不然也太单调了。</p>\n<p>&emsp;bzw，linux确实比windows顺眼多了，至少在命令符上powershell和cmd还是太⑩了，报错成山。</p>\n<h2>demo开发</h2>\n<p>&emsp;想了下还是先把收藏室页面搞定了，这样也方便后续加奇奇怪怪的模型的时候可以先填进去，sol已经降智到分不清上下左右了，做个旋转的功能做了七八轮5h都耗完了也是人才，<strong>你最好是拿去训练gpt6才这样奥特曼。</strong></p>\n<img src=\"https://github.com/user-attachments/assets/25b0078a-809f-4ed3-b8e8-6bc7e10c6fb4\" alt=\"Image\" loading=\"lazy\">\n<p>&emsp;明天得学习下光照相关的功能了，不然这个材质看着有点塑料，&emsp;<s>官方的源石其实也是塑料感满满</s>  也不方便后续其他的模型导入。</p>\n<p>&emsp;其实我感觉接下来除了继续处理动画还有什么可以优化的地方吗，还是说直接开始制作三人和二人的相关规则，这个有四人做参考应该没那么复杂，充其量搬下地图和适配下新的卡片效果，ai应该能自己跑出来&emsp;&emsp;<em>应该吧</em>。</p>",
    tags: ["更新", "游城拓荒", "博客"]
  },
  {
    id: 11,
    issueNumber: 13,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/13",
    title: "issues-bug",
    date: "2026-08-30T15:13:28Z",
    summary: "上线的时候看了一眼，我真没绷住哥们这sol靠不靠谱啊，什么叫上传issues的时候看一眼action，原来执行两次的bug修好了变成四次了？？",
    content: "<p>&emsp;上线的时候看了一眼，我真没绷住哥们这sol靠不靠谱啊，什么叫上传issues的时候看一眼action，原来执行两次的bug修好了变成四次了？？</p>\n<p>&emsp;这降智真的无敌咯，已找到opus5中转，明天换hermes跑了。</p>\n<img src=\"https://github.com/user-attachments/assets/a9dae220-06b4-4ce7-9e3b-090f755c2255\" alt=\"Image\" loading=\"lazy\">",
    tags: []
  },
  {
    id: 12,
    issueNumber: 14,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/14",
    title: "关于修bug",
    date: "2026-08-31T15:55:38Z",
    summary: "也不知道哪里的问题，现在通过issues发布的md格式文档的时候转换器又坏了，现在md格式完全检测不出来，纯是字符串。",
    content: "<h2>关于博客</h2>\n<h2>新bug</h2>\n<p>&emsp;也不知道哪里的问题，现在通过issues发布的md格式文档的时候转换器又坏了，现在md格式完全检测不出来，纯是字符串。</p>\n<p>&emsp;66还有新bug，现在默认是从下到上日期越来越新，但是同一天发布的却反过来了，变成同一天新发布的在下面。找了半天还以为这个部署又出新bug了，修一下才发现原来是排序问题。</p>\n<p>&emsp;<strong>搞半天不还是得修。不过这个以后再说，目前不咋影响使用。</strong></p>\n<h2>新机制</h2>\n<p>&emsp;研究了三个小时的宝塔面板，跑到ssh里改的数据表才把master分支加上去，图形化界面虽然方便但出了问题也是真难改。</p>\n<p>&emsp;最后解决方案其实就是在宝塔页面的网站目录里<strong>把网站目录设置为git仓库地址，运行目录设置为网页构建</strong>的/docs文件夹，这样就能在正常使用nginx的npm run构建了。</p>\n<img src=\"https://github.com/user-attachments/assets/9152856e-5196-4c56-9cb9-c2b2af4ac005\" alt=\"Image\" loading=\"lazy\">\n<p>&emsp;对了，不要忘记把防跨站功能关闭，这个在宝塔面板上修改目录的时候会自动给你打开，后续修改的时候会报错。<s>我不懂我瞎说的我感觉这玩意没用</s></p>\n<img src=\"https://github.com/user-attachments/assets/1b3a1858-56c1-4a0a-ba0b-2e81c5372c5c\" alt=\"Image\" loading=\"lazy\">\n<h2>demo开发</h2>\n<h2>WebGL</h2>\n<p>&emsp;今天想制作一个能在vue博客页面直接玩的demo，结果搞了半天WebGL的调试，发现没有了ai报错如山，没办法只能继续丢给ai生成了，目前的原因是WebGL与steam服务冲突，也就是<strong>Steamworks.NET 不提供 WebGL 所需的 Steamworks 类型</strong>，要么注释掉<s>试过了要改的文件太多而且嵌套引用带来的问题多的要死</s>，要么重写个分支单独做。（这个目前在考虑做一下试试顺便练下怎么用steam desktop管理分支）</p>\n<p>&emsp;期待后续开发吧，这一块要改的不少。<em>或者可以直接拿牢版本单机用？</em></p>\n<h2>手卡</h2>\n<p>&emsp;依旧手卡，依旧看不见就是做好了。打死我也想不到让手牌放置到待选区确认的方式是把手牌区的对应卡变成透明的这种解决方案，五张扇形手牌中间空一格说是。</p>\n<img src=\"https://github.com/user-attachments/assets/ddc3561e-dc9a-49f2-aeb1-f88b6a9cb0ea\" alt=\"Image\" loading=\"lazy\">\n<h3>优化</h3>\n<p>&emsp;更新拖动松手轨迹；更新收藏室让描述更加拟人；做了一个新的过场动画让不怎么需要加载的页面快速加载。<s>今天依旧没开始做多人适配。</s></p>\n<h2>新坑</h2>\n<p>&emsp;<s>我有一个绝妙的点子，可惜这里空间太小写不下。</s></p>\n<p>&emsp;wait 这里我想写多少写多少，哈哈。</p>\n<p>&emsp;我觉得堆叠大陆是个好玩的模式，正在思考和胡闹厨房like（类似多人联机派对）、模拟经营的结合体，感觉会很好玩，还适合搞成增量、挂机玩法和肉鸽玩法，不过一切等找到工作再说。</p>\n<p>&emsp;今天把手上的系统拆解案结了，明天写新的策划案试试，感觉现在这个没什么竞争力，而且写的也不多。</p>",
    tags: ["enhancement", "question", "游城拓荒", "博客"]
  },
  {
    id: 13,
    title: "游城拓荒策划案：行动面板系统",
    date: "2026-09-01",
    summary: "梳理《游城拓荒》行动面板的设计目标、界面分区、按钮状态与弹窗逻辑，并细化角色牌、部署、调度、探索和城市移动等交互规则。",
    content: "\n      <p>本策划案围绕《游城拓荒》的行动面板系统，整理系统设计目的、界面与场景说明，以及快速行动、主要行动、按钮状态和弹窗交互规则。</p>\n      <div class=\"download-card\">\n        <strong>游城拓荒策划案-行动面板系统.xlsx</strong>\n        <span>原始 Excel 文档 · 约 3.40 MB</span>\n        <a\n          class=\"download-link\"\n          href=\"/downloads/you-cheng-tuo-huang-action-panel-system.xlsx\"\n          download=\"游城拓荒策划案-行动面板系统.xlsx\"\n        >下载完整文档</a>\n      </div>\n    ",
    tags: ["游城拓荒", "游戏开发"]
  }
]
