export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(data) {
  const errors = {};

  if (!data.name?.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter at least 2 characters.';
  }
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message?.trim() || data.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }

  return errors;
}

export function scrollToSection(href) {
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function filterProjects(projects, search, techFilter) {
  const query = search.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((t) => t.toLowerCase().includes(query));

    const matchesFilter = techFilter === 'all' || project.tech.includes(techFilter);

    return matchesSearch && matchesFilter;
  });
}

export function collectTechFilters(projects) {
  const techs = new Set();
  projects.forEach((project) => project.tech.forEach((t) => techs.add(t)));
  return ['all', ...Array.from(techs).sort()];
}
