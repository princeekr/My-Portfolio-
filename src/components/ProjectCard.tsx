import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  techStack: string;
  slug: string;
  link?: string;
  github?: string;
  index: number;
}

const ProjectCard = ({ number, title, description, techStack, slug, link, github, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-t border-border py-10 sm:py-16 group"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-8">
        <div className="sm:col-span-2">
          <span className="heading-display text-4xl sm:text-6xl text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
            {number}
          </span>
        </div>
        
        <div className="sm:col-span-10 space-y-6 sm:space-y-8">
          <h3 className="heading-display text-3xl sm:text-4xl md:text-5xl group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                Description
              </span>
              <p className="text-foreground">{description}</p>
            </div>
            
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                Tech Stack
              </span>
              <p className="text-primary font-semibold">{techStack}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to={`/projects/${slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group/link"
            >
              View Project
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
