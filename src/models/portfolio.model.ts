export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github?: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  projects: Projects[];
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Projects {
  name: string;
  description: string;
  period: string;
}

export interface Skill {
  name: string;
  category: string;
}