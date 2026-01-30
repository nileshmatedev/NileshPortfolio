import { motion } from "motion/react";
import { useState } from "react";
import { Badge, CheckCircle2 } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  description: string;
  projects?: string[];
  certified?: boolean;
  index: number;
}

export function SkillCard({
  name,
  icon,
  proficiency,
  description,
  projects,
  certified,
  index,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getProficiencyColor = (level: number) => {
    if (level >= 80) return "from-teal-400 to-cyan-400";
    if (level >= 50) return "from-cyan-400 to-blue-400";
    return "from-blue-400 to-purple-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Card */}
      <motion.div
        className="relative h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden cursor-pointer"
        animate={{
          scale: isHovered ? 1.02 : 1,
          borderColor: isHovered ? "rgba(45, 212, 191, 0.5)" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            filter: "blur(20px)",
          }}
        />

        {/* Particles on hover - Reduced from 6 to 3 */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-teal-400 rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  opacity: 1,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}

        <div className="relative z-10">
          {/* Icon and Badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
              <img src={icon} alt={name} className="w-10 h-10 object-contain" />
            </div>
            {certified && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <CheckCircle2 className="w-6 h-6 text-teal-400" />
              </motion.div>
            )}
          </div>

          {/* Name */}
          <h3 className="text-xl text-white mb-2" style={{ fontWeight: 500 }}>
            {name}
          </h3>

          {/* Expanded content on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/70 mb-3 leading-relaxed" style={{ fontWeight: 400 }}>
              {description}
            </p>
            {projects && projects.length > 0 && (
              <div>
                <p className="text-xs text-white/50 mb-2" style={{ fontWeight: 400 }}>
                  Used in:
                </p>
                <div className="flex flex-wrap gap-1">
                  {projects.map((project, i) => (
                    <span
                      key={i}
                      className="text-xs bg-teal-400/20 text-teal-300 px-2 py-1 rounded-full border border-teal-400/30"
                      style={{ fontWeight: 400 }}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}