export const themeVariants = ["cyber", "emerald", "royal", "sunset"] as const;
export type ThemeVariant = (typeof themeVariants)[number];

export const layoutVariants = ["classic", "compact", "showcase"] as const;
export type LayoutVariant = (typeof layoutVariants)[number];

export const languageVariants = ["ar", "en"] as const;
export type SiteLanguage = (typeof languageVariants)[number];

export const serviceIconKeys = ["server", "code", "smartphone", "database", "bot", "workflow"] as const;
export type ServiceIconKey = (typeof serviceIconKeys)[number];

export const contactItemIconKeys = ["mail", "phone", "whatsapp", "location", "link"] as const;
export type ContactItemIconKey = (typeof contactItemIconKeys)[number];

export type ProfileContent = {
  nameAr: string;
  nameEn: string;
  logoText: string;
  titleAr: string;
  titleEn: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  location: string;
  cvUrl: string;
};

export type HeroContent = {
  badge: string;
  highlightedTitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  cvCta: string;
  focusKicker: string;
  focusTitle: string;
  focusItems: string[];
};

export type AboutContent = {
  kicker: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
};

export type SectionHeaderContent = {
  kicker: string;
  title: string;
  subtitle: string;
};

export type ServiceContent = {
  icon: ServiceIconKey;
  title: string;
  description: string;
};

export type SkillGroupContent = {
  group: string;
  items: string[];
};

export type ProjectContent = {
  name: string;
  status: string;
  stack: string[];
  description: string;
};

export type AIContent = SectionHeaderContent & {
  assistantTitle: string;
  assistantSubtitle: string;
  primaryCta: string;
  dashboardCta: string;
  processSteps: string[];
  chatGreeting: string;
};

export type ContactItemContent = {
  id: string;
  icon: ContactItemIconKey;
  label: string;
  value: string;
  href: string;
  enabled: boolean;
  highlighted: boolean;
};

export type ContactContent = SectionHeaderContent & {
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  whatsappLabel: string;
  whatsappCta: string;
  whatsappMessage: string;
  items: ContactItemContent[];
};

export type SiteContent = {
  profile: ProfileContent;
  hero: HeroContent;
  about: AboutContent;
  servicesHeader: SectionHeaderContent;
  services: ServiceContent[];
  skillsHeader: SectionHeaderContent;
  skills: SkillGroupContent[];
  projectsHeader: SectionHeaderContent;
  projects: ProjectContent[];
  ai: AIContent;
  contact: ContactContent;
  footer: {
    text: string;
  };
  sections: {
    about: boolean;
    services: boolean;
    skills: boolean;
    projects: boolean;
    assistant: boolean;
    contact: boolean;
    chatWidget: boolean;
  };
};

export const defaultSiteContent: SiteContent = {
  profile: {
    nameAr: "حمد علي صالح حسن",
    nameEn: "HAMAD ALI SALEH HASSAN",
    logoText: "HA",
    titleAr: "مطور ويب | أخصائي تقنية معلومات (Web Developer | IT Specialist)",
    titleEn: "Web Developer | IT Specialist",
    phone: "734189000",
    whatsappNumber: "967734189000",
    email: "hamadalisalhe@gmail.com",
    location: "تعز - اليمن",
    cvUrl: "/api/cv",
  },
  hero: {
    badge: "معرض الأعمال والخدمات التقنية الذكي",
    highlightedTitle: "مطور ويب | أخصائي تقنية معلومات",
    description:
      "أطور تطبيقات الويب الكاملة باستخدام PHP وMySQL، أدير استضافات Hostinger، وأصمم بنية الشبكات وأنظمة ERP المحاسبية لتلبية تطلعات العملاء ورفع كفاءة أعمالهم.",
    primaryCta: "عرض المشاريع",
    secondaryCta: "ابدأ مع المساعد الذكي",
    cvCta: "تحميل السيرة",
    focusKicker: "التركيز الحالي",
    focusTitle: "حلول ويب وأنظمة تقنية متكاملة",
    focusItems: [
      "تطوير مواقع الويب المخصصة (PHP & MySQL)",
      "إدارة الاستضافات والدومينات (Hostinger CPanel)",
      "تحسين محركات البحث (SEO)",
      "تركيب وبرمجة الشبكات وكاميرات المراقبة IP",
      "إدارة الأنظمة المحاسبية وأنظمة OnyxPro ERP",
    ],
  },
  about: {
    kicker: "نبذة",
    title: "نبذة مهنية مختصرة",
    subtitle: "خريج تقنية معلومات ومطور ويب صاحب خبرة في بناء الأنظمة وإدارة البنية التحتية البرمجية والتقنية.",
    paragraphs: [
      "أنا خريج بكالوريوس تقنية معلومات (B.Sc.) ومطور ويب متخبط في تطوير الويب الكامل (Full-Stack) باستخدام PHP وMySQL، نشر المواقع وإدارتها على استضافات Hostinger، وتطبيق أفضل ممارسات تحسين محركات البحث SEO.",
      "لدي خبرة واسعة في بناء وتصميم المنصات الديناميكية مثل موقع (MawahibSoft)، بالإضافة إلى خلفية قوية في تركيب وبرمجة الشبكات وكاميرات المراقبة IP وإدارة الأنظمة المحاسبية وأنظمة ERP (OnyxPro).",
    ],
    stats: [
      { value: "2025", label: "خريج تقنية معلومات (UST)" },
      { value: "Full-Stack", label: "تطوير الويب" },
      { value: "ERP & IT", label: "أنظمة وشبكات" },
    ],
  },
  servicesHeader: {
    kicker: "الخدمات",
    title: "الخدمات التي أقدمها",
    subtitle:
      "حلول تقنية وتطويرية متكاملة تضمن بناء مواقع قوية وإدارة بنية تحتية تقنية موثوقة.",
  },
  services: [
    {
      icon: "code",
      title: "تطوير تطبيقات الويب",
      description: "بناء مواقع وتطبيقات ويب ديناميكية مخصصة وفق متطلبات العمل باستخدام PHP وMySQL وHTML5 وCSS3 وJavaScript.",
    },
    {
      icon: "server",
      title: "إدارة الاستضافة والدومينات",
      description: "رفع المواقع، ضبط إعدادات CPanel على استضافات Hostinger، ربط النطاقات، وتأمين الحماية والتشفير.",
    },
    {
      icon: "workflow",
      title: "تحسين محركات البحث (SEO)",
      description: "تطبيق استراتيجيات SEO الفعالة لرفع ترتيب المواقع في محركات البحث وتحسين ظهورها ومؤشراتها.",
    },
    {
      icon: "database",
      title: "تصميم وإدارة قواعد البيانات",
      description: "تصميم قواعد البيانات العلائقية MySQL، تنظيم الهيكلية، وتحسين أداء الاستعلامات وسرعة استجابة الموقع.",
    },
    {
      icon: "smartphone",
      title: "الشبكات وكاميرات المراقبة",
      description: "تركيب وبرمجة شبكات الحاسوب، ضبط عناوين IP، وإعداد وتكاوين كاميرات المراقبة CCTV الذكية للمؤسسات.",
    },
    {
      icon: "bot",
      title: "الأنظمة المحاسبية و ERP",
      description: "إدارة وتدريب وحلول أنظمة ERP المحاسبية (OnyxPro) ومتابعة العمليات المالية والتقنية.",
    },
  ],
  skillsHeader: {
    kicker: "المهارات",
    title: "المهارات التقنية",
    subtitle: "تتوزع المهارات بين تطوير الويب، إدارة الاستضافات، قواعد البيانات، والشبكات والأنظمة.",
  },
  skills: [
    { group: "تطوير الويب واللغات", items: ["PHP", "HTML5", "CSS3", "JavaScript"] },
    { group: "قواعد البيانات", items: ["MySQL"] },
    { group: "أدوات وإدارة الإصدارات", items: ["Git", "GitHub", "VS Code"] },
    { group: "الاستضافة والويب", items: ["Hostinger CPanel", "Domain Management", "SEO Optimization"] },
    { group: "الشبكات والحماية", items: ["IP & CCTV Camera Installation", "Network Configuration & Programming"] },
    { group: "أنظمة الأعمال و ERP", items: ["OnyxPro ERP System", "Financial Accounting A & B"] },
  ],
  projectsHeader: {
    kicker: "المشاريع",
    title: "مشاريع مختارة",
    subtitle: "استعراض للمشاريع والحلول التقنية التي قمت ببنائها وتنفيذها بنجاح.",
  },
  projects: [
    {
      name: "منصة مواهب سوفت (MawahibSoft)",
      status: "مشروع حي ومكتمل",
      stack: ["PHP", "MySQL", "HTML5", "CSS3", "Git", "GitHub", "Hostinger"],
      description:
        "تصميم وبناء منصة ويب ديناميكية مخصصة (mawahibsoft.com)، تطبيق تحسين محركات البحث SEO، وتهيئة النطاق والنشر الكامل على استضافة Hostinger.",
    },
    {
      name: "نظام ربط وإدارة شبكات وكاميرات IP",
      status: "مشروع منفذ",
      stack: ["IP Cameras", "CCTV", "Network Programming", "Security"],
      description: "تركيب وبرمجة شبكات حاسوبية متكاملة مع إعداد وتكوين أنظمة كاميرات المراقبة وتأمين الاتصال للشركات.",
    },
    {
      name: "تهيئة وإدارة نظام OnyxPro ERP المحاسبي",
      status: "خبرة وعمل ميداني",
      stack: ["OnyxPro ERP", "Financial Accounting", "ERP Systems"],
      description: "إعداد وتهيئة النظام المحاسبي OnyxPro وإدارة الدورة المستندية والمالية للمؤسسات والشركات.",
    },
  ],
  ai: {
    kicker: "المساعد الذكي",
    title: "مساعد ذكي لتحويل طلبات العملاء إلى مواصفات مشروع جاهزة",
    subtitle:
      "المساعد يجمع متطلباتك بخصوص بناء الموقع، الاستضافة، أو النظام التقني المطلوب ويقوم بتحويلها إلى طلب منظم.",
    assistantTitle: "المساعد الذكي للمشاريع",
    assistantSubtitle: "جمع متطلبات العملاء وإرسال الطلبات",
    primaryCta: "جرّب المحادثة الآن",
    dashboardCta: "لوحة التحكم",
    processSteps: [
      "العميل يبدأ المحادثة مع المساعد الذكي.",
      "المساعد يسأل عن نوع الموقع، المتطلبات، والهدف المطلوب.",
      "يتم تحديد الميزات المطلوبة، نطاق الاستضافة، والميزانية المتوقعة.",
      "المساعد يحوّل الإجابات إلى ملخص مشروع منظم.",
      "الطلب يصل لمراجعة حمد علي والتواصل معك مباشرة.",
    ],
    chatGreeting:
      "مرحبًا، أنا مساعد حمد علي الذكي. سأساعدك في تحديد متطلبات موقعك، استضافتك، أو نظامك التقني وتجهيز طلب واضح. كيف يمكنني مساعدتك اليوم؟",
  },
  contact: {
    kicker: "تواصل",
    title: "تواصل معي أو ابدأ طلبك عبر المساعد الذكي",
    subtitle: "يسعدني تواصلك لاستفسارات تطوير الويب، الاستضافات، الشبكات، والأنظمة.",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف / واتساب",
    locationLabel: "الموقع",
    whatsappLabel: "واتساب",
    whatsappCta: "راسلني على واتساب",
    whatsappMessage: "مرحبًا حمد، أريد الاستفسار عن خدمة تطوير موقع أو استشارة تقنية.",
    items: [
      { id: "email", icon: "mail", label: "البريد الإلكتروني", value: "hamadalisalhe@gmail.com", href: "mailto:hamadalisalhe@gmail.com", enabled: true, highlighted: false },
      { id: "phone", icon: "phone", label: "الهاتف", value: "+967 734189000", href: "tel:+967734189000", enabled: true, highlighted: false },
      { id: "whatsapp", icon: "whatsapp", label: "واتساب", value: "راسلني على واتساب", href: "https://wa.me/967734189000", enabled: true, highlighted: true },
      { id: "location", icon: "location", label: "الموقع", value: "تعز - اليمن", href: "", enabled: true, highlighted: false },
      { id: "linkedin", icon: "link", label: "LinkedIn", value: "حمد علي صالح على LinkedIn", href: "https://www.linkedin.com/in/hamad-ali-2485", enabled: true, highlighted: false },
    ],
  },
  footer: {
    text: "© 2026 حمد علي صالح حسن. جميع الحقوق محفوظة - مطور ويب وأخصائي تقنية معلومات.",
  },
  sections: {
    about: true,
    services: true,
    skills: true,
    projects: true,
    assistant: true,
    contact: true,
    chatWidget: true,
  },
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function deepMerge<T>(fallback: T, incoming: unknown): T {
  if (Array.isArray(fallback)) {
    return Array.isArray(incoming) ? (incoming as T) : fallback;
  }

  if (isObject(fallback)) {
    const output: Record<string, unknown> = { ...fallback };
    const source = isObject(incoming) ? incoming : {};

    for (const key of Object.keys(fallback)) {
      output[key] = deepMerge((fallback as Record<string, unknown>)[key], source[key]);
    }

    return output as T;
  }

  return typeof incoming === typeof fallback ? (incoming as T) : fallback;
}

function cleanString(value: string, maxLength: number) {
  return value
    .normalize("NFKC")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

function cleanStringArray(values: string[], maxItems: number, maxText: number) {
  return values
    .slice(0, maxItems)
    .map((item) => cleanString(item, maxText))
    .filter(Boolean);
}


const legacyArabicText: Record<string, string> = {
  "أحمد شوقي محمد قائد": "حمد علي صالح حسن",
  "Ahmed Qaid": "HAMAD ALI SALEH HASSAN",
  "Portfolio + AI Client Intake System": "معرض أعمال + نظام استقبال طلبات ذكي",
  "Software Engineer": "مهندس برمجيات",
  "ابدأ مع AI Assistant": "ابدأ مع المساعد الذكي",
  "Current Focus": "التركيز الحالي",
  "Smart Digital Products": "منتجات رقمية ذكية",
  "Backend APIs and business logic": "واجهات برمجية ومنطق أعمال",
  "Flutter mobile applications": "تطبيقات موبايل باستخدام Flutter",
  "Relational database design": "تصميم قواعد البيانات العلائقية",
  "AI project requirement assistant": "مساعد ذكي لجمع متطلبات المشاريع",
  "n8n content automation workflows": "مسارات أتمتة المحتوى باستخدام n8n",
  "About": "نبذة",
  "Services": "الخدمات",
  "Skills": "المهارات",
  "Projects": "المشاريع",
  "Contact": "تواصل",
  "AI Assistant": "المساعد الذكي",
  "AI Project Requirement Assistant": "المساعد الذكي للمشاريع",
  "Client intake workflow": "جمع متطلبات العملاء وإرسال الطلبات",
  "Email": "البريد الإلكتروني",
  "Phone": "الهاتف",
  "Location": "الموقع",
  "GPA": "المعدل التراكمي",
  "IT Graduate": "خريج تقنية معلومات",
  "Focus": "التركيز التقني",
  "Backend Development": "تطوير الباك اند",
  "Web Applications": "تطبيقات الويب",
  "Mobile Applications": "تطبيقات الموبايل",
  "Database Design": "تصميم قواعد البيانات",
  "AI-Based Solutions": "حلول مدعومة بالذكاء الاصطناعي",
  "n8n Automation": "الأتمتة باستخدام n8n",
  "Backend": "الباك اند",
  "Frontend": "الواجهات الأمامية",
  "Mobile": "الموبايل",
  "Databases": "قواعد البيانات",
  "AI & Automation": "الذكاء الاصطناعي والأتمتة",
  "Systems": "الأنظمة والأدوات",
  "Hotel Booking System": "نظام حجز فندقي",
  "Featured": "مشروع مميز",
  "In Progress": "قيد التنفيذ",
  "AI-Powered Accounting System": "نظام محاسبي مدعوم بالذكاء الاصطناعي",
  "Child Care Mobile App": "تطبيق موبايل لرعاية الأطفال",
  "n8n Content Automation": "أتمتة المحتوى باستخدام n8n",
  "© 2026 Ahmed Qaid. Built as a smart portfolio and AI client intake system.": "© 2026 حمد علي صالح حسن. جميع الحقوق محفوظة - مطور ويب وأخصائي تقنية معلومات.",
  "الخدمات مبنية على المهارات الموجودة في السيرة الذاتية، مع إبراز المجالات الأقوى: Backend، قواعد البيانات، Flutter، والذكاء الاصطناعي التطبيقي.": "خدمات تقنية متكاملة لتحويل الأفكار إلى مواقع، تطبيقات، وأنظمة ذكية عملية.",
  "The services are aligned with the strongest areas in the CV: backend development, databases, Flutter, applied AI, and automation.": "Integrated digital services to transform ideas into practical websites, applications, and smart systems.",
  "© 2026 AHMED SHAWQI MANSOUR. Built as a smart portfolio and AI client intake system.": "© 2026 حمد علي صالح حسن. جميع الحقوق محفوظة - مطور ويب وأخصائي تقنية معلومات."
};

const legacyStringReplacements: Array<[string, string]> = [
  ["أحمد شوقي محمد قائد", "حمد علي صالح حسن"],
  ["أحمد شوقي منصور", "حمد علي صالح حسن"],
  ["أحمد شوقي", "حمد علي"],
  ["أحمد", "حمد"],
  ["AHMED SHAWQI MOHAMMED QAID", "HAMAD ALI SALEH HASSAN"],
  ["AHMED SHAWQI MANSOUR", "HAMAD ALI SALEH HASSAN"],
  ["AHMED SHAWQI", "HAMAD ALI"],
  ["Ahmed Qaid", "Hamad Ali Saleh"],
  ["AHMED QAID", "HAMAD ALI SALEH"],
  ["ahmed0qaid", "hamadalisaleh"],
  ["ahmedqaid", "hamadalisaleh"],
  ["Ahmed", "Hamad"],
  ["ahmed", "hamad"],
];

function replaceLegacyArabicStrings(value: unknown): unknown {
  if (typeof value === "string") {
    let result = legacyArabicText[value] || value;
    for (const [oldStr, newStr] of legacyStringReplacements) {
      if (result.includes(oldStr)) {
        result = result.replaceAll(oldStr, newStr);
      }
    }
    return result;
  }
  if (Array.isArray(value)) return value.map((item) => replaceLegacyArabicStrings(item));
  if (isObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceLegacyArabicStrings(item)]));
  }
  return value;
}

export function normalizeSiteContent(value: unknown, fallback: SiteContent = defaultSiteContent): SiteContent {
  const merged = deepMerge(fallback, value);
  const source = fallback === defaultSiteContent ? (replaceLegacyArabicStrings(merged) as SiteContent) : merged;

  return {
    profile: {
      nameAr: cleanString(source.profile.nameAr, 120),
      nameEn: cleanString(source.profile.nameEn, 120),
      logoText: cleanString(source.profile.logoText, 12),
      titleAr: cleanString(source.profile.titleAr, 200),
      titleEn: cleanString(source.profile.titleEn, 200),
      phone: cleanString(source.profile.phone, 40),
      whatsappNumber: cleanString(source.profile.whatsappNumber || source.profile.phone, 40),
      email: cleanString(source.profile.email, 150),
      location: cleanString(source.profile.location, 120),
      cvUrl: source.profile.cvUrl === "/api/cv" ? "/api/cv" : "/api/cv",
    },
    hero: {
      badge: cleanString(source.hero.badge, 120),
      highlightedTitle: cleanString(source.hero.highlightedTitle, 120),
      description: cleanString(source.hero.description, 600),
      primaryCta: cleanString(source.hero.primaryCta, 60),
      secondaryCta: cleanString(source.hero.secondaryCta, 60),
      cvCta: cleanString(source.hero.cvCta, 60),
      focusKicker: cleanString(source.hero.focusKicker, 80),
      focusTitle: cleanString(source.hero.focusTitle, 120),
      focusItems: cleanStringArray(source.hero.focusItems, 12, 120),
    },
    about: {
      kicker: cleanString(source.about.kicker, 80),
      title: cleanString(source.about.title, 160),
      subtitle: cleanString(source.about.subtitle, 300),
      paragraphs: cleanStringArray(source.about.paragraphs, 6, 800),
      stats: source.about.stats.slice(0, 8).map((stat) => ({
        value: cleanString(stat.value, 40),
        label: cleanString(stat.label, 80),
      })).filter((stat) => stat.value && stat.label),
    },
    servicesHeader: {
      kicker: cleanString(source.servicesHeader.kicker, 80),
      title: cleanString(source.servicesHeader.title, 160),
      subtitle: cleanString(source.servicesHeader.subtitle, 400),
    },
    services: source.services.slice(0, 12).map((service) => ({
      icon: serviceIconKeys.includes(service.icon) ? service.icon : "server",
      title: cleanString(service.title, 120),
      description: cleanString(service.description, 500),
    })).filter((service) => service.title && service.description),
    skillsHeader: {
      kicker: cleanString(source.skillsHeader.kicker, 80),
      title: cleanString(source.skillsHeader.title, 160),
      subtitle: cleanString(source.skillsHeader.subtitle, 400),
    },
    skills: source.skills.slice(0, 15).map((skill) => ({
      group: cleanString(skill.group, 100),
      items: cleanStringArray(skill.items, 30, 60),
    })).filter((skill) => skill.group && skill.items.length),
    projectsHeader: {
      kicker: cleanString(source.projectsHeader.kicker, 80),
      title: cleanString(source.projectsHeader.title, 160),
      subtitle: cleanString(source.projectsHeader.subtitle, 400),
    },
    projects: source.projects.slice(0, 15).map((project) => ({
      name: cleanString(project.name, 140),
      status: cleanString(project.status, 80),
      stack: cleanStringArray(project.stack, 20, 60),
      description: cleanString(project.description, 700),
    })).filter((project) => project.name && project.description),
    ai: {
      kicker: cleanString(source.ai.kicker, 80),
      title: cleanString(source.ai.title, 160),
      subtitle: cleanString(source.ai.subtitle, 400),
      assistantTitle: cleanString(source.ai.assistantTitle, 160),
      assistantSubtitle: cleanString(source.ai.assistantSubtitle, 400),
      primaryCta: cleanString(source.ai.primaryCta, 80),
      dashboardCta: cleanString(source.ai.dashboardCta, 80),
      processSteps: cleanStringArray(source.ai.processSteps, 8, 120),
      chatGreeting: cleanString(source.ai.chatGreeting, 500),
    },
    contact: {
      kicker: cleanString(source.contact.kicker, 80),
      title: cleanString(source.contact.title, 160),
      subtitle: cleanString(source.contact.subtitle, 400),
      emailLabel: cleanString(source.contact.emailLabel, 60),
      phoneLabel: cleanString(source.contact.phoneLabel, 60),
      locationLabel: cleanString(source.contact.locationLabel, 60),
      whatsappLabel: cleanString(source.contact.whatsappLabel, 60),
      whatsappCta: cleanString(source.contact.whatsappCta, 80),
      whatsappMessage: cleanString(source.contact.whatsappMessage, 240),
      items: (source.contact.items?.length ? source.contact.items : fallback.contact.items)
        .slice(0, 12)
        .map((item, index) => ({
          id: cleanString(item.id || `contact-${index + 1}`, 60) || `contact-${index + 1}`,
          icon: contactItemIconKeys.includes(item.icon) ? item.icon : "link",
          label: cleanString(item.label, 80),
          value: cleanString(item.value, 180),
          href: cleanString(item.href, 240),
          enabled: Boolean(item.enabled),
          highlighted: Boolean(item.highlighted),
        }))
        .filter((item) => item.label && item.value),
    },
    footer: {
      text: cleanString(source.footer.text, 200),
    },
    sections: {
      about: Boolean(source.sections.about),
      services: Boolean(source.sections.services),
      skills: Boolean(source.sections.skills),
      projects: Boolean(source.sections.projects),
      assistant: Boolean(source.sections.assistant),
      contact: Boolean(source.sections.contact),
      chatWidget: Boolean(source.sections.chatWidget),
    },
  };
}
