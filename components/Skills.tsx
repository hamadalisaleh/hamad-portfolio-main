import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { getSiteSettings } from "@/lib/site-settings";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type SkillsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const hamadSkills = [
  {
    key: "web-dev",
    groupAr: "تطوير الويب (Web Development)",
    groupEn: "Web Development",
    items: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Responsive Design", "User Authentication", "Admin Dashboards"],
  },
  {
    key: "database",
    groupAr: "قواعد البيانات (Databases & SQL)",
    groupEn: "Databases & SQL",
    items: ["MySQL", "Database Design", "SQL", "Relational Modeling", "CRUD Operations", "Data Security", "Query Optimization"],
  },
  {
    key: "tools",
    groupAr: "أدوات التطوير (Development Tools)",
    groupEn: "Development Tools",
    items: ["Git", "GitHub", "Visual Studio Code", "Version Control", "Source Code Management"],
  },
  {
    key: "deployment",
    groupAr: "الاستضافة والنشر (Web Deployment & Admin)",
    groupEn: "Web Deployment & Admin",
    items: ["Hostinger", "cPanel", "Domain Management", "Website Deployment", "Basic SEO", "SSL Configuration"],
  },
  {
    key: "networks-it",
    groupAr: "الشبكات وكاميرات المراقبة (IT & Networks)",
    groupEn: "IT, Networks & CCTV",
    items: ["Network Configuration", "IP Camera Installation", "Camera Programming", "CCTV Systems", "Network Security", "Subnetting"],
  },
  {
    key: "business-erp",
    groupAr: "الأنظمة المحاسبية وERP (Business & ERP)",
    groupEn: "Business & ERP Systems",
    items: ["OnyxPro ERP System", "Financial Accounting A & B", "Document Workflows", "Inventory & Sales Reports", "Accounting Principles"],
  },
];

export async function Skills({ content, contentEn, layoutVariant }: SkillsProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;
  const { controls } = await getSiteSettings();
  const columnsClass = controls.skillsColumns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section id="skills" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          {...content.skillsHeader}
          kickerEn={english.skillsHeader.kicker}
          titleEn={english.skillsHeader.title}
          subtitleEn={english.skillsHeader.subtitle}
        />
        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 ${columnsClass}`}>
          {hamadSkills.map((skill) => (
            <div key={skill.key} className="repo-card rounded-3xl p-5 sm:p-6">
              <h3 className="text-base font-black text-white sm:text-lg">
                <LocalizedText ar={skill.groupAr} en={skill.groupEn} />
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-200 sm:py-2 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
