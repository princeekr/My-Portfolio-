import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import ProjectScreenshots from "@/components/ProjectScreenshots";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) return <NotFound />;

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="heading-display text-5xl sm:text-8xl text-muted-foreground/20 block mb-0 leading-none">
            {project.number}
          </span>
          <h1 className="heading-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-6 -mt-2">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.techDetails.map((tech) => (
              <span
                key={tech}
                className="text-xs uppercase tracking-wider font-semibold text-primary border border-primary/30 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 hover:bg-primary/90 transition-colors"
              >
                Live Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border border-border px-6 sm:px-8 py-3 sm:py-4"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </motion.div>

        {/* Explanation sections */}
        <div className="space-y-16 mb-20">
          <Section title="Problem" delay={0.1}>
            <p className="text-lg text-muted-foreground">{project.problem}</p>
          </Section>

          <Section title="Approach" delay={0.2}>
            <p className="text-lg text-muted-foreground">{project.approach}</p>
          </Section>

          <Section title="Key Features" delay={0.3}>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-primary mt-1.5 text-xs">■</span>
                  {f}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="What I Learned" delay={0.4}>
            <p className="text-lg text-muted-foreground">{project.learned}</p>
          </Section>
        </div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
            Snapshots
          </span>
          <h2 className="heading-display text-3xl md:text-4xl mb-10">
            Project <span className="text-primary">Screenshots</span>
          </h2>
          <ProjectScreenshots screenshots={project.screenshots} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-16 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Back to all projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

const Section = ({
  title,
  delay,
  children,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="border-l-2 border-border hover:border-primary transition-colors pl-6 sm:pl-8"
  >
    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-3">
      {title}
    </span>
    {children}
  </motion.div>
);

export default ProjectDetail;
