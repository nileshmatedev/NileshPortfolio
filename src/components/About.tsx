import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { BookOpen, Code, Target, Zap, Download, ArrowRight } from "lucide-react";
import GradientText from "./GradientText";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleGetToKnowMe = () => {
    // Download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Nilesh_SDET_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success toast
    toast.success("Resume downloaded! Let's connect below 👇");
    
    // Smooth scroll to contact section after a brief delay
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 800);
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative py-12 md:py-16 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden z-30"
    >
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-white/50 text-lg" style={{ fontWeight: 400 }}>
            01 — About me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-16 leading-tight"
              style={{ fontWeight: 500 }}
            >
              About{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Nilesh Mate</span>
                <motion.span
                  className="absolute bottom-2 left-0 right-0 h-3 bg-teal-400/30"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>

            {/* Content box with left border */}
            <div className="border-l-4 border-teal-400 pl-8 space-y-6">
              <h3 className="text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 500 }}>
                Software Tester | Open to Relocation
              </h3>

              <p className="text-white/60 text-lg italic leading-relaxed" style={{ fontWeight: 400 }}>
                "Detail‑oriented tester focused on delivering reliable and high‑quality software."
              </p>

              <p className="text-white/80 text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                BCA graduate with strong proficiency in <strong className="text-white">Python</strong> and
                <strong className="text-white"> Selenium WebDriver</strong>, with hands‑on experience in
                <strong className="text-white"> Test Automation</strong>, <strong className="text-white">Manual Testing</strong>, and
                <strong className="text-white"> SQL</strong>.
              </p>

              <p className="text-white/80 text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                Built automation suites that cover complex user flows (OTP‑based login, sticky navigation,
                dynamic carousels) and developed reusable browser sessions with custom HTML reporting for
                faster defect analysis.
              </p>

              <p className="text-white/80 text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                Experienced in designing and executing comprehensive manual test cases, identifying critical
                defects, and maintaining complete test documentation with full traceability.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4 flex flex-wrap gap-4"
              >
                <Button
                  variant="outline"
                  className="group border-2 border-teal-400 bg-teal-400/10 hover:bg-teal-400/20 hover:border-teal-300 text-white px-6 py-6 text-lg"
                  style={{ fontWeight: 500 }}
                  onClick={handleGetToKnowMe}
                >
                  <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  className="group border-2 border-white/20 bg-transparent hover:bg-cyan-400/10 hover:border-cyan-400 text-white px-6 py-6 text-lg"
                  style={{ fontWeight: 400 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Let's Connect!{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src=""
                  alt="Avatar"
                  className="w-80 h-80 object-cover rounded-full"
                />
              </motion.div>
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl scale-110" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}