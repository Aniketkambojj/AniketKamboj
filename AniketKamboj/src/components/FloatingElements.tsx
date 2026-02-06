import { motion } from "motion/react";

export function FloatingElements() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, 25, 0],
      rotate: [0, -10, 0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -30, 0],
      x: [0, 15, 0, -15, 0],
      rotate: [0, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Floating geometric shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-[10%] w-32 h-32 border-2 border-[#0ea5e9]/20 rounded-3xl"
        style={{ 
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg, rgba(14, 165, 233, 0.05), transparent)"
        }}
      />

      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute top-1/3 right-[15%] w-40 h-40 border-2 border-[#06b6d4]/20 rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.05), transparent)"
        }}
      />

      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className="absolute bottom-1/4 left-[20%] w-24 h-24 border-2 border-[#0ea5e9]/20"
        style={{ 
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          background: "linear-gradient(45deg, rgba(14, 165, 233, 0.05), transparent)"
        }}
      />

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-2/3 right-[25%] w-36 h-36 border-2 border-[#06b6d4]/20 rounded-2xl"
        style={{ 
          transform: "rotate(30deg)",
          background: "linear-gradient(225deg, rgba(6, 182, 212, 0.05), transparent)"
        }}
      />

      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-1/3 right-[10%] w-28 h-28 border-2 border-[#0ea5e9]/20 rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.05), transparent)"
        }}
      />

      {/* Additional small floating circles */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[35%] w-4 h-4 bg-[#0ea5e9] rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[45%] right-[30%] w-3 h-3 bg-[#06b6d4] rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[30%] left-[45%] w-5 h-5 bg-[#0ea5e9] rounded-full blur-sm"
      />
    </div>
  );
}
