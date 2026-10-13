import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X
} from "lucide-react";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";

interface NavbarProps {
  portfolioData: PortfolioDataConfig;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: "en" | "bn";
  setLang: (lang: "en" | "bn") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  portfolioData,
  darkMode,
  setDarkMode,
  lang,
  setLang
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t: TranslationStrings = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100 dark:border-slate-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - clean minimalist like the reference picture */}
          <a href="#hero" className="flex items-center gap-2 group focus:outline-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]"></span>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-[#0284c7] transition-colors">
              {portfolioData.personalInfo.name}
            </span>
          </a>

          {/* Center Navigation Links (Matching picture: About Education Experience Contact) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Get In Touch button (matching picture) + Theme & Lang */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Dark/Light mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-md text-slate-500 hover:text-[#0284c7] hover:bg-sky-50 dark:hover:bg-slate-800 transition cursor-pointer"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Get In Touch Button (Reference picture right button) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-sm hover:shadow transition cursor-pointer"
            >
              Get In Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#0284c7]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-semibold text-xs text-white bg-[#0284c7] mt-2 shadow-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
