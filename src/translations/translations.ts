export interface TranslationStrings {
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
    printCv: string;
  };
  hero: {
    badge: string;
    greeting: string;
    title: string;
    downloadCv: string;
    contactBtn: string;
    callBtn: string;
    location: string;
  };
  about: {
    heading: string;
    subheading: string;
    detailsTitle: string;
    dob: string;
    visa: string;
    dbs: string;
    languages: string;
  };
  experience: {
    heading: string;
    subheading: string;
    currentRoleBadge: string;
  };
  education: {
    heading: string;
    subheading: string;
    trainingTitle: string;
  };
  skills: {
    heading: string;
    subheading: string;
  };
  contact: {
    heading: string;
    subheading: string;
    refTitle: string;
    formTitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    msgLabel: string;
    submitBtn: string;
    submitting: string;
    successMsg: string;
  };
}

export const translations: Record<"en" | "bn", TranslationStrings> = {
  en: {
    nav: {
      about: "About",
      experience: "Work History",
      education: "Education & Training",
      skills: "Skills",
      contact: "Contact & Reference",
      printCv: "Print / Save CV"
    },
    hero: {
      badge: "UK Healthcare Assistant & Qualified Midwife",
      greeting: "Hello, I am",
      title: "Healthcare Assistant & Midwife",
      downloadCv: "Download CV",
      contactBtn: "Get in Touch",
      callBtn: "Call: 074-4015-1443",
      location: "19 Challiner Mews, S60 5UW, Rotherham, UK"
    },
    about: {
      heading: "Professional Summary",
      subheading: "Experienced and well-qualified healthcare assistant with in-depth knowledge of UK residential core legislation and national care standards.",
      detailsTitle: "Key Personal Details",
      dob: "Date of Birth",
      visa: "Current Visa Status",
      dbs: "Criminal Record (DBS)",
      languages: "Languages Spoken"
    },
    experience: {
      heading: "Work History & Clinical Experience",
      subheading: "Hands-on care delivery in UK specialized clinics, residential care homes, and maternity hospitals.",
      currentRoleBadge: "Current Employment"
    },
    education: {
      heading: "Education & Additional Training",
      subheading: "Academic credentials from BRAC University alongside UK mandatory healthcare certifications.",
      trainingTitle: "UK Care & Clinical Certifications"
    },
    skills: {
      heading: "Skills & Core Competencies",
      subheading: "Comprehensive patient care, emergency de-escalation, mental health, and clinical midwifery skills.",
    },
    contact: {
      heading: "Contact & Professional Reference",
      subheading: "Feel free to reach out for healthcare assistant shifts, full-time opportunities, or care inquiries in the UK.",
      refTitle: "Verified Work Reference",
      formTitle: "Send a Direct Message",
      nameLabel: "Your Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      msgLabel: "Your Message / Opportunity Details",
      submitBtn: "Send Message",
      submitting: "Sending...",
      successMsg: "Thank you! Your message has been sent to Suhagi Akter."
    }
  },
  bn: {
    nav: {
      about: "পরিচিতি",
      experience: "কাজের ইতিহাস",
      education: "শিক্ষা ও প্রশিক্ষণ",
      skills: "দক্ষতাসমূহ",
      contact: "যোগাযোগ ও রেফারেন্স",
      printCv: "সিভি প্রিন্ট / ডাউনলোড"
    },
    hero: {
      badge: "ইউকে হেলথকেয়ার অ্যাসিস্ট্যান্ট ও মিডওয়াইফ",
      greeting: "স্বাগতম, আমি",
      title: "হেলথকেয়ার অ্যাসিস্ট্যান্ট ও মিডওয়াইফ",
      downloadCv: "সিভি ডাউনলোড",
      contactBtn: "যোগাযোগ করুন",
      callBtn: "কল: 074-4015-1443",
      location: "১৯ চ্যালেঞ্জার মিউজ, এস৬০ ৫ইউডব্লিউ, রদারহ্যাম, যুক্তরাজ্য"
    },
    about: {
      heading: "প্রফেশনাল সামারি",
      subheading: "যুক্তরাজ্যের ন্যাশনাল কেয়ার স্ট্যান্ডার্ড এবং আবাসিক স্বাস্থ্যসেবা নীতিমালায় অভিজ্ঞ ও দক্ষ কেয়ার কর্মী।",
      detailsTitle: "ব্যক্তিগত তথ্যাবলী",
      dob: "জন্ম তারিখ",
      visa: "ভিসা স্ট্যাটাস",
      dbs: "ডিবিএস (DBS) রেকর্ড",
      languages: "ভাষাগত দক্ষতা"
    },
    experience: {
      heading: "কাজের ইতিহাস ও অভিজ্ঞতা",
      subheading: "যুক্তরাজ্যের বিশেষায়িত ক্লিনিক, কেয়ার হোম এবং হাসপাতালের বাস্তব কাজের অভিজ্ঞতা।",
      currentRoleBadge: "বর্তমান কর্মস্থল"
    },
    education: {
      heading: "শিক্ষাগত যোগ্যতা ও প্রশিক্ষণ",
      subheading: "ব্র্যাক ইউনিভার্সিটির মিডওয়াইফারি ডিপ্লোমা এবং যুক্তরাজ্যের হেলথকেয়ার ট্রেনিং সার্টিফিকেট।",
      trainingTitle: "যুক্তরাজ্যের ট্রেনিং সার্টিফিকেটসমূহ"
    },
    skills: {
      heading: "ক্লিনিক্যাল ও পেশাগত দক্ষতাসমূহ",
      subheading: "রোগীর যত্ন, ডিমেনশিয়া ও মানসিক স্বাস্থ্য সেবা, ওষুধ প্রয়োগ এবং জরুরি পরিস্থিতির দক্ষতা।",
    },
    contact: {
      heading: "যোগাযোগ ও প্রফেশনাল রেফারেন্স",
      subheading: "যুক্তরাজ্যে হেলথকেয়ার অ্যাসিস্ট্যান্ট বা মিডওয়াইফারি কাজের প্রয়োজনে সরাসরি যোগাযোগ করুন।",
      refTitle: "ভেরিফায়েড কর্মক্ষেত্রের রেফারেন্স",
      formTitle: "সরাসরি মেসেজ পাঠান",
      nameLabel: "আপনার নাম",
      phoneLabel: "ফোন নম্বর",
      emailLabel: "ইমেইল",
      msgLabel: "মেসেজ লিখুন",
      submitBtn: "মেসেজ পাঠান",
      submitting: "পাঠানো হচ্ছে...",
      successMsg: "ধন্যবাদ! আপনার মেসেজটি সুহাগী আক্তারের নিকট পৌঁছেছে।"
    }
  }
};
