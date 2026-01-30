import { motion } from "motion/react";
import { useMemo } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
}

export default function BlurText({
  text,
  delay = 50,
  animateBy = "letters",
  direction = "top",
  onAnimationComplete,
  className = "",
}: BlurTextProps) {
  const segments = useMemo(() => {
    if (animateBy === "words") {
      return text.split(" ");
    }
    return text.split("");
  }, [text, animateBy]);

  const directionOffset = {
    top: { y: -20, x: 0 },
    bottom: { y: 20, x: 0 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
  };

  const offset = directionOffset[direction];

  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            delay: (index * delay) / 1000,
            ease: [0.23, 1, 0.32, 1],
          }}
          onAnimationComplete={
            index === segments.length - 1 ? onAnimationComplete : undefined
          }
          style={{
            display: "inline-block",
            whiteSpace: animateBy === "words" ? "normal" : "pre",
          }}
        >
          {segment}
          {animateBy === "words" && index < segments.length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}