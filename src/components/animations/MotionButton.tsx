import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface Props {
  href: string;
  label: string;
}

export default function MotionButton({ href, label }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e2e8f0] px-5 text-sm font-semibold text-[#0b0c10] shadow-[0_0_28px_rgba(226,232,240,0.16)]"
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <span>{label}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
    </motion.a>
  );
}
