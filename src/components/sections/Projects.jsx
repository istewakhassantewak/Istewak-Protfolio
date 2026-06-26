import { HiViewGrid } from 'react-icons/hi';
import { featuredProjects } from '../../data/projects';
import { SectionHeading, SectionWrapper } from '../ui/SectionHeading';
import Button from '../ui/Button';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="Selected work with verified live demos and GitHub repositories."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="text-center">
        <Button href="/projects" variant="primary">
          <HiViewGrid size={18} aria-hidden="true" />
          View All Projects
        </Button>
      </div>
    </SectionWrapper>
  );
}
