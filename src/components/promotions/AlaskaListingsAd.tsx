import { motion } from "framer-motion";
import { Home, MapPin, ExternalLink, Mountain, Globe, Ship, Pickaxe } from "lucide-react";

const AlaskaListingsAd = () => {
  return (
    <motion.a
      href="https://aklistings.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-500 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Mountain landscape background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(160, 50%, 25%)" />
                <stop offset="100%" stopColor="hsl(160, 40%, 12%)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,100 L0,70 L30,50 L60,65 L90,35 L120,55 L150,25 L180,45 L210,15 L240,40 L270,20 L300,50 L330,30 L360,55 L390,45 L400,60 L400,100 Z"
              fill="url(#mtGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
            />
            {/* Snow caps */}
            <path d="M148,25 L150,22 L152,25" stroke="hsl(0, 0%, 85%)" strokeWidth="2" fill="none" />
            <path d="M208,15 L210,11 L212,15" stroke="hsl(0, 0%, 85%)" strokeWidth="2" fill="none" />
            <path d="M268,20 L270,16 L272,20" stroke="hsl(0, 0%, 85%)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Floating location pins */}
        {[
          { left: "12%", top: "25%" },
          { left: "35%", top: "35%" },
          { left: "55%", top: "20%" },
          { left: "78%", top: "30%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
              <MapPin className="w-3 h-3 text-emerald-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 p-5">
        <div className="flex items-start gap-4">
          {/* Logo/Icon */}
          <motion.div
            className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <Home className="w-7 h-7 text-white" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">Sponsored</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded">Beta</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              Alaska Listings
            </h3>
            <p className="text-sm text-slate-300 mt-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>The Last Frontier Marketplace</span>
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
          >
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>

        {/* Network sites based on research */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          <motion.div 
            className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-emerald-900/30 border border-emerald-800/30"
            whileHover={{ y: -2 }}
          >
            <Mountain className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] text-emerald-200">8 Regions</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-emerald-900/30 border border-emerald-800/30"
            whileHover={{ y: -2 }}
          >
            <Ship className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] text-emerald-200">Boats</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-emerald-900/30 border border-emerald-800/30"
            whileHover={{ y: -2 }}
          >
            <Pickaxe className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] text-emerald-200">Mining</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-emerald-900/30 border border-emerald-800/30"
            whileHover={{ y: -2 }}
          >
            <Home className="w-4 h-4 text-rose-400" />
            <span className="text-[10px] text-emerald-200">Real Estate</span>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-3 flex items-center justify-center gap-6 py-2">
          <div className="text-center">
            <div className="text-lg font-bold text-white">FREE</div>
            <div className="text-[10px] text-emerald-400">During Beta</div>
          </div>
          <div className="w-px h-8 bg-emerald-800/50" />
          <div className="text-center">
            <div className="text-lg font-bold text-white">60</div>
            <div className="text-[10px] text-emerald-400">Day Listings</div>
          </div>
          <div className="w-px h-8 bg-emerald-800/50" />
          <div className="text-center">
            <div className="text-lg font-bold text-white">8+</div>
            <div className="text-[10px] text-emerald-400">Regional Sites</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-3 pt-3 border-t border-emerald-800/50 flex items-center justify-between">
          <span className="text-xs text-slate-500">aklistings.com</span>
          <motion.span
            className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            Browse Listings
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};

export default AlaskaListingsAd;
