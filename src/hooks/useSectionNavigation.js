import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/helpers';

export function useSectionNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    if (section === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        return;
      }
      // Update URL to remove any hash, then scroll to top
      window.history.replaceState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: section });
      return;
    }

    // Update URL hash so direct links work
    window.history.pushState(null, '', `#${section}`);
    scrollToSection(`#${section}`);
  };

  return { goToSection, pathname: location.pathname };
}
