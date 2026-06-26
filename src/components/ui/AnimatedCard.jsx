import { motion } from 'framer-motion';
import { fadeUp } from '../../constants/animations';

export default function AnimatedCard({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
