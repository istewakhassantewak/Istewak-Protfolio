import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiPhone, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../../data/site';
import { validateContactForm } from '../../utils/helpers';
import { SectionHeading, SectionWrapper } from '../ui/SectionHeading';
import AnimatedCard from '../ui/AnimatedCard';
import Button from '../ui/Button';

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <SectionWrapper id="contact" className="bg-white/[0.02]">
      <SectionHeading
        title="Contact Me"
        subtitle="Open to internships, freelance work, and collaboration. Send a message below."
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
        <AnimatedCard>
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={INPUT_CLASS}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={INPUT_CLASS}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`${INPUT_CLASS} resize-none`}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" variant="primary">Send Message</Button>
              <Button type="button" variant="secondary" onClick={resetForm}>Reset</Button>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-400 text-sm"
                  role="status"
                >
                  <HiCheckCircle size={18} aria-hidden="true" />
                  Message validated successfully. I&apos;ll get back to you soon.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </AnimatedCard>

        <AnimatedCard delay={0.12}>
          <div className="glass-card p-6 md:p-8 h-full">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <p className="text-text/60 mb-8 leading-relaxed">
              Reach out through any of the channels below. I typically respond within 24–48 hours.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:+880${contactInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <HiPhone className="text-primary" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text/50 text-xs">Phone</p>
                  <p className="font-medium">{contactInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <HiMail className="text-secondary" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text/50 text-xs">Email</p>
                  <p className="font-medium text-sm break-all">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <FaGithub className="text-accent" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text/50 text-xs">GitHub</p>
                  <p className="font-medium text-sm">@istewakhassantewak</p>
                </div>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FaLinkedin className="text-primary" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text/50 text-xs">LinkedIn</p>
                  <p className="font-medium text-sm">Istewak Hassan Tewak</p>
                </div>
              </a>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </SectionWrapper>
  );
}
