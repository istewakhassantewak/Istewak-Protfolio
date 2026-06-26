import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { useScrollToTop } from '../../hooks/useScrollProgress';

export default function BackToTop() {
  const { visible, scrollToTop } = useScrollToTop();

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors cursor-pointer shadow-lg shadow-primary/10"
        >
          <HiArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
