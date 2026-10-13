import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  UserCheck, 
  Building2
} from "lucide-react";
import confetti from "canvas-confetti";
import { PortfolioDataConfig } from "../data/portfolioData";
import { translations, TranslationStrings } from "../translations/translations";

interface ContactSectionProps {
  portfolioData: PortfolioDataConfig;
  lang: "en" | "bn";
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  portfolioData,
  lang
}) => {
  const { personalInfo, references } = portfolioData;
  const t: TranslationStrings = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // no-op
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {t.contact.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {t.contact.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contacts & Official Referee Card */}
        <div className="lg:col-span-5 space-y-5">
          {/* Direct Details Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3.5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Direct Contact Details
            </h3>

            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-[#0284c7] transition"
            >
              <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-slate-800 text-[#0284c7] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Phone</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-[#0284c7] transition"
            >
              <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-slate-800 text-[#0284c7] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Email</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-slate-800 text-[#0284c7] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">UK Address</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Official Referees Card (Matches the Light Blue Card Style in reference picture!) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284c7] flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[#0284c7]" />
              <span>{t.contact.refTitle}</span>
            </h4>

            {references.map((ref) => (
              <div
                key={ref.id}
                className="p-5 rounded-2xl bg-[#f0f9ff] dark:bg-slate-900/60 border border-[#bae6fd] dark:border-slate-800 space-y-1 text-xs text-slate-700 dark:text-slate-300"
              >
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {ref.name}
                </p>
                <p className="font-medium text-slate-500 dark:text-slate-400">
                  {ref.title}{ref.company ? `, ${ref.company}` : ""}
                </p>
                {ref.address && (
                  <p className="text-[11px] text-slate-400">
                    📍 {ref.address}
                  </p>
                )}
                <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
                  <a
                    href={`tel:${ref.phone.replace(/[^0-9]/g, "")}`}
                    className="text-[#0284c7] hover:underline flex items-center gap-1"
                  >
                    📞 {ref.phone}
                  </a>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-[#0284c7] hover:underline flex items-center gap-1"
                  >
                    ✉️ {ref.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Simple Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center mx-auto text-xl">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Message Sent Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                {t.contact.successMsg}
              </p>
              <button
                onClick={() => {
                  setFormData({ name: "", phone: "", email: "", message: "" });
                  setIsSubmitted(false);
                }}
                className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] transition cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.formTitle}
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Care Coordinator / Hospital Manager"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07700 900000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. manager@carehome.co.uk"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.msgLabel} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding shift openings, healthcare assistant positions, or care inquiries..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none transition"
                ></textarea>
              </div>

              {/* Matching solid blue button from reference picture */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>{t.contact.submitting}</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
