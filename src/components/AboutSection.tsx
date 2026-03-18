import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
          </div>
          <h4 className="font-medium text-foreground mb-1">B.Tech in Computer Science & Engineering</h4>
          <p className="text-muted-foreground text-sm mb-1">Techno India University</p>
          <p className="text-primary text-sm">Expected Graduation: 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Experience</h3>
          </div>
          <h4 className="font-medium text-foreground mb-1">Web Development Intern</h4>
          <p className="text-muted-foreground text-sm mb-1">CodSoft</p>
          <p className="text-primary text-sm">February 2026 – March 2026</p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center max-w-3xl mx-auto mt-10 leading-relaxed"
      >
        Passionate about building decentralized technologies, scalable cloud systems, and
        AI-driven solutions. Currently working on a Blockchain-Enabled Land Registry System
        as my final-year project, aimed at improving data transparency and fraud prevention.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
