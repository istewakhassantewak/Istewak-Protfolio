import { motion } from 'framer-motion';
import { skillCategories } from '../../data/site';
import { useInView } from '../../hooks/useScrollProgress';
import { SectionHeading, SectionWrapper } from '../ui/SectionHeading';
import AnimatedCard from '../ui/AnimatedCard';
import TechIcon from '../ui/TechIcon';

function SkillBar({ skill, delay }) {
  const [ref, isInView] = useInView({ threshold: 0.4 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <TechIcon name={skill.icon} size={20} />
          <span className="font-medium text-sm truncate">{skill.name}</span>
        </div>
        <span className="text-primary text-sm font-semibold shrink-0">{skill.percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          role="progressbar"
          aria-valuenow={skill.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white/[0.02]">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I use to build modern web applications."
      />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedCard key={category.title} delay={categoryIndex * 0.1}>
            <div className="glass-card p-6 md:p-8 h-full hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={skillIndex * 0.08}
                  />
                ))}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
