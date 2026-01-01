import { motion } from "framer-motion";

interface AnimatedBoatLogoProps {
  className?: string;
}

const AnimatedBoatLogo = ({ className = "" }: AnimatedBoatLogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 64 64"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background glow */}
        <motion.circle
          cx="32"
          cy="32"
          r="30"
          className="fill-primary/5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.03, 1],
            opacity: 1,
          }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* Traditional Nautical Anchor */}
        <motion.g
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Ring at top - Traditional D-Ring */}
          <motion.path
            d="M32 6 C26 6, 22 10, 22 14 C22 18, 26 22, 32 22 C38 22, 42 18, 42 14 C42 10, 38 6, 32 6 Z"
            fill="none"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          {/* Inner ring detail */}
          <motion.circle
            cx="32"
            cy="14"
            r="4"
            fill="none"
            className="stroke-primary/40"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />

          {/* Main Shank (vertical shaft) */}
          <motion.line
            x1="32"
            y1="22"
            x2="32"
            y2="48"
            className="stroke-primary"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Stock (horizontal crossbar) */}
          <motion.line
            x1="20"
            y1="26"
            x2="44"
            y2="26"
            className="stroke-primary"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{ transformOrigin: "center" }}
          />

          {/* Stock decorative bands */}
          <motion.rect
            x="19"
            y="24.5"
            width="3"
            height="3"
            rx="0.5"
            className="fill-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
          <motion.rect
            x="42"
            y="24.5"
            width="3"
            height="3"
            rx="0.5"
            className="fill-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />

          {/* Crown - base of anchor arms */}
          <motion.path
            d="M24 44 L32 48 L40 44"
            fill="none"
            className="stroke-primary"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          />

          {/* Left Fluke - curved arm with point */}
          <motion.path
            d="M24 44 C20 47, 16 51, 14 56 L18 54 L24 48"
            className="fill-primary"
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Left Fluke Bill (pointed tip) */}
          <motion.path
            d="M14 56 L10 58 L14 54"
            className="fill-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          />

          {/* Right Fluke - curved arm with point */}
          <motion.path
            d="M40 44 C44 47, 48 51, 50 56 L46 54 L40 48"
            className="fill-primary"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Right Fluke Bill (pointed tip) */}
          <motion.path
            d="M50 56 L54 58 L50 54"
            className="fill-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          />

          {/* Shank highlight */}
          <motion.line
            x1="32"
            y1="28"
            x2="32"
            y2="40"
            className="stroke-snow-peak/20"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.g>

        {/* Animated Water Waves - Layer 1 (back, subtle) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M2 56 Q8 52, 14 56 Q20 60, 26 56 Q32 52, 38 56 Q44 60, 50 56 Q56 52, 62 56"
            fill="none"
            className="stroke-ocean-deep/30"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </motion.g>

        {/* Animated Water Waves - Layer 2 (middle) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [1, -1.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <motion.path
            d="M0 52 Q6 48, 12 52 Q18 56, 24 52 Q30 48, 36 52 Q42 56, 48 52 Q54 48, 60 52 Q64 50, 66 52"
            fill="none"
            className="stroke-ocean-teal/50"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          />
        </motion.g>

        {/* Animated Water Waves - Layer 3 (front, most visible) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-1, 2, -1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <motion.path
            d="M4 60 Q10 56, 16 60 Q22 64, 28 60 Q34 56, 40 60 Q46 64, 52 60 Q58 56, 64 60"
            fill="none"
            className="stroke-ocean-teal/70"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
        </motion.g>

        {/* Water sparkles */}
        <motion.circle
          cx="14"
          cy="54"
          r="1.5"
          className="fill-snow-peak/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="36"
          cy="58"
          r="1.2"
          className="fill-snow-peak/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        />
        <motion.circle
          cx="50"
          cy="54"
          r="1"
          className="fill-snow-peak/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBoatLogo;
