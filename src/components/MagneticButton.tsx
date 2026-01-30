import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export function MagneticButton({
  children,
  onClick,
  variant = "primary",
  icon,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate percentage position for glow effect
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x: x * 0.3, y: y * 0.3 });
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
    setGlowPosition({ x: 50, y: 50 });
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const isPrimary = variant === "primary";

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative overflow-hidden px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 group ${
        isPrimary
          ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-black hover:shadow-[0_0_40px_rgba(20,184,166,0.6)]"
          : "bg-transparent border-2 border-white/30 text-white hover:border-teal-400 hover:bg-teal-400/10 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
      }`}
      style={{ fontWeight: 500 }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Interactive mouse follow glow */}
      <motion.div
        className={`absolute rounded-full blur-xl pointer-events-none ${
          isPrimary ? "bg-white/20" : "bg-teal-400/30"
        }`}
        style={{
          width: "150px",
          height: "150px",
          left: `${glowPosition.x}%`,
          top: `${glowPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className={`absolute rounded-full ${
            isPrimary ? "bg-white/30" : "bg-teal-400/30"
          }`}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon || (
          <motion.span
            animate={{ 
              x: isHovered ? 5 : 0,
              rotate: isHovered ? 0 : -45,
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        )}
      </span>

      {/* Sweeping glow effect on hover */}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {/* Pulsing border effect for secondary button */}
      {!isPrimary && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-teal-400/0"
          animate={{
            borderColor: isHovered 
              ? ["rgba(20, 184, 166, 0)", "rgba(20, 184, 166, 0.5)", "rgba(20, 184, 166, 0)"]
              : "rgba(20, 184, 166, 0)",
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      )}
    </motion.button>
  );
}