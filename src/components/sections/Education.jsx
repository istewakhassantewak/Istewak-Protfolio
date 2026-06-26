import { HiAcademicCap } from 'react-icons/hi';
import { education } from '../../data/site';
import { SectionHeading, SectionWrapper } from '../ui/SectionHeading';
import AnimatedCard from '../ui/AnimatedCard';

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" subtitle="Academic background and qualifications." />

      <div className="grid md:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <AnimatedCard key={item.institution} delay={index * 0.1}>
            <article
              className={`glass-card p-6 h-full hover:border-primary/30 transition-colors ${
                item.highlight ? 'border-primary/30 bg-primary/5' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <HiAcademicCap className="text-primary" size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.institution}</h3>
              <p className="text-primary text-sm font-medium mb-2">{item.degree}</p>
              <p className="text-text/60 text-sm">Graduated: {item.graduated}</p>
              {item.detail && (
                <p className="text-accent text-sm font-medium mt-2">{item.detail}</p>
              )}
            </article>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
