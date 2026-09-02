"use client";
import { motion, Variants } from "framer-motion";

interface Project {
  title: string;
  url: string;
  techs: string[];
  number: string;
}

const projects: Project[] = [
  {
    title: "Clubarant",
    url: "https://www.clubarant.com/",
    techs: ["Next.js", "Tailwind", "Framer Motion"],
    number: "01",
  },
  {
    title: "Rogue Dev",
    url: "https://www.roguedevtech.com/",
    techs: ["React", "SCSS", "Animations"],
    number: "02",
  },
  {
    title: "Bricklage",
    url: "https://www.bricklage.com/",
    techs: ["Next.js", "SCSS", "Deploy"],
    number: "03",
  },
  {
    title: "TBII",
    url: "https://tbii.ca/",
    techs: ["Next.js", "E-Commerce", "TypeScript"],
    number: "04",
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface ProjectRowProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectRowProps) => {
  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group w-full py-8 md:py-10 cursor-pointer"
    >
      <div className="flex items-center justify-between gap-6">
        {/* Left: number + title */}
        <div className="flex items-center gap-5 md:gap-8 min-w-0">
          <span
            className="hidden sm:block text-xs font-mono shrink-0 transition-colors duration-300"
            style={{
              color: "var(--text-tertiary)",
              fontFamily: "monospace",
            }}
          >
            {project.number}
          </span>

          <motion.h3
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-syne text-[36px] md:text-[60px] lg:text-[76px] leading-none truncate transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, var(--text-tertiary) 0%, var(--border-strong) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLHeadingElement;
              el.style.background =
                "linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)";
              el.style.webkitBackgroundClip = "text";
              el.style.backgroundClip = "text";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLHeadingElement;
              el.style.background =
                "linear-gradient(135deg, var(--text-tertiary) 0%, var(--border-strong) 100%)";
              el.style.webkitBackgroundClip = "text";
              el.style.backgroundClip = "text";
            }}
          >
            {project.title}
          </motion.h3>
        </div>

        {/* Right: tech pills + CTA */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300"
            style={{
              border: "1px solid rgba(229, 99, 55, 0.35)",
              color: "var(--accent)",
              fontFamily: "var(--font-karla), sans-serif",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(229,99,55,0.1)";
              el.style.borderColor = "rgba(229,99,55,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "rgba(229,99,55,0.35)";
            }}
          >
            VISIT SITE ↗
          </motion.a>

          <div className="flex flex-wrap justify-end gap-1.5">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono"
                style={{
                  backgroundColor: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-tertiary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-8 h-px transition-all duration-500"
        style={{
          background:
            "linear-gradient(to right, rgba(229,99,55,0.4), var(--border-subtle), transparent)",
        }}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(229,99,55,0.04)" }}
        aria-hidden
      />

      <div className="page_container relative">
        {/* Section header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label block mb-3">Selected Work</span>
          <h2
            className="text-[36px] md:text-[48px] font-bold text-[color:var(--text-primary)]"
            style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}
          >
            Projects
          </h2>
        </motion.div>

        {/* Project rows */}
        <div className="w-full">
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;