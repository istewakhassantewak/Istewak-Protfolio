import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import { experience } from '../../data/site';
import { SectionHeading, SectionWrapper } from '../ui/SectionHeading';
import AnimatedCard from '../ui/AnimatedCard';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white/[0.02]">
      <SectionHeading
        title="Professional Experience"
        subtitle="Work experience across web development, data management, and operations."
      />

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <AnimatedCard key={`${item.title}-${item.company}`} delay={index * 0.12}>
              <div className="relative flex gap-6">
                {/* Timeline dot */}
                <div
                  className="relative z-10 shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center border-2 border-primary mt-1"
                  aria-hidden="true"
                >
                  <HiBriefcase className="text-primary" size={16} />
                </div>

                {/* Card */}
                <motion.article
                  whileHover={{ scale: 1.01 }}
                  className="flex-1 glass-card p-5 md:p-6 hover:border-primary/30 transition-colors"
                >
                  <time className="text-accent text-xs font-semibold uppercase tracking-wide">
                    {item.period}
                  </time>
                  <h3 className="text-base md:text-lg font-bold mt-1 mb-0.5">{item.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{item.company}</p>
                  <ul className="space-y-1.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-text/60 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
