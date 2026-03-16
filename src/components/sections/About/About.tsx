import { motion } from 'framer-motion';
import { SKILLS } from '../../../data/portfolioData';
import { AnimatedSection } from '../../common/AnimatedSection';
import { SectionHeading } from '../../common/SectionHeading';

const About = () => {
  return (
    <AnimatedSection className="px-6 py-24" id="about">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="About"
          subtitle="A bit about my background and what I bring to the table."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              Frontend developer with 6+ years of experience building for the
              web. I started in mobile iOS development before transitioning to
              web applications — that cross-platform perspective gives me a
              sharp eye for performance and user experience.
            </p>
            <p>
              I specialize in React and TypeScript, building applications that
              are fast, fully responsive, and architected to scale. I care
              deeply about clean code, thoughtful UI, and delivering products
              that users actually enjoy using.
            </p>
            <p>
              Currently open to freelance projects — if you need a reliable
              developer who ships quality work on time,{' '}
              <a
                href="#contact"
                className="text-emerald-glow decoration-emerald-glow/30 hover:decoration-emerald-glow underline underline-offset-4 transition-colors"
              >
                let&apos;s talk
              </a>
              .
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-4 font-mono text-sm font-bold tracking-widest text-white uppercase">
              Tech I Work With
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:border-emerald-glow/30 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
