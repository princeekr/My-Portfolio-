import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  screenshots: { src: string; alt: string }[];
}

const ProjectScreenshots = ({ screenshots }: Props) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  if (!screenshots.length) return null;

  return (
    <div className="relative w-full md:w-3/4 md:mx-auto">
      <div className="relative aspect-video overflow-hidden border border-border bg-card rounded-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={screenshots[current].src}
            alt={screenshots[current].alt}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>

        <div className="flex gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-muted-foreground mt-3">
        {screenshots[current].alt}
      </p>
    </div>
  );
};

export default ProjectScreenshots;
