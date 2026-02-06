import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Kambojaniket2601@gmail.com",
      href: "mailto:Kambojaniket2601@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Canada",
      href: null
    },
    {
      icon: Phone,
      label: "Availability",
      value: "Open to opportunities",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0ea5e920,transparent_70%)]" />
      
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
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-lg text-[#94a3b8] max-w-2xl mx-auto"
            >
              I'm always interested in hearing about new opportunities and collaborations. 
              Feel free to reach out!
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-2xl p-8 h-full shadow-[0_0_50px_rgba(14,165,233,0.1)] relative overflow-hidden group">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#e2e8f0] mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        className="group/item"
                      >
                        {info.href ? (
                          <a
                            href={info.href}
                            className="flex items-start gap-4 p-4 bg-[#1e293b]/50 border border-[#0ea5e9]/20 rounded-xl hover:border-[#0ea5e9]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:-translate-x-2"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-lg flex items-center justify-center flex-shrink-0 transform group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300 shadow-lg">
                              <info.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-[#94a3b8] mb-1">{info.label}</p>
                              <p className="text-[#e2e8f0] font-medium group-hover/item:text-[#0ea5e9] transition-colors">{info.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-4 p-4 bg-[#1e293b]/50 border border-[#0ea5e9]/20 rounded-xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                              <info.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-[#94a3b8] mb-1">{info.label}</p>
                              <p className="text-[#e2e8f0] font-medium">{info.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Download Resume Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="mt-8"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:opacity-90 text-white relative overflow-hidden group/btn"
                      onClick={() => {
                        // Mock download
                        alert("Resume download would start here");
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <span className="relative z-10">Download Resume</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-[#0ea5e9]/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(14,165,233,0.1)] relative overflow-hidden group">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#e2e8f0] mb-8">Send a Message</h3>
                  
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#e2e8f0] mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                          className="bg-[#1e293b] border-[#0ea5e9]/20 text-[#e2e8f0] placeholder:text-[#94a3b8] focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#e2e8f0] mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                          className="bg-[#1e293b] border-[#0ea5e9]/20 text-[#e2e8f0] placeholder:text-[#94a3b8] focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#e2e8f0] mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project or opportunity..."
                          required
                          rows={6}
                          className="bg-[#1e293b] border-[#0ea5e9]/20 text-[#e2e8f0] placeholder:text-[#94a3b8] focus:border-[#0ea5e9] focus:ring-[#0ea5e9] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:opacity-90 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#e2e8f0] mb-2">Message Sent!</h4>
                      <p className="text-[#94a3b8] text-center">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}