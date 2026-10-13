import React from "react";
import { CheckCircle2 } from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";

interface SkillsSectionProps {
  portfolioData: PortfolioDataConfig;
  lang: "en" | "bn";
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  portfolioData,
  lang
}) => {
  const { skillsList } = portfolioData;
  const t: TranslationStrings = translations[lang];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {t.skills.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {t.skills.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsList.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-[#38bdf8] transition"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-slate-800 text-[#0284c7] flex items-center justify-center text-xs font-bold">
                0{idx + 1}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {group.category}
              </h3>
            </div>

            <ul className="space-y-2.5">
              {group.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
