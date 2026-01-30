import { motion } from "motion/react";
import { Award, BookOpen, TrendingUp } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface BadgeProps {
  title: string;
  issuer: string;
  year?: string;
  icon: React.ReactNode;
  status: "completed" | "in-progress";
  index: number;
}

function CertBadge({ title, issuer, year, icon, status, index }: BadgeProps) {
  const isCompleted = status === "completed";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
      className="relative group"
    >
      <motion.div
        className={`relative bg-black/40 backdrop-blur-sm border rounded-2xl p-6 ${
          isCompleted
            ? "border-teal-400/30 hover:border-teal-400/60"
            : "border-purple-400/30 hover:border-purple-400/60"
        } transition-all duration-300`}
        whileHover={{ y: -5 }}
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isCompleted
              ? "bg-gradient-to-br from-teal-400/20 to-cyan-400/20"
              : "bg-gradient-to-br from-purple-400/20 to-pink-400/20"
          }`}
        />

        <div className="relative z-10">
          {/* Icon with status indicator */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl ${
                isCompleted
                  ? "bg-teal-400/10 border border-teal-400/30"
                  : "bg-purple-400/10 border border-purple-400/30"
              }`}
            >
              <div
                className={isCompleted ? "text-teal-400" : "text-purple-400"}
              >
                {icon}
              </div>
            </div>
            {!isCompleted && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1 bg-purple-400/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-400/30"
                style={{ fontWeight: 400 }}
              >
                <TrendingUp className="w-3 h-3" />
                Learning
              </motion.div>
            )}
          </div>

          {/* Content */}
          <h4
            className="text-lg text-white mb-1 leading-tight"
            style={{ fontWeight: 500 }}
          >
            {title}
          </h4>
          <p
            className={`text-sm mb-1 ${
              isCompleted ? "text-teal-400/80" : "text-purple-400/80"
            }`}
            style={{ fontWeight: 400 }}
          >
            {issuer}
          </p>
          {year && (
            <p className="text-xs text-white/50" style={{ fontWeight: 400 }}>
              {year}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CertificationBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: "Software Testing Fundamentals For ISTQB Exams Prep Specialization",
      issuer: "Coursera",
      year: "Oct 2025",
      icon: <Award className="w-7 h-7" />,
      status: "completed" as const,
    },
    {
      title: "Introduction To Software Quality Assurance",
      issuer: "Coursera",
      year: "2025",
      icon: <Award className="w-7 h-7" />,
      status: "completed" as const,
    },
    {
      title: "Foundations Of Usability Testing",
      issuer: "Coursera",
      year: "2025",
      icon: <Award className="w-7 h-7" />,
      status: "completed" as const,
    },
    {
      title: "Microsoft 365 Fundamentals",
      issuer: "Microsoft",
      year: "2025",
      icon: <Award className="w-7 h-7" />,
      status: "completed" as const,
    },
  ];

  const learning: {
    title: string;
    issuer: string;
    icon: JSX.Element;
    status: "in-progress";
  }[] = [];

  return (
    <div ref={ref} className="mb-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h3
          className="text-3xl md:text-4xl text-white mb-2"
          style={{ fontWeight: 500 }}
        >
          Certifications & Learning
        </h3>
        <p className="text-white/60 text-lg" style={{ fontWeight: 400 }}>
          Continuous improvement through structured learning
        </p>
      </motion.div>

      {/* Completed Certifications */}
      <div className="mb-8">
        <motion.h4
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-teal-400 mb-4 flex items-center gap-2"
          style={{ fontWeight: 500 }}
        >
          <Award className="w-5 h-5" />
          Certified
        </motion.h4>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <CertBadge key={index} {...cert} index={index} />
          ))}
        </div>
      </div>

    </div>
  );
}