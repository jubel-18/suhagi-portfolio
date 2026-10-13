import React from "react";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  FileCheck,
  ArrowRight
} from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";
import heroProfileImg from "../assets/images/regenerated_image_1791881366898.png";

interface HeroSectionProps {
  portfolioData: PortfolioDataConfig;
  lang: "en" | "bn";
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  portfolioData,
  lang
}) => {
  const { personalInfo } = portfolioData;
  const t: TranslationStrings = translations[lang];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Decorative Dot Matrix on Left and Right (Exact match to reference picture) */}
      <div className="absolute top-28 left-0 hidden lg:grid grid-cols-4 gap-2 opacity-40 text-[#38bdf8] select-none pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
        ))}
      </div>

      <div className="absolute top-24 right-4 hidden lg:grid grid-cols-6 gap-2 opacity-40 text-[#38bdf8] select-none pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column (Matching layout of reference picture) */}
        <div className="lg:col-span-7">
          {/* Headline with Accent Dot */}
          <div className="relative mb-3 flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] inline-block -mr-1"></span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              I am{" "}
              <span className="text-[#0284c7] dark:text-[#38bdf8]">
                {personalInfo.name}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mb-5">
            {personalInfo.headline}
          </p>

          {/* Bio text from CV */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl font-normal">
            An experienced and well-qualified healthcare assistant with a thorough working knowledge of UK residential core legislation, good practices, and national care standards. Skilled in mental health support, dementia care, and clinical midwifery with hands-on hospital experience.
          </p>

          {/* Action Buttons (Download CV deleted as requested; matching the 2 buttons in picture) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-sm hover:shadow transition cursor-pointer"
            >
              Contact Me
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9]/g, "")}`}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-[#0284c7] hover:text-[#0284c7] transition"
            >
              Call: {personalInfo.phone}
            </a>
          </div>

          {/* Verified CV Credentials Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-[#0284c7] dark:text-sky-300 border border-sky-100 dark:border-sky-900">
              <FileCheck className="w-3.5 h-3.5" />
              {personalInfo.visaStatus}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900">
              <ShieldCheck className="w-3.5 h-3.5" />
              {personalInfo.criminalRecord}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              {personalInfo.city}
            </span>
          </div>
        </div>

        {/* Right Column: Circular Backdrop Photo (Exact match to reference picture!) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative">
            {/* Soft Sky Blue Circular Frame (Matching picture background circle) */}
            <div className="w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full bg-[#7dd3fc]/90 dark:bg-[#0284c7]/40 flex items-end justify-center overflow-hidden shadow-lg border-4 border-white dark:border-slate-800">
              <img
                src={heroProfileImg || personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
              />
            </div>

            {/* Subtle glow behind */}
            <div className="absolute inset-0 rounded-full bg-[#38bdf8]/20 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
