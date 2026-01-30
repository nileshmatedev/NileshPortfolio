import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  index: number;
}

function StatItem({ value, suffix = "", label, index }: StatProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: index * 0.2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, index, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-teal-400/50 transition-all duration-300">
        <div className="flex items-baseline justify-center mb-2">
          <motion.span
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontWeight: 600 }}
          >
            {rounded}
          </motion.span>
          <span
            className="text-3xl md:text-4xl text-teal-400 ml-1"
            style={{ fontWeight: 600 }}
          >
            {suffix}
          </span>
        </div>
        <p
          className="text-white/70 text-sm md:text-base uppercase tracking-wider"
          style={{ fontWeight: 400 }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function StatsCounter() {
  const stats = [
    { value: 200, suffix: "+", label: "Functional Tests Automated" },
    { value: 45, suffix: "+", label: "Manual Test Cases" },
    { value: 15, suffix: "+", label: "Defects Identified" },
    { value: 100, suffix: "%", label: "Traceability Achieved" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} index={index} />
      ))}
    </div>
  );
}
