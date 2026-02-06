import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { ParticleBackground } from "./components/ParticleBackground";
import { FloatingElements } from "./components/FloatingElements";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorFollower } from "./components/CursorFollower";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 text-gray-900' 
        : 'bg-gradient-to-br from-[#1a1f35] via-[#0f1419] to-[#0a0e1a] text-[#e2e8f0]'
    }`}>
      {/* Custom Cursor */}
      <CursorFollower />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Navigation */}
      <Navigation />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-[128px] ${
          theme === 'light' ? 'opacity-20' : 'opacity-10'
        } animate-blob`} />
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-[128px] ${
          theme === 'light' ? 'opacity-20' : 'opacity-10'
        } animate-blob animation-delay-2000`} />
        <div className={`absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-[128px] ${
          theme === 'light' ? 'opacity-20' : 'opacity-10'
        } animate-blob animation-delay-4000`} />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}