import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../data/portfolioData';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow effect */}
      <div className="bg-emerald-glow/10 pointer-events-none absolute top-1/4 -left-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-emerald-glow/5 pointer-events-none absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-emerald-glow mb-4 font-mono text-sm tracking-widest"
        >
          HI, MY NAME IS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Israfil Guseinov
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mb-10 max-w-xl text-lg text-gray-400 sm:text-xl"
        >
          Frontend React Developer. I build fast, scalable web applications with
          clean architecture and pixel-perfect design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="bg-emerald-glow hover:shadow-emerald-glow/25 rounded-lg px-8 py-3 font-medium text-gray-950 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            View My Work
          </a>

          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="rounded-lg border border-white/10 px-8 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/25"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hover:text-emerald-glow absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
