import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

const ProjectCard = ({ title, description, tags, github, live }: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-blue-900 bg-opacity-25 p-6 rounded-lg flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <div className="flex space-x-4 text-secondary text-xl">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>}
          {live && <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaExternalLinkAlt /></a>}
        </div>
      </div>
      <p className="text-secondary text-sm mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs font-mono bg-accent bg-opacity-10 text-accent px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;