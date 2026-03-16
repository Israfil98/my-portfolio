import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../../../data/portfolioData';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="hover:text-emerald-glow font-mono text-lg font-bold tracking-tight text-white transition-colors"
        >
          IG.
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="text-gray-400 transition-colors hover:text-white md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/5 bg-gray-950/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-lg text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
