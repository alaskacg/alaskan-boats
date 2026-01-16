import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const AnchorageChronicleAd = () => {
  return (
    <motion.a
      href="https://anchoragechronicle.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-500 shadow-lg hover:shadow-amber-500/10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Dynamic newspaper print lines background */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-px bg-white"
            style={{ marginTop: `${i * 8}px` }}
          />
        ))}
      </div>

      {/* Warm glow effect */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(45, 90%, 50%, 0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 p-5 flex items-center gap-4">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20"
          whileHover={{ rotate: -5 }}
        >
          <Newspaper className="w-7 h-7 text-white" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80">Sponsored</span>
          </div>
          <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors truncate">
            Anchorage Chronicle
          </h3>
          <p className="text-sm text-slate-400 truncate">
            Alaska's trusted source for local news & stories
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ExternalLink className="w-4 h-4 text-amber-400" />
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  );
};

export default AnchorageChronicleAd;
