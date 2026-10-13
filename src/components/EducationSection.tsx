import React from "react";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Building
} from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";

interface EducationSectionProps {
  portfolioData: PortfolioDataConfig;
  lang: "en" | "bn";
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  portfolioData,
  lang
}) => {
  const { education, additionalTraining } = portfolioData;
  const t: TranslationStrings = translations[lang];

  return (
    <section id="education" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {t.education.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {t.education.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
        {/* Academic Degrees */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-[#0284c7]" />
            <span>Formal Education</span>
          </h3>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-[#38bdf8] transition"
            >
              <div className="flex justify-between items-start gap-2 mb-1.5">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-sky-50 dark:bg-sky-950 text-[#0284c7] border border-sky-100 dark:border-sky-900 flex-shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#0284c7] dark:text-[#38bdf8] mb-1 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                <span>{edu.institution}</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-500" />
                <span>{edu.location}</span>
              </p>
            </div>
          ))}
        </div>

        {/* UK Healthcare Training Courses (Matches the light blue card style from picture) */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[#0284c7]" />
            <span>{t.education.trainingTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {additionalTraining.map((tr) => (
              <div
                key={tr.id}
                className="p-4 rounded-2xl bg-[#f0f9ff] dark:bg-slate-900/60 border border-[#bae6fd] dark:border-slate-800 shadow-sm flex items-start gap-3 hover:border-[#38bdf8] transition"
              >
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-[#bae6fd] text-[#0284c7] flex items-center justify-center flex-shrink-0 text-sm">
                  <i className={tr.icon}></i>
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {tr.title}
                  </h5>
                  <p className="text-[11px] text-[#0284c7] font-medium mt-0.5">
                    {tr.provider}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {tr.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
