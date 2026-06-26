import { HiSearch } from 'react-icons/hi';

export default function ProjectFilters({
  search,
  techFilter,
  techOptions,
  onSearchChange,
  onTechFilterChange,
  resultCount,
}) {
  return (
    <div className="space-y-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <HiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40"
            size={18}
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 text-sm"
          />
        </div>
        <select
          value={techFilter}
          onChange={(e) => onTechFilterChange(e.target.value)}
          aria-label="Filter by technology"
          className="px-4 py-2.5 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none text-sm cursor-pointer min-w-[180px]"
        >
          {techOptions.map((tech) => (
            <option key={tech} value={tech} className="bg-surface">
              {tech === 'all' ? 'All Technologies' : tech}
            </option>
          ))}
        </select>
      </div>
      <p className="text-text/50 text-sm">
        {resultCount} project{resultCount !== 1 ? 's' : ''} found
      </p>
    </div>
  );
}
