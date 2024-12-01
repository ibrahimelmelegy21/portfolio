import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: 'E-commerce Dashboard',
      ar: 'لوحة تحكم المتجر الإلكتروني',
    },
    description: {
      en: 'A modern dashboard for managing online stores with real-time analytics and inventory management.',
      ar: 'لوحة تحكم حديثة لإدارة المتاجر الإلكترونية مع تحليلات في الوقت الفعلي وإدارة المخزون.',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    link: 'https://github.com',
  },
  {
    id: 2,
    title: {
      en: 'Social Media App',
      ar: 'تطبيق التواصل الاجتماعي',
    },
    description: {
      en: 'A full-featured social media application with real-time messaging and content sharing.',
      ar: 'تطبيق تواصل اجتماعي متكامل مع ميزات المراسلة الفورية ومشاركة المحتوى.',
    },
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
    link: 'https://github.com',
  },
  {
    id: 3,
    title: {
      en: 'Task Management Platform',
      ar: 'منصة إدارة المهام',
    },
    description: {
      en: 'A collaborative task management platform with drag-and-drop interface and team features.',
      ar: 'منصة تعاونية لإدارة المهام مع واجهة سحب وإفلات وميزات للفرق.',
    },
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    link: 'https://github.com',
  },
];