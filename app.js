const languageButton = document.querySelector('.language');
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.nav');
const dialog = document.querySelector('.detail-dialog');
let language = 'zh';
const details = {
  finance: {label: 'AI + FINANCE & INVESTMENT', zh: ['金融与投资', ['信息理解', '探索金融文本、公开信息与多源数据的组织和分析，辅助建立更完整的研究视角。'], ['研究辅助', '关注 AI 在信息梳理、假设形成与研究流程中的应用。模型提供分析支持，判断需要结合实际背景与人工审视。']], en: ['Finance & Investment', ['Understanding information', 'Exploring the organization and analysis of financial texts, public information and diverse data sources to support a fuller research perspective.'], ['Supporting research', 'Studying AI applications in organizing information, forming hypotheses and research workflows. Models support analysis; judgment requires context and human review.']]},
  health: {label: 'AI + PERSONAL HEALTH', zh: ['个人健康', ['理解个体', '关注个体健康信息的长期积累、组织与理解，探索 AI 如何帮助人们更清晰地认识日常健康状态。'], ['从数据到参考', '研究如何将复杂信息转化为易于理解的参考，重视隐私、数据质量与使用边界。相关研究不替代专业医疗诊断与治疗。']], en: ['Personal Health', ['Understanding the individual', 'Focusing on the long-term organization and interpretation of personal health information, and how AI may help people better understand everyday health.'], ['From data to context', 'Exploring ways to make complex information understandable, with care for privacy, data quality and appropriate use. This research does not replace professional medical diagnosis or treatment.']]},
  markets: {label: 'PUBLIC MARKET STRATEGIES', zh: ['公开市场模型策略', ['从假设出发', '围绕公开市场的数据、信号与市场结构开展模型策略研究，以可检验的假设组织研究过程。'], ['关注稳健性', '研究评价关注样本外表现、交易成本、市场状态变化与风险暴露。历史数据中的表现不代表未来结果。本站不构成投资建议或收益承诺。']], en: ['Public Market Strategies', ['Start with a hypothesis', 'Researching model-based strategies around public-market data, signals and market structures, guided by testable hypotheses.'], ['Focus on robustness', 'Evaluation considers out-of-sample behavior, transaction costs, changing market conditions and risk exposure. Historical performance does not indicate future results. This site offers no investment advice or return guarantees.']]},
  lab: {label: 'LUMYN LAB · IN-HOUSE RESEARCH', zh: ['让问题引领研究。', ['机器学习与领域建模', '围绕金融和健康中的具体问题，探索数据表达、模型方法与领域知识的结合。'], ['实验、验证与迭代', '从明确的问题与假设开始，关注评价方法、结果复核及适用边界，让实验逐步形成可积累的认识。'], ['研究方向', 'Lumyn Lab 是景熙的内部实验室。本页介绍研究关注方向，不代表已经发布的论文、产品或实证成果。']], en: ['Let questions lead.', ['Machine learning and domain modeling', 'Exploring data representations, modeling methods and domain knowledge around specific questions in finance and health.'], ['Experiment, validate, iterate', 'Beginning with clear questions and hypotheses, with attention to evaluation, review and the boundaries of application.'], ['Research focus', 'Lumyn Lab is our in-house research lab. These are areas of interest, not claims of published papers, released products or empirical findings.']]},
  notice: {label: 'SITE NOTICE', zh: ['使用声明', ['内容性质', '本网站用于介绍 Lumyn（景熙）的公司定位及研究方向，不构成金融产品要约、投资建议、收益承诺或医疗建议。'], ['数据与隐私', '本网站不设账户、不采集个人健康或金融账户数据，也不使用第三方统计或追踪脚本。网站托管服务可能按其规则处理必要的技术访问日志。'], ['公司信息', 'Lumyn（景熙）是一家注册于杭州的 AI 科技有限责任公司。正式注册全称、业务联系方式与适用备案信息将在确认后补充。']], en: ['Site notice', ['Purpose', 'This site introduces Lumyn and its research interests. It does not constitute an offer of financial products, investment advice, guaranteed returns or medical advice.'], ['Data and privacy', 'This site has no user accounts, collects no personal health or financial account data, and uses no third-party analytics or tracking scripts. The hosting provider may process necessary technical access logs under its own policies.'], ['Company information', 'Lumyn is an AI technology limited liability company registered in Hangzhou, China. The full registered name, business contact details and applicable registration information will be added once confirmed.']]}
};
let currentDetail = null;
function renderDetail(key) {
  const item = details[key];
  const [title, ...sections] = item[language];
  document.querySelector('#dialog-label').textContent = item.label;
  document.querySelector('#dialog-title').textContent = title;
  const body = document.querySelector('#dialog-body');
  body.replaceChildren();
  sections.forEach(([heading, copy]) => {
    const h = document.createElement('h3');
    const p = document.createElement('p');
    h.textContent = heading;
    p.textContent = copy;
    body.append(h, p);
  });
}
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', language === 'zh' ? '打开导航' : 'Open navigation');
}
languageButton.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    // Translation content is authored locally and contains only text and line breaks.
    element.innerHTML = element.dataset[language];
  });
  languageButton.innerHTML = language === 'zh' ? '中 <span>/</span> EN' : 'EN <span>/</span> 中';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  navigation.setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
  document.title = language === 'zh' ? 'Lumyn 景熙 — 景熙惟永，睿图载光' : 'Lumyn — Enduring vision bears the light';
  closeMenu();
  if (currentDetail && dialog.open) renderDetail(currentDetail);
});
menuButton.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', language === 'zh' ? (opened ? '关闭导航' : '打开导航') : (opened ? 'Close navigation' : 'Open navigation'));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  currentDetail = button.dataset.detail;
  renderDetail(currentDetail);
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; currentDetail = null; });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
const lines = document.querySelector('#market-lines');
for (let n = 0; n < 11; n++) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  let d = '';
  for (let x = 35; x <= 305; x += 3) {
    const y = 112 + n * 3.2 - Math.sin((x - 35) / 270 * Math.PI) * (33 + n * 3) + Math.sin(x / 24 + n * .18) * 11;
    d += `${x === 35 ? 'M' : 'L'}${x} ${y.toFixed(2)} `;
  }
  path.setAttribute('d', d);
  path.setAttribute('opacity', String(.35 + n * .045));
  lines.append(path);
}
