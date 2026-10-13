/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { suhagiCvData, PortfolioDataConfig } from "./data/portfolioData";

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioDataConfig>(suhagiCvData);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("suhagi_theme");
      if (saved) return saved === "dark";
      return false; // Default light like the reference picture
    }
    return false;
  });

  const [lang, setLang] = useState<"en" | "bn">("en");

  // Sync dark class on html root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("suhagi_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("suhagi_theme", "light");
    }
  }, [darkMode]);

  return (
    /* Soft light blue surround matching the reference mockup canvas */
    <div className="min-h-screen bg-[#e0f2fe]/70 dark:bg-slate-950 sm:py-8 sm:px-6 transition-colors duration-300">
      {/* Centered Rounded White Canvas Container (Exact match to reference picture!) */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-none sm:rounded-[36px] shadow-xl sm:shadow-2xl border border-sky-200/60 dark:border-slate-800 overflow-hidden relative">
        {/* Clean Navbar */}
        <Navbar
          portfolioData={portfolioData}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          lang={lang}
          setLang={setLang}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section with Blue Dot & Sky Blue Circular Portrait */}
          <HeroSection
            portfolioData={portfolioData}
            lang={lang}
          />

          {/* About Me Section matching 2-column layout & Light Blue Cards */}
          <AboutSection
            portfolioData={portfolioData}
            lang={lang}
          />

          {/* Work History (Hands On Rother LTD, Cygnet Acer, Cherry Tree Care) */}
          <ExperienceSection
            portfolioData={portfolioData}
            lang={lang}
          />

          {/* Formal Education & UK Healthcare Certifications */}
          <EducationSection
            portfolioData={portfolioData}
            lang={lang}
          />

          {/* Skills from CV */}
          <SkillsSection
            portfolioData={portfolioData}
            lang={lang}
          />

          {/* Contact & Referee (Sibbs Dube, Hands On Rother LTD) */}
          <ContactSection
            portfolioData={portfolioData}
            lang={lang}
          />
        </main>

        {/* Clean Footer */}
        <Footer portfolioData={portfolioData} />
      </div>
    </div>
  );
}
