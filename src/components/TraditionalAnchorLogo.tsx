import { motion } from "framer-motion";

interface TraditionalAnchorLogoProps {
  className?: string;
}

const TraditionalAnchorLogo = ({ className = "" }: TraditionalAnchorLogoProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Anchor gradient */}
          <linearGradient id="anchorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 70%, 55%)" />
            <stop offset="50%" stopColor="hsl(200, 70%, 45%)" />
            <stop offset="100%" stopColor="hsl(200, 70%, 35%)" />
          </linearGradient>
          
          {/* Gold accent gradient */}
          <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(38, 70%, 55%)" />
            <stop offset="100%" stopColor="hsl(38, 70%, 40%)" />
          </linearGradient>
          
          {/* Water gradient */}
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 70%, 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(200, 70%, 30%)" stopOpacity="0.4" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="anchorGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ring at top - Admiralty style */}
        <motion.circle
          cx="50"
          cy="12"
          r="8"
          stroke="url(#anchorGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        {/* Inner ring detail */}
        <motion.circle
          cx="50"
          cy="12"
          r="5"
          stroke="url(#goldAccent)"
          strokeWidth="1.5"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        {/* Shank (vertical shaft) */}
        <motion.path
          d="M50 20 L50 85"
          stroke="url(#anchorGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        />
        
        {/* Stock (horizontal bar through shank) - Traditional Admiralty style */}
        <motion.path
          d="M30 30 L70 30"
          stroke="url(#anchorGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
        
        {/* Stock end caps */}
        <motion.circle
          cx="28"
          cy="30"
          r="3"
          fill="url(#goldAccent)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.circle
          cx="72"
          cy="30"
          r="3"
          fill="url(#goldAccent)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />

        {/* Crown (where arms connect) */}
        <motion.ellipse
          cx="50"
          cy="85"
          rx="6"
          ry="4"
          fill="url(#anchorGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />

        {/* Left Arm with curved fluke */}
        <motion.path
          d="M50 85 
             Q35 85 25 95 
             Q20 100 15 105
             L20 102
             Q25 98 35 92
             Q45 87 50 85"
          stroke="url(#anchorGradient)"
          strokeWidth="4"
          fill="url(#anchorGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />
        
        {/* Left fluke tip */}
        <motion.path
          d="M15 105 L8 112 L18 107 L15 105"
          fill="url(#goldAccent)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />

        {/* Right Arm with curved fluke */}
        <motion.path
          d="M50 85 
             Q65 85 75 95 
             Q80 100 85 105
             L80 102
             Q75 98 65 92
             Q55 87 50 85"
          stroke="url(#anchorGradient)"
          strokeWidth="4"
          fill="url(#anchorGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />
        
        {/* Right fluke tip */}
        <motion.path
          d="M85 105 L92 112 L82 107 L85 105"
          fill="url(#goldAccent)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />

        {/* Animated Water Waves */}
        <g mask="url(#waveMask)">
          {/* Wave 1 */}
          <motion.path
            d="M0 105 Q10 100 20 105 T40 105 T60 105 T80 105 T100 105"
            stroke="url(#waterGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: [0, 10, 0],
              opacity: 0.7 
            }}
            transition={{ 
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
          />
          
          {/* Wave 2 */}
          <motion.path
            d="M-10 110 Q5 105 15 110 T35 110 T55 110 T75 110 T95 110"
            stroke="url(#waterGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: [-5, 15, -5],
              opacity: 0.5 
            }}
            transition={{ 
              x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              opacity: { duration: 0.5, delay: 0.3 }
            }}
          />
          
          {/* Wave 3 - smaller ripples */}
          <motion.path
            d="M5 115 Q12 112 20 115 T35 115 T50 115 T65 115 T80 115 T95 115"
            stroke="url(#waterGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            initial={{ x: 10, opacity: 0 }}
            animate={{ 
              x: [0, -10, 0],
              opacity: 0.4 
            }}
            transition={{ 
              x: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              opacity: { duration: 0.5, delay: 0.5 }
            }}
          />
        </g>
        
        {/* Sparkle effects */}
        <motion.circle
          cx="50"
          cy="12"
          r="1.5"
          fill="hsl(38, 70%, 60%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="28"
          cy="30"
          r="1"
          fill="hsl(0, 0%, 100%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
        />
        <motion.circle
          cx="72"
          cy="30"
          r="1"
          fill="hsl(0, 0%, 100%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </svg>
    </motion.div>
  );
};

export default TraditionalAnchorLogo;
