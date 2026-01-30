import { motion } from "motion/react";
import { useState, ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Main text */}
      <motion.div
        className={className}
      >
        {children}
      </motion.div>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          {/* Red channel */}
          <motion.div
            className={`${className} absolute inset-0 opacity-70 pointer-events-none`}
            style={{
              color: "#ff0000",
              mixBlendMode: "screen",
            }}
            animate={{
              x: [-2, 2, -2],
              y: [0, -1, 1, 0],
            }}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            {children}
          </motion.div>

          {/* Cyan channel */}
          <motion.div
            className={`${className} absolute inset-0 opacity-70 pointer-events-none`}
            style={{
              color: "#00ffff",
              mixBlendMode: "screen",
            }}
            animate={{
              x: [2, -2, 2],
              y: [1, 0, -1, 0],
            }}
            transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
          >
            {children}
          </motion.div>

          {/* Green scanlines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(20, 184, 166, 0.1) 0px, transparent 2px, transparent 4px)",
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
        </>
      )}
    </div>
  );
}