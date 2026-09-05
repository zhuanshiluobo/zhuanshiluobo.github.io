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
    content: "<p>测试图片能否上传\n<img src=\"https://github.com/user-attachments/assets/b85160e3-ea6b-442d-84f9-c7a43e8dfbd3\" alt=\"Image\" loading=\"lazy\"></p>",
    tags: []
  },
  {
    id: 10,
    issueNumber: 12,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/12",
    title: "博客上线",
    date: "2026-08-30T15:01:27Z",
    summary: "在搞备案的时候顺便搞了下SSL证书，nginx对于发布这一块确实厉害，就是宝塔面板和gpt下了两次导致中间排查问题了半小时，结果就是现在的宝塔面板上显示还是没有…",
    content: "<p> 在搞备案的时候顺便搞了下SSL证书，nginx对于发布这一块确实厉害，就是宝塔面板和gpt下了两次导致中间排查问题了半小时，结果就是现在的宝塔面板上显示还是没有ssl，但是依然可以通过访问https往里进，就很奇怪，明明备案还没过的说。  不管怎么说现在国内总算是可以通过输入zhuanshiluobo.me访问了，<strong>可喜可贺可喜可贺</strong>。</p>\n<p> 我说真的现在的技术栈虽然我看得懂但是真的很菜，样式依托的同时还没给多少修改的空间，我迟早得重构整个页面，至少也得加个音乐播放器、动态背景和数据库，不然也太单调了。</p>\n<p> bzw，linux确实比windows顺眼多了，至少在命令符上powershell和cmd还是太⑩了，报错成山。</p>\n<h1>demo开发</h1>\n<p> 想了下还是先把收藏室页面搞定了，这样也方便后续加奇奇怪怪的模型的时候可以先填进去，sol已经降智到分不清上下左右了，做个旋转的功能做了七八轮5h都耗完了也是人才，<strong>你最好是拿去训练gpt6才这样奥特曼。</strong></p>\n<p><img src=\"https://github.com/user-attachments/assets/25b0078a-809f-4ed3-b8e8-6bc7e10c6fb4\" alt=\"Image\" loading=\"lazy\"></p>\n<p> 明天得学习下光照相关的功能了，不然这个材质看着有点塑料， <s>官方的源石其实也是塑料感满满</s>  也不方便后续其他的模型导入。</p>\n<p> 其实我感觉接下来除了继续处理动画还有什么可以优化的地方吗，还是说直接开始制作三人和二人的相关规则，这个有四人做参考应该没那么复杂，充其量搬下地图和适配下新的卡片效果，ai应该能自己跑出来  <em>应该吧</em>。</p>",
    tags: ["更新", "游城拓荒", "博客"]
  },
  {
    id: 11,
    issueNumber: 13,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/13",
    title: "issues-bug",
    date: "2026-08-30T15:13:28Z",
    summary: "上线的时候看了一眼，我真没绷住哥们这sol靠不靠谱啊，什么叫上传issues的时候看一眼action，原来执行两次的bug修好了变成四次了？？",
    content: "<p> 上线的时候看了一眼，我真没绷住哥们这sol靠不靠谱啊，什么叫上传issues的时候看一眼action，原来执行两次的bug修好了变成四次了？？</p>\n<p> 这降智真的无敌咯，已找到opus5中转，明天换hermes跑了。</p>\n<p><img src=\"https://github.com/user-attachments/assets/a9dae220-06b4-4ce7-9e3b-090f755c2255\" alt=\"Image\" loading=\"lazy\"></p>",
    tags: []
  },
  {
    id: 12,
    issueNumber: 14,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/14",
    title: "关于修bug",
    date: "2026-08-31T15:55:38Z",
    summary: "也不知道哪里的问题，现在通过issues发布的md格式文档的时候转换器又坏了，现在md格式完全检测不出来，纯是字符串。",
    content: "<h1>关于博客</h1>\n<h2>新bug</h2>\n<p> 也不知道哪里的问题，现在通过issues发布的md格式文档的时候转换器又坏了，现在md格式完全检测不出来，纯是字符串。</p>\n<p> 66还有新bug，现在默认是从下到上日期越来越新，但是同一天发布的却反过来了，变成同一天新发布的在下面。找了半天还以为这个部署又出新bug了，修一下才发现原来是排序问题。</p>\n<p> <strong>搞半天不还是得修。不过这个以后再说，目前不咋影响使用。</strong></p>\n<h2>新机制</h2>\n<p> 研究了三个小时的宝塔面板，跑到ssh里改的数据表才把master分支加上去，图形化界面虽然方便但出了问题也是真难改。</p>\n<p> 最后解决方案其实就是在宝塔页面的网站目录里<strong>把网站目录设置为git仓库地址，运行目录设置为网页构建</strong>的/docs文件夹，这样就能在正常使用nginx的npm run构建了。</p>\n<p><img src=\"https://github.com/user-attachments/assets/9152856e-5196-4c56-9cb9-c2b2af4ac005\" alt=\"Image\" loading=\"lazy\"></p>\n<p> 对了，不要忘记把防跨站功能关闭，这个在宝塔面板上修改目录的时候会自动给你打开，后续修改的时候会报错。<s>我不懂我瞎说的我感觉这玩意没用</s></p>\n<p><img src=\"https://github.com/user-attachments/assets/1b3a1858-56c1-4a0a-ba0b-2e81c5372c5c\" alt=\"Image\" loading=\"lazy\"></p>\n<h1>demo开发</h1>\n<h2>WebGL</h2>\n<p> 今天想制作一个能在vue博客页面直接玩的demo，结果搞了半天WebGL的调试，发现没有了ai报错如山，没办法只能继续丢给ai生成了，目前的原因是WebGL与steam服务冲突，也就是<strong><a href=\"http://Steamworks.NET\" target=\"_blank\" rel=\"noopener noreferrer\">Steamworks.NET</a> 不提供 WebGL 所需的 Steamworks 类型</strong>，要么注释掉<s>试过了要改的文件太多而且嵌套引用带来的问题多的要死</s>，要么重写个分支单独做。（这个目前在考虑做一下试试顺便练下怎么用steam desktop管理分支）</p>\n<p> 期待后续开发吧，这一块要改的不少。<em>或者可以直接拿牢版本单机用？</em></p>\n<h2>手卡</h2>\n<p> 依旧手卡，依旧看不见就是做好了。打死我也想不到让手牌放置到待选区确认的方式是把手牌区的对应卡变成透明的这种解决方案，五张扇形手牌中间空一格说是。</p>\n<p><img src=\"https://github.com/user-attachments/assets/ddc3561e-dc9a-49f2-aeb1-f88b6a9cb0ea\" alt=\"Image\" loading=\"lazy\"></p>\n<h3>优化</h3>\n<p> 更新拖动松手轨迹；更新收藏室让描述更加拟人；做了一个新的过场动画让不怎么需要加载的页面快速加载。<s>今天依旧没开始做多人适配。</s></p>\n<h1>新坑</h1>\n<p> <s>我有一个绝妙的点子，可惜这里空间太小写不下。</s></p>\n<p> wait 这里我想写多少写多少，哈哈。</p>\n<p> 我觉得堆叠大陆是个好玩的模式，正在思考和胡闹厨房like（类似多人联机派对）、模拟经营的结合体，感觉会很好玩，还适合搞成增量、挂机玩法和肉鸽玩法，不过一切等找到工作再说。</p>\n<p> 今天把手上的系统拆解案结了，明天写新的策划案试试，感觉现在这个没什么竞争力，而且写的也不多。</p>",
    tags: ["游城拓荒", "博客"]
  },
  {
    id: 13,
    title: "游城拓荒策划案：行动面板系统",
    date: "2026-09-01",
    summary: "梳理《游城拓荒》行动面板的设计目标、界面分区、按钮状态与弹窗逻辑，并细化角色牌、部署、调度、探索和城市移动等交互规则。",
    content: "\n      <p>本策划案围绕《游城拓荒》的行动面板系统，整理系统设计目的、界面与场景说明，以及快速行动、主要行动、按钮状态和弹窗交互规则。</p>\n      <div class=\"download-card\">\n        <strong>游城拓荒策划案-行动面板系统.xlsx</strong>\n        <span>原始 Excel 文档 · 约 3.40 MB</span>\n        <a\n          class=\"download-link\"\n          href=\"/downloads/you-cheng-tuo-huang-action-panel-system.xlsx\"\n          download=\"游城拓荒策划案-行动面板系统.xlsx\"\n        >下载完整文档</a>\n      </div>\n    ",
    tags: ["游城拓荒", "游戏开发"]
  },
  {
    id: 14,
    issueNumber: 15,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/15",
    title: "水~关于pr",
    date: "2026-09-01T15:11:30Z",
    summary: "今日天气：艳阳高照~",
    content: "<p><strong><em>今日天气：艳阳高照</em>~</strong>\n~下午：准备来场千针雨吗~</p>\n<h1>关于剪辑</h1>\n<p> 百度网盘限速，下个pr用了快一天，昨天早上挂着的下载刚结束。github上关于网盘的脚本和软件下了两三个，基本都用不了..以后有时间再查下相关资料吧。</p>\n<p> 不知道怎么剪辑，考虑下是否把隔壁曼波语音包拿来用？我的项目里音效一点没做，还得单独调个音轨。</p>\n<p> 沉迷堆叠大陆dlc中，少话，，，\n<img src=\"https://github.com/user-attachments/assets/c1f0d4a4-cce4-45f3-9e18-526f13959aae\" alt=\"Image\" loading=\"lazy\"></p>\n<p> 8h已通关，duang，文鸯文鸯文鸯真的不菜真的不菜啊。<strong><s>这宠物怎么这么难抽</s></strong>\n<img src=\"https://github.com/user-attachments/assets/2982480c-7e20-4239-9ae7-7bfd0004b5d7\" alt=\"Image\" loading=\"lazy\"></p>\n<h1>等备案中</h1>\n<p> 等备案的第n+2天，昨天晚上找好心人测了一下，目前还处于打不开状态，安全组看了一眼放行的80和443，应该还是没备案的问题，还要七天继续等吧。</p>\n<p> 今日demo仅系统性修复，删了点旧实现、旧模型、旧测试，暂时按下不表。博客修改了一下首页和文章界面，纯手打无ai，古法查菜鸟教程css手打，匠心0.5年传承。<em><s>好歹我毕业前也是个前端糕手</s></em></p>",
    tags: ["博客", "adobe"]
  },
  {
    id: 15,
    issueNumber: 16,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/16",
    title: "关于备案后处理",
    date: "2026-09-02T09:45:38Z",
    summary: "等了好几天，备案终于通过了。核对的同时顺便整理下流程，方便后续其他想自己开网站的小灯们用。",
    content: "<p> 等了好几天，备案终于通过了。核对的同时顺便整理下流程，方便后续其他想自己开网站的小灯们用。</p>\n<p> 本次流程使用<strong>阿里云服务器、阿里云购买域名</strong>；需要提前准备的照片资料包括：<em>身份证正反面照、手持身份证照、域名证书扫描件</em>，同时推荐打开的网站有<em>阿里云-域名与网站-域名管理-域名列表-基本信息</em> ，方便查询服务器信息。</p>\n<p> <strong>第一步</strong>，备案通过后，阿里云会给你的手机发一条短信，也可以直接登录阿里云的备案页面，在审核进度窗口获取数据码（推荐），一个月有效期内前往<strong>全国互联网安全管理服务平台</strong>网站进行公安备案。</p>\n<p>  <code>https://beian.mps.gov.cn/</code></p>\n<p> <strong>第二步</strong>，进入网站后，点击用户登录并先注册，注册完成后在业务办理-开办主体管理-新增主体的页面填写信息，完成后提交审核，会弹窗让你去网站业务继续下一步。</p>\n<p><em>注：重新进入或点击页面右上角数据码，可以绑定数据码，这样方便读取主域名和备案号等信息。</em></p>\n<p> <strong>第三步</strong>，前往网站业务-新办网站申请填写相关资料，结束后等待第二轮审核。</p>\n<p><em>题外话，阿里云会给注册域名的服务器免费延期，<strong>“备多久送多久”</strong> </em></p>\n<p> <strong>第？步</strong>，等待审核期间，没事干可以提前设置阿里云的云解析。域名解析的目的是让ip绑定域名，不用通过输入ip而是输入域名就可以访问网站。</p>\n<p>可参考官方教程：</p>\n<pre><code>https://help.aliyun.com/zh/dns/pubz-add-website-parsing?spm=a2c4g.11186623.0.0.ff995e7bsR6STk\n</code></pre>\n<p> <strong>第四步</strong>，完成备案后，需要在ICP备案成功的网站底部悬挂工信部下发的ICP备案号，并生成链接指向工信部网站:</p>\n<pre><code>beian.miit.gov.cn\n</code></pre>\n<p> 非经营性备案的悬挂备案号格式为省份简称+ICP备+数字编码+号。网站备案编号则会在主体备案编号的基础上，增加主体下备案的网站顺序。示例如下所示。</p>\n<p> 主体备案编号：浙ICP备123456号。</p>\n<p> 网站备案编号：浙ICP备123456号-1、京ICP备123456号-2等。</p>\n<p> 当然因为我们是自己写的网站，所以不得不使用敲代码的方式挂上去，这里给出示例代码：</p>\n<pre><code>&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot;&gt;您的备案号&lt;/a&gt;\n</code></pre>\n<pre><code>&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot;&gt;浙B2-20080101&lt;/a&gt;\n</code></pre>\n<p> 👆备案号改动后效果如上，当然也可以直接参考本网站下方的样式。</p>\n<p> <strong>第？++步</strong>，我不知道某省需不需要挂版权所有，我先挂着再说👇。</p>\n<pre><code>&lt;p&gt;&amp;copy; 2026 zhuanshiluobo版权所有. &lt;/p&gt;\n</code></pre>\n<p> 至此，<strong>网站备案的基本完成</strong>，可以通过访问域名进入，不再拦截并弹出未备案通知。<br>\n <strong>🎉Congratulations！🎉</strong></p>",
    tags: ["博客"]
  },
  {
    id: 16,
    issueNumber: 17,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/17",
    title: "关于呼呼呼和剪辑",
    date: "2026-09-03T13:44:04Z",
    summary: "抽呼呼呼抽了612+230才5+6/(ㄒoㄒ)/，粥大保底再旅到这来了说是。愤而学习pr把作战记录剪出来了。呼呼呼头发取色器色号是#CCBCEC",
    content: "<p> 抽呼呼呼抽了612+230才5+6/(ㄒoㄒ)/~~，粥大保底再旅到这来了说是。愤而学习pr把作战记录剪出来了。<s>呼呼呼头发取色器色号是#CCBCEC</s></p>\n<p> ai太好用了你们知道吗，上github搜一个mcp，再上b站搜集几个入门教程，学下快捷键和最基础的缝合教程就够出片了，难搞的问题丢给ai自己做，做不出来的就古法查资料，挺不赖的。</p>\n<p> <s>呼呼呼宝宝好胖好可爱😊好伟大的一张脸</s></p>\n<p><img src=\"https://github.com/user-attachments/assets/8b448d63-be1c-4356-994e-a48564aa9969\" alt=\"Image\" loading=\"lazy\"></p>\n<p><img src=\"https://github.com/user-attachments/assets/472ab31d-cb3d-4218-a72e-b2363759c3b8\" alt=\"Image\" loading=\"lazy\"></p>\n<p><img src=\"https://github.com/user-attachments/assets/d1e34c41-8ce6-4708-b22f-9a0e4b68c229\" alt=\"Image\" loading=\"lazy\"></p>\n<p><img src=\"https://github.com/user-attachments/assets/bd6d1391-c0f9-4ba3-aa12-c08bf5c4a6e1\" alt=\"Image\" loading=\"lazy\"></p>\n<p><img src=\"https://github.com/user-attachments/assets/fa73555d-2f81-4fa5-8c07-0db03b81fc5b\" alt=\"Image\" loading=\"lazy\"></p>\n<h1>中转相关问题</h1>\n<p> 今天的目标是搞定AxonHub的codex的中转接入，这是为了爽蹬sol的必要准备。</p>\n<p> 期间出现一个问题：codex-auto-review被截断了，所以要去cc switch里设置一下模型映射，为了省点流直接用5.6luna映射了，目前看来没什么问题。</p>\n<h1>demo、博客计划</h1>\n<p> 搞定了20x的接入和pr的基础操作之后，就可以准备<em>demo的宣发</em>了；准备是先录制一版实机的游玩视频，因为没有音效所以在考虑是否内置一个音乐播放器，最好是<strong>拿开源的直接用或者是网易云套皮</strong>，然后内置点粥的音乐。</p>\n<p> 另外现在有token了，可以尝试下构建webGL的版本，但是sol和我说现在最主要的事情是把手头的构建搞定。<s>叫什么形成一个可信的Windows版本</s>。整合了一下旧文档，还有老问题过度工程化导致的写死测试约束，这次一并改了。</p>\n<p> <em>博客方面</em>昨天的issues推送有问题，导入器无法识别 Issue #16 中 ``` 形式的单行代码块,已修复。另外issues修改后无法正常触发，触发了也会因为读取不到issues编号构建失败，这次推送一起修复了。</p>\n<pre><code>const issue_number = Number(\n  context.eventName === 'workflow_dispatch'\n    ? context.payload.inputs?.issue_number\n    : context.payload.issue.number\n)\n</code></pre>\n<p> 后续的话一个是继续加页面，堆router这套我熟，就是设计方面可能还得找点别的网站学习下，现在这个光秃秃的主页没什么美感可言。二一个是把可读文档上传到服务器自动构建新页面，这个只是有个想法还没想好怎么做，后续再议。</p>",
    tags: ["adobe", "呼呼呼"]
  },
  {
    id: 17,
    issueNumber: 18,
    source: "https://github.com/zhuanshiluobo/zhuanshiluobo.github.io/issues/18",
    title: "关于CDN和demo首曝反馈",
    date: "2026-09-05T10:28:39Z",
    summary: "今天早上一起床，看到b站私信发现博客链接没挂上，弹射起步开电脑改ing...",
    content: "<h1>关于博客优化</h1>\n<p> 今天早上一起床，看到b站私信发现博客链接<em>没挂上</em>，弹射起步开电脑改ing...</p>\n<p> 改到一半突然发现就算改成了不还是走的git下载链接，那我不如顺手把连接方式也修成国内得了。一开始想的是走蓝奏云网盘这种直链下载，改代码试了一下不怎么满意，<em>其一</em>、蓝奏云无法上传100M以上文件。<em>其二</em>、我个人比较讨厌外部网站链接，会破坏博客整体连通性，也不方便后期维护。</p>\n<p> 最后敲定的方案是依旧走服务器，好处是方便监控流量走向的同时避免外部链接，坏处就是自付费和攻击的问题。<s><em>看不到就是没问题</em></s></p>\n<p> fine，以下是根据最新最强的gpt6老师教学的操作步骤。</p>\n<h2>首次尝试</h2>\n<p> 首次尝试为了尽快恢复功能，暂时采取通过服务器下载，先使用xshell和xftp上传压缩包到新目录，验证完成后，重载nginx后发现打开显示为主页面，没有产生下载链接。</p>\n<p> 检查面板后发现下载的两个nginx冲突，通过xshell修改的nginx配置文件没有重载成功，再加上面板git处脚本没有设置npm的build，最终导致面板显示部署成功但页面未更新。</p>\n<p> 解决方案为停用旧nginx，重新在面板中修改修改deploy并重写自动化工作流，确保没有触发 Vue 的 SPA 回退规则，能拉取最新页面并成功使用下载链接。</p>\n<h2>OSS、CDN部署全流程</h2>\n<p> 本项目下一步的优化方向定为使用OSS对象存储，CDN内容分发，因此记录个人遇到的流程和问题 。</p>\n<p> <em>OSS和CDN结合使用以实现更高效的内容分发和存储管理。通过CDN的域名访问OSS中的文件，CDN会将文件缓存到边缘节点，用户访问时直接从缓存中获取数据，从而提高访问速度，减少OSS的流量费用。</em></p>\n<ul>\n<li>第一步：创建 OSS Bucket</li>\n</ul>\n<pre><code>对象存储 OSS → Bucket 列表 → 创建 Bucket\n</code></pre>\n<pre><code>点击进入bucket → 创建目录 → 上传文件\n</code></pre>\n<p>文件 ACL：选择“继承 Bucket”\n域名：选择“外网域名”</p>\n<p> 接入OSS开启对象存储后，新建目录上传文件，在设置文件元数据中配置下载。\n<em>点击上传的文件后向下拉：</em>\n<img src=\"https://github.com/user-attachments/assets/d78ef608-c958-49b9-baf9-8371c75dff93\" alt=\"Image\" loading=\"lazy\"></p>\n<p>这一步参考ai老师告诉你的做，我也不清楚如何填写个性化内容。</p>\n<ul>\n<li>第二步：添加 CDN 加速域名</li>\n</ul>\n<pre><code>阿里云 CDN → 域名管理 → 添加域名\n</code></pre>\n<p> 接下来进入cdn控制台，开启后添加新的域名，注意首次添加需要验证归属，流程为前往dns服务台添加记录，按照给出的信息填写验证。</p>\n<p><img src=\"https://github.com/user-attachments/assets/298a36bc-1580-462b-8556-462fc18bfbbd\" alt=\"Image\" loading=\"lazy\"></p>\n<p>DNS解析验证入口：</p>\n<pre><code>云解析 DNS → 权威域名 → zhuanshiluobo.me → 解析设置 → 添加记录\n</code></pre>\n<ul>\n<li>第三步：新增源站信息</li>\n</ul>\n<p> 在CDN页面打开刚刚新增的域名，在基础配置栏新增源站信息：</p>\n<p><img src=\"https://github.com/user-attachments/assets/656b43f6-fb2b-43dc-8352-719843404bbc\" alt=\"Image\" loading=\"lazy\"></p>\n<pre><code>源站信息：OSS 域名\n域名类型：自定义 OSS 源站\n优先级：主\n权重：10\n端口：443\n</code></pre>\n<ul>\n<li>第四步：开启私有 Bucket 回源</li>\n</ul>\n<p> 根据提示把刚刚新增的域名添加入CDN后，修改回源配置。</p>\n<pre><code>阿里云OSS私有Bucket回源 → 打开 → 同账号回源\n</code></pre>\n<ul>\n<li>第五步：配置 CNAME</li>\n</ul>\n<p> CDN创建成功后，会分配一个CNAME，下一步为配置CNAME。</p>\n<p><img src=\"https://github.com/user-attachments/assets/5aa3ae66-e126-4c46-a674-030fa0c1048e\" alt=\"Image\" loading=\"lazy\"></p>\n<pre><code>云解析 DNS → zhuanshiluobo.me → 解析设置 → 添加记录\n</code></pre>\n<p> 具体的信息在CNAME配置页面已经给出，配置DNS与上文一致；完成后需要等待状态变为已配置，这一步大约需要10分钟，建议站起来活动一会。</p>\n<ul>\n<li>第六步：配置 HTTPS</li>\n</ul>\n<p> 返回页签，配置https配置。</p>\n<pre><code>HTTPS配置 → HTTPS证书 → 打开HTTPS安全加速 → 添加ssl证书。\n</code></pre>\n<p> <strong>注：这一步中，如果没有设置过网站SSL证书，则需要多走一步：</strong></p>\n<pre><code>数字证书管理服务 → 个人测试证书\n</code></pre>\n<p>方法同上。等待签发完成这一步大约需要一刻钟，可以再去喝杯水。</p>\n<p> 完成后选择数字证书管理添加https证书，这一步应该会直接出提示不要你填写。顺便在该页面内修改协议重定向为http-&gt;https。</p>\n<ul>\n<li>第七步：配置 ZIP 缓存</li>\n</ul>\n<p>接下来都是一些网站的小配置，不需要各个页面跑来跑去当赛博办事处了。</p>\n<p> 配置如下：</p>\n<pre><code>类型：文件后缀名\n文件后缀：zip\n过期时间：30 天\n权重：90\n规则条件：不使用\n忽略源站不缓存头:关闭\n</code></pre>\n<ul>\n<li>第八步：配置 Range 回源</li>\n</ul>\n<p>点击视频相关进入。</p>\n<pre><code>Range 回源：开启 Range 回源（大文件场景推荐）\n分片大小：1 MB\n规则条件：不使用\n</code></pre>\n<ul>\n<li>第九步：设置流量限制</li>\n</ul>\n<pre><code>类型：流量封顶\n统计周期：当月\n阈值：100 GB\n解封时间：下月或手动启用\n</code></pre>\n<p> <strong>🎉Congratulations！现在你可以通过oss/cdn下载文件了</strong>，只需要再敲敲代码把URL改为分发域名即可，若还有疑问请自行询问自己的ai老师，记得条件发全一点或者直接<strong>把本文甩给ai</strong>让他带你修改、提交、推送。</p>\n<p> 本次部署的300Mb压缩包文件，维护成本约为￥10/百次。</p>\n<h1>关于demo</h1>\n<p><s><em>时机已到，今日起兵！</em></s></p>\n<p> 终于是把第一版的宣传视频剪出来了，虽然做的依托但是效果还不错？感谢各位<strong>观众老爷</strong>，这个项目我自己觉得做的还是不太行的，没想到播放量居然破千了，<s>有种德不配位的感觉。</s></p>\n<p> 根据各种反馈，接下来的开发方向：</p>\n<ul>\n<li>\n<p>开发地图俯视与斜视的切换。<em>还有键盘移动</em></p>\n</li>\n<li>\n<p>统一命名规范，根据官方文档统一描述。</p>\n</li>\n<li>\n<p>开发四人本地玩法，即四人都由玩家操作，仅转移控制权。</p>\n</li>\n<li>\n<p>重做整套完整UI，不再以线下桌游为准。<em>参考方舟动物园等已有作品</em>。</p>\n</li>\n<li>\n<p>优化指引，降低理解难度，开发教学关<s>或者直接给个链接到视频</s>？<em>听说可以参考铁巢重炮</em>。</p>\n</li>\n<li>\n<p><strong>修无穷无尽的bug。</strong></p>\n</li>\n</ul>\n<h5>以上，这两天燃尽了。</h5>\n<h6>哦，对了</h6>\n<h5>博客头部样式bug还没修...还有别忘了上供不然服务要停的</h5>",
    tags: ["更新", "游城拓荒", "博客", "视频"]
  }
]
