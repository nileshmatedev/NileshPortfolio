import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const projectData = {
  ecommerce: {
    title: "E-Commerce Test Automation Suite",
    subtitle: "The Souled Store",
    description:
      "Developed a comprehensive test automation framework for The Souled Store e-commerce platform using Python and Selenium WebDriver 4.0. The suite automates critical user flows and validates core functionality across multiple browsers.",
    image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHdlYnNpdGUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2OTc2NDA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Test Automation",
    technologies: [
      "Python",
      "Selenium WebDriver 4.0",
      "Pytest",
      "HTML Reporting",
      "XPath",
      "CSS Selectors",
    ],
    features: [
      "200+ automated functional test cases with 75% pass rate",
      "OTP-based login automation with session management",
      "Dynamic carousel and sticky navigation testing",
      "Smart wait strategies for optimal performance",
      "Reusable browser session architecture",
      "Custom HTML reports for real-time defect analysis",
      "Cross-browser compatibility testing",
      "Page Object Model (POM) design pattern",
    ],
    challenges: [
      "Handling dynamic OTP verification in automated tests",
      "Managing asynchronous content loading with smart waits",
      "Creating reusable session strategies for complex user flows",
    ],
    outcomes: [
      "Reduced regression testing time by 60%",
      "Identified 45+ critical bugs before production",
      "Achieved 75% test pass rate across all modules",
      "Improved overall code coverage and reliability",
    ],
    githubUrl: "https://github.com/nileshmatedev/the-soul-store-test-automation",
    liveUrl: "https://www.thesouledstore.com", // The actual website
  },
  erp: {
    title: "Functional Testing of DMIHER ERP LMS",
    subtitle: "Educational ERP System",
    description:
      "Conducted comprehensive manual testing of DMIHER's ERP Learning Management System, focusing on Home Page and Student Services modules. Ensured data accuracy, navigation flows, and cross-browser compatibility.",
    image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnAlMjBzeXN0ZW0lMjB0ZXN0aW5nJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NzY0MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Manual Testing",
    technologies: [
      "Manual Testing",
      "Test Case Design",
      "Chrome DevTools",
      "Cross-Browser Testing",
      "Bug Tracking",
      "Test Documentation",
    ],
    features: [
      "45+ comprehensive manual test cases",
      "Home Page and Student Service module coverage",
      "Critical defect identification (15+ bugs)",
      "Cross-browser testing on Chrome (Windows 11)",
      "Complete test documentation with 100% traceability",
      "Data synchronization validation",
      "Navigation flow testing",
      "Access control verification",
    ],
    challenges: [
      "Identifying critical 'Access Denied' errors in Exam Registration",
      "Validating complex data synchronization across modules",
      "Ensuring consistent behavior across different browsers",
    ],
    outcomes: [
      "Identified 15+ functional defects including critical access issues",
      "Achieved 100% test case traceability",
      "Improved system reliability for student services",
      "Enhanced data accuracy across modules",
    ],
    githubUrl: "", // Add your GitHub repository URL here
    liveUrl: "", // No live URL for this project
  },
};

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projectData[projectId as keyof typeof projectData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Backdrop blur effect */}
      <div className="fixed inset-0 backdrop-blur-xl bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span style={{ fontWeight: 400 }}>Back to Projects</span>
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12"
        >
          <LazyLoadImage
            src={project.image}
            alt={project.title}
            effect="blur"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm mb-4"
              style={{ fontWeight: 400 }}
            >
              {project.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl mb-2"
              style={{ fontWeight: 500 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/70"
              style={{ fontWeight: 400 }}
            >
              {project.subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 border border-teal-400/30 rounded-lg hover:bg-teal-500/20 hover:border-teal-400/50 transition-all group"
            >
              <Github className="w-5 h-5 text-teal-400" />
              <span className="text-white" style={{ fontWeight: 400 }}>
                View on GitHub
              </span>
              <ExternalLink className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <ExternalLink className="w-5 h-5 text-white/70" />
              <span className="text-white/70" style={{ fontWeight: 400 }}>
                View Live Site
              </span>
            </a>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2
                className="text-2xl md:text-3xl mb-4 text-teal-400"
                style={{ fontWeight: 500 }}
              >
                Project Overview
              </h2>
              <p
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontWeight: 400 }}
              >
                {project.description}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2
                className="text-2xl md:text-3xl mb-6 text-teal-400"
                style={{ fontWeight: 500 }}
              >
                Key Features
              </h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p
                      className="text-white/80 leading-relaxed"
                      style={{ fontWeight: 400 }}
                    >
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2
                className="text-2xl md:text-3xl mb-6 text-teal-400"
                style={{ fontWeight: 500 }}
              >
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-teal-400/30 transition-all"
                  >
                    <p
                      className="text-white/80 leading-relaxed"
                      style={{ fontWeight: 400 }}
                    >
                      {challenge}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2
                className="text-2xl md:text-3xl mb-6 text-teal-400"
                style={{ fontWeight: 500 }}
              >
                Results & Impact
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="p-5 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-400/20 rounded-lg hover:border-teal-400/40 transition-all"
                  >
                    <p
                      className="text-white/90 leading-relaxed"
                      style={{ fontWeight: 400 }}
                    >
                      {outcome}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="sticky top-8"
            >
              <h3
                className="text-xl mb-4 text-teal-400"
                style={{ fontWeight: 500 }}
              >
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:bg-teal-500/10 hover:border-teal-400/30 transition-all"
                    style={{ fontWeight: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
