import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Technical Support Advisor",
      company: "Transcom",
      location: "Remote",
      period: "March 2025 – Present",
      type: "Remote",
      responsibilities: [
        "End-to-end technical troubleshooting for enterprise clients",
        "Remote diagnostics and customer issue resolution",
        "Strong communication with cross-functional teams",
        "Handling high-volume technical cases efficiently"
      ],
      current: true
    },
    {
      title: "Technical Support Advisor",
      company: "Majorel",
      location: "Waterloo, Ontario, Canada",
      period: "October 2024 – December 2024",
      type: "On-site",
      responsibilities: [
        "Provided technical support to enterprise clients",
        "Troubleshot software and system-level issues",
        "Maintained high customer satisfaction scores",
        "Followed ITIL and support best practices"
      ],
      current: false
    },
    {
      title: "Web Development Intern",
      company: "Filium Enterprises",
      location: "India",
      period: "2021",
      type: "Internship",
      responsibilities: [
        "Developed responsive websites using modern frontend technologies",
        "Worked on UI improvements and bug fixing",
        "Collaborated with senior developers on real-world projects",
        "Gained hands-on experience with production-level code"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent" />
      
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
              Work Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto rounded-full"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line - only show on desktop */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0ea5e9] via-[#06b6d4] to-transparent hidden md:block" />

              <div className="space-y-8 md:space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-8 top-6 w-4 h-4 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-full border-4 border-[#0a0e1a] transform md:-translate-x-1.5 hidden md:block z-10">
                      {exp.current && (
                        <div className="absolute inset-0 bg-[#0ea5e9] rounded-full animate-ping" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className="md:ml-24 group">
                      <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-2xl p-6 sm:p-8 hover:border-[#0ea5e9]/40 transition-all duration-300 hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] hover:-translate-y-1">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-[#e2e8f0] mb-2 group-hover:text-[#0ea5e9] transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[#0ea5e9] font-semibold mb-3">
                              <Briefcase className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          {exp.current && (
                            <span className="px-3 py-1 bg-[#0ea5e9]/20 border border-[#0ea5e9]/40 rounded-full text-[#0ea5e9] text-sm font-medium">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-[#94a3b8]">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-0.5 bg-[#1e293b] rounded text-sm">
                            {exp.type}
                          </span>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#94a3b8]">
                              <span className="text-[#0ea5e9] mt-1.5">▹</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}