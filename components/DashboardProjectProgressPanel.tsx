"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, Save, TrendingUp } from "lucide-react";
import type { SiteContent } from "@/lib/site-content";

type SettingsPayload = {
  content: SiteContent;
  contentEn: SiteContent;
  [key: string]: unknown;
};

const PROGRESS_RE = /\s*\[(\d{1,3})%\]\s*$/;

function stripProgress(status: string) {
  return status.replace(PROGRESS_RE, "").trim();
}

function readProgress(status: string) {
  const match = status.match(PROGRESS_RE);
  return match ? Math.min(100, Math.max(0, Number(match[1]))) : null;
}

function withProgress(status: string, progress: number) {
  return `${stripProgress(status)} [${Math.min(100, Math.max(0, Math.round(progress)))}%]`;
}

function isInProgress(statusAr: string, statusEn: string) {
  const normalized = `${stripProgress(statusAr)} ${stripProgress(statusEn)}`.toLowerCase();
  return normalized.includes("قيد التنفيذ") || normalized.includes("in progress");
}

function defaultProgress(nameAr: string, nameEn: string) {
  const name = `${nameAr} ${nameEn}`.toLowerCase();
  if (name.includes("محاسبي") || name.includes("accounting")) return 15;
  if (name.includes("رعاية الأطفال") || name.includes("child care")) return 79;
  return 0;
}

export function DashboardProjectProgressPanel({ adminToken, autoLoad = false }: { adminToken: string; autoLoad?: boolean }) {
  const [settings, setSettings] = useState<SettingsPayload | null>(null);
  const [progress, setProgress] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadSettings() {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/settings", {
        headers: { "x-admin-token": adminToken },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("تعذر تحميل إعدادات المشاريع.");
      const data = await response.json();
      const nextSettings = data.settings as SettingsPayload;
      setSettings(nextSettings);

      const nextProgress: Record<number, number> = {};
      nextSettings.content.projects.forEach((project, index) => {
        const projectEn = nextSettings.contentEn.projects[index];
        if (!isInProgress(project.status, projectEn?.status || "")) return;
        nextProgress[index] = readProgress(project.status)
          ?? readProgress(projectEn?.status || "")
          ?? defaultProgress(project.name, projectEn?.name || "");
      });
      setProgress(nextProgress);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "تعذر تحميل إعدادات المشاريع.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (autoLoad) loadSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoLoad, adminToken]);

  const rows = useMemo(() => {
    if (!settings) return [];
    return settings.content.projects
      .map((project, index) => ({
        index,
        project,
        projectEn: settings.contentEn.projects[index],
      }))
      .filter(({ project, projectEn }) => isInProgress(project.status, projectEn?.status || ""));
  }, [settings]);

  async function saveProgress() {
    if (!settings) return;
    setSaving(true);
    setMessage("");

    try {
      const contentProjects = settings.content.projects.map((project, index) => {
        if (!(index in progress)) return project;
        return { ...project, status: withProgress(project.status, progress[index]) };
      });
      const contentEnProjects = settings.contentEn.projects.map((project, index) => {
        if (!(index in progress)) return project;
        return { ...project, status: withProgress(project.status, progress[index]) };
      });

      const nextSettings: SettingsPayload = {
        ...settings,
        content: { ...settings.content, projects: contentProjects },
        contentEn: { ...settings.contentEn, projects: contentEnProjects },
      };

      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken,
        },
        body: JSON.stringify(nextSettings),
      });
      if (!response.ok) throw new Error("تعذر حفظ نسب الإنجاز.");
      const data = await response.json();
      setSettings(data.settings);
      setMessage("تم حفظ نسب إنجاز المشاريع بنجاح.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "تعذر حفظ نسب الإنجاز.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="card-border rounded-[2rem] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-kicker">Project Progress</p>
          <h2 className="mt-2 text-2xl font-black text-white">نسبة إنجاز المشاريع قيد التنفيذ</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            تظهر النسبة في الموقع فقط للمشاريع التي حالتها «قيد التنفيذ». أدخل رقمًا من 0 إلى 100 ثم احفظ.
          </p>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyanBrand/10 text-cyanBrand">
          <TrendingUp className="h-7 w-7" />
        </div>
      </div>

      {loading ? (
        <div className="mt-6 flex items-center gap-2 text-sm text-slate-300"><Loader2 className="h-4 w-4 animate-spin" /> تحميل المشاريع...</div>
      ) : null}

      {!loading && rows.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rows.map(({ index, project, projectEn }) => (
            <div key={`${project.name}-${index}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-black leading-7 text-white">{project.name}</p>
                  {projectEn?.name && projectEn.name !== project.name ? <p className="mt-1 text-xs text-slate-500" dir="ltr">{projectEn.name}</p> : null}
                  <p className="mt-2 text-xs font-bold text-cyan-200">{stripProgress(project.status)}</p>
                </div>
                <div className="shrink-0 text-2xl font-black text-cyanBrand">{progress[index] ?? 0}%</div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={progress[index] ?? 0}
                  onChange={(event) => setProgress((current) => ({ ...current, [index]: Number(event.target.value) }))}
                  className="min-w-0 flex-1"
                />
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={progress[index] ?? 0}
                  onChange={(event) => {
                    const value = Math.min(100, Math.max(0, Number(event.target.value) || 0));
                    setProgress((current) => ({ ...current, [index]: value }));
                  }}
                  className="w-24 rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-center font-bold text-white outline-none focus:border-cyanBrand/50"
                  dir="ltr"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {!loading && settings && !rows.length ? <p className="mt-6 text-sm text-slate-400">لا توجد مشاريع بحالة قيد التنفيذ حاليًا.</p> : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={saveProgress} disabled={!settings || saving} className="btn-primary gap-2 disabled:cursor-not-allowed disabled:opacity-50">
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          حفظ نسب الإنجاز
        </button>
        <button type="button" onClick={loadSettings} disabled={loading} className="btn-secondary">تحديث المشاريع</button>
      </div>

      {message ? <div className="mt-5 rounded-2xl border border-cyanBrand/20 bg-cyanBrand/10 p-4 text-sm text-cyan-50">{message}</div> : null}
    </section>
  );
}
