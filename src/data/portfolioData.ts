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

export interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  company?: string;
  address?: string;
  phone: string;
  email: string;
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
  references: ReferenceItem[];
}

export const suhagiCvData: PortfolioDataConfig = {
  personalInfo: {
    name: "SUHAGI AKTER",
    headline: "Care Assistant & Qualified Midwife",
    subTitles: [
      "Care Assistant — Natgab Services Limited, Enfield",
      "Care Assistant — Hands On Rother Ltd (March 2023 - October 2025)",
      "Qualified Midwife — Diploma in Midwifery (BRAC University)",
      "Mental Health, Dementia & Residential Care Support"
    ],
    phone: "07427377516",
    email: "suhagiakter262@gmail.com",
    address: "17 Orchard court, Bridge Street, Walton-on-Thames, KT12 1AN",
    city: "Walton-on-Thames, Surrey, UK",
    postcode: "KT12 1AN",
    dob: "15-12-1998",
    visaStatus: "Skill worker - 2 tire Care Assistant",
    criminalRecord: "None (Adult enhance DBS)",
    languages: "Bilingual (Fluent in English & Bengali)",
    professionalSummary:
      "An experienced and well-qualified health care assistant with a thorough working knowledge of residential core legislation, including good practices and health and safety standards. Experienced in the care of young people, adults, and the elderly, as well as those with special needs and/or mental health challenges. Able to carry out all aspects of the role, from personal care, administering medication, meal preparation and record keeping, also willing to work according to a rota, including night shifts. As a team player, very willing to attend training and team meetings. Have an in-depth knowledge of national care standards and how these apply to different categories of people in care.",
    profileImage: profileImg
  },
  keyHighlights: [
    {
      label: "Current Employment",
      value: "Natgab Services Limited",
      subtext: "Care Assistant, Enfield (Since Nov 2025)",
      icon: "fa-solid fa-hospital-user"
    },
    {
      label: "Previous UK Role",
      value: "Hands On Rother Ltd",
      subtext: "Care Assistant (March 2023 – Oct 2025)",
      icon: "fa-solid fa-user-nurse"
    },
    {
      label: "UK Visa Status",
      value: "Skilled Worker - Tier 2",
      subtext: "Care Assistant (Full Right to Work)",
      icon: "fa-solid fa-passport"
    },
    {
      label: "Criminal Record",
      value: "Clean DBS",
      subtext: "None (Adult enhance DBS)",
      icon: "fa-solid fa-shield-halved"
    }
  ],
  skillsList: [
    {
      category: "Patient Care & Clinical Support",
      skills: [
        "Client assessment",
        "Monitoring and observation",
        "Assisting the client's care",
        "Personal care assistance (privacy & dignity)",
        "Patient mobility assistance (hoist & wheelchair)",
        "Equipment sterilization",
        "Nutrition management & physical well-being",
        "Infection control procedures",
        "Basic life support & First Aid"
      ]
    },
    {
      category: "Specialized & Mental Health Care",
      skills: [
        "Disability and mental health challenges care",
        "Dementia awareness (support without force/intimidation)",
        "One-to-one observation (high risk for self-harm)",
        "Emergency management and restraining",
        "Elderly care & bed-bound patient hygiene",
        "Care planning & updating care plans",
        "Assistance with medication taking & documenting (MAR)",
        "Safeguarding knowledge (UK care standards)"
      ]
    },
    {
      category: "Professional, Leadership & Communication",
      skills: [
        "Strong verbal communication (Bilingual: English & Bengali)",
        "Leadership (Guiding care delivery)",
        "Extremely organized & Time management",
        "Team work & Multi-disciplinary coordination",
        "Calm under pressure during crisis situations",
        "Patient relationship building & Counseling",
        "Care management & Documenting written evidence",
        "Home care, social care & post-hospital discharge support"
      ]
    }
  ],
  additionalTraining: [
    {
      id: "tr-0",
      title: "Mandatory Training",
      provider: "UK Healthcare Standards",
      category: "Core Induction",
      icon: "fa-solid fa-check-double"
    },
    {
      id: "tr-1",
      title: "CSTF (all in one day)",
      provider: "Clinical Skills Training Framework",
      category: "Mandatory Core Training",
      icon: "fa-solid fa-certificate"
    },
    {
      id: "tr-2",
      title: "CPI Safety intervention",
      provider: "Crisis Prevention Institute",
      category: "Crisis & De-escalation",
      icon: "fa-solid fa-shield-heart"
    },
    {
      id: "tr-3",
      title: "Oliver McGowan Mandatory Training for Learning Disabilities and Autism",
      provider: "NHS England Standards",
      category: "Learning Disabilities & Autism",
      icon: "fa-solid fa-brain"
    },
    {
      id: "tr-4",
      title: "Dysphagia Online course",
      provider: "Care Skill Academy",
      category: "Safe Swallowing & Feeding",
      icon: "fa-solid fa-utensils"
    },
    {
      id: "tr-5",
      title: "Self-harm Online Course",
      provider: "Care Skill Academy",
      category: "Mental Health Support",
      icon: "fa-solid fa-hand-holding-heart"
    }
  ],
  workHistory: [
    {
      id: "wh-1",
      role: "Care Assistant",
      company: "Natgab Services Limited",
      location: "Enfield, UK",
      period: "November 2025 to current",
      current: true,
      facilityDetails: "Community Healthcare & Home Care Services",
      responsibilities: [
        "Assist clients with all activities of daily living with respect for individual needs, dignity, and privacy.",
        "Assist in improving the physical well-being of clients through balanced nutrition and meal planning.",
        "Assist and support other professionals during clinical treatment and procedures in the community.",
        "Support clients post hospital discharge home ensuring their comfort, recovery, and safety.",
        "Escort clients to various places, clinical departments, and community appointments as required.",
        "Able to document accurate written evidence of care delivery and report concerns promptly."
      ],
      skills: ["Activities of Daily Living", "Nutrition Management", "Post-Discharge Care", "Community Procedures", "Care Documentation"]
    },
    {
      id: "wh-2",
      role: "Care Assistant",
      company: "Hands On Rother Ltd",
      location: "Rotherham, UK",
      period: "March 2023 to October 2025",
      current: false,
      facilityDetails: "Cygnet Acer Clinic & Cherry Tree Care LTD (Chesterfield, UK)",
      responsibilities: [
        "Duties at Cygnet Acer Clinic: Ensuring safe, secure living conditions for service users, reducing risk and enhancing quality of life.",
        "Supporting those who have mental health challenges with active listening and empathetic counseling.",
        "Conducting person-centered care and risk assessments; providing 1-to-1 observation for individuals at high risk of self-harm.",
        "Emergency management, behavioral restraining, and crisis de-escalation while maintaining a calm demeanor.",
        "Strict adherence to infection control measures for a safe environment for both staff and patients alike.",
        "Duties at Cherry Tree Care LTD: Prompting and encouraging independence while assisting patients with daily routines.",
        "Assisting in all aspects of personal care (showering/bathing and retaining comfort with dignity).",
        "Preparing meals, ensuring balanced nutrition intake, mealtime planning, feeding and support.",
        "Safely and securely transporting patients using hoists and wheelchairs; routine sanitization tasks.",
        "Handling challenging behavior from dementia-affected individuals effectively without force or intimidation.",
        "Managing personal hygiene of bed-bound patients, assistance with medication taking and documenting (MAR), and vital signs monitoring for early detection of complications."
      ],
      skills: ["Mental Health Support", "Dementia Care", "1-to-1 Observation", "Medication Practice", "Hoist & Wheelchair Transport", "Infection Control"]
    },
    {
      id: "wh-3",
      role: "Midwife",
      company: "Zakiganj Hospital and Diagnosis Center & Bodor Uddin General Hospital",
      location: "Bangladesh",
      period: "April 2021 to December 2022",
      current: false,
      facilityDetails: "Zakiganj Hospital (Aug 2022 – Dec 2022) | Bodor Uddin General Hospital (Apr 2021 – Sep 2021)",
      responsibilities: [
        "Provided pre-pregnancy care, adolescent menstrual hygiene care, and nutritional counseling.",
        "Conducted antenatal care: examined and monitored pregnant women, carried out screening tests, and took patient samples.",
        "Regularly checked vital signs, identified high-risk pregnancies, and raised awareness about danger signs during and after labour.",
        "Encouraged mothers for normal vaginal delivery who were at low risk; monitored and administered medications.",
        "Regularly monitored fetus condition during pregnancy and intrapartum period; emergency and complications management.",
        "Sterilized all equipment and conducted safe normal vaginal deliveries.",
        "Closely observed newborns, provided postpartum care, and counseled on family planning methods.",
        "Advised and supported parents in daily newborn care, as well as helping parents cope with miscarriage, stillbirth, and neonatal death.",
        "Maintained evidence-based records, provided empathetic care to vulnerable mothers, and arranged referral care with adequate cautions."
      ],
      skills: ["Normal Vaginal Delivery", "Antenatal & Postnatal Care", "Fetal Monitoring", "Obstetric Complications", "Equipment Sterilization", "Bereavement Support"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Diploma of Midwifery",
      institution: "BRAC University",
      period: "January 2018 to December 2020",
      location: "Bangladesh",
      highlights: "Comprehensive clinical midwifery training covering anatomy, normal delivery, maternal and neonatal care."
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sunamganj Government College",
      period: "July, 2015 to March, 2017",
      location: "Bangladesh",
      highlights: "Higher secondary education completed."
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate (SSC)",
      institution: "Rozoni Ganj High School",
      period: "January, 2013 to February, 2015",
      location: "Bangladesh",
      highlights: "Secondary school certificate completed."
    }
  ],
  references: [
    {
      id: "ref-1",
      name: "TAZIK RASHID",
      title: "Private Care Employer",
      phone: "07816906180",
      email: "tazikrashid@hotmail.com"
    },
    {
      id: "ref-2",
      name: "SIBONILE SIKHOSANA",
      title: "Recruitment Manager",
      company: "Hands on Rother Ltd",
      address: "72 Effingham Street, Rotherham, S65 1AL",
      phone: "07816906180", // Contactable via Hands on Rother
      email: "contact@handsonrother.co.uk"
    }
  ]
};
