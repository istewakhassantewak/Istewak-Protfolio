import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { navLinks, socialLinks } from '../../data/site';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export default function Footer() {
  const { goToSection } = useSectionNavigation();

  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4" onClick={() => goToSection('home')}>
              <img
                src="/istee.png"
                alt="Istewak Hassan Tewak"
                className="w-10 h-10 rounded-full border border-primary/30"
              />
              <span className="font-bold">
                Istewak<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-text/50 text-sm leading-relaxed">
              Software Engineer and Web Developer specializing in React.js and the MERN stack.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-text/50 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => goToSection(link.section)}
                      className="text-text/50 hover:text-primary text-sm transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Social Links</h2>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-text/40 text-sm">
            &copy; 2026 Istewak Hassan Tewak. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
