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
            scale: [1, 1.03, 1],
            opacity: 1,
          }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />

        {/* Outer ring with compass marks */}
        <motion.circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          className="stroke-primary/30"
          strokeWidth="0.5"
        />
        
        {/* Rotating compass dashes */}
        <motion.circle
          cx="28"
          cy="28"
          r="27"
          fill="none"
          className="stroke-ocean-teal/20"
          strokeWidth="0.5"
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Mountain range backdrop */}
        <motion.path
          d="M4 36 L10 20 L16 28 L14 36 Z"
          className="fill-ocean-steel/50"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.path
          d="M38 36 L46 16 L52 34 L50 36 Z"
          className="fill-ocean-steel/40"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />
        <motion.path
          d="M24 36 L32 22 L38 30 L36 36 Z"
          className="fill-ocean-steel/30"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        />

        {/* Snow caps */}
        <motion.path
          d="M10 20 L8 24 L10 23 L12 24 Z"
          className="fill-snow-peak/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.path
          d="M46 16 L43 22 L46 20 L49 22 Z"
          className="fill-snow-peak/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
        />

        {/* Animated water waves - Layer 1 (back) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M2 44 Q8 40, 14 44 Q20 48, 26 44 Q32 40, 38 44 Q44 48, 50 44 Q54 41, 56 42"
            fill="none"
            className="stroke-ocean-deep/30"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.g>

        {/* Animated water waves - Layer 2 (middle) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [1, -1.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <motion.path
            d="M0 40 Q6 37, 12 40 Q18 43, 24 40 Q30 37, 36 40 Q42 43, 48 40 Q54 37, 58 40"
            fill="none"
            className="stroke-ocean-teal/50"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.g>

        {/* Commercial Fishing Boat - Clearer detailed design */}
        <motion.g
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Boat bobbing animation */}
          <motion.g
            animate={{ y: [-0.5, 0.5, -0.5], rotate: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "28px 34px" }}
          >
            {/* Hull - distinctive fishing boat shape */}
            <path
              d="M12 36 L14 32 L16 30 L42 30 L44 32 L46 36 L44 38 L14 38 Z"
              className="fill-primary"
            />
            
            {/* Hull stripe/waterline */}
            <path
              d="M14 36 L16 33 L42 33 L44 36 L42 37 L16 37 Z"
              className="fill-primary-foreground/20"
            />
            
            {/* Wheelhouse/Cabin - main structure */}
            <rect
              x="28"
              y="22"
              width="10"
              height="8"
              rx="1"
              className="fill-snow-peak dark:fill-foreground"
            />
            
            {/* Wheelhouse windows */}
            <rect
              x="30"
              y="24"
              width="3"
              height="2"
              rx="0.5"
              className="fill-ocean-deep/60"
            />
            <rect
              x="34"
              y="24"
              width="2"
              height="2"
              rx="0.5"
              className="fill-ocean-deep/60"
            />
            
            {/* Cabin roof */}
            <path
              d="M27 22 L28 20 L38 20 L39 22 Z"
              className="fill-muted-foreground/30"
            />
            
            {/* Forward cabin/bow structure */}
            <rect
              x="18"
              y="26"
              width="8"
              height="4"
              rx="0.5"
              className="fill-secondary"
            />
            
            {/* Mast - main */}
            <line
              x1="33"
              y1="20"
              x2="33"
              y2="10"
              className="stroke-primary"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Boom/fishing arm */}
            <motion.line
              x1="33"
              y1="14"
              x2="22"
              y2="18"
              className="stroke-primary"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "33px 14px" }}
            />
            
            {/* Second boom */}
            <motion.line
              x1="33"
              y1="14"
              x2="44"
              y2="18"
              className="stroke-primary"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "33px 14px" }}
            />
            
            {/* Antenna/radio mast */}
            <line
              x1="36"
              y1="20"
              x2="36"
              y2="13"
              className="stroke-muted-foreground"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            
            {/* Radar dome */}
            <motion.circle
              cx="36"
              cy="12"
              r="1.5"
              className="fill-accent"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Navigation light - top of mast */}
            <motion.circle
              cx="33"
              cy="9"
              r="1.2"
              className="fill-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            />
            
            {/* Railing details */}
            <line
              x1="16"
              y1="30"
              x2="16"
              y2="28"
              className="stroke-primary/70"
              strokeWidth="0.5"
            />
            <line
              x1="18"
              y1="30"
              x2="18"
              y2="28"
              className="stroke-primary/70"
              strokeWidth="0.5"
            />
          </motion.g>
        </motion.g>

        {/* Animated water waves - Layer 3 (front/foreground) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-1, 1.5, -1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <motion.path
            d="M4 48 Q10 45, 16 48 Q22 51, 28 48 Q34 45, 40 48 Q46 51, 52 48"
            fill="none"
            className="stroke-ocean-teal/70"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.g>

        {/* Water sparkle effects */}
        <motion.circle
          cx="16"
          cy="42"
          r="1"
          className="fill-snow-peak/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="40"
          cy="46"
          r="0.8"
          className="fill-snow-peak/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
        />
        <motion.circle
          cx="28"
          cy="50"
          r="0.6"
          className="fill-snow-peak/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBoatLogo;
