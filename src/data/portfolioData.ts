import profileImg from "../assets/images/regenerated_image_1791881366898.png";

export interface WorkHistoryItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  facilityDetails?: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights?: string;
}

export interface TrainingCertification {
  id: string;
  title: string;
  provider: string;
  category: string;
  icon: string;
}

export interface PortfolioDataConfig {
  personalInfo: {
    name: string;
    headline: string;
    subTitles: string[];
    phone: string;
    email: string;
    address: string;
    city: string;
    postcode: string;
    dob: string;
    visaStatus: string;
    criminalRecord: string;
    languages: string;
    professionalSummary: string;
    profileImage: string;
  };
  keyHighlights: {
    label: string;
    value: string;
    subtext: string;
    icon: string;
  }[];
  skillsList: {
    category: string;
    skills: string[];
  }[];
  additionalTraining: TrainingCertification[];
  workHistory: WorkHistoryItem[];
  education: EducationItem[];
  reference: {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
  };
}

export const suhagiCvData: PortfolioDataConfig = {
  personalInfo: {
    name: "SUHAGI AKTER",
    headline: "Healthcare Assistant & Qualified Midwife",
    subTitles: [
      "Health Care Assistant (UK)",
      "Qualified Midwife (Diploma in Midwifery)",
      "Mental Health & Dementia Support Worker",
      "Special Needs & Residential Care Assistant"
    ],
    phone: "074-4015-1443",
    email: "suhagiakter262@gmail.com",
    address: "19 Challiner Mews, S60 5UW, Rotherham",
    city: "Rotherham, UK",
    postcode: "S60 5UW",
    dob: "15-12-1998",
    visaStatus: "Skilled Worker - Tier 2 (Health Care Assistant)",
    criminalRecord: "None (Clean, Updated DBS)",
    languages: "Bilingual (Fluent in English & Bengali)",
    professionalSummary:
      "An experienced and well-qualified healthcare assistant with a thorough working knowledge of residential core legislation, including good practices and health and safety standards. Experienced in the care of young people, adults, and the elderly, as well as those with special needs and/or mental health challenges. Able to carry out all aspects of the role, from personal care, administering medication, meal preparation and record keeping, also willing to work according to a rota, including night shifts. As a team player, very willing to attend training and team meetings. Have an in-depth knowledge of national care standards and how these apply to different categories of people in care.",
    profileImage: profileImg
  },
  keyHighlights: [
    {
      label: "Current Role in UK",
      value: "Healthcare Assistant",
      subtext: "Hands On Rother LTD (Since March 2023)",
      icon: "fa-solid fa-user-nurse"
    },
    {
      label: "Clinical Qualification",
      value: "Diploma in Midwifery",
      subtext: "BRAC University, Bangladesh",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      label: "UK Visa Status",
      value: "Skilled Worker - Tier 2",
      subtext: "Full Right to Work in Healthcare",
      icon: "fa-solid fa-passport"
    },
    {
      label: "DBS Status",
      value: "Clean Record",
      subtext: "Updated Enhanced DBS Verified",
      icon: "fa-solid fa-shield-halved"
    }
  ],
  skillsList: [
    {
      category: "Patient Care & Clinical Support",
      skills: [
        "Client Assessment",
        "Monitoring & Observation (Vital Signs)",
        "Assisting the Client's Care",
        "Personal Care Assistance (Dignified Bathing & Hygiene)",
        "Patient Mobility Assistance (Hoist & Wheelchair)",
        "Equipment Sterilization",
        "Nutrition Management & Assisted Feeding",
        "Infection Control Procedures",
        "Basic Life Support & First Aid"
      ]
    },
    {
      category: "Specialized & Mental Health Care",
      skills: [
        "Disability & Mental Health Challenges Care",
        "Dementia Awareness & Crisis Reassurance",
        "One-to-One Observation (Self-Harm Risk Support)",
        "CPI Safety Intervention & De-escalation",
        "Elderly Care & Bed-Bound Patient Support",
        "Care Planning & Updating Care Plans",
        "Administering Medication & MAR Documentation",
        "Safeguarding Knowledge (UK Care Standards)"
      ]
    },
    {
      category: "Professional & Communication",
      skills: [
        "Bilingual Verbal Communication (English & Bengali)",
        "Extremely Organized & Detail-Oriented",
        "Time Management & Rota Flexibility (Night Shifts)",
        "Calm Under Pressure & Emergency Management",
        "Patient Relationship Building & Counseling",
        "Confidentiality & Compliance Standards",
        "Team Work & Multi-disciplinary Coordination",
        "Home Care & Social Activities Facilitation"
      ]
    }
  ],
  additionalTraining: [
    {
      id: "tr-1",
      title: "CSTF (Clinical Skills Training Framework - All in One Day)",
      provider: "UK Healthcare Standards",
      category: "Mandatory Core Training",
      icon: "fa-solid fa-certificate"
    },
    {
      id: "tr-2",
      title: "CPI Safety Intervention",
      provider: "Crisis Prevention Institute",
      category: "Crisis & De-escalation",
      icon: "fa-solid fa-shield-heart"
    },
    {
      id: "tr-3",
      title: "Oliver McGowan Mandatory Training for Learning Disabilities and Autism",
      provider: "NHS England / UK Standard",
      category: "Learning Disabilities",
      icon: "fa-solid fa-brain"
    },
    {
      id: "tr-4",
      title: "Dysphagia Online Course",
      provider: "Care Skill Academy",
      category: "Swallowing & Safe Feeding",
      icon: "fa-solid fa-utensils"
    },
    {
      id: "tr-5",
      title: "Self-Harm Online Course",
      provider: "Care Skill Academy",
      category: "Mental Health Support",
      icon: "fa-solid fa-hand-holding-heart"
    },
    {
      id: "tr-6",
      title: "Medication Practice",
      provider: "Care Skill Academy",
      category: "Medication Administration",
      icon: "fa-solid fa-pills"
    }
  ],
  workHistory: [
    {
      id: "wh-1",
      role: "Health Care Assistant",
      company: "Hands On Rother LTD",
      location: "Rotherham, UK",
      period: "March 2023 – Current",
      current: true,
      facilityDetails: "Cygnet Acer Clinic & Cherry Tree Care LTD (Chesterfield, UK)",
      responsibilities: [
        "Ensuring safe, secure living conditions for service users, reducing risk and enhancing quality of life.",
        "Supporting individuals experiencing mental health challenges with empathetic listening and problem-solving.",
        "Delivering person-centered care and conducting comprehensive risk assessments.",
        "Providing dedicated 1-to-1 observation for service users at high risk of self-harm.",
        "Emergency management, behavioral de-escalation, and maintaining a calm demeanor in crisis situations.",
        "Strict adherence to infection control standards to ensure safety for both staff and patients.",
        "Promoting independence while assisting patients with daily personal care routines (showering/bathing with dignity).",
        "Preparing balanced meals, planning mealtimes, feeding assistance, and nutritional support.",
        "Safe patient transport using hoists, mobility aids, and wheelchairs.",
        "Handling challenging behavior from dementia-affected individuals with patience, without force or intimidation.",
        "Escorting patients to medical appointments, hospital procedures, and community social activities.",
        "Assisting with medication taking, documenting on MAR charts, and monitoring vital signs for early detection of complications."
      ],
      skills: ["Mental Health Support", "Dementia Care", "Medication Practice", "1-to-1 Observation", "Infection Control", "Hoist & Wheelchair Transport"]
    },
    {
      id: "wh-2",
      role: "Midwife",
      company: "Zakiganj Hospital and Diagnosis Center",
      location: "Bangladesh",
      period: "August 2022 – December 2022",
      current: false,
      responsibilities: [
        "Conducted antenatal health checks, vitals assessment, and maternal monitoring.",
        "Provided adolescent menstrual hygiene education and reproductive health counseling.",
        "Assisted mothers in labor preparation, emotional reassurance, and pain coping techniques.",
        "Maintained hospital equipment sterilization and strict aseptic clinical hygiene.",
        "Advised parents on immediate newborn care, breastfeeding initiation, and postpartum hygiene."
      ],
      skills: ["Antenatal Screening", "Maternal Care", "Equipment Sterilization", "Patient Counseling"]
    },
    {
      id: "wh-3",
      role: "Midwife",
      company: "Bodor Uddin General Hospital",
      location: "Bangladesh",
      period: "April 2021 – September 2021",
      current: false,
      responsibilities: [
        "Provided pre-pregnancy, antenatal, intrapartum, and postpartum clinical midwifery care.",
        "Examined pregnant women, took biological samples, performed screening tests, and tracked vital signs.",
        "Identified danger signs of pregnancy and distinguished low-risk vs high-risk cases for obstetric triage.",
        "Monitored fetal heart conditions regularly during pregnancy and intrapartum labor stages.",
        "Conducted normal vaginal deliveries and managed emergency obstetric complications.",
        "Closely observed newborns, evaluated APGAR criteria, and administered immediate neonatal care.",
        "Supported parents through difficult outcomes including compassionate counseling for miscarriage and neonatal loss.",
        "Delivered family planning guidance and maintained rigorous clinical record-keeping."
      ],
      skills: ["Normal Vaginal Delivery", "Fetal Monitoring", "Obstetric Triage", "Postpartum Care", "Family Planning", "Bereavement Support"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Diploma of Midwifery",
      institution: "BRAC University",
      period: "January 2018 – December 2020",
      location: "Bangladesh",
      highlights: "Comprehensive clinical midwifery training covering anatomy, physiology, safe delivery, and community healthcare."
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sunamganj Government College",
      period: "July 2015 – March 2017",
      location: "Bangladesh",
      highlights: "Higher secondary education completed in Science/Humanities stream."
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate (SSC)",
      institution: "Rozoni Ganj High School",
      period: "January 2013 – February 2015",
      location: "Bangladesh",
      highlights: "Secondary school education."
    }
  ],
  reference: {
    name: "Sibbs Dube",
    title: "Care Service Manager",
    company: "Hands On Rother LTD",
    phone: "077-8978-6166",
    email: "contact@handsonrother.co.uk"
  }
};
