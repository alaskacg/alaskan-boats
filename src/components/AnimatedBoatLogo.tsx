import { motion } from "framer-motion";

interface AnimatedBoatLogoProps {
  className?: string;
}

const AnimatedBoatLogo = ({ className = "" }: AnimatedBoatLogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 48 48"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background glow */}
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          className="fill-primary/10 stroke-primary/30"
          strokeWidth="0.5"
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

        {/* Rotating compass ring */}
        <motion.circle
          cx="24"
          cy="24"
          r="23"
          fill="none"
          className="stroke-primary/20"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Water waves - animated */}
        <motion.g
          initial={{ y: 2 }}
          animate={{ y: [-1, 1, -1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M8 32 Q12 29, 16 32 Q20 35, 24 32 Q28 29, 32 32 Q36 35, 40 32"
            fill="none"
            className="stroke-ocean-teal/60"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.path
            d="M6 36 Q10 33, 14 36 Q18 39, 22 36 Q26 33, 30 36 Q34 39, 38 36 Q42 33, 46 36"
            fill="none"
            className="stroke-ocean-teal/40"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.g>

        {/* Boat hull */}
        <motion.path
          d="M14 28 L18 28 L19 24 L29 24 L30 28 L34 28 L32 32 L16 32 Z"
          className="fill-primary"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Boat cabin */}
        <motion.rect
          x="21"
          y="18"
          width="6"
          height="6"
          rx="1"
          className="fill-primary-foreground dark:fill-foreground"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ transformOrigin: "bottom" }}
        />

        {/* Antenna/mast */}
        <motion.line
          x1="24"
          y1="18"
          x2="24"
          y2="10"
          className="stroke-primary"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          style={{ transformOrigin: "bottom" }}
        />

        {/* Antenna tip - blinking */}
        <motion.circle
          cx="24"
          cy="9"
          r="1.5"
          className="fill-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        />

        {/* Mountain silhouette in background */}
        <motion.path
          d="M6 28 L12 16 L18 24 L8 28 Z"
          className="fill-ocean-steel/40"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.path
          d="M32 28 L38 14 L44 26 L42 28 Z"
          className="fill-ocean-steel/30"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />

        {/* Snow caps */}
        <motion.path
          d="M12 16 L10 19 L12 18 L14 19 Z"
          className="fill-snow-peak/80 dark:fill-snow-peak/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
        />
        <motion.path
          d="M38 14 L36 18 L38 17 L40 18 Z"
          className="fill-snow-peak/80 dark:fill-snow-peak/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />

        {/* Water sparkle effect */}
        <motion.circle
          cx="20"
          cy="34"
          r="1"
          className="fill-snow-peak/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="30"
          cy="35"
          r="0.8"
          className="fill-snow-peak/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBoatLogo;
