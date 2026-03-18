import { motion } from "framer-motion";
import { Code, Globe, Cpu, Wrench, Award, Trophy } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["C", "C++", "Java", "Python", "SQL"],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "Web Architecture"],
  },
  {
    title: "Core Domains",
    icon: Cpu,
    items: ["Blockchain Technology", "Cloud Computing", "Machine Learning"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["LaTeX", "OpenAI API", "MS Office Suite", "Dribbble"],
  },
  {
    title: "Certifications",
    icon: Award,
    items: [
      "SAP S/4 HANA Development",
      "IBM Data Science Professional",
      "Google Cloud (ACE Track)",
    ],
  },
  {
    title: "Achievement",
    icon: Trophy,
    items: ["AIR 20 – Vultr Cloud Innovate Hackathon"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Skills & <span className="gradient-text">Expertise</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="skill-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
