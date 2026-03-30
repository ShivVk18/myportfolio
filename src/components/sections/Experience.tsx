"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-20 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-10 lg:px-20 max-w-5xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            04. Employment
          </span>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4">
            Experience
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 sm:before:ml-[50px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">

          {/* Experience Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-background bg-card shadow-sm absolute left-6 sm:left-[50px] -translate-x-1/2 md:left-1/2 md:translate-x-[-50%] z-10 group-hover:bg-primary transition-colors bg-gradient-to-b from-primary/10 to-transparent">
              <div className="w-2 h-2 rounded-full bg-primary group-hover:w-3 group-hover:h-3 transition-all" />
            </div>

            <div className="w-[calc(100%-45px)] sm:w-[calc(100%-110px)] md:w-[calc(50%-40px)] ml-auto md:ml-0 p-5 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-lg hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:dark:shadow-[0_8px_30px_var(--color-primary)] transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-background border border-border shadow-sm text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Software Engineer Intern
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    MindIn · Remote
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border/50">
                    Aug 2025 – Nov 2025
                  </span>
                </div>
              </div>

              <div className="mb-5 pt-4 border-t border-border/50">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Node.js", "WebSockets", "Gemini API", "NativeWind"].map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">{tech}</span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground list-none pl-1">
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:opacity-50 before:rounded-full">
                  Collaborated closely with founders and product teams to build the MVP for a mental health startup.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:opacity-50 before:rounded-full">
                  Took end-to-end ownership of features in an agile environment.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-background bg-card shadow-sm absolute left-6 sm:left-[50px] -translate-x-1/2 md:left-1/2 md:translate-x-[-50%] z-10 group-hover:bg-primary transition-colors bg-gradient-to-b from-primary/10 to-transparent">
              <div className="w-2 h-2 rounded-full bg-primary group-hover:w-3 group-hover:h-3 transition-all" />
            </div>

            <div className="w-[calc(100%-45px)] sm:w-[calc(100%-110px)] md:w-[calc(50%-40px)] ml-auto md:ml-0 p-5 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-lg hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:dark:shadow-[0_8px_30px_var(--color-primary)] transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-background border border-border shadow-sm text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Graduate Engineer Trainee
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    MPSEDC · On-Site
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border/50">
                    Nov 2025 – Present
                  </span>
                </div>
              </div>

              <div className="mb-5 pt-4 border-t border-border/50">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Bootstrap", "ERP Systems"].map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">{tech}</span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground list-none pl-1">
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:opacity-50 before:rounded-full">
                  Designed and implemented responsive frontend pages for a Housing ERP system.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:opacity-50 before:rounded-full">
                  Gained hands-on experience with sprint-based delivery and large-scale CMS architecture.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
