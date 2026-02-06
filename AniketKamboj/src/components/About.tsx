import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Globe, Headphones } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function About() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js, and cutting-edge technologies"
    },
    {
      icon: Globe,
      title: "System Architecture",
      description: "Designing scalable enterprise systems with focus on performance and reliability"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert troubleshooting and customer success with enterprise-level solutions"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r ${
                theme === 'light' ? 'from-gray-900 to-gray-600' : 'from-white to-[#94a3b8]'
              } bg-clip-text text-transparent`}
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mb-16"
          >
            {/* Glassmorphism card */}
            <div className={`${
              theme === 'light' ? 'bg-white/70 border-gray-200' : 'bg-[#1a1f35]/50 border-[#0ea5e9]/20'
            } backdrop-blur-xl border rounded-2xl p-8 ${
              theme === 'light' ? 'shadow-lg' : 'shadow-[0_0_50px_rgba(14,165,233,0.1)]'
            }`}>
              <p className={`text-lg ${
                theme === 'light' ? 'text-gray-700' : 'text-[#e2e8f0]'
              } leading-relaxed mb-6`}>
                I'm a passionate <span className="text-[#0ea5e9] font-semibold">Software Engineer</span> with a unique blend 
                of technical expertise and business acumen. My journey began in India with a Bachelor's in Computer 
                Applications, and I've since expanded my horizons in Canada with a Post-Graduate Diploma in 
                Business & Information Systems Architecture.
              </p>
              <p className={`text-lg ${
                theme === 'light' ? 'text-gray-700' : 'text-[#e2e8f0]'
              } leading-relaxed`}>
                Currently working as a <span className="text-[#0ea5e9] font-semibold">Technical Support Advisor</span> at Transcom, 
                I combine my development skills with exceptional problem-solving abilities to deliver enterprise-level 
                technical solutions. I'm committed to creating efficient, scalable web applications while maintaining 
                a strong focus on user experience and system reliability.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className={`relative h-full ${
                  theme === 'light' ? 'bg-white/70 border-gray-200' : 'bg-[#1a1f35]/50 border-[#0ea5e9]/20'
                } backdrop-blur-xl border rounded-xl p-6 hover:border-[#0ea5e9]/40 transition-all duration-300 ${
                  theme === 'light' ? 'hover:shadow-xl' : 'hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]'
                } hover:-translate-y-2`}>
                  {/* Icon container with 3D effect */}
                  <div className="mb-4 w-14 h-14 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-[#e2e8f0]'
                  } mb-2`}>
                    {item.title}
                  </h3>
                  <p className={`${
                    theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'
                  } leading-relaxed`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}