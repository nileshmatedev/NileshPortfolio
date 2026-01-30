import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import BlurText from "./BlurText";
import FloatingParticles from "./FloatingParticles";
import { TypingEffect } from "./TypingEffect";
import { TestingDashboard } from "./TestingDashboard";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [key, setKey] = useState(0);
  const texts = ["Nilesh!", "S D E T"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated background gradient effects with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main central horizontal glow */}
        <motion.div
          className="absolute w-[1800px] h-[600px] rounded-full blur-[100px]"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(20, 184, 166, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Left side glow */}
        <motion.div
          className="absolute w-[800px] h-[600px] rounded-full blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)",
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            scale: {
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Right side glow */}
        <motion.div
          className="absolute w-[800px] h-[600px] rounded-full blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            scale: {
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Main Content - Center */}
        <div
          className="relative min-h-screen flex flex-col justify-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full mb-8"
          >
            <motion.p
              className="text-white/90 text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide text-left mb-4"
              style={{ fontWeight: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hey, I'm
            </motion.p>

            <div className="mb-6">
              <AnimatePresence mode="wait">
                <h1 
                  key={key}
                  className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[320px] text-white leading-none block"
                  style={{ fontWeight: 500 }}
                >
                  <BlurText
                    text={texts[currentText]}
                    delay={80}
                    animateBy="letters"
                    direction="top"
                  />
                </h1>
              </AnimatePresence>
            </div>

            {/* Typing Effect Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8"
            >
              <TypingEffect
                texts={[
                  "Building quality into every line of code...",
                  "Ensuring flawless user experiences...",
                  "Automating tests with precision...",
                  "Making software reliable and robust...",
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                delayBetweenTexts={2500}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-4 relative z-50 pointer-events-auto"
            >
              <MagneticButton
                variant="primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                onClick={() => scrollToSection("contact")}
              >
                Let's Talk
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

      {/* Scroll Indicator - Bottom Center */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/60 text-sm">scroll</span>
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
      </div>
    </section>
  );
}