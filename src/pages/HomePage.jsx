import { lazy, Suspense } from 'react';
import Hero from '../components/sections/Hero';
import { useHashScroll } from '../hooks/useHashScroll';

const About = lazy(() => import('../components/sections/About'));
const Skills = lazy(() => import('../components/sections/Skills'));
const Projects = lazy(() => import('../components/sections/Projects'));
const Experience = lazy(() => import('../components/sections/Experience'));
const Education = lazy(() => import('../components/sections/Education'));
const Contact = lazy(() => import('../components/sections/Contact'));

function SectionLoader() {
  return (
    <div className="py-16 flex justify-center" aria-label="Loading section">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function HomePage() {
  useHashScroll();

  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </main>
  );
}
