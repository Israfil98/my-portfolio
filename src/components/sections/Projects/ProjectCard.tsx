import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { type IProject } from '../../../types';

interface IProjectCardProps {
  project: IProject;
  index: number;
}

const ProjectCard = ({ project, index }: IProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group hover:border-emerald-glow/20 rounded-2xl border border-white/5 bg-white/2 p-6 transition-all hover:bg-white/4 sm:p-8"
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-glow text-gray-500 transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github size={20} />
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-glow text-gray-500 transition-colors"
            aria-label={`${project.title} live site`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <p className="mb-6 leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="text-emerald-glow/70 font-mono text-xs">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
