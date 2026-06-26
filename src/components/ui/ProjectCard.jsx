import { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { getProjectThumbnail } from '../../utils/projectImages';
import AnimatedCard from './AnimatedCard';
import Tag from './Tag';

export default function ProjectCard({ project, index = 0, animated = true }) {
  const [imgSrc, setImgSrc] = useState(() =>
    getProjectThumbnail(project.liveUrl, project.repoName)
  );
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (!imgFailed && project.repoName) {
      setImgFailed(true);
      setImgSrc(`https://opengraph.githubassets.com/1/istewakhassantewak/${project.repoName}`);
      return;
    }
    setImgSrc('/istee.png');
  };

  const card = (
    <article className="glass-card overflow-hidden group h-full flex flex-col hover:border-primary/30 transition-all duration-300">
      <div className="relative overflow-hidden h-48 bg-surface">
        <img
          src={imgSrc}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
          aria-hidden="true"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <HiExternalLink size={16} aria-hidden="true" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <FaGithub size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );

  if (!animated) return card;

  return <AnimatedCard delay={index * 0.08}>{card}</AnimatedCard>;
}
