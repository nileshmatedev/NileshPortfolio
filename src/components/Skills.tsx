import { motion, useInView } from "motion/react";
import { useRef } from "react";
import LogoLoop from "./LogoLoop";
import GradientText from "./GradientText";
import { SkillCard } from "./SkillCard";
import { StatsCounter } from "./StatsCounter";
import { CertificationBadges } from "./CertificationBadges";
import { 
  SiSelenium, 
  SiCypress, 
  SiJest, 
  SiPostman, 
  SiPython, 
  SiJavascript,
  SiGit,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiJira,
  SiTestinglibrary,
  SiTypescript,
  SiGithub,
  SiGitlab
} from "react-icons/si";

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techLogos = [
    { node: <SiSelenium className="text-teal-400" />, title: "Selenium", href: "https://www.selenium.dev" },
    { node: <SiTestinglibrary className="text-teal-400" />, title: "Testing Library", href: "https://testing-library.com" },
    { node: <SiPostman className="text-teal-400" />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiPython className="text-teal-400" />, title: "Python", href: "https://www.python.org" },
    { node: <SiJavascript className="text-teal-400" />, title: "JavaScript", href: "https://developer.mozilla.org" },
    { node: <SiTypescript className="text-teal-400" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiGit className="text-teal-400" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-teal-400" />, title: "GitHub", href: "https://github.com" },
    { node: <SiGitlab className="text-teal-400" />, title: "GitLab", href: "https://gitlab.com" },
    { node: <SiJenkins className="text-teal-400" />, title: "Jenkins", href: "https://www.jenkins.io" },
    { node: <SiJira className="text-teal-400" />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  ];

  const featuredSkills = [
    {
      name: "Selenium WebDriver",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      proficiency: 85,
      description: "Expert in web automation with Selenium for browser testing across multiple platforms.",
      projects: ["E-Commerce Testing", "Login Flow Automation"],
      certified: true,
    },
    {
      name: "Postman / API Testing",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      proficiency: 75,
      description: "Strong skills in REST API testing, automation, and creating comprehensive test collections.",
      projects: ["API Suite Automation", "Integration Testing"],
      certified: false,
    },
    {
      name: "Python Testing",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency: 70,
      description: "Test automation with Python using Pytest, unittest, and custom testing frameworks.",
      projects: ["Unit Test Framework", "Data Validation"],
      certified: false,
    },
    {
      name: "JavaScript / TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency: 80,
      description: "Modern testing with Jest, Mocha, and TypeScript for type-safe test development.",
      projects: ["Component Testing", "React App Testing"],
      certified: false,
    },
    {
      name: "CI/CD - Jenkins",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      proficiency: 65,
      description: "Setting up automated testing pipelines and continuous integration workflows.",
      projects: ["Pipeline Automation", "Test Reporting"],
      certified: false,
    },
  ];

  return (
    <motion.section 
      ref={ref}
      id="skills" 
      className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden z-30"
    >
      {/* Subtle backdrop overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white"
            style={{ fontWeight: 500 }}
          >
            Skills & Expertise
          </h2>
          <div className="text-xl md:text-2xl max-w-2xl mx-auto text-white/70" style={{ fontWeight: 400 }}>
            11 tools • 5 core skills
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="max-w-7xl mx-auto px-6">
          <StatsCounter />

          {/* Featured Skills Section */}
          <div className="mb-20">
            <h3
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontWeight: 500 }}
            >
              Core Testing Skills
            </h3>
            <p className="text-white/60 text-lg mb-10" style={{ fontWeight: 400 }}>
              Hover over each skill to learn more about my experience
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} index={index} />
              ))}
            </div>
          </div>

          {/* Certifications & Learning Section */}
          <CertificationBadges />
        </div>
      </div>
    </motion.section>
  );
}