import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { allProjects } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectFilters from '../components/projects/ProjectFilters';
import { collectTechFilters, filterProjects } from '../utils/helpers';

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [techFilter, setTechFilter] = useState('all');

  const techOptions = useMemo(() => collectTechFilters(allProjects), []);
  const filteredProjects = useMemo(
    () => filterProjects(allProjects, search, techFilter),
    [search, techFilter]
  );

  return (
    <main className="pt-28 pb-20 px-4 md:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text/60 hover:text-primary text-sm mb-8 transition-colors"
        >
          <HiArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </Link>

        <SectionHeading
          title="All Projects"
          subtitle={`Browse ${allProjects.length} projects with live demos and GitHub repositories.`}
        />

        <ProjectFilters
          search={search}
          techFilter={techFilter}
          techOptions={techOptions}
          onSearchChange={setSearch}
          onTechFilterChange={setTechFilter}
          resultCount={filteredProjects.length}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-text/50 py-12">No projects match your search.</p>
        )}
      </div>
    </main>
  );
}
