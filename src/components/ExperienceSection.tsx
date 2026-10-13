import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2
} from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";

interface ExperienceSectionProps {
  portfolioData: PortfolioDataConfig;
  lang: "en" | "bn";
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  portfolioData,
  lang
}) => {
  const { workHistory } = portfolioData;
  const t: TranslationStrings = translations[lang];

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {t.experience.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {t.experience.subheading}
        </p>
      </div>

      <div className="space-y-6">
        {workHistory.map((job) => (
          <div
            key={job.id}
            className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              job.current
                ? "bg-[#f0f9ff]/80 dark:bg-slate-900/60 border-[#bae6fd] dark:border-slate-800 shadow-sm"
                : "bg-white dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800"
            }`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950 text-[#0284c7] border border-sky-200 dark:border-sky-800">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-[#0284c7] dark:text-[#38bdf8] flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>{job.company}</span>
                </p>
                {job.facilityDetails && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    📍 Placement: {job.facilityDetails}
                  </p>
                )}
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-[#0284c7]" />
                  {job.period}
                </span>
                <span className="flex items-center gap-1 text-slate-400 mt-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  {job.location}
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Responsibilities & Clinical Duties:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-5">
                {job.responsibilities.map((resp, rIdx) => (
                  <li
                    key={rIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {job.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
