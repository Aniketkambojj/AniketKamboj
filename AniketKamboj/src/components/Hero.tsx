import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { MagneticButton } from "./MagneticButton";
import { useTheme } from "../contexts/ThemeContext";

export function Hero() {
  const { theme } = useTheme();
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
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className={`absolute inset-0 ${
        theme === 'light'
          ? 'bg-[linear-gradient(to_right,#0ea5e933_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e933_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#0ea5e91a_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e91a_1px,transparent_1px)]'
      } bg-[size:4rem_4rem]`} />
      
      {/* Gradient orbs */}
      <div className={`absolute top-20 left-20 w-72 h-72 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-[128px] ${
        theme === 'light' ? 'opacity-30' : 'opacity-20'
      } animate-pulse`} />
      <div className={`absolute bottom-20 right-20 w-72 h-72 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-[128px] ${
        theme === 'light' ? 'opacity-30' : 'opacity-20'
      } animate-pulse animation-delay-2000`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`inline-block mb-4 px-4 py-2 ${
                theme === 'light'
                  ? 'bg-[#0ea5e9]/15 border-[#0ea5e9]/30'
                  : 'bg-[#0ea5e9]/10 border-[#0ea5e9]/20'
              } border rounded-full`}
            >
              <span className="text-[#0ea5e9] text-sm font-mono">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${
                theme === 'light'
                  ? 'from-gray-900 via-gray-700 to-gray-600'
                  : 'from-white via-[#e2e8f0] to-[#94a3b8]'
              } bg-clip-text text-transparent`}
            >
              Aniket Kamboj
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`text-xl sm:text-2xl lg:text-3xl ${
                theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'
              } mb-8 font-light`}
            >
              <span className="text-[#0ea5e9]">Software Engineer</span> | Web Developer | Technical Support Specialist
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`text-lg ${
                theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'
              } mb-12 max-w-2xl mx-auto`}
            >
              Crafting modern web experiences and solving complex technical challenges. 
              Based in Canada, specializing in full-stack development and system architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-6 text-lg group"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className={`${
                  theme === 'light'
                    ? 'border-[#0ea5e9]/40 hover:bg-[#0ea5e9]/10 text-gray-900'
                    : 'border-[#0ea5e9]/30 hover:bg-[#0ea5e9]/10 text-[#e2e8f0]'
                } px-8 py-6 text-lg`}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-6 justify-center"
            >
              <MagneticButton strength={15}>
                <a
                  href="https://github.com/Aniketkambojj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${
                    theme === 'light'
                      ? 'bg-white hover:bg-[#0ea5e9]/10 border-gray-200'
                      : 'bg-[#1e293b] hover:bg-[#0ea5e9]/20 border-[#0ea5e9]/20'
                  } border rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] block`}
                >
                  <Github className={`h-6 w-6 ${theme === 'light' ? 'text-gray-700' : 'text-[#e2e8f0]'}`} />
                </a>
              </MagneticButton>
              <MagneticButton strength={15}>
                <a
                  href="https://www.linkedin.com/in/aniket-kamboj-5122983aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${
                    theme === 'light'
                      ? 'bg-white hover:bg-[#0ea5e9]/10 border-gray-200'
                      : 'bg-[#1e293b] hover:bg-[#0ea5e9]/20 border-[#0ea5e9]/20'
                  } border rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] block`}
                >
                  <Linkedin className={`h-6 w-6 ${theme === 'light' ? 'text-gray-700' : 'text-[#e2e8f0]'}`} />
                </a>
              </MagneticButton>
              <MagneticButton strength={15}>
                <a
                  href="mailto:Kambojaniket2601@gmail.com"
                  className={`p-3 ${
                    theme === 'light'
                      ? 'bg-white hover:bg-[#0ea5e9]/10 border-gray-200'
                      : 'bg-[#1e293b] hover:bg-[#0ea5e9]/20 border-[#0ea5e9]/20'
                  } border rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] block`}
                >
                  <Mail className={`h-6 w-6 ${theme === 'light' ? 'text-gray-700' : 'text-[#e2e8f0]'}`} />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'}`}>Scroll to explore</span>
          <ArrowDown className="h-5 w-5 text-[#0ea5e9]" />
        </motion.div>
      </motion.div>
    </section>
  );
}