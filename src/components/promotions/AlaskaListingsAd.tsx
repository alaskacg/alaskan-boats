import { motion } from "framer-motion";
import { Home, MapPin, ExternalLink, Mountain } from "lucide-react";

const AlaskaListingsAd = () => {
  return (
    <motion.a
      href="https://aklistings.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 shadow-lg hover:shadow-emerald-500/10"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Animated mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 400 80" preserveAspectRatio="none">
          <motion.path
            d="M0,80 L0,60 L40,40 L80,55 L120,25 L160,45 L200,20 L240,35 L280,15 L320,40 L360,30 L400,50 L400,80 Z"
            fill="url(#mountainGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(160, 50%, 30%)" />
              <stop offset="100%" stopColor="hsl(160, 40%, 15%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating property pins */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: "15%", top: "30%" },
          { left: "45%", top: "20%" },
          { left: "75%", top: "35%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <MapPin className="w-3 h-3 text-emerald-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 p-5 flex items-center gap-4">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20"
          whileHover={{ rotate: 5 }}
        >
          <Home className="w-7 h-7 text-white" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80">Sponsored</span>
          </div>
          <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
            Alaska Listings
          </h3>
          <p className="text-sm text-slate-400 flex items-center gap-1.5">
            <Mountain className="w-3 h-3" />
            <span className="truncate">Real estate across the Last Frontier</span>
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ExternalLink className="w-4 h-4 text-emerald-400" />
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  );
};

export default AlaskaListingsAd;
