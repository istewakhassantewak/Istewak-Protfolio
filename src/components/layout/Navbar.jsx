import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { navLinks } from '../../data/site';
import { useTheme } from '../../context/ThemeContext';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';

function NavItem({ link, isActive, onSectionClick, className }) {
  if (link.path) {
    return (
      <Link to={link.path} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSectionClick(link.section)}
      className={className}
      aria-current={isActive ? 'page' : undefined}
    >
      {link.label}
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { goToSection } = useSectionNavigation();

  // Track scroll position to highlight active section
  const updateActiveSection = useCallback(() => {
    const sectionIds = navLinks
      .filter((l) => l.section && l.section !== 'home')
      .map((l) => l.section);

    const scrollY = window.scrollY;

    // If near top, mark home as active
    if (scrollY < 100) {
      setActiveSection('home');
      return;
    }

    let current = 'home';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + scrollY - 120;
        if (scrollY >= top) {
          current = id;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      updateActiveSection();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleSectionClick = (section) => {
    setMenuOpen(false);
    setActiveSection(section);
    goToSection(section);
  };

  const isLinkActive = (link) => {
    if (link.path) return location.pathname === link.path;
    if (location.pathname !== '/') return false;
    return activeSection === link.section;
  };

  const linkClass = (link) => {
    const active = isLinkActive(link);
    const base = 'relative px-4 py-2 text-sm rounded-lg transition-all cursor-pointer font-medium';
    return active
      ? `${base} text-primary`
      : `${base} text-text/70 hover:text-text hover:bg-white/5`;
  };

  const mobileLinkClass = (link) => {
    const active = isLinkActive(link);
    const base =
      'flex items-center gap-3 w-full text-left py-3.5 px-2 text-base font-medium border-b border-white/10 dark:border-white/10 transition-colors cursor-pointer';
    return active
      ? `${base} text-primary`
      : `${base} text-text hover:text-primary`;
  };

  // Solid background for mobile drawer — readable in both themes
  const drawerBg =
    theme === 'dark'
      ? 'bg-slate-900/95 backdrop-blur-xl border-l border-white/10'
      : 'bg-white/95 backdrop-blur-xl border-l border-black/10';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? ' shadow-lg shadow-black/10 py-3' : 'bg-transparent py-5'
        }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => handleSectionClick('home')}
        >
          {/* FIX: use onError fallback in case image path is wrong */}
          <img
            src="/istee.png"
            alt="Istewak Hassan Tewak"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="w-10 h-10 rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors object-cover"
          />
          <span className="font-bold text-sm md:text-base">
            Istewak<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <NavItem
                link={link}
                isActive={isLinkActive(link)}
                onSectionClick={handleSectionClick}
                className={linkClass(link)}
              />
              {/* Active indicator underline */}
              {isLinkActive(link) && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <HiSun size={20} className="text-yellow-400" />
            ) : (
              <HiMoon size={20} className="text-secondary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden p-2.5 rounded-xl glass hover:bg-white/10 transition-colors cursor-pointer"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40 cursor-default"
            />

            {/* Drawer panel — solid background so text is always readable */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden flex flex-col ${drawerBg}`}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-bold text-base">
                  Istewak<span className="text-primary">.</span>
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    {link.path ? (
                      <Link
                        to={link.path}
                        className={mobileLinkClass(link)}
                        onClick={() => setMenuOpen(false)}
                      >
                        {/* Active dot indicator */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isLinkActive(link) ? 'bg-primary' : 'bg-transparent'
                            }`}
                        />
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSectionClick(link.section)}
                        className={mobileLinkClass(link)}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isLinkActive(link) ? 'bg-primary' : 'bg-transparent'
                            }`}
                        />
                        {link.label}
                      </button>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
