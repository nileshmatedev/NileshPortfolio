import { motion } from "motion/react";
import { memo } from "react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-teal-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: "0 0 10px rgba(20, 184, 166, 0.3)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const particles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 10 + 20,
  delay: Math.random() * 5,
}));

const isNear = (particle: Particle, mousePosition: { x: number; y: number }) => {
  const distanceX = Math.abs(particle.x - mousePosition.x);
  const distanceY = Math.abs(particle.y - mousePosition.y);
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  return distance < 20;
};

const mousePosition = { x: 0, y: 0 };

const handleMouseMove = (e: MouseEvent) => {
  mousePosition.x = (e.clientX / window.innerWidth) * 100;
  mousePosition.y = (e.clientY / window.innerHeight) * 100;
};

window.addEventListener("mousemove", handleMouseMove);

export default memo(FloatingParticles);