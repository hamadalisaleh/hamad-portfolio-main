import type { SiteContent } from "@/lib/site-content";

export const englishSiteContent: SiteContent = {
  profile: {
    nameAr: "HAMAD ALI SALEH HASSAN",
    nameEn: "HAMAD ALI SALEH HASSAN",
    logoText: "HA",
    titleAr: "Web Developer | IT Specialist",
    titleEn: "Web Developer | IT Specialist",
    phone: "+967 734189000",
    whatsappNumber: "967734189000",
    email: "hamadalisalhe@gmail.com",
    location: "Taiz, Yemen",
    cvUrl: "/api/cv",
  },
  hero: {
    badge: "Smart Portfolio & Technical Services",
    highlightedTitle: "Web Developer | IT Specialist",
    description:
      "I develop full-stack web applications using PHP & MySQL, manage Hostinger web hosting, and design network and OnyxPro ERP solutions for business efficiency.",
    primaryCta: "View Projects",
    secondaryCta: "Start with AI Assistant",
    cvCta: "Download CV",
    focusKicker: "Current Focus",
    focusTitle: "Web Development & IT Infrastructure",
    focusItems: [
      "Custom Web Development (PHP & MySQL)",
      "Web Hosting & Domain Setup (Hostinger CPanel)",
      "Search Engine Optimization (SEO)",
      "IP & CCTV Camera Installation & Network Programming",
      "OnyxPro ERP System & Accounting Administration",
    ],
  },
  about: {
    kicker: "About",
    title: "Professional Summary",
    subtitle: "A motivated IT graduate (B.Sc.) and Web Developer with expertise in web deployment and IT systems.",
    paragraphs: [
      "I am an IT Graduate (B.Sc., University of Science & Technology) and Web Developer specializing in PHP, MySQL, and full-stack web deployment, managing Hostinger web hosting, and implementing SEO best practices.",
      "Proven track record in building dynamic client platforms such as MawahibSoft (mawahibsoft.com), along with practical experience in network configuration, IP/CCTV security camera setup, and OnyxPro ERP financial accounting systems.",
    ],
    stats: [
      { value: "2025", label: "IT Graduate (UST)" },
      { value: "Full-Stack", label: "Web Dev" },
      { value: "ERP & IT", label: "Systems" },
    ],
  },
  servicesHeader: {
    kicker: "Services",
    title: "Services I Provide",
    subtitle:
      "Integrated web development and technical services to build robust digital platforms and reliable IT solutions.",
  },
  services: [
    {
      icon: "code",
      title: "Web Development",
      description: "Designing and building dynamic web platforms tailored to client specifications using PHP, MySQL, HTML5, CSS3, and JavaScript.",
    },
    {
      icon: "server",
      title: "Web Hosting & Domain Admin",
      description: "Configuring domain settings, SSL certificates, and deploying web applications onto Hostinger CPanel servers.",
    },
    {
      icon: "workflow",
      title: "Search Engine Optimization (SEO)",
      description: "Applying SEO strategies to improve web indexing, search rankings, and online visibility.",
    },
    {
      icon: "database",
      title: "Database Design & Optimization",
      description: "Designing relational MySQL databases, structuring tables, and optimizing queries for fast load times.",
    },
    {
      icon: "smartphone",
      title: "Networking & CCTV Security",
      description: "IP & CCTV camera installation, network configuration, and programming for enterprise environments.",
    },
    {
      icon: "bot",
      title: "ERP & Business Systems",
      description: "Administration and support for OnyxPro ERP System and financial accounting workflows.",
    },
  ],
  skillsHeader: {
    kicker: "Skills",
    title: "Technical Skills",
    subtitle: "Core technical capabilities across web development, database management, hosting, and IT infrastructure.",
  },
  skills: [
    { group: "Web Dev & Languages", items: ["PHP", "HTML5", "CSS3", "JavaScript"] },
    { group: "Databases", items: ["MySQL"] },
    { group: "Tools & Version Control", items: ["Git", "GitHub", "VS Code"] },
    { group: "Hosting & Web Admin", items: ["Hostinger CPanel", "Domain Management", "SEO Optimization"] },
    { group: "Networking & Security", items: ["IP & CCTV Camera Installation", "Network Configuration & Programming"] },
    { group: "Business & ERP Systems", items: ["OnyxPro ERP System", "Financial Accounting A & B"] },
  ],
  projectsHeader: {
    kicker: "Projects",
    title: "Selected Projects",
    subtitle: "Showcase of dynamic web development and IT engineering projects.",
  },
  projects: [
    {
      name: "MawahibSoft Web Platform",
      status: "Live & Deployed",
      stack: ["PHP", "MySQL", "HTML5", "CSS3", "Git", "GitHub", "Hostinger"],
      description:
        "Designed and built a dynamic web platform (mawahibsoft.com) using PHP & MySQL, applied SEO strategies, and successfully deployed onto Hostinger servers.",
    },
    {
      name: "IP Camera & CCTV Network System",
      status: "Deployed",
      stack: ["IP Cameras", "CCTV", "Network Configuration", "Security"],
      description: "Installation, configuration, and security programming for enterprise IP security cameras and network systems.",
    },
    {
      name: "OnyxPro ERP Financial Administration",
      status: "Field Experience",
      stack: ["OnyxPro ERP", "Financial Accounting", "ERP Systems"],
      description: "Configuring and managing OnyxPro ERP system for business financial workflows and accounting.",
    },
  ],
  ai: {
    kicker: "AI Assistant",
    title: "AI Assistant that collects your project specifications",
    subtitle:
      "The assistant gathers your requirements for websites, hosting, or IT systems and creates an organized brief.",
    assistantTitle: "AI Project Requirement Assistant",
    assistantSubtitle: "Client intake workflow",
    primaryCta: "Try the Assistant",
    dashboardCta: "Dashboard",
    processSteps: [
      "The client starts a conversation with the AI assistant.",
      "The assistant asks about the website type, hosting requirements, or IT goals.",
      "Key features, domain/hosting needs, and budget are collected.",
      "The requirements are converted into a structured project brief.",
      "The request is sent to Hamad Ali for review and follow-up.",
    ],
    chatGreeting:
      "Hello, I am Hamad Ali's AI assistant. I will help turn your web or IT project idea into a structured request. How can I assist you today?",
  },
  contact: {
    kicker: "Contact",
    title: "Contact or start your request with the AI Assistant",
    subtitle: "Feel free to reach out for web development, hosting configuration, network setups, or ERP inquiries.",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    locationLabel: "Location",
    whatsappLabel: "WhatsApp",
    whatsappCta: "Chat on WhatsApp",
    whatsappMessage: "Hello Hamad, I would like to inquire about web development or IT services.",
    items: [
      { id: "email", icon: "mail", label: "Email", value: "hamadalisalhe@gmail.com", href: "mailto:hamadalisalhe@gmail.com", enabled: true, highlighted: false },
      { id: "phone", icon: "phone", label: "Phone", value: "+967 734189000", href: "tel:+967734189000", enabled: true, highlighted: false },
      { id: "whatsapp", icon: "whatsapp", label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/967734189000", enabled: true, highlighted: true },
      { id: "location", icon: "location", label: "Location", value: "Taiz, Yemen", href: "", enabled: true, highlighted: false },
      { id: "linkedin", icon: "link", label: "LinkedIn", value: "Hamad Ali Saleh on LinkedIn", href: "https://www.linkedin.com/in/hamad-ali-2485", enabled: true, highlighted: false },
    ],
  },
  footer: {
    text: "© 2026 HAMAD ALI SALEH HASSAN. All rights reserved - Web Developer & IT Specialist.",
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
