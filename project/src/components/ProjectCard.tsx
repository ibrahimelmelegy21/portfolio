import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { useStore } from '../store/useStore';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const { language } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title[language]}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description[language]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};