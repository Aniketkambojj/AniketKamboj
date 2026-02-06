import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Cpu, Users, Zap, MessageSquare, Globe, Server, Database, Cloud, Terminal, TestTube } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-[#0ea5e9] to-[#06b6d4]",
      skills: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Web Design"
      ]
    },
    {
      title: "UI/UX Engineering",
      icon: Palette,
      color: "from-[#06b6d4] to-[#0ea5e9]",
      skills: [
        "Modern UI Architecture", "Component-Based Design", "Glassmorphism", 
        "3D UI Effects", "Micro-Interactions", "Accessibility (WCAG)"
      ]
    },
    {
      title: "Backend & Integration",
      icon: Server,
      color: "from-[#0ea5e9] to-[#06b6d4]",
      skills: [
        "REST APIs", "WebSockets", "Authentication & Authorization", 
        "API Integration", "Node.js (Basic)"
      ]
    },
    {
      title: "State & App Management",
      icon: Database,
      color: "from-[#06b6d4] to-[#0ea5e9]",
      skills: [
        "React Hooks", "Context API", "Modular Code Architecture"
      ]
    },
    {
      title: "Performance & Optimization",
      icon: Zap,
      color: "from-[#0ea5e9] to-[#06b6d4]",
      skills: [
        "Web Performance Optimization", "Lazy Loading", "Code Splitting", 
        "Browser Rendering Optimization"
      ]
    },
    {
      title: "Cloud & Deployment",
      icon: Cloud,
      color: "from-[#06b6d4] to-[#0ea5e9]",
      skills: [
        "Netlify", "Vercel", "CI/CD Understanding", "Domain & Hosting"
      ]
    }
  ];

  const programmingLanguages = [
    { name: "JavaScript", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "SQL", level: 75 },
    { name: "Java", level: 70 }
  ];

  const toolsAndPlatforms = [
    { category: "Version Control", items: ["Git", "GitHub"] },
    { category: "Development", items: ["VS Code", "Chrome DevTools"] },
    { category: "Design", items: ["Figma", "Canva"] },
    { category: "Collaboration", items: ["Jira", "Trello", "Confluence", "Slack", "MS Teams"] },
    { category: "OS", items: ["Windows", "macOS", "Linux"] }
  ];

  const softSkills = [
    { icon: Cpu, name: "Technical Troubleshooting", color: "#0ea5e9" },
    { icon: Users, name: "Customer-Centric Problem Solving", color: "#06b6d4" },
    { icon: MessageSquare, name: "Clear Technical Communication", color: "#0ea5e9" },
    { icon: Zap, name: "Agile & Team Collaboration", color: "#06b6d4" },
    { icon: Globe, name: "Remote Work Efficiency", color: "#0ea5e9" },
    { icon: Terminal, name: "Time Management & Prioritization", color: "#06b6d4" }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#0ea5e920,transparent_50%)]" />
      
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
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent"
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto rounded-full"
            />
          </div>

          {/* Core Engineering Skills */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl font-bold text-[#e2e8f0] mb-8 text-center"
            >
              Core Engineering Skills
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-2xl p-6 h-full hover:border-[#0ea5e9]/40 transition-all duration-300 hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] hover:-translate-y-2 relative overflow-hidden">
                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]`}>
                        <category.icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-[#e2e8f0] mb-4 group-hover:text-[#0ea5e9] transition-colors">
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#1e293b] border border-[#0ea5e9]/20 rounded-lg text-[#94a3b8] text-sm hover:border-[#0ea5e9]/40 hover:text-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mb-16 max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl font-bold text-[#e2e8f0] mb-8 text-center"
            >
              Programming Languages
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(14,165,233,0.1)]"
            >
              <div className="space-y-6">
                {programmingLanguages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#e2e8f0] font-medium">{lang.name}</span>
                      <span className="text-[#0ea5e9]">{lang.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.level}%` } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tools & Platforms */}
          <div className="mb-16 max-w-6xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl font-bold text-[#e2e8f0] mb-8 text-center"
            >
              Tools & Platforms
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsAndPlatforms.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-xl p-6 hover:border-[#0ea5e9]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
                >
                  <h4 className="text-lg font-semibold text-[#0ea5e9] mb-3">{tool.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1e293b] rounded-lg text-[#94a3b8] text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="max-w-6xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-2xl font-bold text-[#e2e8f0] mb-8 text-center"
            >
              Professional & Soft Skills
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-xl p-6 hover:border-[#0ea5e9]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:-translate-y-2 cursor-pointer">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                        boxShadow: `0 4px 20px ${skill.color}40`
                      }}
                    >
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-[#e2e8f0] font-medium">{skill.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-[#e2e8f0] mb-6 text-center">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🇬🇧</div>
                <h4 className="text-lg font-semibold text-[#e2e8f0] mb-1">English</h4>
                <p className="text-[#94a3b8]">Professional Working Proficiency</p>
              </div>
              <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🇮🇳</div>
                <h4 className="text-lg font-semibold text-[#e2e8f0] mb-1">Hindi</h4>
                <p className="text-[#94a3b8]">Native / Fluent</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}