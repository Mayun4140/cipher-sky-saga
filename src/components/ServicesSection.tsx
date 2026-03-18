import { motion } from "framer-motion";
import { Globe, Link, Brain, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Development of modern responsive websites using HTML, CSS, and JavaScript.",
  },
  {
    icon: Link,
    title: "Blockchain Development",
    desc: "Decentralized applications and smart contracts using Ethereum and blockchain technologies.",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    desc: "Predictive models and AI-powered solutions using Python and ML algorithms.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    desc: "Deployment and management of applications on cloud platforms such as Google Cloud.",
  },
];

const ServicesSection = () => (
  <section id="services" className="relative">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span className="gradient-text">Services</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 group hover:glow-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
