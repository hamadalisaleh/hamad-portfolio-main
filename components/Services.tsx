import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { getSiteSettings } from "@/lib/site-settings";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";
import { serviceIconMap } from "./icon-map";

type ServicesProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const hamadServices = [
  {
    key: "web-dev",
    icon: "code" as const,
    titleAr: "تطوير تطبيقات الويب الكاملة",
    titleEn: "Full-Stack Web Development",
    descriptionAr: "تصميم وتطوير تطبيقات ومواقع ويب ديناميكية وقابلة للتطوير باستخدام PHP وMySQL وHTML5 وCSS3 وJavaScript، مع بناء لوحات تحكم إدارية ومصادقة وصلاحيات متقدمة.",
    descriptionEn: "Designing and developing responsive, dynamic web applications with PHP, MySQL, HTML5, CSS3, and JavaScript, featuring admin dashboards, role-based access control, and secure authentication.",
  },
  {
    key: "hosting-domains",
    icon: "server" as const,
    titleAr: "إدارة الاستضافات والدومينات",
    titleEn: "Web Hosting & Domain Administration",
    descriptionAr: "نشر المواقع وضبط إعدادات cPanel على استضافات Hostinger، حجز وربط النطاقات DNS، شهادات الحماية SSL، وإدارة قواعد البيانات ورفع الملفات بأمان.",
    descriptionEn: "Deploying production websites and configuring cPanel on Hostinger servers, DNS domain management, SSL security certificate installation, and server file management.",
  },
  {
    key: "database-design",
    icon: "database" as const,
    titleAr: "تصميم وإدارة قواعد البيانات",
    titleEn: "Database Design & SQL Management",
    descriptionAr: "تصميم قواعد البيانات العلائقية Relational Database Design باستخدام MySQL وSQL، تحسين سرعة الاستعلامات، هيكلة الجداول والعلاقات، وحماية البيانات من الاختراقات.",
    descriptionEn: "Relational database modeling with MySQL and SQL, query performance optimization, structured schema design, secure transactions, and data integrity.",
  },
  {
    key: "seo-optimization",
    icon: "workflow" as const,
    titleAr: "تحسين محركات البحث والأداء (SEO)",
    titleEn: "Search Engine Optimization (SEO)",
    descriptionAr: "تطبيق أفضل ممارسات SEO التقنية والمحتوى لزيادة ظهور المواقع في نتائج Google، تحسين سرعة تحميل الصفحات، وضبط Meta Tags وSitemap وتجاوب الشاشات.",
    descriptionEn: "Applying technical on-page SEO best practices to boost Google search engine indexing, page speed optimization, meta tags, sitemaps, and mobile responsiveness.",
  },
  {
    key: "networks-cctv",
    icon: "smartphone" as const,
    titleAr: "الشبكات وكاميرات المراقبة IP & CCTV",
    titleEn: "Networking & IP/CCTV Security Systems",
    descriptionAr: "تركيب وبرمجة شبكات الحاسوب، ضبط وتوزيع عناوين IP، إعداد وتكوين أنظمة كاميرات المراقبة CCTV والشبكية IP الذكية، وتأمين الاتصال والمراقبة عن بعد.",
    descriptionEn: "Network programming and configuration, IP addressing and subnetting, installation and programming of CCTV and intelligent IP camera security systems.",
  },
  {
    key: "erp-accounting",
    icon: "bot" as const,
    titleAr: "أنظمة OnyxPro ERP والمحاسبة المالية",
    titleEn: "OnyxPro ERP Systems & Accounting",
    descriptionAr: "إدارة وتكوين النظام المحاسبي المتكامل OnyxPro ERP، إدارة الدورة المستندية والمالية للمؤسسات والشركات، وضبط قيود المحاسبة المالية (A & B) ومتابعة التقارير المالية.",
    descriptionEn: "Administration and configuration of the OnyxPro ERP accounting system, managing corporate document workflows, financial accounting entries (A & B), and business reports.",
  },
];

export async function Services({ content, contentEn, layoutVariant }: ServicesProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;
  const { controls } = await getSiteSettings();
  const columnsClass = controls.servicesColumns === 4
    ? "xl:grid-cols-4"
    : controls.servicesColumns === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-3";

  return (
    <section id="services" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          {...content.servicesHeader}
          kickerEn={english.servicesHeader.kicker}
          titleEn={english.servicesHeader.title}
          subtitleEn={english.servicesHeader.subtitle}
        />
        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 md:grid-cols-2 ${columnsClass}`}>
          {hamadServices.map((service, index) => {
            const Icon = serviceIconMap[service.icon] ?? serviceIconMap.server;
            return (
              <article key={service.key} className="repo-card group rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyanBrand/40 sm:p-6">
                <div className="grid h-11 w-11 place-items-center rounded-[1.05rem] border border-white/10 bg-cyanBrand/10 text-cyanBrand transition group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-[1.15rem]">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500 sm:mt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyanBrand" />
                  <span><LocalizedText ar={`مجال ${String(index + 1).padStart(2, "0")}`} en={`Service ${String(index + 1).padStart(2, "0")}`} /></span>
                </div>
                <h3 className="mt-2 text-lg font-black text-white sm:text-xl"><LocalizedText ar={service.titleAr} en={service.titleEn} /></h3>
                <p className="mt-2.5 leading-7 text-slate-300/95 sm:mt-3 sm:leading-8"><LocalizedText ar={service.descriptionAr} en={service.descriptionEn} /></p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
