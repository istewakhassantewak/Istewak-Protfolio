import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/helpers';

export function useHashScroll(delay = 300) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const timer = setTimeout(() => scrollToSection(hash), delay);
    return () => clearTimeout(timer);
  }, [pathname, hash, delay]);
}
