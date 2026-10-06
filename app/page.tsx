import { ConfigurableAIChat } from "@/components/ConfigurableAIChat";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ManagedSections } from "@/components/ManagedSections";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getSiteSettings } from "@/lib/site-settings";

export const dynamic = "force-dynamic";

export default async function Home() {
  const settings = await getSiteSettings();
  const { content, contentEn, themeVariant, layoutVariant } = settings;

  const portfolioContent = {
    ...content,
    profile: {
      ...content.profile,
      nameAr: "حمد علي صالح حسن",
      nameEn: "HAMAD ALI SALEH HASSAN",
      titleAr: "مطور ويب | PHP & MySQL | Full-Stack Web Development",
      titleEn: "Junior Web Developer | PHP & MySQL | Full-Stack Web Development",
      logoText: "HA",
      phone: "+967 734189000",
      email: "hamadalisalhe@gmail.com",
      location: "تعز، اليمن",
    },
    hero: {
      ...content.hero,
      badge: "Full-Stack Web Development · PHP & MySQL",
      highlightedTitle: "مطور ويب | Full-Stack Web Developer",
      description:
        "خريج تقنية معلومات صاحب خبرة عملية في تطوير ونشر تطبيقات الويب باستخدام PHP وMySQL وHTML5 وCSS3 وJavaScript. خبير في تطوير التطبيقات القائمة على قواعد البيانات، المصادقة، وإدارة الاستضافات والشبكات.",
      focusKicker: "تركيزي الحالي",
      focusTitle: "Full-Stack Web & IT Infrastructure",
      focusItems: [
        "تطوير تطبيقات الويب المخصصة (PHP & MySQL)",
        "إدارة الاستضافات والدومينات (Hostinger & cPanel)",
        "تحسين محركات البحث والأداء (Basic SEO & Optimization)",
        "تركيب وبرمجة الشبكات وكاميرات المراقبة IP / CCTV",
        "إدارة وتأمين أنظمة OnyxPro ERP المحاسبية",
      ],
    },
    about: {
      ...content.about,
      kicker: "نبذة",
      title: "نبذة عني",
      subtitle:
        "خريج بكالوريوس تقنية معلومات ومطور ويب متخصص في بناء ونشر تطبيقات الويب وإدارة البنية التحتية والأنظمة التقنية.",
      paragraphs: [
        "خريج تقنية معلومات (B.Sc.) من جامعة العلوم والتكنولوجيا (UST) - تعز، لدي خبرة عملية في تطوير ونشر تطبيقات الويب للعملاء باستخدام PHP وMySQL وHTML5 وCSS3 وJavaScript، بالإضافة إلى بناء لوحات التحكم الإدارية ونظام صلاحيات المستخدمين.",
        "لدي خبرة عملية في تطوير منصة (MawahibSoft)، وتكوين الاستضافات والدومينات على Hostinger وcPanel، وإصدارات Git/GitHub، إلى جانب خلفية متكاملة في تركيب وبرمجة الشبكات وكاميرات المراقبة IP/CCTV وأنظمة OnyxPro ERP المحاسبية.",
      ],
      stats: [
        { value: "B.Sc. IT", label: "جامعة العلوم والتكنولوجيا UST (2025)" },
        { value: "Full-Stack", label: "تطوير الويب (PHP & MySQL)" },
        { value: "ERP & IT", label: "أنظمة OnyxPro والشبكات" },
      ],
    },
    servicesHeader: {
      ...content.servicesHeader,
      kicker: "الخدمات",
      title: "الخدمات التقنية",
      subtitle:
        "تطوير تطبيقات الويب الكاملة، إدارة الاستضافات، قواعد البيانات، الشبكات وأنظمة ERP المحاسبية.",
    },
    skillsHeader: {
      ...content.skillsHeader,
      kicker: "المهارات",
      title: "التقنيات والمهارات",
      subtitle:
        "التقنيات والأدوات الأساسية التي أستخدمها في تطوير تطبيقات الويب وإدارة البنية التحتية البرمجية والتقنية.",
    },
    projectsHeader: {
      ...content.projectsHeader,
      kicker: "المشاريع",
      title: "مشاريع مختارة",
      subtitle:
        "نماذج من عملي في تطوير الويب الكامل، نشر الاستضافات، إدارة الشبكات وأنظمة OnyxPro ERP.",
    },
    contact: {
      ...content.contact,
      kicker: "تواصل",
      title: "لنتواصل",
      subtitle: "للفرص المهنية، تطوير المواقع، أو الاستشارات التقنية، يمكنك التواصل معي مباشرة عبر البريد، الهاتف، أو الواتساب.",
    },
    footer: {
      ...content.footer,
      text: "© 2026 حمد علي صالح حسن · Junior Web Developer & IT Specialist.",
    },
  };

  const portfolioContentEn = {
    ...contentEn,
    profile: {
      ...contentEn.profile,
      nameAr: "HAMAD ALI SALEH HASSAN",
      nameEn: "HAMAD ALI SALEH HASSAN",
      titleAr: "Junior Web Developer | PHP & MySQL | Full-Stack Web Development",
      titleEn: "Junior Web Developer | PHP & MySQL | Full-Stack Web Development",
      logoText: "HA",
      phone: "+967 734189000",
      email: "hamadalisalhe@gmail.com",
      location: "Taiz, Yemen",
    },
    hero: {
      ...contentEn.hero,
      badge: "Full-Stack Web Development · PHP & MySQL",
      highlightedTitle: "Junior Web Developer",
      description:
        "Information Technology graduate with hands-on experience developing and deploying client-facing web applications using PHP, MySQL, HTML5, CSS3, and JavaScript. Experienced in database-driven apps, authentication, hosting, and SEO.",
      focusKicker: "CURRENT FOCUS",
      focusTitle: "Full-Stack Web & IT Infrastructure",
      focusItems: [
        "Custom Web Application Development (PHP & MySQL)",
        "Web Hosting & Domain Administration (Hostinger & cPanel)",
        "Search Engine Optimization (Basic SEO & Performance)",
        "Network Configuration, IP Cameras & CCTV Systems",
        "OnyxPro ERP System & Accounting Administration",
      ],
    },
    about: {
      ...contentEn.about,
      kicker: "About",
      title: "About Me",
      subtitle:
        "Information Technology graduate (B.Sc.) and Web Developer experienced in building and deploying web applications and IT infrastructure.",
      paragraphs: [
        "IT graduate (B.Sc.) from the University of Science and Technology (UST) — Taiz, Yemen (2025). Hands-on experience developing and deploying production web applications using PHP, MySQL, HTML5, CSS3, and JavaScript, implementing role-based access control, file uploads, and admin dashboards.",
        "Successfully delivered the MawahibSoft platform (mawahibsoft.com), configured domain and hosting on Hostinger and cPanel, version control with Git/GitHub, alongside practical training in network configuration, IP/CCTV security camera setup, and OnyxPro ERP financial accounting systems.",
      ],
      stats: [
        { value: "B.Sc. IT", label: "University of Science & Tech (2025)" },
        { value: "Full-Stack", label: "Web Dev (PHP & MySQL)" },
        { value: "ERP & IT", label: "OnyxPro & Networks" },
      ],
    },
    servicesHeader: {
      ...contentEn.servicesHeader,
      kicker: "Services",
      title: "Technical Services",
      subtitle:
        "Full-stack web development, hosting management, relational database design, network setup, and ERP systems.",
    },
    skillsHeader: {
      ...contentEn.skillsHeader,
      kicker: "Skills",
      title: "Technologies & Skills",
      subtitle:
        "Core languages, databases, hosting platforms, and IT engineering tools used in development and system administration.",
    },
    projectsHeader: {
      ...contentEn.projectsHeader,
      kicker: "Projects",
      title: "Selected Projects",
      subtitle:
        "Showcase of production web applications, hosting deployments, network setups, and OnyxPro ERP administration.",
    },
    contact: {
      ...contentEn.contact,
      kicker: "Contact",
      title: "Get in Touch",
      subtitle: "For career opportunities, web development projects, or IT consulting, feel free to contact me directly via Email, Phone, or WhatsApp.",
    },
    footer: {
      ...contentEn.footer,
      text: "© 2026 HAMAD ALI SALEH HASSAN · Junior Web Developer & IT Specialist.",
    },
  };

  return (
    <SiteShell
      initialThemeVariant={themeVariant}
      layoutVariant={layoutVariant}
      defaultLanguage={settings.defaultLanguage}
      colorRotationEnabled={settings.colorRotationEnabled}
      colorRotationIntervalSeconds={settings.colorRotationIntervalSeconds}
    >
      <Navbar cvDownloadEnabled={settings.cvDownloadEnabled} content={portfolioContent} contentEn={portfolioContentEn} defaultLanguage={settings.defaultLanguage} />
      <Hero cvDownloadEnabled={settings.cvDownloadEnabled} content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} />
      <ManagedSections
        content={portfolioContent}
        contentEn={portfolioContentEn}
        layoutVariant={layoutVariant}
        sectionOrder={settings.controls.sectionOrder}
        whatsappButtonEnabled={settings.whatsappButtonEnabled}
      />
      <Footer content={portfolioContent} contentEn={portfolioContentEn} />
      {settings.whatsappButtonEnabled ? <WhatsAppButton content={portfolioContent} contentEn={portfolioContentEn} /> : null}
      <MobileBottomNav content={portfolioContent} />
      {portfolioContent.sections.chatWidget ? (
        <ConfigurableAIChat
          greeting={portfolioContent.ai.chatGreeting}
          greetingEn={portfolioContentEn.ai.chatGreeting}
          defaultOpen={settings.controls.chatDefaultOpen}
        />
      ) : null}
    </SiteShell>
  );
}
