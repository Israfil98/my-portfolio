import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../data/portfolioData';

const FOOTER_SOCIALS = [
  {
    icon: Github,
    href: SOCIAL_LINKS.github,
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: SOCIAL_LINKS.linkedin,
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: `mailto:${SOCIAL_LINKS.email}`,
    label: 'Email',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <div className="flex gap-6">
          {FOOTER_SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-glow text-gray-500 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600">
          &copy; {currentYear} Israfil Guseinov. Built with React, TypeScript
          &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
