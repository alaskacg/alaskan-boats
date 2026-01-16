import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const AnchorageChronicleAd = () => {
  return (
    <motion.a
      href="https://anchoragechronicle.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Dark background with subtle aurora */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle aurora glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(160, 50%, 30%, 0.4), hsl(140, 40%, 25%, 0.3), transparent)",
        }}
        animate={{ x: [-200, 400] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4 p-4 md:p-5">
        {/* Logo */}
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30 ring-2 ring-red-400/30 flex-shrink-0"
          whileHover={{ rotate: -5, scale: 1.05 }}
        >
          <Newspaper className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-bold uppercase tracking-wider text-red-300/70 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/20">Sponsored</span>
          <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-red-200 transition-colors mt-1">
            Anchorage Chronicle
          </h3>
          <p className="text-xs text-slate-300/70 mt-0.5">Trustworthy Alaska Journalism</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-red-500/30 flex-shrink-0"
        >
          <ExternalLink className="w-4 h-4 text-red-300" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default AnchorageChronicleAd;
