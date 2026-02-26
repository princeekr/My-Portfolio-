import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="heading-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] mb-8">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of projects I've built — from AI systems to full-stack 
            web apps. Real problems, real solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.number} {...project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-20 mt-20 text-center"
        >
          <p className="text-2xl text-muted-foreground mb-4">
            Interested in collaborating?
          </p>
          <p className="heading-display text-4xl md:text-5xl">
            Let's build <span className="text-primary">something great</span> together.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Work;
