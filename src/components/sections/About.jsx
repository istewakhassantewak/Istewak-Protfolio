import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';
import { aboutSkills, stats, professionalSummary, contactInfo } from '../../data/site';
import { useInView, useCounter } from '../../hooks/useScrollProgress';
import { SectionHeading, SectionWrapper } from '../ui/SectionHeading';
import AnimatedCard from '../ui/AnimatedCard';
import Tag from '../ui/Tag';

function StatCard({ stat, index }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const hasCounter = typeof stat.value === 'number' && stat.value > 0;
  const count = useCounter(stat.value ?? 0, 1800, 0, isInView && hasCounter);

  return (
    <AnimatedCard delay={index * 0.1}>
      <div
        ref={ref}
        className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
      >
        <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          {hasCounter ? `${count}${stat.suffix ?? ''}` : stat.text}
        </p>
        <p className="text-text/60 text-sm">{stat.label}</p>
      </div>
    </AnimatedCard>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Background in software engineering, web development, and operational coordination."
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <AnimatedCard>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4">Istewak Hassan Tewak</h3>
            <p className="text-text/70 leading-relaxed mb-6">{professionalSummary}</p>

            <div className="flex items-start gap-3 mb-4">
              <HiAcademicCap className="text-primary mt-1 shrink-0" size={20} aria-hidden="true" />
              <div>
                <p className="font-semibold">Bachelor of Science (B.Sc.) in Software Engineering</p>
                <p className="text-text/60 text-sm">Daffodil International University</p>
                <p className="text-accent text-sm">Graduated: June 2026 · CGPA 3.75</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HiLocationMarker className="text-primary mt-1 shrink-0" size={20} aria-hidden="true" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-text/60 text-sm">{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <div className="space-y-8">
          <AnimatedCard delay={0.1}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {aboutSkills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
