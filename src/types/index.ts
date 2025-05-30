export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};