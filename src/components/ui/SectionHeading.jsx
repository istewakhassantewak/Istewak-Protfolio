import { motion } from 'framer-motion';
import { fadeUp } from '../../constants/animations';

export function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
