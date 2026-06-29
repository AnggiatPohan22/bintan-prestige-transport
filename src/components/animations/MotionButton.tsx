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
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c9a14a] px-5 text-sm font-semibold text-[#111317] shadow-sm"
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
