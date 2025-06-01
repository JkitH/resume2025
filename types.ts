
export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  years: string;
}

export interface ExperienceDetailItem {
  subHeading?: string;
  points: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  secondaryRole?: string; // For roles like UI/UX engineer at Fullon
  secondaryDates?: string; // For roles like UI/UX engineer at Fullon
  keywords: string[];
  details: ExperienceDetailItem[];
}

export interface ProjectEntry {
  name: string;
  roleOrType: string;
  dates: string;
  keywords?: string[];
  description: string;
  link?: string;
  linkText?: string;
}
