import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Post-Graduate Diploma",
      program: "Business & Information Systems Architecture",
      duration: "May 2022 – December 2023",
      country: "Canada",
      highlights: [
        "Enterprise system architecture",
        "Business process modeling",
        "IT strategy & system integration",
        "Advanced database management"
      ],
      gradient: "from-[#0ea5e9] to-[#06b6d4]"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      program: "Computer Science & Applications",
      duration: "2018 – 2021",
      country: "India",
      highlights: [
        "Programming fundamentals",
        "Web development basics",
        "Databases & system design",
        "Software engineering principles"
      ],
      gradient: "from-[#06b6d4] to-[#0ea5e9]"
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
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
              Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto rounded-full"
            />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="relative bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-2xl p-8 h-full hover:border-[#0ea5e9]/40 transition-all duration-300 hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] hover:-translate-y-2">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                  {/* Icon */}
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg relative z-10`}>
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>

                  {/* Degree type */}
                  <div className="mb-4 relative z-10">
                    <h3 className="text-2xl font-bold text-[#e2e8f0] mb-2 group-hover:text-[#0ea5e9] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-[#0ea5e9] font-semibold">
                      {edu.program}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-[#94a3b8] relative z-10">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{edu.country}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold text-[#e2e8f0] mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#94a3b8]">
                          <span className="text-[#0ea5e9] mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${edu.gradient} opacity-5 rounded-tl-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}