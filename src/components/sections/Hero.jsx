import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiCode } from 'react-icons/hi';
import { floatingTechIcons, siteMeta } from '../../data/site';
import TechIcon from '../ui/TechIcon';
import Button from '../ui/Button';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';

const FLOAT_POSITIONS = [
  { top: '15%', left: '8%' },
  { top: '25%', right: '10%' },
  { top: '60%', left: '5%' },
  { top: '70%', right: '8%' },
  { top: '40%', left: '15%' },
  { top: '50%', right: '15%' },
];

export default function Hero() {
  const { goToSection } = useSectionNavigation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

        {floatingTechIcons.map((item, index) => (
          <motion.div
            key={item.icon}
            className="absolute hidden md:block"
            style={FLOAT_POSITIONS[index]}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, delay: item.delay }}
          >
            <div className="p-3 glass rounded-xl">
              <TechIcon name={item.icon} size={28} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 text-sm md:text-base">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I&apos;m <span className="gradient-text">{siteMeta.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-semibold mb-6">{siteMeta.title}</p>

          <p className="text-text/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Software Engineering graduate skilled in React.js, JavaScript, Tailwind CSS, and the
            MERN stack. I build responsive applications with clean UI and reliable functionality.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button href="/resume.pdf" variant="primary" download>
              <HiDownload size={18} aria-hidden="true" />
              Download Resume
            </Button>
            <Button
              variant="secondary"
              onClick={() => goToSection('contact')}
            >
              <HiMail size={18} aria-hidden="true" />
              Contact Me
            </Button>
            <Button href="/projects" variant="outline">
              <HiCode size={18} aria-hidden="true" />
              View Projects
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 scale-110"
              aria-hidden="true"
            />
            <div className="relative gradient-border">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass p-2">
                <img
                  src="/istee.png"
                  alt={siteMeta.name}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl text-sm font-medium">
              <span className="text-accent" aria-hidden="true">●</span> Available for work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
