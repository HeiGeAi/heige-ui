# Changelog

本项目所有重要变更记录于此。

## [1.2.0] - 2026-07-04

给「优雅 / 高定」方向补一套暗色活法。这套调性从黑哥自己的课程分享 deck 里提炼出来，反过来沉淀进界面锻造系统。

- 「优雅 / 高定（Editorial）」方向补一套**暗色配方（玄墨 × 绛红衬线）**写进 `references/aesthetic-directions.md`：底玄黑 #141210 + 字奶白 #EDEAE3 + 强调绛红 #CE1432，中文大标题用衬线（思源宋体 / 宋体），拉丁数字用高对比衬线（Didot / Bodoni）拉成超大序号，装饰只铺一层极淡的 45 度交叉斜纹给纸纹质感。签名手法：占屏巨号衬线宣言、章节前绛红大序号、8px 绛红短横当分节标记、正文一句一段留呼吸。
- 讲清和亮色纸墨版、和方向 8（暗色科技）的分野：都用深色底，方向 8 是无衬线冷工程感，这套是衬线暖文人感。
- 新增样例 `examples/editorial-noir.html`：黑哥AI 内容品牌落地页，节奏走 Hero 巨字宣言 → 数据条呼吸 → 三栏能力（绛红大序号）→ 满屏引言（签名时刻「能跑了是起点，交得出去才是本事」）→ 课程目录 → CTA 收束。
- 守生产铁律：中文衬线系统兜底（Google Fonts 挂了退思源宋体 / Songti / STSong 不崩）、大标题零孤字（text-wrap:balance）、斜纹装饰纯 CSS `repeating-linear-gradient` 不碰 backdrop-filter、reveal 动画只动 transform / opacity 且 `prefers-reduced-motion` 下关掉。
- README / SKILL 同步：样例画廊 11 → 12，气质方向仍为 8（暗色配方挂在方向 2 下，不新增独立方向）。

## [1.1.0] - 2026-06-24

新增第 8 种气质方向，把当代 AI 产品质感沉淀进方法论。

- 新增气质方向 8「AI 原生 / 暗色科技（Dark Tech）」写进 `references/aesthetic-directions.md`：近黑基底 + 克制单色高级霓虹强调色 + 网格辉光，对标 Linear / Vercel / Runway / Anthropic。给四套可直接抄的配方（深空电青 / Aurora 极光 / 碳黑电绿 / 午夜蓝），并讲清和方向 5（复古赛博）的区别：当代克制 vs 怀旧霓虹。
- 新增旗舰样例 `examples/darktech-console.html`：虚构 Agent 编排控制台 HELM，碳黑×电绿，签名时刻是「8 个 Agent 同时干活的实时编排面板」，节奏走 Hero 冲击 → 信任条呼吸 → 三能力 → 控制台高潮 → 数据 → CTA 收束。
- 守生产铁律：辉光只用 box-shadow / radial-gradient，不碰 backdrop-filter；中文字体系统兜底；大标题零孤字；动画只动 transform / opacity。
- README / SKILL 同步：气质方向 7 → 8，样例画廊 10 → 11。

## [1.0.2] - 2026-05-29

把上一轮踩的生产坑沉淀进方法论本体。

- 项目更名为 **HeiGe-UI**（仓库 `HeiGeAi/HeiGe-UI`）；README、样例 wordmark、安装命令、在线 Demo 链接同步更新。skill 内部调用 id 仍为小写 `heige-ui`（遵循 skill 命名规范）。
- 按修复后的样例重新生成全部 10 张预览图（forge banner 不再是修复前的旧图）。

- 新增 `references/production-checklist.md`（生产交付铁律）：字体可靠性（中文必须有系统兜底，别只靠 Google Fonts；中文别用日文字体）/ 零孤字（大标题折行不许把单字甩到独立行；别用 ch 给中文限宽）/ 性能流畅（不动画化阴影、不用 backdrop-filter、不动画模糊元素、无限动画只动 transform·opacity、不常驻 rAF）。
- SKILL.md：第四步「写生产级代码」加入生产铁律；第五步出货自检从「反 AI 体检」扩展为「反 AI 体检 + 生产体检 + 气场复检」。

## [1.0.1] - 2026-05-28

生产可用性加固，修复全部样例的两类问题。

### 字体
- 为每个样例的中文字体栈补上系统兜底（PingFang SC / Microsoft YaHei / Hiragino Sans GB），Google Fonts 加载失败或被墙时中文也能正常显示，不再崩坏。
- acg-stellar：把渲染中文会出错（缺字 / 异体）的日文字体（Mochiy Pop One、Zen Maru Gothic）换成简体中文显示字体 ZCOOL KuaiLe + 系统兜底。
- 拉丁展示字体（Anton、Bagel Fat One、Archivo 等）补系统兜底。

### 性能
- 移除全部 backdrop-filter；不再对模糊元素做位移 / 缩放动画。
- 把动画化的 text-shadow / box-shadow 发光改为静态发光，去掉逐帧重绘。
- 每个样例的无限动画收敛到签名动画，且只动 transform / opacity（合成器友好）。
- 移除 forge 常驻的 requestAnimationFrame 光标特效；wrapped 计数动画到目标值即停。

### 排版
- 修复大标题折行把单字 / 标点甩到独立一行的问题（孤字）。forge「界面不是生成的，是锻造的。」、swiss「四件事，把对账这件苦差事做完。」不再孤字。
- 标题按最长一行收敛字号并锁定整行不折断；居中正文用 text-wrap:balance 让换行均衡，移动端也不孤字。
- 修正 swiss 用 ch 单位限宽对中文失效导致的溢出折行（ch 是拉丁数字宽，远窄于中文字宽）。

## [1.0.0] - 2026-05-28

首个版本。

### 核心
- 原创方法论「导演一段叙事」，五道锻造工序：开场定调 / 节奏曲线 / 一屏一主角 / 签名时刻 / 反 AI 体检。
- 五步使用流程：定调 → 编排节奏 → 锁定主角与签名时刻 → 写生产级代码 → 反 AI 体检 + 气场复检。

### 设计资产
- `references/aesthetic-directions.md`：7 种极端气质方向库，每种给出色彩/字体/排版/动效/签名时刻的具体打法。
- `references/anti-slop-checklist.md`：六大类反 AI 体检清单，作为交付门槛。
- `references/pacing-templates.md`：落地页 / Dashboard / 作品集 / 活动页的节奏曲线模板。

### 样例画廊（同一套方法论 × 十种气质）

基础气质：
- `examples/forge-landing.html`：凶悍/工业（熔铁橙×钢黑）。
- `examples/editorial-journal.html`：高定/杂志（纸墨×牛血红 衬线）。
- `examples/neon-nightshift.html`：赛博霓虹（霓虹品红/青 网格地平线）。
- `examples/playful-boing.html`：玩具（糖果撞色 弹跳吉祥物）。
- `examples/swiss-ledger.html`：瑞士极简（黑白灰+信号红 严格栅格）。

年轻/潮流向：
- `examples/y2k-gaga.html`：Y2K 千禧辣妹（金属铬×全息撞色）。
- `examples/brat-noisepark.html`：brat 酸性极简（史莱姆绿×全小写模糊）。
- `examples/streetwear-drop.html`：街头潮牌（安全橙×警示胶带×倒计时）。
- `examples/acg-stellar.html`：二次元 ACG（樱粉×速度线×漫画分格）。
- `examples/wrapped-soundwave.html`：Wrapped 撞色（全屏色块×巨字数据卡）。

全部为零依赖单文件，scroll-reveal 带降级兜底，尊重 prefers-reduced-motion，响应式重排。
