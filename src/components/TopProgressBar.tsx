import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const TopProgressBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setVisible(true);
    setProgress(0);

    // Quick jump to ~80% then wait
    const t1 = setTimeout(() => setProgress(70), 50);
    const t2 = setTimeout(() => setProgress(85), 300);

    // Complete on next tick after framer exit animation starts
    const t3 = setTimeout(() => {
      setProgress(100);
      const t4 = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t4);
    }, 350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-primary"
            style={{ boxShadow: "0 0 8px hsl(var(--primary) / 0.6)" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: progress === 100 ? 0.2 : 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopProgressBar;
