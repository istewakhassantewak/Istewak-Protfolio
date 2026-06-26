import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-white/5"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width: `${progress}%` }}
        layout={false}
      />
    </div>
  );
}
