import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LightRays from "@/components/LightRays";
import ProjectCard from "@/components/ProjectCard";
import StarBorder from "@/components/StarBorder";
import { projects } from "@/data/projects";

const Index = ({ loaderDone = true }: { loaderDone?: boolean }) => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 relative overflow-hidden text-center">
        {/* LightRays Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <LightRays
            raysOrigin="top-center"
            raysColor="#2563eb"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* Subtle glow at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-[50%] bg-primary/5 blur-[100px] z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 bg-card/80 border border-border/60 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
            <span className="text-sm text-foreground font-medium">
              Open to opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="heading-display text-[clamp(3rem,9vw,6.5rem)] leading-[1] mb-6"
          >
            Hey, <em className="not-italic text-foreground/70" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>I'm Prince.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Developer passionate about building <span className="font-semibold text-foreground">ML models and web apps </span>currently open to new opportunities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-4"
          >
            <StarBorder
              as="a"
              href="https://drive.google.com/file/d/1KgDgF0D20aYBJJXgT-IQUkBWEVweDs7c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              color="hsl(225, 100%, 60%)"
              speed="4s"
              innerClassName="bg-card/80 backdrop-blur-sm px-5 py-2 text-sm font-medium text-foreground/80 hover:bg-card hover:text-foreground transition-colors duration-200"
            >
              <span className="inline-flex items-center gap-2">
                Resume <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
              </span>
            </StarBorder>
            <StarBorder
              as={Link}
              to="/projects"
              color="hsl(225, 100%, 60%)"
              speed="4s"
              innerClassName="bg-card/80 backdrop-blur-sm px-5 py-2 text-sm font-medium text-foreground/80 hover:bg-card hover:text-foreground transition-colors duration-200"
            >
              <span className="inline-flex items-center gap-2">
                View Projects <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-20 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
              Featured work
            </span>
            <h2 className="heading-display text-4xl md:text-6xl">
              Projects that <span className="text-primary">ship</span>
            </h2>
          </motion.div>

          <div>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.number} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-all group"
            >
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Index;
