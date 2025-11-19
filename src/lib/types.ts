export type NavItem = {
  title: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  content: string;
};

export type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
  image: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
};
