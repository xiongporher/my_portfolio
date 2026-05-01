export type Lang = "en" | "lo";

export interface TranslationSet {
  nav: { about: string; projects: string; skills: string; contact: string };
  hero: { greeting: string; role: string; cta: string; description: string };
  about: {
    title: string;
    description: string;
    skillGroups: { frontend: string; backend: string; design: string };
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      desc: string;
    }>;
  };
  projects: {
    title: string;
    filterAll: string;
    viewProject: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
  footer: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  group: "frontend" | "backend" | "design";
}

export interface Project {
  id: number;
  category: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  tech: string[];
  image: string;
  github?: string;
}
