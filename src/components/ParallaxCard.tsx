import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

const ParallaxCard = ({ children, className = "", depth = 15 }: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [depth, -depth]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-depth, depth]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `linear-gradient(
            ${useTransform(x, [-0.5, 0.5], [120, 60]).get()}deg,
            transparent 0%,
            hsl(200, 70%, 50%, 0.1) 50%,
            transparent 100%
          )`,
        }}
      />
    </motion.div>
  );
};

export default ParallaxCard;
