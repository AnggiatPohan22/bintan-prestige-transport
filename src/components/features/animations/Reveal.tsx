import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
