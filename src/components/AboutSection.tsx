import React from "react";
import { 
  Heart, 
  Users, 
  ShieldCheck, 
  Baby, 
  CheckCircle2,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";

interface AboutSectionProps {
  portfolioData: PortfolioDataConfig;
  lang: "en" | "bn";
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  portfolioData,
  lang
}) => {
  const { personalInfo } = portfolioData;
  const t: TranslationStrings = translations[lang];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
      {/* Centered Heading (Exact layout of reference picture) */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {t.about.subheading}
        </p>
      </div>

      {/* 2-Column Layout (Matching picture: Left text, Right stack of light blue cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: My Healthcare Journey */}
        <div className="lg:col-span-7 space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            My Healthcare Journey
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.professionalSummary}
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Currently working as a Care Assistant at <strong>Natgab Services Limited</strong> in Enfield (since November 2025), I support clients with activities of daily living, nutritional well-being, community procedures, and post-discharge recovery. Previously at <strong>Hands On Rother Ltd</strong> (March 2023 – October 2025), I gained extensive experience across Cygnet Acer Clinic and Cherry Tree Care LTD in Chesterfield, delivering 1-to-1 high-risk observations, dementia care, medication assistance, and vital signs monitoring.
          </p>

          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
              <span>Full UK Right to Work (Tier 2)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
              <span>Clean Updated DBS Check</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
              <span>Rota Flexibility & Night Shift Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
              <span>Bilingual: English & Bengali</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stack of Light Blue Cards (Exact style and placement from reference picture!) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: Compassionate Care (Matches blue card in picture) */}
          <div className="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-slate-900/60 border border-[#bae6fd] dark:border-slate-800 hover:border-[#38bdf8] transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-[#bae6fd] dark:border-slate-700 text-[#0284c7] flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 fill-[#0284c7]/20" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Compassionate Care & Dignity
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Assisting in all aspects of personal care, bathing, and meal preparation while retaining individual comfort, autonomy, and respect.
              </p>
            </div>
          </div>

          {/* Card 2: Mental Health & Support (Matches second blue card in picture) */}
          <div className="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-slate-900/60 border border-[#bae6fd] dark:border-slate-800 hover:border-[#38bdf8] transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-[#bae6fd] dark:border-slate-700 text-[#0284c7] flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Mental Health & 1-on-1 Observation
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated surveillance for clients at risk of self-harm, dementia support without intimidation, and empathetic active listening.
              </p>
            </div>
          </div>

          {/* Card 3: UK Care Standards */}
          <div className="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-slate-900/60 border border-[#bae6fd] dark:border-slate-800 hover:border-[#38bdf8] transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-[#bae6fd] dark:border-slate-700 text-[#0284c7] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                National Care Standards Compliance
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Thorough knowledge of UK residential core legislation, health and safety protocols, MAR medication practice, and infection control.
              </p>
            </div>
          </div>

          {/* Card 4: Clinical Midwifery */}
          <div className="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-slate-900/60 border border-[#bae6fd] dark:border-slate-800 hover:border-[#38bdf8] transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-[#bae6fd] dark:border-slate-700 text-[#0284c7] flex items-center justify-center flex-shrink-0">
              <Baby className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Clinical Midwifery Qualification
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                BRAC University Diploma in Midwifery with hospital delivery, antenatal screening, fetal monitoring, and neonatal care expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
