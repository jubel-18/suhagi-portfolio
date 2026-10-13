import React from "react";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";

interface FooterProps {
  portfolioData: PortfolioDataConfig;
}

export const Footer: React.FC<FooterProps> = ({ portfolioData }) => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]"></span>
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              {personalInfo.name}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {personalInfo.headline}
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <a href="#about" className="hover:text-[#0284c7] transition">About</a>
            <a href="#experience" className="hover:text-[#0284c7] transition">Experience</a>
            <a href="#education" className="hover:text-[#0284c7] transition">Education</a>
            <a href="#contact" className="hover:text-[#0284c7] transition">Contact</a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-[#0284c7] font-semibold cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
