import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 200, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 200, damping: 20 });
  
  const dotX = useSpring(0, { stiffness: 300, damping: 25 });
  const dotY = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    // Only show on desktop devices
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsVisible(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsVisible(e.matches);
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#0ea5e9]/40 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#0ea5e9] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
