import { motion } from "framer-motion";

const GradientDivider = () => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="px-4 md:px-6 origin-left"
  >
    <div className="container mx-auto">
      <div className="h-px bg-gradient-to-r from-primary via-primary/40 to-transparent" />
    </div>
  </motion.div>
);

export default GradientDivider;
