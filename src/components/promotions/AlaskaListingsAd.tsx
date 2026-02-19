import { motion } from "framer-motion";
import { Home, ExternalLink } from "lucide-react";

const AlaskaListingsAd = () => {
  return (
    <motion.a
      href="https://aklistings.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Dark wilderness background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900" />
      
      {/* Subtle aurora effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(160, 60%, 35%, 0.4), hsl(140, 50%, 30%, 0.3), transparent)",
        }}
        animate={{ x: [-200, 400] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4 p-4 md:p-5">
        {/* Logo */}
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/30 flex-shrink-0"
          whileHover={{ rotate: 3, scale: 1.05 }}
        >
          <Home className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300/70 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/20">Sponsored</span>

          </div>
          <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-emerald-200 transition-colors mt-1">
            Alaska Listings
          </h3>
          <p className="text-xs text-emerald-200/70 mt-0.5">The Last Frontier Marketplace</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-emerald-500/30 flex-shrink-0"
        >
          <ExternalLink className="w-4 h-4 text-emerald-300" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default AlaskaListingsAd;
