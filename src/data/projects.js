const TOPIC_LABELS = {
  react: 'React',
  'react-router': 'React Router',
  'react-hooks': 'React Hooks',
  tailwindcss: 'Tailwind CSS',
  javascript: 'JavaScript',
  html5: 'HTML',
  css3: 'CSS',
  'fetch-api': 'REST API',
  daisyui: 'DaisyUI',
  'daisy-ui': 'DaisyUI',
  django: 'Django',
  python: 'Python',
  localstorage: 'LocalStorage',
};

function mapTopics(topics = []) {
  const labels = topics
    .map((topic) => TOPIC_LABELS[topic.toLowerCase()])
    .filter(Boolean);

  return labels.length ? [...new Set(labels)] : ['Web'];
}

function createProject({
  id,
  title,
  description,
  liveUrl,
  githubUrl,
  repoName,
  topics = [],
}) {
  return {
    id,
    title,
    description,
    tech: mapTopics(topics),
    liveUrl: liveUrl || githubUrl,
    githubUrl,
    repoName,
  };
}

export const featuredProjects = [
  createProject({
    id: 'gan-shunen',
    title: 'Gan Shunen',
    description:
      'Music web app for browsing and playing songs with a responsive HTML, CSS, and JavaScript interface.',
    liveUrl: 'https://gan-shunen.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Gan-Shunen',
    repoName: 'Gan-Shunen',
    topics: ['html5', 'css3', 'javascript'],
  }),
  createProject({
    id: 'career-hub',
    title: 'Career Hub',
    description:
      'Job listing and application tracker built with React Router and Tailwind CSS, with applied jobs stored in localStorage.',
    liveUrl: 'https://career-hub-smoky.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Career-Hub',
    repoName: 'Career-Hub',
    topics: ['react', 'react-router', 'tailwindcss', 'javascript', 'localstorage'],
  }),
  createProject({
    id: 'book-review',
    title: 'Book Review',
    description:
      'Book discovery and review app with React Router and localStorage-backed reading lists.',
    liveUrl: 'https://book-review-ashy.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Book-Review',
    repoName: 'Book-Review',
    topics: ['react', 'react-router', 'tailwindcss', 'javascript', 'localstorage'],
  }),

  createProject({
    id: 'alphabet-clash-pro',
    title: 'Alphabet Clash Pro',
    description: 'Fast-paced typing game for testing keyboard speed and accuracy under time pressure.',
    liveUrl: 'https://alphabet-clash-pro-topaz.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Alphabet-Clash-Pro',
    repoName: 'Alphabet-Clash-Pro',
    topics: ['javascript', 'tailwindcss', 'html5'],
  }),
  createProject({
    id: 'movie-dekhi',
    title: 'Movie Dekhi',
    description: 'Netflix-inspired streaming UI clone focused on responsive layout and modern visual design.',
    liveUrl: 'https://movie-dekhi.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Movie-Dekhi',
    repoName: 'Movie-Dekhi',
    topics: ['html5', 'css3', 'javascript'],
  }),

  createProject({
    id: 'desh-ghuri-web',
    title: 'Desh Ghuri Web',
    description:
      'Travel booking platform with authentication, package management, and payment gateway integration.',
    liveUrl: 'https://desh-ghuri-web.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Desh-Ghuri-Web',
    repoName: 'Desh-Ghuri-Web',
    topics: ['django', 'python', 'javascript', 'css3'],
  }),



];

export const additionalProjects = [
  createProject({
    id: 'nikhut-ticketing',
    title: 'Nikhut Ticketing',
    description: 'Ticket booking interface with seat selection and a streamlined checkout flow.',
    liveUrl: 'https://nikhut-ticketing.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Nikhut-Ticketing',
    repoName: 'Nikhut-Ticketing',
    topics: ['javascript', 'tailwindcss', 'html5'],
  }),
  createProject({
    id: 'chef-table',
    title: 'Chef Table',
    description:
      'Recipe management app built with React, Tailwind CSS, and REST API integration for exploring and managing cooking selections.',
    liveUrl: 'https://chef-table-chi.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Chef-table',
    repoName: 'Chef-table',
    topics: ['react', 'tailwindcss', 'javascript', 'fetch-api', 'daisyui'],
  }),
  createProject({
    id: 'react-world-tour',
    title: 'React World Tour',
    description:
      'Country exploration app built with React and Vite, using REST API data for dynamic travel information.',
    liveUrl: 'https://react-world-tour-rho.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/react-world-tour',
    repoName: 'react-world-tour',
    topics: ['react', 'javascript', 'fetch-api', 'css3'],
  }),
  createProject({
    id: 'knowledge-cafe',
    title: 'Knowledge Cafe',
    description:
      'Blog reading platform with bookmarking and reading-time tracking, built with React and Tailwind CSS.',
    liveUrl: 'https://knowledge-cafe-pink.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Knowledge-Cafe',
    repoName: 'Knowledge-Cafe',
    topics: ['react', 'tailwindcss', 'javascript', 'fetch-api'],
  }),
  createProject({
    id: 'retro-forum',
    title: 'Retro Forum',
    description: 'Retro-styled forum for browsing posts and discussions with dynamic content rendering.',
    liveUrl: 'https://retro-forum-ruby.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Retro-Forum',
    repoName: 'Retro-Forum',
    topics: ['javascript', 'tailwindcss', 'fetch-api'],
  }),

  createProject({
    id: 'phone-hunting-api',
    title: 'Phone Hunting API',
    description: 'Phone search app that fetches and displays smartphone data from an external REST API.',
    liveUrl: 'https://phone-hunting-api-ruddy.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Phone-Hunting-Api',
    repoName: 'Phone-Hunting-Api',
    topics: ['javascript', 'tailwindcss', 'fetch-api'],
  }),

  createProject({
    id: 'geometry-genius',
    title: 'Geometry Genius',
    description: 'Geometry calculator for computing shape areas with instant, interactive results.',
    liveUrl: 'https://geometry-genius.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Geometry-genius',
    repoName: 'Geometry-genius',
    topics: ['javascript', 'tailwindcss', 'html5'],
  }),
  createProject({
    id: 'tea-house',
    title: 'Tea House',
    description: 'Tea shop landing page with product showcase and mobile-first Tailwind CSS layout.',
    liveUrl: 'https://tea-house-cyan.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/tea-house',
    repoName: 'tea-house',
    topics: ['html5', 'tailwindcss', 'daisyui'],
  }),
  createProject({
    id: 'penguin-fashion',
    title: 'Penguin Fashion',
    description: 'Fashion landing page with clean structure and full responsive behavior.',
    liveUrl: 'https://penguin-fashion-tawny.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Penguin-Fashion',
    repoName: 'Penguin-Fashion',
    topics: ['html5', 'tailwindcss'],
  }),
  createProject({
    id: 'biker-zone',
    title: 'Biker Zone',
    description: 'Motorcycle community landing page built with Tailwind CSS and DaisyUI components.',
    liveUrl: 'https://biker-zone-six.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Biker-Zone',
    repoName: 'Biker-Zone',
    topics: ['html5', 'tailwindcss', 'daisyui'],
  }),
  createProject({
    id: 'legal-solution',
    title: 'Legal Solution',
    description: 'Legal services landing page with professional layout for firms and consultants.',
    liveUrl: 'https://legal-solution-two.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Legal-Solution',
    repoName: 'Legal-Solution',
    topics: ['html5', 'tailwindcss', 'daisyui'],
  }),
  createProject({
    id: 'cholo-jai',
    title: 'Cholo Jai',
    description: 'Travel promotional site with destination highlights and responsive HTML/CSS layout.',
    liveUrl: 'https://cholo-jai-six.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Cholo-Jai',
    repoName: 'Cholo-Jai',
    topics: ['html5', 'css3'],
  }),
  createProject({
    id: 'hockeys',
    title: 'Hockeys',
    description: 'Hockey-themed landing page with mobile-first design and Tailwind CSS styling.',
    liveUrl: 'https://hockeys-flax.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Hockeys',
    repoName: 'Hockeys',
    topics: ['html5', 'tailwindcss', 'daisyui'],
  }),
  createProject({
    id: 'influencer-gear',
    title: 'Influencer Gear',
    description: 'Product showcase landing page for influencer equipment and gear recommendations.',
    liveUrl: 'https://influencer-gear-chi.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/influencer-gear',
    repoName: 'influencer-gear',
    topics: ['html5', 'css3'],
  }),
  createProject({
    id: 'g3-architects',
    title: 'G3 Architects',
    description: 'Architecture firm portfolio site highlighting services and project presentation.',
    liveUrl: 'https://g3-architects-three.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/G3-Architects',
    repoName: 'G3-Architects',
    topics: ['html5', 'css3', 'javascript'],
  }),
  createProject({
    id: 'web-dev-portfolio',
    title: 'Web Dev Portfolio',
    description: 'Developer portfolio showcasing projects, skills, and contact information.',
    liveUrl: 'https://web-dev-protfolio.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/Web-Dev-Protfolio',
    repoName: 'Web-Dev-Protfolio',
    topics: ['html5', 'css3', 'javascript'],
  }),
  createProject({
    id: 'new-year-new-mission',
    title: 'New Year New Mission',
    description: 'Promotional campaign landing page with event details and goal-oriented UI.',
    liveUrl: 'https://new-year-new-mission-xi.vercel.app',
    githubUrl: 'https://github.com/istewakhassantewak/New-Year-New-Mission',
    repoName: 'New-Year-New-Mission',
    topics: ['html5', 'css3', 'javascript'],
  }),
];

export const allProjects = [...featuredProjects, ...additionalProjects];
