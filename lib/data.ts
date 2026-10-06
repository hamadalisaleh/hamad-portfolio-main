import { Code2, Database, Bot, Smartphone, Server, Workflow } from "lucide-react";

export const profile = {
  nameAr: "حماد علي صالح حسن",
  nameEn: "HAMAD ALI SALEH HASSAN",
  titleAr: "مطور ويب | أخصائي تقنية معلومات (Web Developer | IT Specialist)",
  titleEn: "Web Developer | IT Specialist",
  phone: "+967 734189000",
  email: "hamadalisalhe@gmail.com",
  location: "تعز - اليمن",
  cvUrl: "/api/cv",
};

export const skills = [
  {
    group: "تطوير الويب واللغات",
    items: ["PHP", "HTML5", "CSS3", "JavaScript"],
  },
  {
    group: "قواعد البيانات",
    items: ["MySQL"],
  },
  {
    group: "أدوات وإدارة الإصدارات",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    group: "الاستضافة والويب",
    items: ["Hostinger CPanel", "Domain Management", "SEO Optimization"],
  },
  {
    group: "الشبكات والحماية",
    items: ["IP & CCTV Camera Installation", "Network Configuration & Programming"],
  },
  {
    group: "أنظمة الأعمال و ERP",
    items: ["OnyxPro ERP System", "Financial Accounting A & B"],
  },
];

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "تصميم وبناء تطبيقات ومواقع ويب ديناميكية مخصصة وفق متطلبات العمل باستخدام PHP وMySQL.",
  },
  {
    icon: Server,
    title: "Hosting & Domain Admin",
    description:
      "رفع المواقع، إعداد CPanel على استضافات Hostinger، ربط النطاقات وتطبيق أفضل ممارسات SEO.",
  },
  {
    icon: Workflow,
    title: "SEO Optimization",
    description:
      "تطبيق استراتيجيات تحسين محركات البحث SEO الفعالة لرفع ترتيب المواقع في نتائج البحث.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "تصميم وتنظيم قواعد البيانات العلائقية MySQL وتحسين أداء الاستعلامات لتقليل زمن التحميل.",
  },
  {
    icon: Smartphone,
    title: "Networking & Security",
    description:
      "تركيب وبرمجة شبكات الحاسوب وكاميرات المراقبة IP للمؤسسات والشركات.",
  },
  {
    icon: Bot,
    title: "ERP & Accounting Systems",
    description:
      "إدارة وتطبيق حلول الأنظمة المحاسبية وأنظمة ERP (أونكس برو OnyxPro).",
  },
];

export const projects = [
  {
    name: "MawahibSoft Web Platform",
    status: "Live & Deployed",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "Git", "GitHub", "Hostinger"],
    description:
      "تصميم وبناء منصة ويب ديناميكية مخصصة (mawahibsoft.com)، تطبيق تحسين محركات البحث SEO، والنشر الكامل على استضافة Hostinger.",
  },
  {
    name: "IP Camera & Network Security System",
    status: "Completed",
    stack: ["IP Cameras", "CCTV", "Network Configuration", "Security"],
    description:
      "تركيب وبرمجة شبكات حاسوبية وأنظمة مراقبة IP وكاميرات CCTV للمؤسسات.",
  },
  {
    name: "OnyxPro ERP System Administration",
    status: "Field Experience",
    stack: ["OnyxPro ERP", "Financial Accounting", "ERP Systems"],
    description:
      "إدارة وتهيئة النظام المحاسبي OnyxPro وإدارة الدورة المستندية والمالية للمؤسسات والشركات.",
  },
];

export const processSteps = [
  "العميل يبدأ المحادثة مع مساعد AI.",
  "المساعد يسأل عن نوع المشروع والهدف والجمهور.",
  "يتم تحديد الصفحات، الخصائص، اللغة، والميزانية التقريبية.",
  "المساعد يحوّل الإجابات إلى Project Brief منظم.",
  "الطلب يصل إلى لوحة التحكم للمراجعة والتواصل مع العميل.",
];
