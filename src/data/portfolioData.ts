import { type INavLink, type IProject } from '../types';

export const NAV_LINKS: INavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Framer Motion',
  'Zustand',
  'Supabase',
  'Git & GitHub',
  'REST APIs',
  'Responsive Design',
  'CI/CD',
];

export const PROJECTS: IProject[] = [
  {
    title: 'Apply Pilot',
    description:
      'Full-stack job application tracker with auth, CRUD operations, real-time data, and a CI/CD pipeline. Built to streamline the job search process.',
    tech: ['React', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind CSS'],
    liveUrl: 'https://apply-pilot-sigma.vercel.app',
    githubUrl: 'https://github.com/Israfil98/apply-pilot',
  },
  {
    title: 'Inkwell Landing Page',
    description:
      'SaaS landing page for an AI writing assistant. Features scroll-triggered animations, an accordion FAQ, a 3-tier pricing table, and a fully responsive dark editorial design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://inkwell-landing-sepia.vercel.app',
    githubUrl: 'https://github.com/Israfil98/inkwell-landing',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Israfil98',
  linkedin: 'https://www.linkedin.com/in/israfil-guseinov/',
  email: 'israfilguseinov98@gmail.com',
};
