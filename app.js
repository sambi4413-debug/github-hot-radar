const repositories = [
  {
    rank: 1,
    owner: 'facebookresearch',
    name: 'esm',
    fullName: 'facebookresearch/esm',
    description: '蛋白质语言模型工具，用于序列表示、结构预测与蛋白质设计。',
    url: 'https://github.com/facebookresearch/esm',
    topic: 'AI for science',
    topicKey: 'ai',
    stars: '13.8k',
    forks: '1.4k',
    lift: '+82%',
    color: 'coral',
    initials: 'FR',
    language: 'Python',
    signal: 'Protein language models',
    detail: '把蛋白质序列当作语言来建模，支持从表示学习到结构与功能预测的研究流程。近期活动集中在推理效率、序列设计和实验闭环。',
    commits: '284',
    contributors: '42',
    spark: 'M2 21 C10 24 12 15 20 17 S30 21 37 13 S45 18 53 9 S62 13 70 4',
  },
  {
    rank: 2,
    owner: 'scverse',
    name: 'scanpy',
    fullName: 'scverse/scanpy',
    description: '单细胞转录组分析工具，支持聚类、降维和可复现的细胞图谱流程。',
    url: 'https://github.com/scverse/scanpy',
    topic: 'Bioinformatics',
    topicKey: 'bio',
    stars: '3.6k',
    forks: '1.1k',
    lift: '+61%',
    color: 'violet',
    initials: 'SC',
    language: 'Python',
    signal: 'Single-cell atlas',
    detail: '单细胞转录组分析的常用 Python 工具链，近期信号来自多组学整合、空间转录组和大规模 atlas 的可复现工作流。',
    commits: '193',
    contributors: '31',
    spark: 'M2 22 C11 17 14 18 22 20 S29 10 37 15 S46 11 53 12 S61 5 70 7',
  },
  {
    rank: 3,
    owner: 'deepchem',
    name: 'deepchem',
    fullName: 'deepchem/deepchem',
    description: '面向药物发现与量子化学的深度学习工具包，支持分子图与生成模型。',
    url: 'https://github.com/deepchem/deepchem',
    topic: 'Chemistry',
    topicKey: 'chem',
    stars: '6.1k',
    forks: '1.8k',
    lift: '+48%',
    color: 'mint',
    initials: 'DC',
    language: 'Python',
    signal: 'Molecular ML',
    detail: '面向药物发现、量子化学和材料建模的深度学习工具包，适合快速验证数据集、图模型和生成式分子方法。',
    commits: '147',
    contributors: '28',
    spark: 'M2 23 C10 21 13 16 21 19 S29 17 36 16 S46 14 53 10 S62 13 70 5',
  },
  {
    rank: 4,
    owner: 'openmm',
    name: 'openmm',
    fullName: 'openmm/openmm',
    description: '高性能分子动力学模拟平台，适合 GPU 加速、可微分模拟与机器学习势能。',
    url: 'https://github.com/openmm/openmm',
    topic: 'AI for science',
    topicKey: 'ai',
    stars: '2.7k',
    forks: '721',
    lift: '+36%',
    color: 'lime',
    initials: 'OM',
    language: 'C++',
    signal: 'Molecular dynamics',
    detail: '用于分子动力学模拟的高性能工具。GPU 加速、可微分模拟和机器学习势能的讨论，构成这周最明显的交叉增长点之一。',
    commits: '98',
    contributors: '19',
    spark: 'M2 22 C11 25 14 20 22 21 S31 14 38 18 S47 17 53 13 S61 10 70 9',
  },
  {
    rank: 5,
    owner: 'napari',
    name: 'napari',
    fullName: 'napari/napari',
    description: '交互式多维科学图像浏览器，适合显微图像探索、标注和插件化分析。',
    url: 'https://github.com/napari/napari',
    topic: 'Imaging',
    topicKey: 'imaging',
    stars: '3.9k',
    forks: '457',
    lift: '+29%',
    color: 'blue',
    initials: 'NP',
    language: 'Python',
    signal: 'Scientific imaging',
    detail: '面向多维科学图像的交互式可视化平台。插件生态、分割标注和大体积图像浏览仍是实验室工作流中的高频需求。',
    commits: '76',
    contributors: '23',
    spark: 'M2 23 C10 20 14 23 21 17 S30 20 37 18 S47 16 53 14 S61 13 70 11',
  },
];

const topics = [
  { name: 'Protein design', key: 'ai', value: 86, change: '+128%', filter: 'ai' },
  { name: 'Single-cell atlas', key: 'bio', value: 71, change: '+92%', filter: 'bio' },
  { name: 'Molecular foundation models', key: 'chem', value: 58, change: '+64%', filter: 'chem' },
  { name: 'Spatial imaging', key: 'imaging', value: 48, change: '+51%', filter: 'imaging' },
  { name: 'Reproducible pipelines', key: 'bio', value: 41, change: '+37%', filter: 'bio' },
];

const trackingKeywords = ['纳米材料', '光学探针', '水凝胶', '药物递送', '干细胞'];

const fallbackNews = [
  {
    id: 'science-lnp-trna',
    source: 'Nature',
    date: '2023-05-31',
    displayDate: '31 May 2023',
    title: '工程化 tRNA 抑制无义突变，LNP 在体内恢复 CFTR 功能',
    summary: '研究将天然 tRNA 改造成高效抑制型 tRNA，并通过静脉或气管内给药的脂质纳米颗粒（LNP）递送。在细胞、患者来源鼻上皮和小鼠模型中，sup-tRNA 恢复了含无义突变 CFTR 的蛋白表达与功能。',
    why: '它在翻译层面绕过提前终止密码子，不改写基因组；研究还用核糖体分析观察到对正常终止密码子没有明显的非特异性跨越。',
    value: '为 RNA 药物、LNP 递送和遗传病精准治疗提供了可复用的工程化框架，但临床转化仍需继续评估递送、剂量和安全性。',
    doi: '10.1038/s41586-023-06133-1',
    url: 'https://www.nature.com/articles/s41586-023-06133-1',
    image: './news-assets/science-trna-figure-page.png',
    imageNote: 'Nature 原文 Fig. 2 截图',
    keywords: ['纳米材料', '药物递送', 'RNA 药物', '基因治疗'],
    kind: 'mutation',
    graphicTitle: 'LNP 递送工程化抑制型 tRNA',
    graphicSteps: ['工程化 tRNA', 'LNP 递送', '肺部递送', '恢复 CFTR'],
    graphicNote: '无义突变 mRNA  →  终止密码子被跨越',
  },
  {
    id: 'nature-cart',
    source: 'Nature Materials',
    date: '2026-08-12',
    displayDate: '12 Aug 2026',
    title: '无需额外配体，纳米颗粒在体内激活 T 细胞并生成 CAR-T',
    summary: '研究提出具有固有 T 细胞激活能力的聚合物—脂质 mRNA 纳米颗粒，在无需额外抗体配体的情况下促进体内 T 细胞转染和增殖，并生成可发挥作用的 CAR-T 细胞。',
    why: '材料同时承担 mRNA 递送和 T 细胞激活两项功能，减少了传统靶向纳米颗粒对外加配体的依赖。',
    value: '为体内细胞工程、纳米材料和细胞治疗提供了新的递送路线；当前仍属于前临床研究，不能直接等同于临床疗效。',
    doi: '10.1038/s41563-026-02675-7',
    url: 'https://www.nature.com/articles/s41563-026-02675-7',
    image: './news-assets/nature-cart-figure.png',
    imageNote: 'Nature Materials 原文 Fig. 1 截图',
    keywords: ['纳米材料', '药物递送', '细胞治疗'],
    kind: 'delivery',
    graphicTitle: '聚合物—脂质纳米颗粒生成体内 CAR-T',
    graphicSteps: ['mRNA 纳米颗粒', 'T 细胞转染', 'T 细胞激活', '体内 CAR-T'],
    graphicNote: '无配体递送  →  代谢重编程  →  细胞治疗',
  },
  {
    id: 'nature-gut-delivery',
    source: 'Nature Materials',
    date: '2026-07-31',
    displayDate: '31 Jul 2026',
    title: '可转移的“肠道菌群—胆汁酸”通路影响纳米药物药代与疗效',
    summary: '研究发现，肠道菌群通过胆汁酸相关信号调节 Kupffer 细胞的吞噬状态，进而改变纳米药物的肝清除、体内分布和肿瘤累积。',
    why: '它把“菌群状态—胆汁酸—Kupffer 细胞—纳米药物 PK”连接成一条可解释、可转移的生物学通路，提示体内递送结果不仅由材料配方决定。',
    value: '设计和评价纳米药物时，应把动物菌群、胆汁酸和肝脏吞噬状态作为重要控制变量，并谨慎解释跨实验室的药代差异。',
    doi: '10.1038/s41563-026-02690-8',
    url: 'https://www.nature.com/articles/s41563-026-02690-8',
    image: './news-assets/nature-gut-figure.png',
    imageNote: 'Nature Materials 原文 Fig. 1 截图',
    keywords: ['纳米材料', '药物递送'],
    kind: 'delivery',
    graphicTitle: '肠道菌群调控纳米药物递送的机制',
    graphicSteps: ['肠道菌群', '胆汁酸代谢', '肝脏摄取', '纳米药物 PK'],
    graphicNote: '菌群状态  →  分布改变  →  肿瘤递送结果',
  },
  {
    id: 'anthropic-mhs',
    source: 'Anthropic',
    date: '2026-08-27',
    displayDate: '27 Aug 2026',
    title: 'Anthropic 发布 MHS：AI Agent 用统一接口控制实验室硬件',
    summary: 'Anthropic 发布 Model Hardware Standard（MHS）研究预览，通过标准化驱动让 AI Agent 发现并操作显微镜、液体处理工作站、机械臂等可编程设备。',
    why: 'MHS 将设备状态、操作命令和安全限制放入统一接口，使 Agent 能编排多台设备、实时读取结果并调整实验步骤。',
    value: '对高通量筛选、材料配方优化和自动化成像有启发，但官方仍将其定位为研究预览，不能等同于无人监管的实验室自动化。',
    url: 'https://www.anthropic.com/news/model-hardware-standard-research-preview',
    image: './news-assets/anthropic-mhs-figure.png',
    imageNote: 'Anthropic 官方原文配图',
    keywords: ['光学探针', '科研自动化', 'AI for Science'],
    kind: 'agent',
    graphicTitle: 'AI Agent 控制实验室设备的工作流程',
    graphicSteps: ['AI 制定方案', '液体处理', '显微成像', '机械臂操作', '数据迭代'],
    graphicNote: '方案  →  执行  →  观测  →  分析  →  优化',
  },
  {
    id: 'nvidia-huggingface',
    source: 'Reuters',
    date: '2026-08-27',
    displayDate: '27 Aug 2026',
    title: 'NVIDIA 据报拟以 129 亿美元收购 Hugging Face',
    summary: 'Reuters 转述 The Information 报道称，NVIDIA 已同意以约 129 亿美元收购 Hugging Face；该交易仍应以公司公告和后续监管信息为准。',
    why: 'AI 竞争范围正从 GPU 向“GPU → 软件栈 → 模型 → 数据集 → 模型分发平台”扩张，对科研人员获取模型、数据和算力的方式都有影响。',
    value: '未来本地科研 AI、开源模型下载、微调和科研 Agent 的基础设施可能进一步整合。实验室需要关注平台开放性、模型可获得性与生态协同的变化。',
    url: 'https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27/',
    imageNote: 'Reuters 原文触发验证保护，暂保留摘要图',
    keywords: ['科研基础设施', '开放模型', 'AI for Science'],
    kind: 'partnership',
    graphicTitle: 'AI 基础设施生态重构',
    graphicSteps: ['GPU', '软件栈', '开放模型', '数据集', '模型分发'],
    graphicNote: 'NVIDIA  +  Hugging Face  →  AI factory',
  },
];

const freshSignals = [
  { tag: 'EMERGING', time: '2h ago', title: 'Diffusion models 开始进入蛋白质 backbone 设计工作流', copy: '本周出现 14 个新仓库，集中讨论条件生成与结构约束。', source: '23 repositories', lift: '+47%' },
  { tag: 'SHIFT', time: '6h ago', title: 'OpenMM 相关插件的 GPU / ML 讨论显著增加', copy: '从模拟速度到可微分势能，工具层正在形成新交叉。', source: '18 repositories', lift: '+31%' },
  { tag: 'WATCH', time: '1d ago', title: '空间转录组的可视化组件出现新的协作网络', copy: 'napari、squidpy 与 atlas 工具之间的连接变密。', source: '11 repositories', lift: '+26%' },
];

const rangeData = {
  '7d': { signals: '1,284', repos: '8,492', momentum: '+42.8', attention: '17', sync: '6 分钟前' },
  '30d': { signals: '4,906', repos: '11,284', momentum: '+58.2', attention: '34', sync: '12 分钟前' },
  '90d': { signals: '13,748', repos: '18,620', momentum: '+76.4', attention: '61', sync: '18 分钟前' },
};

const NEWS_SOURCES = ['./api/research-news.json', './news-feed.json'];
const state = {
  topic: 'all',
  range: '7d',
  query: '',
  saved: new Set(),
  news: fallbackNews,
  newsUpdatedAt: null,
  newsSource: '本地快照',
  nextNewsUpdate: null,
  newsTimer: null,
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function iconStar() {
  return '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 3 2 4 4.5.7-3.2 3.1.8 4.4-4.1-2.1-4.1 2.1.8-4.4-3.2-3.1L8 7l2-4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/></svg>';
}

function sparkline(path) {
  return `<svg class="sparkline" viewBox="0 0 72 27" preserveAspectRatio="none" aria-hidden="true"><path class="spark-area" d="${path} L70 27 L2 27 Z"></path><path d="${path}"></path></svg>`;
}

function matchesRepo(repo) {
  const haystack = `${repo.fullName} ${repo.description} ${repo.topic} ${repo.signal}`.toLowerCase();
  return (state.topic === 'all' || repo.topicKey === state.topic) && (!state.query || haystack.includes(state.query));
}

function renderRepositories() {
  const list = $('#repo-list');
  const filtered = repositories.filter(matchesRepo);
  $('#result-count').textContent = `${filtered.length} signal${filtered.length === 1 ? '' : 's'}`;
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">没有找到匹配信号。试试其他关键词或主题。</div>';
    return;
  }
  list.innerHTML = filtered.map((repo) => `
    <div class="repo-row" data-repo="${repo.fullName}" tabindex="0" role="button" aria-label="查看 ${repo.fullName} 中文简介">
      <span class="repo-rank">0${repo.rank}</span>
      <div class="repo-title">
        <span class="repo-avatar ${repo.color}">${repo.initials}</span>
        <span class="repo-name"><a class="repo-link" href="${repo.url}" target="_blank" rel="noreferrer">${repo.fullName} ↗</a><small>中文简介 · ${repo.topic}</small></span>
      </div>
      <p class="repo-description">${repo.description}</p>
      <span class="repo-stats"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 3 2 4 4.5.7-3.2 3.1.8 4.4-4.1-2.1-4.1 2.1.8-4.4-3.2-3.1L8 7l2-4Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>${repo.stars}</span>
      <span class="repo-lift">${repo.lift}</span>
      ${sparkline(repo.spark)}
      <button class="watch-button ${state.saved.has(repo.fullName) ? 'is-saved' : ''}" type="button" data-watch="${repo.fullName}" aria-label="${state.saved.has(repo.fullName) ? '取消关注' : '关注'} ${repo.fullName}">${iconStar()}</button>
    </div>
  `).join('');
}

function renderTopics() {
  $('#topic-list').innerHTML = topics.map((topic, index) => `
    <div class="topic-item" data-topic-link="${topic.filter}" tabindex="0" role="button" aria-label="筛选 ${topic.name}">
      <span class="topic-number">0${index + 1}</span>
      <span class="topic-name">${topic.name}</span>
      <span class="topic-change">${topic.change}</span>
      <div class="topic-track"><div class="topic-fill" style="width: ${topic.value}%"></div></div>
    </div>
  `).join('');
}

function formatNewsDate(value) {
  const date = new Date(`${value}T09:00:00`);
  if (Number.isNaN(date.getTime())) return value || '—';
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' }).format(date);
}

function renderNewsIndex(items) {
  const keywordList = $('#news-keywords');
  if (keywordList) {
    keywordList.innerHTML = trackingKeywords.map((keyword) => {
      const count = items.filter((item) => Array.isArray(item.keywords) && item.keywords.includes(keyword)).length;
      return `<button class="news-keyword-chip" type="button" data-keyword="${keyword}" title="${keyword} 当前命中 ${count} 条新闻"><span>${keyword}</span><em>${count ? `${count} 条` : '待匹配'}</em></button>`;
    }).join('');
  }

  const sourceList = $('#news-sources');
  if (!sourceList) return;
  const sources = new Map();
  items.forEach((item) => {
    if (!sources.has(item.source)) sources.set(item.source, { count: 0, url: item.url });
    sources.get(item.source).count += 1;
  });
  sourceList.innerHTML = [...sources.entries()].map(([source, data]) => `
    <a class="news-source-chip" href="${data.url}" target="_blank" rel="noreferrer" title="打开 ${source} 来源页"><span>${source}</span><em>${data.count} 条</em></a>
  `).join('');
}

function renderNews() {
  const list = $('#news-list');
  if (!list) return;
  const items = Array.isArray(state.news) && state.news.length ? state.news : fallbackNews;
  $('#news-count').textContent = items.length;
  $('#news-reading-count').textContent = `${items.length} 条原文`;
  renderNewsIndex(items);
  list.innerHTML = items.map((item, index) => {
    const flow = (item.graphicSteps || []).map((step, stepIndex) => `${stepIndex ? '<i>→</i>' : ''}<span>${step}</span>`).join('');
    const keywords = (item.keywords || []).map((keyword) => `<span>${keyword}</span>`).join('');
    const graphic = item.image ? `
      <div class="news-image-frame">
        <img class="news-screenshot" src="${item.image}" alt="${item.imageNote || '原文截图'}：${item.title}" loading="lazy">
      </div>
      <span class="news-asset-caption">${item.imageNote || '原文内容截图'} · 点击卡片阅读完整来源</span>
    ` : `
      <strong>${item.graphicTitle || 'Research signal'}</strong>
      <div class="news-flow">${flow}</div>
      <span class="news-graphic-note">${item.imageNote || '原文截图受限，保留内容摘要图'}</span>
    `;
    return `
      <article class="news-card news-card-${item.kind || 'default'}" data-news-url="${item.url}" tabindex="0" role="link" aria-label="阅读 ${item.title}">
        <div class="news-card-head">
          <span class="news-index">${String(index + 1).padStart(2, '0')}</span>
          <div class="news-card-title">
            <div class="news-title-meta"><span class="news-source">${item.source}</span><span class="news-new">NEW</span></div>
            <h2><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h2>
          </div>
          <span class="news-card-date">${item.displayDate || formatNewsDate(item.date)}</span>
        </div>
        <div class="news-card-body">
          <div class="news-copy">
            <p><strong>核心摘要：</strong>${item.summary}</p>
            <p><strong>为什么值得关注：</strong>${item.why}</p>
            <p><strong>对科研与实际工作的价值：</strong>${item.value}</p>
            ${keywords ? `<div class="news-keywords-inline"><span>关键词</span>${keywords}</div>` : ''}
            <div class="news-meta">
              <span>来源：${item.source}，${item.displayDate || formatNewsDate(item.date)}</span>
              ${item.doi ? `<span>DOI：${item.doi}</span>` : ''}
              <a href="${item.url}" target="_blank" rel="noreferrer">阅读原文 ↗</a>
            </div>
          </div>
          <div class="news-graphic ${item.image ? 'has-screenshot' : 'has-summary-graphic'}" aria-label="${item.graphicTitle || item.title}">
            ${graphic}
          </div>
        </div>
      </article>
    `;
  }).join('');
  $$('.news-screenshot', list).forEach((image) => {
    image.addEventListener('error', () => {
      const frame = image.closest('.news-image-frame');
      if (!frame) return;
      frame.classList.add('is-error');
      image.remove();
      frame.innerHTML = '<span>原文截图暂不可用<br>点击“阅读原文”查看来源</span>';
    });
  });
}

function formatChineseDate(date) {
  const week = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日 | 星期${week}`;
}

function getNextNineAM(now = new Date()) {
  const next = new Date(now);
  next.setHours(9, 0, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  return next;
}

function updateNewsClock() {
  const now = new Date();
  const next = state.nextNewsUpdate || getNextNineAM(now);
  const tomorrow = next.toDateString() === new Date(now.getTime() + 86400000).toDateString();
  const nextLabel = tomorrow ? '明天 09:00' : `${next.getMonth() + 1} 月 ${next.getDate()} 日 09:00`;
  $('#news-date').textContent = formatChineseDate(now);
  $('#news-next-update').textContent = `下次更新：${nextLabel}`;
  const isGeneratedSnapshot = state.newsSource === '每日快照';
  $('#news-source-note').textContent = isGeneratedSnapshot
    ? '每日快照 · 本机任务每日 09:00 更新'
    : '本地数据 · 每日 09:00 自动刷新';
  $('#news-status').innerHTML = `<i></i> ${isGeneratedSnapshot ? '今日简报已从自动快照加载' : '今日简报已加载'}`;
}

async function loadNewsFeed({ manual = false } = {}) {
  let lastError;
  for (const source of NEWS_SOURCES) {
    try {
      const response = await fetch(`${source}?t=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const payload = await response.json();
      const items = Array.isArray(payload) ? payload : payload.items;
      if (!Array.isArray(items) || !items.length) throw new Error('empty news feed');
      state.news = items;
      state.newsUpdatedAt = payload.checkedAt || payload.updatedAt || new Date().toISOString();
      state.newsSource = source.includes('api/research-news') ? '每日快照' : '本地数据';
      renderNews();
      updateNewsClock();
      if (manual) showToast(state.newsSource === '每日快照' ? '科研新闻已从每日快照刷新' : '科研新闻已读取最新本地快照');
      return;
    } catch (error) {
      lastError = error;
    }
  }
  state.news = fallbackNews;
  state.newsSource = '本地快照';
  state.newsUpdatedAt = new Date().toISOString();
  renderNews();
  updateNewsClock();
  if (manual) showToast('新闻接口暂不可用，已保留本地简报');
  return lastError;
}

function scheduleNewsUpdate() {
  window.clearTimeout(state.newsTimer);
  state.nextNewsUpdate = getNextNineAM();
  updateNewsClock();
  const delay = Math.max(1000, state.nextNewsUpdate.getTime() - Date.now());
  state.newsTimer = window.setTimeout(async () => {
    await loadNewsFeed();
    scheduleNewsUpdate();
  }, delay);
}

function renderFreshSignals() {
  $('#fresh-grid').innerHTML = freshSignals.map((item) => `
    <article class="fresh-card">
      <div class="fresh-top"><span class="fresh-tag">${item.tag}</span><span class="fresh-time">${item.time}</span></div>
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
      <div class="fresh-bottom"><span class="fresh-source"><i class="source-dot"></i>${item.source}</span><strong>${item.lift}</strong></div>
    </article>
  `).join('');
}

function updateMetrics() {
  const data = rangeData[state.range];
  $('#metric-signals').textContent = data.signals;
  $('#metric-repos').textContent = data.repos;
  $('#metric-momentum').innerHTML = `${data.momentum}<span class="metric-unit">%</span>`;
  $('#metric-attention').textContent = data.attention;
  $('.last-sync').innerHTML = `<span class="sync-dot"></span>最后同步 ${data.sync}`;
}

function updateSavedCount() {
  $('#watch-count').textContent = state.saved.size;
}

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function selectTopic(topic) {
  state.topic = topic;
  $$('.filter-pill').forEach((pill) => pill.classList.toggle('is-active', pill.dataset.topic === topic));
  renderRepositories();
}

function openRepo(repo) {
  const dialog = $('#repo-dialog');
  $('#dialog-content').innerHTML = `
    <div class="dialog-kicker">REPOSITORY SIGNAL / ${repo.signal.toUpperCase()}</div>
    <div class="dialog-title"><span class="repo-avatar ${repo.color}">${repo.initials}</span><h2>${repo.fullName}</h2></div>
    <p class="dialog-copy"><strong>中文简介：</strong>${repo.description}<br /><br />${repo.detail}</p>
    <div class="dialog-grid">
      <div class="dialog-stat"><span>STAR VELOCITY</span><strong>${repo.lift}</strong></div>
      <div class="dialog-stat"><span>7D COMMITS</span><strong>${repo.commits}</strong></div>
      <div class="dialog-stat"><span>CONTRIBUTORS</span><strong>${repo.contributors}</strong></div>
    </div>
    <div class="dialog-actions"><a href="${repo.url}" target="_blank" rel="noreferrer">打开 GitHub ↗</a><button type="button" data-watch-dialog="${repo.fullName}">${state.saved.has(repo.fullName) ? '已在关注列表' : '加入关注列表'}</button></div>
  `;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

function closeDialog() {
  const dialog = $('#repo-dialog');
  if (typeof dialog.close === 'function') dialog.close();
  else dialog.removeAttribute('open');
}

function setView(view) {
  const labels = { overview: 'Overview', topics: 'Topics', watchlist: 'Watchlist', news: 'Research News' };
  const overview = $('#overview-view');
  const newsView = $('#news-view');
  $$('.nav-item[data-view]').forEach((item) => item.classList.toggle('is-active', item.dataset.view === view));
  $('#view-crumb').textContent = labels[view] || 'Overview';
  if (view === 'news') {
    overview.hidden = true;
    newsView.hidden = false;
    document.body.classList.add('is-news-view');
    renderNews();
    updateNewsClock();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('科研新闻简报已打开');
    return;
  }
  overview.hidden = false;
  newsView.hidden = true;
  document.body.classList.remove('is-news-view');
  if (view === 'topics') {
    $('#topic-list').scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast('主题图谱已定位到当前页面');
  } else if (view === 'watchlist') {
    const saved = repositories.filter((repo) => state.saved.has(repo.fullName));
    if (saved.length) {
      state.query = '';
      selectTopic('all');
      $('#repo-list').scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast(`关注列表中有 ${saved.length} 个仓库`);
    } else {
      showToast('关注列表还是空的，先收藏一个上升仓库吧');
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function exportSnapshot() {
  const payload = { exportedAt: new Date().toISOString(), range: state.range, topic: state.topic, trackingKeywords, news: state.news, repositories, topics, freshSignals };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `radarlab-snapshot-${state.range}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('快照已导出为 JSON');
}

function bindEvents() {
  $('#search-input').addEventListener('input', (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderRepositories();
  });

  $('#topic-filters').addEventListener('click', (event) => {
    const pill = event.target.closest('[data-topic]');
    if (pill) selectTopic(pill.dataset.topic);
  });

  $('#range-switcher').addEventListener('click', (event) => {
    const button = event.target.closest('[data-range]');
    if (!button) return;
    state.range = button.dataset.range;
    $$('.range-button').forEach((item) => item.classList.toggle('is-active', item === button));
    updateMetrics();
    showToast(`已切换至 ${button.textContent} 观察窗口`);
  });

  $('#repo-list').addEventListener('click', (event) => {
    const watch = event.target.closest('[data-watch]');
    if (watch) {
      event.stopPropagation();
      const repoName = watch.dataset.watch;
      if (state.saved.has(repoName)) state.saved.delete(repoName);
      else state.saved.add(repoName);
      renderRepositories();
      updateSavedCount();
      showToast(state.saved.has(repoName) ? `已关注 ${repoName}` : `已取消关注 ${repoName}`);
      return;
    }
    if (event.target.closest('a')) return;
    const row = event.target.closest('[data-repo]');
    if (row) openRepo(repositories.find((repo) => repo.fullName === row.dataset.repo));
  });

  $('#repo-list').addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const row = event.target.closest('[data-repo]');
    if (row) { event.preventDefault(); openRepo(repositories.find((repo) => repo.fullName === row.dataset.repo)); }
  });

  $('#topic-list').addEventListener('click', (event) => {
    const item = event.target.closest('[data-topic-link]');
    if (item) { selectTopic(item.dataset.topicLink); $('#repo-panel')?.scrollIntoView({ behavior: 'smooth' }); showToast(`已筛选主题：${item.querySelector('.topic-name').textContent}`); }
  });

  $('#news-list').addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    const card = event.target.closest('[data-news-url]');
    if (card) window.open(card.dataset.newsUrl, '_blank', 'noopener,noreferrer');
  });

  $('#news-list').addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('[data-news-url]');
    if (card) { event.preventDefault(); window.open(card.dataset.newsUrl, '_blank', 'noopener,noreferrer'); }
  });

  $('#news-keywords')?.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-keyword]');
    if (!chip) return;
    const keyword = chip.dataset.keyword;
    const count = state.news.filter((item) => Array.isArray(item.keywords) && item.keywords.includes(keyword)).length;
    showToast(`${keyword}：当前简报命中 ${count} 条`);
  });

  document.addEventListener('click', (event) => {
    const viewButton = event.target.closest('[data-view]');
    if (viewButton) setView(viewButton.dataset.view);
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action === 'export') exportSnapshot();
    if (action === 'open-news') setView('news');
    if (action === 'refresh-news') loadNewsFeed({ manual: true });
    if (action === 'alerts') showToast('3 条提醒：蛋白质设计、单细胞图谱、空间成像');
    if (action === 'workspace') showToast('当前工作空间：Science watchlist');
    if (action === 'profile') showToast('个人设置面板即将开放');
    if (action === 'more') {
      $('#fresh-grid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('已定位到最新研究信号');
    }
    if (action === 'more-repos') {
      $('#repo-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast(`当前已显示全部 ${repositories.length} 个上升仓库`);
    }
    if (action === 'more-updates') setView('news');
    if (action === 'explore-signal') { $('#repo-list').scrollIntoView({ behavior: 'smooth', block: 'center' }); showToast('已定位到相关上升仓库'); }
    if (action === 'close-dialog') closeDialog();
    const dialogWatch = event.target.closest('[data-watch-dialog]');
    if (dialogWatch) {
      const repoName = dialogWatch.dataset.watchDialog;
      if (state.saved.has(repoName)) state.saved.delete(repoName); else state.saved.add(repoName);
      updateSavedCount();
      dialogWatch.textContent = state.saved.has(repoName) ? '已在关注列表' : '加入关注列表';
      renderRepositories();
      showToast(state.saved.has(repoName) ? `已关注 ${repoName}` : `已取消关注 ${repoName}`);
    }
  });

  $('#repo-dialog').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeDialog();
  });

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#search-input').focus(); }
    if (event.key === 'Escape') closeDialog();
  });
}

renderRepositories();
renderTopics();
renderNews();
renderFreshSignals();
updateMetrics();
updateSavedCount();
scheduleNewsUpdate();
loadNewsFeed();
window.setInterval(updateNewsClock, 60000);
bindEvents();
