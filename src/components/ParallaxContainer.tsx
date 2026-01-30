import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ParallaxContainerProps {
  children: ReactNode;
}

export function ParallaxContainer({ children }: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={ref} className="relative">
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return (
    <motion.section ref={ref} style={{ y }} className={className}>
      {children}
    </motion.section>
  );
}
