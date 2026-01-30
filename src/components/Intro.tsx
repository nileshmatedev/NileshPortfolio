import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import ShinyText from "./ShinyText";

export function Intro() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // Skip mouse tracking on mobile

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="intro" 
      className="relative min-h-screen flex items-center overflow-hidden z-20"
    >
      {/* Subtle gradient overlay - reduced opacity */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none -z-10">
        {/* Main teal to green gradient */}
        <motion.div
          className="absolute w-[1800px] h-[800px] rounded-full blur-[150px]"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(20, 184, 166, 0.5) 0%, rgba(6, 182, 212, 0.4) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Left darker teal accent */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] bg-teal-500/40 rounded-full blur-[130px]"
          animate={{
            x: mousePosition.x * 1.5,
            y: mousePosition.y * 1.5,
            scale: [1, 1.15, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 25 },
            y: { type: "spring", stiffness: 50, damping: 25 },
            scale: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Right green accent */}
        <motion.div
          className="absolute w-[900px] h-[900px] bg-cyan-500/35 rounded-full blur-[130px]"
          animate={{
            x: -mousePosition.x * 1.5,
            y: mousePosition.y * 1.5,
            scale: [1.15, 1, 1.15],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 25 },
            y: { type: "spring", stiffness: 50, damping: 25 },
            scale: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Interactive cursor glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[100px]"
          animate={{
            x: mousePosition.x * 2.5,
            y: mousePosition.y * 2.5,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Small text */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-4"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ShinyText
              text="I'll make your"
              speed={3}
              color="#ffffff"
              shineColor="#14b8a6"
              spread={100}
              direction="left"
              delay={1}
            />
          </motion.p>

          {/* Large text */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-8 md:mb-12"
            style={{ fontWeight: 500 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ShinyText
              text="software reliable!"
              speed={3}
              color="#ffffff"
              shineColor="#14b8a6"
              spread={100}
              direction="left"
              delay={1.5}
            />
          </motion.h2>

          {/* Description with left border */}
          <motion.div
            className="border-l-4 border-teal-400/50 pl-6 md:pl-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
              I help teams build quality products through comprehensive testing strategies – 
              automated, efficient, and with bug-free results in mind.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-teal-500/20 hover:bg-teal-500/30 text-white border border-teal-400/50 hover:border-teal-400 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 group"
            >
              To the projects!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}