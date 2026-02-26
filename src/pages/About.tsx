import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SiReact, SiJavascript, SiTypescript, SiSupabase, SiExpress, SiVercel, SiGit, SiMongodb, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiScikitlearn, SiPython } from "react-icons/si";
import { Database } from "lucide-react";
import princePortrait from "@/assets/prince-kumar-portrait.jpg";
import LogoLoop from "@/components/LogoLoop";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiExpress />, title: "Express" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiGit />, title: "Git" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiTailwindcss />, title: "Tailwind" },
  { node: <SiPython />, title: "Python" },
  { node: <SiScikitlearn />, title: "Scikit-Learn" },
  { node: <Database />, title: "SQL" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-8 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="heading-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] mb-0">
            About
          </h1>
        </motion.div>

        {/* Main Content with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12"
        >
          {/* Photo */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)] blur-2xl -z-20 pointer-events-none" />
              <img
                src={princePortrait}
                alt="Prince Kumar — Developer"
                className="w-full max-w-sm max-h-[420px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 -z-10" />
            </motion.div>
            <p className="text-sm text-muted-foreground mt-6 uppercase tracking-wider">
              Software Engineer
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["📍 VIT Vellore", "3rd Year SE", "Open to Opportunities"].map((chip) => (
                <span
                  key={chip}
                  className="text-xs px-3 py-1 rounded-full border border-border/40 bg-muted/20 text-muted-foreground whitespace-nowrap"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground mb-8">
              I don't just write code.
              <br />
              <span className="text-primary">
                I build products that solve real problems.
              </span>
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm Prince Kumar, a third-year Software Engineering student at VIT
              Vellore who enjoys building machine learning models and integrating
              them into full-stack web applications. I regularly practice
              problem-solving on LeetCode to strengthen my data structures and
              algorithms skills. I'm passionate about creating clean user
              experiences and developing systems that are both efficient and scalable.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { emoji: "🧠", title: "ML & AI", desc: "Building intelligent models" },
                { emoji: "⚡", title: "Full-Stack", desc: "End-to-end web apps" },
                { emoji: "📊", title: "DSA", desc: "75+ LeetCode problems solved" },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                  className="flex items-center gap-3 px-4 py-3 border border-border/50 bg-muted/30 backdrop-blur-sm rounded-lg hover:border-primary/40 hover:bg-muted/50 transition-all duration-300 group"
                >
                  <span className="text-lg">{card.emoji}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{card.title}</span>
                    <span className="text-xs text-muted-foreground">{card.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-semibold uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Tech Stack Logo Loop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-20"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-8">
            Skills
          </span>
          <div className="h-[140px] md:h-[160px] relative overflow-hidden mb-24">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="hsl(var(--background))"
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default About;
