import { PROJECTS } from '../../../data/portfolioData';
import { AnimatedSection } from '../../common/AnimatedSection';
import { SectionHeading } from '../../common/SectionHeading';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <AnimatedSection className="px-6 py-24" id="projects">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built. Each one taught me something new."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
