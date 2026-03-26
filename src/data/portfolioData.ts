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
    title: 'Dinespot',
    description:
      'Restaurant booking system with a customer-facing site and admin dashboard. Features menu management, table reservations with status workflow, and Supabase auth with row-level security.',
    tech: [
      'React',
      'TypeScript',
      'Supabase',
      'Zustand',
      'Tailwind CSS',
      'React Router',
    ],
    liveUrl: 'https://restaurant-booking-5jsz.vercel.app',
    githubUrl: 'https://github.com/Israfil98/restaurant-booking',
  },
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
