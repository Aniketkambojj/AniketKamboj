import { useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxSectionProps) {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setElementTop(window.pageYOffset || document.documentElement.scrollTop);
      setClientHeight(window.innerHeight);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [-clientHeight * speed, clientHeight * speed]
  );

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
