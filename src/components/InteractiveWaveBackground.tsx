import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const InteractiveWaveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const wave1X = useTransform(springX, [-1, 1], [-30, 30]);
  const wave2X = useTransform(springX, [-1, 1], [20, -20]);
  const wave3X = useTransform(springX, [-1, 1], [-15, 15]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora-like gradient that follows mouse subtly */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(180, 50%, 40%) 0%, transparent 70%)",
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
      />

      {/* Animated wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 70%, 45%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(200, 70%, 30%)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(180, 50%, 40%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(180, 50%, 25%)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 30%, 40%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(210, 30%, 20%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wave 1 - Slowest, largest */}
        <motion.path
          d="M0,100 C360,150 720,50 1080,100 C1260,125 1360,100 1440,80 L1440,200 L0,200 Z"
          fill="url(#waveGrad1)"
          style={{ x: wave1X }}
          animate={{
            d: [
              "M0,100 C360,150 720,50 1080,100 C1260,125 1360,100 1440,80 L1440,200 L0,200 Z",
              "M0,80 C360,50 720,150 1080,80 C1260,100 1360,120 1440,100 L1440,200 L0,200 Z",
              "M0,100 C360,150 720,50 1080,100 C1260,125 1360,100 1440,80 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Wave 2 - Medium */}
        <motion.path
          d="M0,120 C240,80 480,160 720,120 C960,80 1200,140 1440,100 L1440,200 L0,200 Z"
          fill="url(#waveGrad2)"
          style={{ x: wave2X }}
          animate={{
            d: [
              "M0,120 C240,80 480,160 720,120 C960,80 1200,140 1440,100 L1440,200 L0,200 Z",
              "M0,100 C240,140 480,80 720,140 C960,160 1200,80 1440,120 L1440,200 L0,200 Z",
              "M0,120 C240,80 480,160 720,120 C960,80 1200,140 1440,100 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Wave 3 - Fastest, smallest */}
        <motion.path
          d="M0,140 C180,120 360,160 540,140 C720,120 900,160 1080,140 C1260,120 1350,150 1440,130 L1440,200 L0,200 Z"
          fill="url(#waveGrad3)"
          style={{ x: wave3X }}
          animate={{
            d: [
              "M0,140 C180,120 360,160 540,140 C720,120 900,160 1080,140 C1260,120 1350,150 1440,130 L1440,200 L0,200 Z",
              "M0,130 C180,160 360,120 540,150 C720,160 900,120 1080,150 C1260,150 1350,120 1440,140 L1440,200 L0,200 Z",
              "M0,140 C180,120 360,160 540,140 C720,120 900,160 1080,140 C1260,120 1350,150 1440,130 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${10 + (i * 7)}%`,
            bottom: `${5 + (i % 3) * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveWaveBackground;
