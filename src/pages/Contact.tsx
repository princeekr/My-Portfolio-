import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="heading-display text-[clamp(2.5rem,10vw,10rem)] leading-[0.85] mb-8">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have a project or collaboration in mind? Let's connect and build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5"
          >
            <div className="space-y-12">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
                  Email
                </span>
                <a 
                  href="mailto:princee.kumar2023@gmail.com" 
                  className="text-base md:text-2xl text-foreground hover:text-primary transition-colors inline-flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="[overflow-wrap:anywhere] text-sm md:text-2xl">princee.kumar2023@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
                  Connect
                </span>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://github.com/princeekr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-foreground hover:text-primary transition-colors inline-flex items-center gap-3"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/prince-kr-23363231a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-foreground hover:text-primary transition-colors inline-flex items-center gap-3"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-12">
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
                  Open to
                </span>
                <p className="text-lg text-foreground">
                  Internship opportunities, freelance projects, and collaborations.
                  <br />
                  <span className="text-primary">Let's talk.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;