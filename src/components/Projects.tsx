import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import MagicBento from "./MagicBento";

interface ProjectsProps {
  onProjectClick?: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projectCards = [
    {
      color: "#0a0a0a",
      title: "E-Commerce Test Automation Suite",
      description:
        "The Souled Store | Python & Selenium - Developed a robust Python and Selenium suite covering 200+ functional tests with 75% pass rate. Automated intricate user flows including OTP-based login, sticky navigation, and dynamic carousel interactions using Selenium WebDriver 4.0 with smart waits. Engineered reusable browser session strategy and custom HTML reporting for real-time defect analysis.",
      label: "Python & Selenium",
      image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHdlYnNpdGUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2OTc2NDA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projectId: "ecommerce"
    },
    {
      color: "#0a0a0a",
      title: "Functional Testing of DMIHER ERP LMS",
      description:
        "Developed and executed 45+ comprehensive manual test cases for Home Page and Student Service modules, ensuring seamless navigation and data accuracy. Identified 15+ functional defects including critical 'Access Denied' errors in Exam Registration and data synchronization issues. Performed Cross-Browser Testing on Windows 11 using Chrome and managed complete test documentation with 100% traceability.",
      label: "Manual Testing",
      image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnAlMjBzeXN0ZW0lMjB0ZXN0aW5nJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NzY0MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projectId: "erp"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-16 px-4 md:px-6 relative z-40" ref={ref}>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            Explore my testing automation and QA engineering work
          </p>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            spotlightRadius={300}
            particleCount={4}
            glowColor="20, 184, 166"
            disableAnimations={false}
            cards={projectCards}
            onCardClick={onProjectClick}
          />
        </motion.div>
      </div>
    </section>
  );
}