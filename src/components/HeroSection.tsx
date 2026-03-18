import { motion } from "framer-motion";
import profileImg from "@/assets/profile-avatar.png";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="section-container text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden glow-border animate-glow-pulse">
          <img src={profileImg} alt="Mayun Giri" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="gradient-text">Mayun Giri</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-primary text-lg md:text-xl font-medium mb-6 text-glow"
      >
        Blockchain Developer | Cloud Enthusiast | Machine Learning Explorer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Final-year Computer Science student specializing in Blockchain Technology, Full-Stack
        Web Development, and Cloud Computing. Building secure, scalable, and decentralized
        solutions to real-world problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </motion.div>
    </div>

    {/* Scrolling marquee */}
    <div className="absolute bottom-8 left-0 right-0 overflow-hidden opacity-20">
      <div className="animate-marquee whitespace-nowrap text-2xl font-bold text-foreground/30">
        <span className="mx-8">Design System</span>
        <span className="mx-8">▶</span>
        <span className="mx-8">User Interface</span>
        <span className="mx-8">▲</span>
        <span className="mx-8">Product Design</span>
        <span className="mx-8">▶</span>
        <span className="mx-8">Web Applications</span>
        <span className="mx-8">▲</span>
        <span className="mx-8">Blockchain</span>
        <span className="mx-8">▶</span>
        <span className="mx-8">Cloud Computing</span>
        <span className="mx-8">▲</span>
        <span className="mx-8">Design System</span>
        <span className="mx-8">▶</span>
        <span className="mx-8">User Interface</span>
        <span className="mx-8">▲</span>
        <span className="mx-8">Product Design</span>
        <span className="mx-8">▶</span>
        <span className="mx-8">Web Applications</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
