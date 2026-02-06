import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[#0ea5e9]/20 bg-[#0a0e1a]/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Aniketkambojj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1e293b] hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/20 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
            >
              <Github className="h-5 w-5 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/aniket-kamboj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1e293b] hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/20 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
            >
              <Linkedin className="h-5 w-5 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors" />
            </a>
            <a
              href="mailto:Kambojaniket2601@gmail.com"
              className="p-3 bg-[#1e293b] hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/20 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
            >
              <Mail className="h-5 w-5 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-[#94a3b8] flex items-center gap-2 flex-wrap justify-center">
              <span>© {currentYear} Aniket Kamboj. Built with</span>
              <Heart className="h-4 w-4 text-[#0ea5e9] fill-[#0ea5e9] animate-pulse" />
              <span>and React</span>
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-sm text-[#94a3b8]">
              Software Engineer | Web Developer | Technical Support Specialist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}