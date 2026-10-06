import { ExternalLink, Github, Linkedin } from "lucide-react";
import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type AboutProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const LINKEDIN_URL = "https://www.linkedin.com/in/hamad-ali-2485a9271/";
const GITHUB_URL = "https://github.com/hamadalisaleh";

const ABOUT_STATS = [
  { value: "B.Sc. IT", labelAr: "خريج تقنية معلومات (UST)", labelEn: "IT Graduate (UST)" },
  { value: "Full-Stack", labelAr: "تطوير الويب (PHP & MySQL)", labelEn: "Web Development" },
  { value: "ERP & IT", labelAr: "أنظمة OnyxPro وشبكات", labelEn: "ERP & Networking" },
];

function StatValue({ value }: { value: string }) {
  const parts = value.split("|").map((part) => part.trim()).filter(Boolean);
  const isLong = value.length > 12;

  if (parts.length === 1) {
    return (
      <div
        dir="ltr"
        className={`max-w-full text-balance font-black leading-[1.08] tracking-[-0.035em] text-white ${
          isLong
            ? "text-[1.05rem] sm:text-[1.18rem] lg:text-[1.25rem]"
            : "text-[1.35rem] sm:text-[1.5rem] lg:text-[1.6rem]"
        }`}
      >
        {value}
      </div>
    );
  }

  return (
    <div dir="ltr" className="flex flex-col items-center justify-center">
      <div className="text-[1.4rem] font-black leading-none tracking-[-0.04em] text-white sm:text-[1.55rem]">
        {parts[0]}
      </div>
      <div className="mt-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1 text-xs font-bold text-slate-300">
        {parts.slice(1).join(" · ")}
      </div>
    </div>
  );
}

function AboutSocialLinks() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 lg:mt-8">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex min-h-[86px] items-center gap-3 rounded-2xl border border-[#0a66c2]/30 bg-[#0a66c2]/10 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#4da3f5]/60 hover:bg-[#0a66c2]/15 sm:p-4"
        aria-label="Hamad Ali Saleh LinkedIn profile"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0a66c2] text-white sm:h-11 sm:w-11">
          <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#79b8f3]">LinkedIn</span>
          <span className="mt-1 block truncate text-sm font-bold text-white">Hamad Ali Saleh</span>
          <span className="mt-0.5 block text-[0.68rem] leading-4 text-slate-400">
            <LocalizedText ar="الملف المهني" en="Professional profile" />
          </span>
        </span>
        <ExternalLink className="h-4 w-4 shrink-0 text-[#79b8f3] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex min-h-[86px] items-center gap-3 rounded-2xl border border-white/[0.12] bg-white/[0.045] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/35 hover:bg-white/[0.065] sm:p-4"
        aria-label="Hamad Ali Saleh GitHub profile"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-950 sm:h-11 sm:w-11">
          <Github className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-300">GitHub</span>
          <span className="mt-1 block truncate text-sm font-bold text-white">hamadalisaleh</span>
          <span className="mt-0.5 block text-[0.68rem] leading-4 text-slate-400">
            <LocalizedText ar="المشاريع والكود" en="Projects & code" />
          </span>
        </span>
        <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyanBrand" />
      </a>
    </div>
  );
}

export function About({ content, contentEn, layoutVariant }: AboutProps) {
  const about = content.about;
  const english = contentEn.about;
  const isCompact = layoutVariant === "compact";

  const statsGridClass = "grid-cols-1 sm:grid-cols-3";

  return (
    <section id="about" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <SectionHeader
            kicker={about.kicker}
            title={about.title}
            subtitle={about.subtitle}
            kickerEn={english.kicker}
            titleEn={english.title}
            subtitleEn={english.subtitle}
          />
          <AboutSocialLinks />
        </div>

        <div className="mx-auto w-full max-w-[760px]">
          <div className="repo-card rounded-[2rem] bg-white/[0.04] p-5 leading-8 text-slate-300 sm:p-6 lg:p-7">
            <div className="max-w-3xl">
              {about.paragraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className="mt-4 first:mt-0 sm:mt-5">
                  <LocalizedText ar={paragraph} en={english.paragraphs[index] || paragraph} />
                </p>
              ))}
            </div>

            <div className="mt-6 border-t border-white/[0.07] pt-5 sm:mt-7 sm:pt-6">
              <div className={`grid gap-3 sm:gap-4 ${statsGridClass}`}>
                {ABOUT_STATS.map((stat, index) => (
                  <div
                    key={`${stat.value}-${index}`}
                    className="group relative flex min-h-[98px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.028] px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/20 hover:bg-white/[0.045] sm:px-5"
                  >
                    <div aria-hidden="true" className="absolute inset-y-3 start-0 w-[2px] rounded-full bg-gradient-to-b from-cyanBrand to-violetBrand opacity-0 transition group-hover:opacity-100" />

                    <div className="relative flex min-h-[38px] w-full items-center justify-center px-2">
                      <StatValue value={stat.value} />
                    </div>

                    <div className="relative mt-2 max-w-[16rem] text-[0.76rem] font-semibold leading-5 text-slate-400">
                      <LocalizedText ar={stat.labelAr} en={stat.labelEn} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
