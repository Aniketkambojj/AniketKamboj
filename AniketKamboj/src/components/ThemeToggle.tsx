import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
        theme === 'light'
          ? 'bg-white/80 border-gray-200 hover:bg-white shadow-lg'
          : 'bg-[#1e293b]/80 border-[#0ea5e9]/30 hover:bg-[#1e293b]'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'light' ? (
          <Moon className="h-6 w-6 text-[#0ea5e9]" />
        ) : (
          <Sun className="h-6 w-6 text-[#0ea5e9]" />
        )}
      </motion.div>
    </motion.button>
  );
}
