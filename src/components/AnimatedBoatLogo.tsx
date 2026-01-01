import { motion } from "framer-motion";

interface AnimatedBoatLogoProps {
  className?: string;
}

const AnimatedBoatLogo = ({ className = "" }: AnimatedBoatLogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 56 56"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background glow circle */}
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          className="fill-primary/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: 1,
          }}
          transition={{ 
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* Outer ring */}
        <motion.circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          className="stroke-primary/40"
          strokeWidth="1"
        />
        
        {/* Rotating compass ring */}
        <motion.circle
          cx="28"
          cy="28"
          r="27"
          fill="none"
          className="stroke-ocean-teal/30"
          strokeWidth="0.5"
          strokeDasharray="3 8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* High Detail Anchor */}
        <motion.g
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Anchor Ring (Top) */}
          <motion.circle
            cx="28"
            cy="10"
            r="4"
            fill="none"
            className="stroke-primary"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          
          {/* Anchor Shank (Main Vertical) */}
          <motion.line
            x1="28"
            y1="14"
            x2="28"
            y2="40"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          {/* Anchor Stock (Horizontal Bar) */}
          <motion.line
            x1="18"
            y1="18"
            x2="38"
            y2="18"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{ transformOrigin: "center" }}
          />
          
          {/* Stock End Caps */}
          <motion.circle
            cx="18"
            cy="18"
            r="2"
            className="fill-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
          <motion.circle
            cx="38"
            cy="18"
            r="2"
            className="fill-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
          
          {/* Crown (Base connection) */}
          <motion.path
            d="M22 36 L28 40 L34 36"
            fill="none"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          />
          
          {/* Left Fluke (Arm) */}
          <motion.path
            d="M22 36 Q16 40, 14 46 Q14 48, 16 47 L22 40"
            className="fill-primary stroke-primary"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Right Fluke (Arm) */}
          <motion.path
            d="M34 36 Q40 40, 42 46 Q42 48, 40 47 L34 40"
            className="fill-primary stroke-primary"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Anchor highlight/detail */}
          <motion.line
            x1="28"
            y1="22"
            x2="28"
            y2="32"
            className="stroke-snow-peak/30"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Animated Water Waves - Layer 1 (back) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M2 50 Q8 46, 14 50 Q20 54, 26 50 Q32 46, 38 50 Q44 54, 50 50 Q54 47, 56 48"
            fill="none"
            className="stroke-ocean-deep/40"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.g>

        {/* Animated Water Waves - Layer 2 (middle) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [1.5, -2, 1.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.path
            d="M0 46 Q6 42, 12 46 Q18 50, 24 46 Q30 42, 36 46 Q42 50, 48 46 Q54 42, 58 46"
            fill="none"
            className="stroke-ocean-teal/60"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          />
        </motion.g>

        {/* Animated Water Waves - Layer 3 (front) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-1.5, 2, -1.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <motion.path
            d="M4 54 Q10 50, 16 54 Q22 58, 28 54 Q34 50, 40 54 Q46 58, 52 54"
            fill="none"
            className="stroke-ocean-teal/80"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
        </motion.g>

        {/* Water sparkle effects */}
        <motion.circle
          cx="12"
          cy="48"
          r="1.2"
          className="fill-snow-peak/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx="32"
          cy="52"
          r="1"
          className="fill-snow-peak/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="46"
          cy="48"
          r="0.8"
          className="fill-snow-peak/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 }}
        />
        <motion.circle
          cx="22"
          cy="54"
          r="0.7"
          className="fill-snow-peak/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBoatLogo;
