import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GradientDivider from "@/components/GradientDivider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/princeekr", label: "GitHub" },
    { href: "https://www.linkedin.com/in/prince-kr-23363231a/", label: "LinkedIn" },
  ];

  return (
    <>
      <GradientDivider />
      <footer className="bg-background relative overflow-hidden">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top border glow */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Footer Content */}
        <div className="relative px-6 md:px-10 pt-10 pb-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:col-span-3"
              >
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
                  <span className="inline-block w-3 h-px bg-primary/60" />
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-200 text-[1.05rem] font-medium"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 ease-out" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Get in Touch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="md:col-span-4"
              >
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
                  <span className="inline-block w-3 h-px bg-primary/60" />
                  Get in Touch
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:princee.kumar2023@gmail.com"
                    className="group inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-200 text-[1.05rem] font-medium"
                  >
                    princee.kumar2023@gmail.com
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary" />
                  </a>
                  <p className="text-muted-foreground text-sm">Software Engineer</p>
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:col-span-3"
              >
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
                  <span className="inline-block w-3 h-px bg-primary/60" />
                  Connect
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-200 text-[1.05rem] font-medium"
                      >
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Circle */}
              {!isContactPage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 flex md:justify-end items-start"
                >
                  <Link
                    to="/contact"
                    className="relative inline-flex items-center justify-center w-24 h-24 md:w-[108px] md:h-[108px] bg-primary text-primary-foreground rounded-full hover:scale-105 hover:brightness-110 transition-all duration-300 group shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
                  >
                    {/* Spinning ring */}
                    <span className="absolute inset-0 rounded-full border border-primary/40 group-hover:border-primary/70 transition-colors duration-300" />
                    <span className="absolute inset-[-6px] rounded-full border border-primary/15 group-hover:border-primary/30 transition-colors duration-300" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-center leading-tight">
                      Let's<br />Connect
                    </span>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Divider */}
            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3"
            >
              <p className="text-sm text-muted-foreground/70">
                © {currentYear} Prince Kumar. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground/70">
                <span className="text-primary font-medium">Building</span> products that solve real problems.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
