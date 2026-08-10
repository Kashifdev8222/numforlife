export type Locale = "zh" | "en";

export const navLinks = [
  { href: "/", label: { zh: "首页", en: "Home" } },
  { href: "#experience", label: { zh: "产品服务", en: "Services" } },
  { href: "/tarot", label: { zh: "塔罗 Lite", en: "Tarot Lite" } },
  { href: "/about", label: { zh: "关于我们", en: "About" } },
] as const;

export const homeContent = {
  brand: { zh: "数易赋能", en: "数易赋能" },
  brandEn: "NUMFORLIFE",
  hero: {
    title: {
      zh: "数易赋能，您的人生导航",
      en: "Shuyi — Your Life Navigation",
    },
    line: {
      zh: "您的人生导航",
      en: "Your life navigation",
    },
    subtitle: {
      zh: "我们不只指引 —— 我们帮助您理解自己与他人，掌控属于自己的改变。",
      en: "We don’t just guide — we help you understand yourself and others, and own your change.",
    },
    cta: { zh: "请改变自己吧", en: "Begin Your Change" },
    secondary: { zh: "体验塔罗 Lite →", en: "Try Tarot Lite →" },
    start: { zh: "立即开始", en: "Start Now" },
  },
  journey: {
    eyebrow: { zh: "PRODUCT EXPERIENCE", en: "PRODUCT EXPERIENCE" },
    title: {
      zh: "选择一种方式，开始了解自己",
      en: "Choose a way to understand yourself",
    },
    subtitle: {
      zh: "姓名学、数字生命、塔罗 Lite——点击切换，感受影像与交互。完整测算与会员权益在 App。",
      en: "Name study, digital life, Tarot Lite — tap to switch imagery and interaction. Full readings live in the App.",
    },
    chapters: [
      {
        tag: { zh: "01 · 姓名学", en: "01 · NAME" },
        title: { zh: "一字定乾坤", en: "A name holds destiny" },
        body: {
          zh: "笔画、音韵与五行交织，看见性格底色与人生节奏。",
          en: "Strokes, sound, and five elements reveal character and life rhythm.",
        },
        cta: { zh: "预览姓名测算", en: "Preview name reading" },
        href: "/cesuan",
        image: "/images/chapter-name.png",
      },
      {
        tag: { zh: "02 · 数字生命", en: "02 · DIGITAL LIFE" },
        title: { zh: "从数字看见潜能", en: "See potential in numbers" },
        body: {
          zh: "生日能量映射生命路径——觉察与决策的现代工具。",
          en: "Birth energy maps your path — a modern tool for awareness and choice.",
        },
        cta: { zh: "预览生日测算", en: "Preview birthday reading" },
        href: "/cesuan",
        image: "/images/chapter-life.png",
      },
      {
        tag: { zh: "03 · 塔罗", en: "03 · TAROT" },
        title: { zh: "为当下课题找光", en: "Light for today’s question" },
        body: {
          zh: "网页端选牌与解读动线，展示优雅、可扩展的交互能力。",
          en: "A web draw-and-read flow that shows elegant, expandable interaction.",
        },
        cta: { zh: "进入塔罗体验", en: "Enter tarot" },
        href: "/tarot",
        image: "/images/chapter-tarot.png",
      },
    ],
  },
  experience: {
    eyebrow: { zh: "INTERACTIVE DEMO", en: "INTERACTIVE DEMO" },
    title: { zh: "塔罗轻体验 · 翻开一张牌", en: "Tarot Lite · Draw a card" },
    subtitle: {
      zh: "把鼠标移上牌面，点击翻开。网页端即可感受选牌与解读——优雅、沉浸、可继续扩展为完整塔罗流程。",
      en: "Hover, click, reveal. Feel the draw-and-read flow on the web — elegant, immersive, ready to grow into full tarot.",
    },
    hint: {
      zh: "选择一张牌，感受选牌与翻牌动画",
      en: "Choose a card to feel the draw & flip motion",
    },
    note: {
      zh: "演示解读 · 完整牌阵与深度分析请前往 Shuyi App",
      en: "Demo insight · Full spreads live in the Shuyi App",
    },
    cards: [
      {
        arcana: "I · THE MAGICIAN",
        title: { zh: "魔术师", en: "The Magician" },
        body: {
          zh: "意志与行动对齐的时刻。你已具备资源，关键是把意图落地。",
          en: "Will meets action. You already hold the tools — now make intent real.",
        },
        cue: { zh: "关键词：创造 · 聚焦", en: "Keywords: create · focus" },
        insight: {
          zh: "今天适合启动一件被搁置的事——从小步骤开始。",
          en: "A good day to start something paused — begin with one small step.",
        },
      },
      {
        arcana: "II · THE HIGH PRIESTESS",
        title: { zh: "女祭司", en: "The High Priestess" },
        body: {
          zh: "答案不在喧闹里。慢下来，听见内在已经知道的那部分。",
          en: "The answer isn’t in the noise. Slow down and hear what you already know.",
        },
        cue: { zh: "关键词：直觉 · 静观", en: "Keywords: intuition · stillness" },
        insight: {
          zh: "先观察，再决定。信息会在安静中变得清晰。",
          en: "Observe before deciding. Clarity arrives in quiet.",
        },
      },
      {
        arcana: "X · WHEEL OF FORTUNE",
        title: { zh: "命运之轮", en: "Wheel of Fortune" },
        body: {
          zh: "周期在转动。变化不是威胁，而是重新对齐方向的邀请。",
          en: "Cycles turn. Change isn’t a threat — it’s an invitation to realign.",
        },
        cue: { zh: "关键词：转折 · 时机", en: "Keywords: turning · timing" },
        insight: {
          zh: "拥抱正在发生的转变，把注意力放在你能影响的那一环。",
          en: "Embrace the shift, and focus on the one link you can influence.",
        },
      },
    ],
  },
  paths: {
    eyebrow: { zh: "PRODUCT PATHS", en: "PRODUCT PATHS" },
    title: { zh: "三条路径，进入数字人生", en: "Three paths into your digital life" },
    subtitle: {
      zh: "姓名、生日、塔罗——三条核心入口，影像与动效呈现产品深度与品牌气质。",
      en: "Name, birthday, tarot — three core entries with cinematic depth and brand presence.",
    },
    items: [
      {
        href: "/cesuan",
        tag: { zh: "姓名学", en: "Name study" },
        title: { zh: "一字定乾坤", en: "A name holds destiny" },
        body: {
          zh: "笔画、音韵与五行交织，看见性格底色与人生节奏——网站预览，App 完整解读。",
          en: "Strokes, sound, and five elements reveal character and rhythm — preview on web, depth in app.",
        },
        cta: { zh: "预览姓名测算", en: "Preview name reading" },
        image:
          "https://numforlife.com/wp-content/uploads/2025/06/Zodiac-Clock-Detail-1.avif",
      },
      {
        href: "/cesuan",
        tag: { zh: "数字生命", en: "Digital life" },
        title: { zh: "从数字看见潜能", en: "See potential in numbers" },
        body: {
          zh: "生日能量映射生命路径。不是迷信，而是觉察与决策的现代工具。",
          en: "Birth energy maps your life path — awareness and decisions, not superstition.",
        },
        cta: { zh: "预览生日测算", en: "Preview birthday reading" },
        image:
          "https://numforlife.com/wp-content/uploads/2025/06/77a7d0_0b3b028fa90c4fb9862f1f13c3ac2810mv2.png",
      },
      {
        href: "/tarot",
        tag: { zh: "塔罗占卜", en: "Tarot" },
        title: { zh: "为当下课题找光", en: "Light for today’s question" },
        body: {
          zh: "网页端体验选牌与解读动线，展示我们能把复杂流程做成优雅交互。",
          en: "Web draw-and-read flow — proof we can turn complex journeys into elegant UX.",
        },
        cta: { zh: "进入塔罗页面", en: "Open tarot page" },
        image:
          "https://numforlife.com/wp-content/uploads/2025/06/77a7d0_3ce398a3fd4a4b24be4963111688e2f8mv2.png",
      },
    ],
  },
  download: {
    title: { zh: "加入我们的移动端！", en: "Join us on mobile!" },
    phone: { zh: "手机号码", en: "Phone number" },
    send: { zh: "发送", en: "Send" },
    note: {
      zh: "演示模式：短信链接暂未接入。",
      en: "Demo mode: SMS link not connected.",
    },
  },
  about: {
    eyebrow: { zh: "关于我们", en: "About Us" },
    title: {
      zh: "数字生命能量学 × 现代自我认知",
      en: "Digital Life Energy × Modern Self-Awareness",
    },
    body: [
      {
        zh: "数易赋能融合数字生命能量学与传统智慧（姓名学、塔罗、易经），并以现代心理学视角帮助你理解自己。",
        en: "Shuyi blends digital life-energy numerology with traditional wisdom and modern psychology.",
      },
      {
        zh: "我们相信命理不是迷信，而是觉察与决策的工具——帮助你看见模式，做出更好的选择。",
        en: "We treat numerology as awareness and decision support — not superstition.",
      },
      {
        zh: "产品经历内部测试到全面打磨，并于 2025 年 6 月 22 日正式上架主流应用商店。",
        en: "After private testing and refinement, we launched publicly on June 22, 2025.",
      },
    ],
    timeline: [
      { year: "2023", label: { zh: "内部测试 · Internal Beta", en: "Internal Beta" } },
      { year: "2024", label: { zh: "全面打磨 · Refinement", en: "Refinement" } },
      {
        year: "2025.06.22",
        label: { zh: "正式发布 · Public Launch", en: "Public Launch" },
        highlight: true,
      },
    ],
    cta: { zh: "了解更多", en: "Learn more" },
  },
  ecosystem: {
    title: { zh: "数易赋能生态圈", en: "Shuyi Ecosystem" },
    subtitle: {
      zh: "不仅仅是算命，是你人生的指引",
      en: "Not fortune-telling — life guidance",
    },
    items: [
      {
        title: { zh: "占卜指引", en: "Divination" },
        body: {
          zh: "融合东西方占卜体系，为人生课题提供多维视角。",
          en: "Eastern & Western systems for multi-angle guidance.",
        },
      },
      {
        title: { zh: "知识与数据库", en: "Knowledge Base" },
        body: {
          zh: "庞大数据库 + AI 辅助 + 导师内容，提升解读质量。",
          en: "Large database, AI assist, mentor-authored insights.",
        },
      },
      {
        title: { zh: "工具", en: "Tools" },
        body: {
          zh: "精选品质工具，帮助你提升状态与日常觉知。",
          en: "Curated tools to support energy and daily awareness.",
        },
      },
      {
        title: { zh: "档案管理", en: "Archives" },
        body: {
          zh: "保存与对比不同时间点的解读，看见变化。",
          en: "Save and compare readings over time.",
        },
      },
      {
        title: { zh: "导师辅导", en: "Mentors" },
        body: {
          zh: "严格筛选导师，以更亲民方式探讨人生课题。",
          en: "Vetted mentors for accessible life guidance.",
        },
      },
    ],
  },
  entries: {
    eyebrow: { zh: "测算入口", en: "Start here" },
    title: {
      zh: "选择一种方式，开始了解自己",
      en: "Choose a way to understand yourself",
    },
    subtitle: {
      zh: "所有测算均为简版预览。完整个人化报告请前往 Shuyi App。",
      en: "All readings are simplified previews. Full reports live in the Shuyi App.",
    },
    items: [
      {
        href: "/cesuan",
        badge: { zh: "简版 · Preview", en: "Preview" },
        title: { zh: "姓名测算", en: "Name Numerology" },
        body: {
          zh: "通过姓名笔画与五行分析，解读性格特质与人生方向。",
          en: "Name strokes & five-element analysis for traits and direction.",
        },
        time: { zh: "约 2 分钟", en: "~2 min" },
      },
      {
        href: "/cesuan",
        badge: { zh: "简版 · Preview", en: "Preview" },
        title: { zh: "生日测算", en: "Birthday Reading" },
        body: {
          zh: "基于出生日期的数字能量分析，提示生命路径与潜能。",
          en: "Birth-date energy analysis for life path and potential.",
        },
        time: { zh: "约 4 分钟", en: "~4 min" },
      },
      {
        href: "/cesuan",
        badge: { zh: "简版 · Preview", en: "Preview" },
        title: { zh: "个人运势", en: "Personal Forecast" },
        body: {
          zh: "结合当前能量与运势指引，助你把握关键时刻。",
          en: "Current-energy guidance to catch key moments.",
        },
        time: { zh: "约 3 分钟", en: "~3 min" },
      },
      {
        href: "/tarot",
        badge: { zh: "简版 · Preview", en: "Preview" },
        title: { zh: "塔罗占卜", en: "Tarot Reading" },
        body: {
          zh: "经典塔罗牌阵，为你的问题提供洞见与指引。",
          en: "Classic spreads for insight and direction.",
        },
        time: { zh: "约 5 分钟", en: "~5 min" },
      },
    ],
  },
  tarotLite: {
    badge: { zh: "塔罗轻体验", en: "Tarot Lite" },
    preview: { zh: "预览 Preview", en: "Preview" },
    title: { zh: "Tarot Lite · 塔罗轻体验", en: "Tarot Lite Experience" },
    body: {
      zh: "在网页端体验简化版塔罗占卜。提出问题、抽取牌卡、获得初步指引 — 无需下载 App。",
      en: "Try simplified tarot on the web: ask, draw, get initial guidance — no app download required.",
    },
    note: {
      zh: "* 完整塔罗牌阵与深度解读请前往 Shuyi App。",
      en: "* Full spreads and deep readings continue in the Shuyi App.",
    },
    cta: { zh: "开始塔罗体验", en: "Start Tarot Lite" },
    more: { zh: "了解更多 →", en: "Learn more →" },
    tags: [
      { zh: "自有牌阵", en: "Own spreads" },
      { zh: "选牌动画", en: "Draw animation" },
      { zh: "结果解读", en: "Interpretation" },
      { zh: "保存记录", en: "Save preview" },
    ],
  },
  results: {
    eyebrow: { zh: "SEE RESULTS. SEE REINVENTIONS", en: "SEE RESULTS. SEE REINVENTIONS" },
    title: { zh: "蜕变，从这里开始", en: "Transformation starts here" },
    items: [
      { title: { zh: "占卜指引", en: "Divination" } },
      { title: { zh: "数据分析", en: "Analytics" } },
      { title: { zh: "人生蜕变", en: "Transformation" } },
    ],
  },
  membership: {
    eyebrow: { zh: "会员权益", en: "Membership" },
    title: {
      zh: "选择适合你的成长方式",
      en: "Choose your growth path",
    },
    subtitle: {
      zh: "网站提供免费预览体验，完整会员权益请前往 Shuyi App。",
      en: "Free preview on the web; full membership benefits in the Shuyi App.",
    },
    free: {
      title: { zh: "免费预览", en: "Free Preview" },
      tag: { zh: "免费", en: "Free" },
      points: {
        zh: ["基础测算体验", "基础塔罗体验", "预览解释结果", "浏览知识内容"],
        en: ["Basic calculation", "Basic tarot", "Preview results", "Browse content"],
      },
      cta: { zh: "开始体验 →", en: "Start →" },
    },
    elite: {
      title: { zh: "Elite 精英会员", en: "Elite Membership" },
      badge: { zh: "推荐 · POPULAR", en: "POPULAR" },
      tag: { zh: "订阅制", en: "Subscription" },
      points: {
        zh: [
          "全部测算模型",
          "完整塔罗解读",
          "个人化深度解析",
          "测算记录保存",
          "课程与工具折扣",
          "专属特选工具",
        ],
        en: [
          "All calculation models",
          "Full tarot readings",
          "Deep personalization",
          "Saved records",
          "Course & tool discounts",
          "Exclusive tools",
        ],
      },
      cta: { zh: "了解 Elite →", en: "Explore Elite →" },
    },
    note: {
      zh: "* 以上为权益概览，完整会员体系、VIP 等级及付费方式请前往 App 查看。",
      en: "* Overview only. Full tiers, VIP, and payments are managed in the App.",
    },
  },
  why: {
    eyebrow: { zh: "为什么选择数易", en: "Why Shuyi" },
    title: { zh: "不只是指引，更是赋能", en: "Not just guidance — empowerment" },
    items: [
      {
        title: { zh: "古老智慧 × 现代科技", en: "Ancient wisdom × modern tech" },
        body: {
          zh: "传统命理与现代产品体验结合。",
          en: "Tradition paired with modern product UX.",
        },
      },
      {
        title: { zh: "这不是迷信", en: "Not superstition" },
        body: {
          zh: "以觉察与理性决策为核心。",
          en: "Built for awareness and better decisions.",
        },
      },
      {
        title: { zh: "快速获得初步洞见", en: "Fast first insights" },
        body: {
          zh: "网站预览让你快速体验价值。",
          en: "Web previews deliver value quickly.",
        },
      },
      {
        title: { zh: "App 端完整体验", en: "Full experience in App" },
        body: {
          zh: "深度解读与长期陪伴在 App。",
          en: "Deep readings and retention live in App.",
        },
      },
      {
        title: { zh: "认证导师体系", en: "Mentor system" },
        body: {
          zh: "严格筛选，持续建设认证路径。",
          en: "Vetted mentors, growing certification.",
        },
      },
      {
        title: { zh: "持续成长追踪", en: "Growth tracking" },
        body: {
          zh: "用档案看见自己的变化轨迹。",
          en: "Archives to track your change over time.",
        },
      },
    ],
  },
  partners: {
    eyebrow: { zh: "合作伙伴", en: "Partners" },
    title: { zh: "PROUD TO WORK WITH", en: "PROUD TO WORK WITH" },
  },
  testimonials: {
    eyebrow: { zh: "STRAIGHT FROM THE FEED", en: "STRAIGHT FROM THE FEED" },
    title: { zh: "真实反馈，真实改变", en: "Real feedback, real change" },
    items: [
      {
        quote: {
          zh: "以前从没想过名字也能隐藏这么多信息。好的名字不仅告诉你是什么，还告诉你可以怎么做。",
          en: "I never knew a name could reveal so much — not only what is, but what to do.",
        },
        author: { zh: "志轩 · 31 · 品牌策略顾问", en: "Zhixuan · 31 · Brand strategist" },
      },
      {
        quote: {
          zh: "30 岁迷茫时认识了数易，透过数字了解自己，App 也方便我了解身边的人。",
          en: "At 30 I found Shuyi — numbers helped me understand myself and people around me.",
        },
        author: { zh: "匿名 · 32 · 企业家", en: "Anonymous · 32 · Entrepreneur" },
      },
      {
        quote: {
          zh: "我用塔罗预览工作问题，例如 Presentation 与项目决策，获益匪浅。",
          en: "I use tarot previews for work decisions — presentations and projects.",
        },
        author: { zh: "V · 27 · 旧金山 PM", en: "V · 27 · SF PM" },
      },
    ],
  },
  finalCta: {
    title: { zh: "准备好改变自己了吗？", en: "Ready to change yourself?" },
    body: {
      zh: "加入数易赋能，开启属于你的人生导航之旅。",
      en: "Join Shuyi and begin your life-navigation journey.",
    },
    cta: { zh: "立即开始", en: "Start Now" },
  },
  faq: {
    eyebrow: { zh: "FAQ", en: "FAQ" },
    title: { zh: "常见问题", en: "FAQ" },
    items: [
      {
        q: { zh: "网站和 App 有什么区别？", en: "Website vs App?" },
        a: {
          zh: "网站用于了解品牌与轻量预览；完整测算、塔罗解读与会员权益以 App 为主。",
          en: "Website = brand + light preview. App = full readings and membership value.",
        },
      },
      {
        q: { zh: "塔罗 Lite 是完整版吗？", en: "Is Tarot Lite full?" },
        a: {
          zh: "不是。网站版为预览级 React 流程，不嵌入 Flutter Web。",
          en: "No. Web Tarot Lite is a preview React flow, not Flutter Web.",
        },
      },
      {
        q: { zh: "会员权益在哪里兑现？", en: "Where do membership benefits apply?" },
        a: {
          zh: "网站展示权益概览；真实权益与支付由后端 / App Admin 控制。",
          en: "Website shows overview; entitlements and payments stay backend/App Admin.",
        },
      },
    ],
  },
  footer: {
    blurb: {
      zh: "吸引、教育、预览、转化 —— 完整体验在 App。",
      en: "Attract, educate, preview, convert — full experience in the App.",
    },
    demo: {
      zh: "前端演示：不含真实登录、支付或测算逻辑。",
      en: "Frontend demo: no live login, payment, or calculation logic.",
    },
  },
} as const;
