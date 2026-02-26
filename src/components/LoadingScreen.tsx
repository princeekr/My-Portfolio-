import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DecryptedText from './DecryptedText';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [glitchActive, setGlitchActive] = useState(true);
  const [mountTime] = useState(() => Date.now());

  const handleAnimationComplete = () => {
    setGlitchActive(false);
    const elapsed = Date.now() - mountTime;
    const remaining = Math.max(0, 1500 - elapsed);
    setTimeout(() => setFadeOut(true), remaining);
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!fadeOut && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Scan lines */}
          {glitchActive && (
            <div
              className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 4px)',
              }}
            />
          )}

          {/* Flicker overlay */}
          {glitchActive && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-20 bg-primary/5"
              animate={{ opacity: [0, 0.08, 0, 0.04, 0, 0.1, 0, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            />
          )}

          <div className="relative">
            {/* Red channel offset clone */}
            {glitchActive && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  x: [0, -3, 0, 2, 0, -1, 0],
                  opacity: [0, 0.7, 0, 0.5, 0, 0.6, 0],
                }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              >
                <span className="heading-display text-4xl md:text-6xl tracking-widest uppercase text-primary/40 mix-blend-screen select-none" aria-hidden="true">
                  loading
                </span>
              </motion.div>
            )}

            {/* Cyan channel offset clone */}
            {glitchActive && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  x: [0, 2, 0, -3, 0, 1, 0],
                  opacity: [0, 0.5, 0, 0.7, 0, 0.4, 0],
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              >
                <span className="heading-display text-4xl md:text-6xl tracking-widest uppercase text-[hsl(180,80%,60%)]/40 mix-blend-screen select-none" aria-hidden="true">
                  loading
                </span>
              </motion.div>
            )}

            {/* Horizontal glitch slice */}
            {glitchActive && (
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-primary/20 pointer-events-none z-30"
                animate={{
                  top: ['0%', '100%', '30%', '80%', '10%', '60%'],
                  opacity: [0, 0.6, 0, 0.4, 0, 0.3],
                  scaleX: [1, 1.5, 0.8, 1.2, 1, 0.9],
                }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              />
            )}

            {/* Main text */}
            <DecryptedText
              text="loading"
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={80}
              className="text-foreground"
              encryptedClassName="text-muted-foreground"
              parentClassName="heading-display text-4xl md:text-6xl tracking-widest uppercase"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
