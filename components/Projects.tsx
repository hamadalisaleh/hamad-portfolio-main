import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type ProjectsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

type ProjectItem = {
  nameAr: string;
  nameEn: string;
  statusAr: string;
  statusEn: string;
  descriptionAr: string;
  descriptionEn: string;
  stack: string[];
  href: string;
  buttonLabelAr: string;
  buttonLabelEn: string;
};

const hamadProjects: ProjectItem[] = [
  {
    nameAr: "منصة مواهب سوفت (MawahibSoft) — تطبيق ويب إنتاجي متكامل",
    nameEn: "MawahibSoft — Production Full-Stack Web Application",
    statusAr: "مشروع عميل حي ومكتمل",
    statusEn: "Live Client Project",
    descriptionAr:
      "تصميم وتطوير تطبيق ويب متكامل وفق متطلبات العميل باستخدام PHP وMySQL. يتضمن تسجيل الدخول والمصادقة، لوحة تحكم إدارية لإدارة البيانات والمستخدمين، نظام الصلاحيات والأدوار، رفع الملفات والصور، ضبط إعدادات النطاق والاستضافة على Hostinger، تطبيق ممارسات تحسين محركات البحث SEO، وإدارة الكود المصدري عبر Git وGitHub.",
    descriptionEn:
      "Designed and developed a production web application based on client requirements using PHP & MySQL. Implemented user authentication, administrative dashboard, role-based access control, file/image uploads, Hostinger domain/hosting deployment, basic SEO optimization, and Git/GitHub version control.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Hostinger", "cPanel", "Git", "GitHub", "SEO"],
    href: "https://mawahibsoft.com",
    buttonLabelAr: "زيارة المنصة الحية ↗",
    buttonLabelEn: "Visit Live Website ↗",
  },
  {
    nameAr: "تركيب وبرمجة شبكات الحاسوب وكاميرات المراقبة IP & CCTV",
    nameEn: "Network Configuration & IP/CCTV Security Camera Programming",
    statusAr: "مشروع بنية تحتية منفذ",
    statusEn: "Deployed IT Infrastructure",
    descriptionAr:
      "تركيب وبرمجة شبكات الحاسوب السلكية واللاسلكية للمؤسسات، ضبط وتوزيع عناوين IP، إعداد وتكوين أنظمة كاميرات المراقبة CCTV وكاميرات الشبكة IP الذكية، وتأمين الاتصال والمراقبة عن بعد لمنشآت الأعمال بالتعاون مع شركة تهامة للتكنولوجيا.",
    descriptionEn:
      "Installation and network programming for enterprise IT infrastructure, IP address configuration, CCTV security camera setup, IP camera configuration, and secure internal/remote network communications.",
    stack: ["Network Configuration", "IP Cameras", "CCTV Systems", "Switch & Router Setup", "Security"],
    href: "https://github.com/hamadalisaleh",
    buttonLabelAr: "عرض التفاصيل على GitHub ↗",
    buttonLabelEn: "View on GitHub ↗",
  },
  {
    nameAr: "إدارة وتهيئة أنظمة OnyxPro ERP المحاسبية",
    nameEn: "OnyxPro ERP System & Financial Accounting Administration",
    statusAr: "أنظمة أعمال ومحاسبة",
    statusEn: "Business & ERP Systems",
    descriptionAr:
      "إدارة وتكوين النظام المحاسبي المتكامل OnyxPro ERP، إدارة الدورة المستندية والمالية للمؤسسات والشركات، ضبط قيود المحاسبة المالية (A & B)، إعداد التقارير المالية والرقابية، ومتابعة حركات المخزون والمبيعات والمشتريات (معهد اليمن تيك).",
    descriptionEn:
      "Configuration and administration of the OnyxPro ERP accounting system, managing corporate document workflows, financial accounting entries (A & B), financial reporting, and inventory operations.",
    stack: ["OnyxPro ERP", "Financial Accounting", "ERP Systems", "Business Workflows", "Reporting"],
    href: "https://github.com/hamadalisaleh",
    buttonLabelAr: "عرض التفاصيل على GitHub ↗",
    buttonLabelEn: "View on GitHub ↗",
  },
  {
    nameAr: "تطوير تطبيقات الويب وقواعد البيانات (Full-Stack Web & DB)",
    nameEn: "Full-Stack Web Development & Relational Database Design",
    statusAr: "تطوير ويب وقواعد بيانات",
    statusEn: "Web & Database Dev",
    descriptionAr:
      "تصميم وبناء قواعد البيانات العلائقية باستخدام MySQL وSQL، وتطوير واجهات مستخدم متجاوبة وتفاعلية باستخدام HTML5 وCSS3 وJavaScript، وتطوير الأنظمة الخلفية وإدارة عمليات CRUD والمصادقة الأمنية ورفع الملفات.",
    descriptionEn:
      "Relational database design and modeling with MySQL and SQL, crafting responsive frontends with HTML5, CSS3, and JavaScript, and building secure PHP backends with authentication, CRUD operations, and file uploads.",
    stack: ["PHP", "MySQL", "Database Design", "SQL", "JavaScript", "HTML5", "CSS3"],
    href: "https://github.com/hamadalisaleh",
    buttonLabelAr: "عرض المستودعات على GitHub ↗",
    buttonLabelEn: "View Repositories on GitHub ↗",
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="repo-card group flex h-full flex-col rounded-3xl border-cyanBrand/25 p-5 transition hover:-translate-y-1 hover:border-cyanBrand/55 sm:p-6">
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="repo-chip inline-flex max-w-full px-3 py-1 text-xs font-semibold text-cyan-100">
            <LocalizedText ar={project.statusAr} en={project.statusEn} />
          </span>
        </div>
        <h3 className="max-w-full break-words text-[1.05rem] font-black leading-[1.55] text-white sm:text-xl sm:leading-[1.5] lg:text-[1.28rem]">
          <LocalizedText ar={project.nameAr} en={project.nameEn} />
        </h3>
      </div>
      <p className="mt-3 leading-7 text-slate-300/95 sm:mt-4 sm:leading-8">
        <LocalizedText ar={project.descriptionAr} en={project.descriptionEn} />
      </p>
      <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-5 sm:pt-6">
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
        >
          <LocalizedText ar={project.buttonLabelAr} en={project.buttonLabelEn} />
        </a>
      </div>
    </article>
  );
}

export function Projects({ content, contentEn, layoutVariant }: ProjectsProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;

  return (
    <section id="projects" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          kicker={content.projectsHeader.kicker}
          title={content.projectsHeader.title}
          subtitle={content.projectsHeader.subtitle}
          kickerEn={english.projectsHeader.kicker}
          titleEn={english.projectsHeader.title}
          subtitleEn={english.projectsHeader.subtitle}
        />

        <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-2">
          {hamadProjects.map((project) => (
            <ProjectCard key={project.nameEn} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
