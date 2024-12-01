export type Language = 'ar' | 'en';

export interface Project {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  technologies: string[];
  link: string;
}