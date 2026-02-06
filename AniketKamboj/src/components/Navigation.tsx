import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? theme === 'light'
              ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200 shadow-lg"
              : "bg-[#1a1f35]/90 backdrop-blur-2xl border-b border-[#0ea5e9]/30 shadow-[0_8px_32px_rgba(14,165,233,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${
                theme === 'light'
                  ? 'from-gray-900 to-gray-600 hover:from-[#0ea5e9] hover:to-[#06b6d4]'
                  : 'from-white to-[#94a3b8] hover:from-[#0ea5e9] hover:to-[#06b6d4]'
              } bg-clip-text text-transparent transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative inline-block">
                AK
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-[#0ea5e9]/20 to-[#06b6d4]/20 blur-lg -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? "text-[#0ea5e9]"
                      : theme === 'light'
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-[#94a3b8] hover:text-[#e2e8f0]"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 ${
                        theme === 'light'
                          ? 'bg-[#0ea5e9]/15 border-[#0ea5e9]/40'
                          : 'bg-[#0ea5e9]/10 border-[#0ea5e9]/30'
                      } border rounded-lg -z-10 shadow-[0_0_20px_rgba(14,165,233,0.2)]`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                theme === 'light'
                  ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  : 'bg-[#1e293b]/50 border-[#0ea5e9]/20 text-[#e2e8f0] hover:bg-[#0ea5e9]/10'
              } border transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 right-0 z-50 w-full sm:w-80 ${
              theme === 'light'
                ? 'bg-white/95 border-gray-200'
                : 'bg-[#1a1f35]/95 border-[#0ea5e9]/20'
            } backdrop-blur-xl border-l shadow-2xl lg:hidden`}
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-4 px-6 text-left text-lg font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? theme === 'light'
                        ? "text-[#0ea5e9] bg-[#0ea5e9]/15 border border-[#0ea5e9]/40"
                        : "text-[#0ea5e9] bg-[#0ea5e9]/10 border border-[#0ea5e9]/30"
                      : theme === 'light'
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1e293b]/50"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}