import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import GradientText from "./GradientText";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact.nileshmate@gmail.com",
      color: "text-teal-400",
      bgGlow: "bg-teal-500/10",
      display: "contact.nileshmate@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nileshmatedev",
      color: "text-cyan-400",
      bgGlow: "bg-cyan-500/10",
      display: "@nileshmatedev",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nileshmatedev",
      color: "text-teal-300",
      bgGlow: "bg-teal-500/10",
      display: "@nileshmatedev",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative py-16 px-4 md:px-6 overflow-hidden z-30"
    >
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-white/50 text-lg" style={{ fontWeight: 400 }}>
            02 — Get In Touch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{ fontWeight: 500 }}
          >
            <GradientText
              colors={["#14b8a6", "#06b6d4", "#ffffff", "#14b8a6"]}
              animationSpeed={8}
              showBorder={false}
            >
              Let's Connect!
            </GradientText>
          </h2>
          <p
            className="text-xl md:text-2xl text-white/60 max-w-3xl"
            style={{ fontWeight: 400 }}
          >
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <h3
            className="text-3xl md:text-4xl text-white mb-6 text-center border-b-4 border-teal-400 pb-4"
            style={{ fontWeight: 500 }}
          >
            Connect With Me
          </h3>
          <p
            className="text-white/70 mb-10 text-lg text-center"
            style={{ fontWeight: 400 }}
          >
            I'm always excited to discuss testing strategies, automation
            frameworks, or potential collaboration opportunities.
          </p>

          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/20 transition-all group"
              >
                <div
                  className={`p-4 ${link.bgGlow} rounded-lg group-hover:scale-110 transition-transform`}
                >
                  <link.icon className={`w-6 h-6 ${link.color}`} />
                </div>
                <div>
                  <p className="text-white text-lg" style={{ fontWeight: 500 }}>
                    {link.label}
                  </p>
                  <p className="text-sm text-white/50" style={{ fontWeight: 400 }}>
                    {link.display}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}