import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 pt-28 pb-20">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-text/60 mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">Back to Home</Button>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-xl glass text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
