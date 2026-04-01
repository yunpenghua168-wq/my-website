// ===== i18n Translations =====
const translations = {
  zh: {
    nav_about:             '关于我',
    nav_services:          '服务',
    nav_contact:           '联系',
    hero_eyebrow:          '制造质量 × AI 集成 × 国际化',
    hero_subtitle:         '质量管理专家 · Six Sigma 黑带 · AI 工具实践者',
    hero_cta_primary:      '立即联系',
    hero_cta_secondary:    '了解服务',
    about_label:           '关于我',
    about_title:           '用数据与 AI<br/>重新定义质量',
    about_p1:              '我是华云鹏（Skyler），汽车制造领域质量管理专家，拥有 12 年供应商质量、体系管理与过程控制实战经验。持有 ASQ CSSBB（六西格玛黑带）与 PMP 认证，毕业于西北工业大学工程管理研究生。',
    about_p2:              '我正将传统质量方法论（IATF 16949 · FMEA · SPC · APQP）与 AI 工具、Python 数据分析深度融合，探索人形机器人量产时代的下一代质量管理体系（AQMS）。',
    stat1_num:             '12年',
    stat1_label:           '汽车质量管理',
    stat2_label:           'ASQ 六西格玛黑带',
    stat3_label:           '项目管理专业认证',
    stat4_label:           '新能源 · 机器人供应链',
    services_label:        '我的服务',
    services_title:        '专业能力',
    services_desc:         '12 年制造质量实战 × AI 工具深度应用，覆盖从体系建设到数字化转型的全链路。',
    s1_title:              '质量体系建设',
    s1_desc:               'IATF 16949 体系策划与实施、质量手册及程序文件开发、内审员培训，助力企业通过认证并持续改进。',
    s2_title:              'SPC · MSA · 过程控制',
    s2_desc:               '统计过程控制（SPC）部署、量测系统分析（GR&R · MSA），以数据驱动工艺稳定性提升，降低批次波动风险。',
    s3_title:              'FMEA · 风险管理',
    s3_desc:               '基于 AIAG-VDA 2019 的 FMEA 开发，Action Priority（AP）风险评级，结合 APQP/PPAP 覆盖产品全生命周期风险。',
    s4_title:              '供应商质量管理',
    s4_desc:               '供应商准入评审、现场审核、8D/CAPA 闭环管理，构建高效的 SQM 体系，保障来料质量稳定。',
    s5_title:              'AI 驱动质量数字化',
    s5_desc:               'Python（Pandas · Plotly）质量仪表盘开发、LLM 工具应用于 QMS 文档生成，将 AI 落地到制造质量的日常工作流。',
    s6_title:              'AQMS 敏捷质量框架',
    s6_desc:               '面向人形机器人执行器量产的新一代质量体系：不变层 · 自适应层 · 学习层，以数据飞轮驱动持续优化。',
    contact_label:         '联系我',
    contact_title:         '与我联系',
    contact_desc:          '欢迎探讨质量管理、AI 工具应用或职业发展，我通常在 24 小时内回复。',
    contact_email_label:   '邮箱',
    contact_location_label:'位置',
    contact_location_value:'宁波，中国',
    form_name:             '姓名',
    form_name_ph:          '你的名字',
    form_email:            '邮箱',
    form_subject:          '主题',
    form_subject_ph:       '质量咨询 / AI 工具 / 职业交流 / ...',
    form_message:          '留言',
    form_message_ph:       '请描述你的需求或想法...',
    form_submit:           '发送消息',
    form_success:          '消息已发送，我会尽快与你联系！',
    footer_copy:           '© 2026 Skyler Hua · 制造质量 × AI 集成 × 国际化',
  },
  en: {
    nav_about:             'About',
    nav_services:          'Services',
    nav_contact:           'Contact',
    hero_eyebrow:          'Manufacturing Quality × AI Integration × Global',
    hero_subtitle:         'Quality Expert · ASQ Six Sigma Black Belt · AI Practitioner',
    hero_cta_primary:      'Get in Touch',
    hero_cta_secondary:    'Explore Services',
    about_label:           'About Me',
    about_title:           'Redefining Quality<br/>with Data & AI',
    about_p1:              'I\'m Skyler Hua, a manufacturing quality expert with 12 years of hands-on experience in supplier quality, quality management systems, and process control. Certified ASQ CSSBB (Six Sigma Black Belt) & PMP, with a Master\'s in Engineering Management from Northwestern Polytechnical University.',
    about_p2:              'I\'m integrating traditional quality methodologies (IATF 16949 · FMEA · SPC · APQP) with AI tools and Python data analytics to pioneer the next-generation Agile Quality Management System (AQMS) for humanoid robot mass production.',
    stat1_num:             '12 Yrs',
    stat1_label:           'Automotive Quality',
    stat2_label:           'ASQ Six Sigma Black Belt',
    stat3_label:           'Project Management Professional',
    stat4_label:           'NEV · Robotics Supply Chain',
    services_label:        'What I Do',
    services_title:        'Core Expertise',
    services_desc:         '12 years of manufacturing quality practice × deep AI tool integration — from QMS implementation to digital transformation.',
    s1_title:              'Quality Management Systems',
    s1_desc:               'IATF 16949 system planning & implementation, quality manual & procedure development, internal auditor training — driving continuous improvement.',
    s2_title:              'SPC · MSA · Process Control',
    s2_desc:               'Statistical Process Control (SPC) deployment and Measurement System Analysis (GR&R · MSA), using data to improve process stability and reduce batch variation.',
    s3_title:              'FMEA · Risk Management',
    s3_desc:               'FMEA development per AIAG-VDA 2019, Action Priority (AP) risk rating, combined with APQP/PPAP to cover full product lifecycle risk.',
    s4_title:              'Supplier Quality Management',
    s4_desc:               'Supplier qualification, on-site audits, 8D/CAPA closed-loop management — building a robust SQM system to ensure incoming quality stability.',
    s5_title:              'AI-Driven Quality Digitalization',
    s5_desc:               'Python (Pandas · Plotly) quality dashboard development, LLM-powered QMS document generation — embedding AI into everyday manufacturing quality workflows.',
    s6_title:              'AQMS Agile Quality Framework',
    s6_desc:               'A next-gen quality system for humanoid robot actuator mass production: Invariant Layer · Adaptive Layer · Learning Layer — continuously optimized by a data flywheel.',
    contact_label:         'Contact',
    contact_title:         'Let\'s Connect',
    contact_desc:          'Open to discussions on quality management, AI tools, or career topics. I typically respond within 24 hours.',
    contact_email_label:   'Email',
    contact_location_label:'Location',
    contact_location_value:'Ningbo, China',
    form_name:             'Name',
    form_name_ph:          'Your name',
    form_email:            'Email',
    form_subject:          'Subject',
    form_subject_ph:       'Quality consulting / AI tools / Career exchange / ...',
    form_message:          'Message',
    form_message_ph:       'Describe your needs or ideas...',
    form_submit:           'Send Message',
    form_success:          'Message sent! I\'ll get back to you shortly.',
    footer_copy:           '© 2026 Skyler Hua · Manufacturing Quality × AI × Global',
  }
};

// ===== Language Switcher =====
let currentLang = localStorage.getItem('lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder text
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Toggle button label
  const btn = document.getElementById('langToggle');
  btn.querySelector('.lang-zh').style.display = lang === 'zh' ? 'inline' : 'none';
  btn.querySelector('.lang-en').style.display = lang === 'en' ? 'inline' : 'none';
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLang(currentLang === 'zh' ? 'en' : 'zh');
});

// Init on load
setLang(currentLang);

// ===== Scroll Reveal =====
const revealEls = document.querySelectorAll('.service-card, .stat-item, .contact-item');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ===== Nav shadow on scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 10
    ? 'rgba(255,255,255,0.92)'
    : 'rgba(255,255,255,0.82)';
});

// ===== Contact Form =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const t = translations[currentLang];
  btn.textContent = currentLang === 'zh' ? '发送中...' : 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('visible');
    e.target.reset();
    btn.textContent = t.form_submit;
    btn.disabled = false;
  }, 1000);
}
