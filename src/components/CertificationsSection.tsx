import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certs = [
  { title: "IBM Data Science Professional Certification", sub: "Machine Learning Algorithms" },
  { title: "SAP S/4 HANA Development Certification", sub: "Enterprise Applications" },
  { title: "Google Cloud Associate Cloud Engineer Training", sub: "Cloud Infrastructure" },
];

const CertificationsSection = () => (
  <section id="certifications" className="relative">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Certifications & <span className="gradient-text">Achievements</span>
      </motion.h2>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center hover:glow-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{c.title}</h3>
            <p className="text-xs text-muted-foreground">{c.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card glow-border p-8 max-w-md mx-auto text-center"
      >
        <Trophy className="w-10 h-10 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-bold text-foreground mb-1">All India Rank 20</h3>
        <p className="text-sm text-muted-foreground">Vultr Cloud Innovate Hackathon</p>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
