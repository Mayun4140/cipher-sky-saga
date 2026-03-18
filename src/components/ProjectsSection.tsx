import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Blockchain-Enabled Land Registry System",
    tech: ["Blockchain", "Smart Contracts", "Ethereum", "Web Dev"],
    desc: "A decentralized application that secures land records using blockchain immutability and transparency to prevent fraud.",
  },
  {
    title: "Smart Air Quality Monitoring & Alert System",
    tech: ["Python", "Machine Learning", "Real-time APIs"],
    desc: "AI-powered system providing real-time AQI monitoring and predictive alerts for environmental safety.",
  },
  {
    title: "Machine Learning Model Development",
    tech: ["Python", "ML Algorithms"],
    desc: "Predictive models and data analysis developed as part of the IBM Data Science Professional certification.",
  },
  {
    title: "Web Development Portfolio",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    desc: "A personal portfolio website built to showcase technical skills, certifications, and academic projects.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 group hover:glow-border transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Mayun4140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors"
            >
              View on GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
