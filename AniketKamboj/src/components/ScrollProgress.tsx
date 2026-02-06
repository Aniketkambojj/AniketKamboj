import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0ea5e9] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#0ea5e9] origin-left z-[99] blur-md"
        style={{ scaleX, opacity: 0.5 }}
      />
    </>
  );
}
