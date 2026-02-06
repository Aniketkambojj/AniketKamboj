import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, MessageSquare, Calendar, Zap, Database } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";

export function Projects() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex !== index) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const projects = [
    {
      title: "Talkify – Live Chat Application",
      type: "Real-time Web Application",
      description: "A real-time live chat application with modern UI/UX, smooth animations, and instant message delivery. Built to demonstrate real-time communication, frontend performance optimization, and clean UI architecture.",
      tech: ["React", "WebSockets", "Node.js", "Modern UI"],
      features: [
        "Real-time messaging",
        "Responsive modern UI",
        "Smooth animations",
        "Scalable architecture"
      ],
      liveLink: "https://talkify-8ad2b194.base44.app",
      gradient: "from-[#0ea5e9] to-[#06b6d4]",
      icon: MessageSquare
    },
    {
      title: "Schedule Booking System",
      type: "Full-Stack Web Application",
      description: "A professional scheduling and appointment booking system designed for businesses. Users can book, reschedule, and manage appointments seamlessly with a clean, intuitive interface.",
      tech: ["React", "Backend APIs", "Database", "UI Framework"],
      features: [
        "Appointment scheduling",
        "User-friendly dashboard",
        "Business-ready architecture",
        "Scalable system design"
      ],
      liveLink: "https://appoint-ease-f7b6e21a.base44.app",
      gradient: "from-[#06b6d4] to-[#0ea5e9]",
      icon: Calendar
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className={`absolute inset-0 ${
        theme === 'light'
          ? 'bg-[radial-gradient(circle_at_70%_50%,#0ea5e940,transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_70%_50%,#0ea5e920,transparent_50%)]'
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r ${
                theme === 'light'
                  ? 'from-gray-900 to-gray-600'
                  : 'from-white to-[#94a3b8]'
              } bg-clip-text text-transparent`}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto rounded-full"
            />
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* 3D Card effect */}
                <div
                  className={`relative ${
                    theme === 'light'
                      ? 'bg-white/70 border-gray-200'
                      : 'bg-[#1a1f35]/50 border-[#0ea5e9]/20'
                  } backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500`}
                  style={{
                    transform: hoveredIndex === index ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(20px)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                    boxShadow: hoveredIndex === index ? '0 25px 60px rgba(14, 165, 233, 0.3)' : theme === 'light' ? '0 10px 40px rgba(14, 165, 233, 0.15)' : '0 0 50px rgba(14, 165, 233, 0.1)'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="p-8 relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Type badge */}
                    <span className={`inline-block px-3 py-1 ${
                      theme === 'light'
                        ? 'bg-[#0ea5e9]/15 border-[#0ea5e9]/40'
                        : 'bg-[#0ea5e9]/20 border-[#0ea5e9]/40'
                    } border rounded-full text-[#0ea5e9] text-sm font-medium mb-4`}>
                      {project.type}
                    </span>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold ${
                      theme === 'light' ? 'text-gray-900' : 'text-[#e2e8f0]'
                    } mb-4 group-hover:text-[#0ea5e9] transition-colors`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`${
                      theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'
                    } mb-6 leading-relaxed`}>
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold ${
                        theme === 'light' ? 'text-gray-900' : 'text-[#e2e8f0]'
                      } mb-3 flex items-center gap-2`}>
                        <Zap className="h-4 w-4 text-[#0ea5e9]" />
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-sm ${
                            theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'
                          }`}>
                            <span className="text-[#0ea5e9] mt-0.5">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${
                              theme === 'light'
                                ? 'bg-gray-100 border-[#0ea5e9]/30'
                                : 'bg-[#1e293b] border-[#0ea5e9]/20'
                            } border rounded-lg text-[#0ea5e9] text-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.liveLink && (
                        <Button
                          asChild
                          className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button
                          asChild
                          variant="outline"
                          className={`flex-1 ${
                            theme === 'light'
                              ? 'border-[#0ea5e9]/40 hover:bg-[#0ea5e9]/10 text-gray-900'
                              : 'border-[#0ea5e9]/30 hover:bg-[#0ea5e9]/10 text-[#e2e8f0]'
                          }`}
                        >
                          <a href={project.demoLink}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0ea5e9]/40 rounded-2xl transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View more projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className={`${
              theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]'
            } mb-4`}>Want to see more of my work?</p>
            <Button
              asChild
              variant="outline"
              className={`${
                theme === 'light'
                  ? 'border-[#0ea5e9]/40 hover:bg-[#0ea5e9]/10 text-gray-900'
                  : 'border-[#0ea5e9]/30 hover:bg-[#0ea5e9]/10 text-[#e2e8f0]'
              }`}
            >
              <a href="https://github.com/Aniketkambojj" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}