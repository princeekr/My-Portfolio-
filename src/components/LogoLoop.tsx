import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Logo {
  node: ReactNode;
  title: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
}

const LogoLoop = ({
  logos,
  speed = 80,
  direction = "left",
  logoHeight = 48,
  gap = 60,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = "#0b0b0b",
}: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless loop
  const duplicated = [...logos, ...logos, ...logos];

  const totalWidth = logos.length * (logoHeight + gap);
  const duration = totalWidth / speed;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex items-center"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <motion.div
        className="flex items-center"
        style={{ gap: `${gap}px` }}
        animate={{
          x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        {...(isPaused ? { style: { gap: `${gap}px`, animationPlayState: "paused" } } : {})}
      >
        {duplicated.map((logo, index) => (
          <div
            key={`${logo.title}-${index}`}
            className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-default"
          >
            <div
              className={`text-muted-foreground group-hover:text-primary transition-all duration-300 ${
                scaleOnHover ? "group-hover:scale-110" : ""
              }`}
              style={{
                fontSize: `${logoHeight}px`,
                width: `${logoHeight}px`,
                height: `${logoHeight}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {logo.node}
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
              {logo.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
