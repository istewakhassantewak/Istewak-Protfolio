import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import Footer from './Footer';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}
