import { motion } from "framer-motion";
import { Newspaper, ExternalLink, CloudSnow, AlertTriangle, Thermometer, Wind, Mountain } from "lucide-react";

const AnchorageChronicleAd = () => {
  return (
    <motion.a
      href="https://anchoragechronicle.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl transition-all duration-500 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Dramatic Alaska winter background */}
      <div className="absolute inset-0">
        {/* Base gradient - deep arctic night */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />
        
        {/* Aurora Borealis effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-40 opacity-60"
          style={{
            background: "linear-gradient(180deg, hsl(160, 80%, 35%, 0.5) 0%, hsl(120, 60%, 30%, 0.3) 30%, hsl(180, 60%, 25%, 0.2) 60%, transparent 100%)",
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated aurora waves */}
        <motion.div
          className="absolute top-0 left-0 w-full h-32"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(150, 80%, 45%, 0.4), hsl(100, 70%, 40%, 0.3), hsl(180, 60%, 40%, 0.3), transparent)",
          }}
          animate={{ x: [-300, 600] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-8 left-0 w-full h-24"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(180, 60%, 40%, 0.3), hsl(160, 70%, 35%, 0.4), transparent)",
          }}
          animate={{ x: [400, -400] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Snow particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
              }}
              animate={{
                y: ["0vh", "105vh"],
                x: [0, Math.random() * 50 - 25],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                delay: Math.random() * 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Mountain silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 500 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mtGradChron" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(215, 30%, 18%)" />
                <stop offset="100%" stopColor="hsl(215, 30%, 8%)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,80 L0,55 L40,30 L80,45 L120,20 L160,35 L200,10 L240,30 L280,15 L320,40 L360,25 L400,45 L440,35 L480,50 L500,40 L500,80 Z"
              fill="url(#mtGradChron)"
            />
            {/* Snow caps */}
            <path d="M118,20 L120,16 L122,20" stroke="hsl(0, 0%, 90%)" strokeWidth="2" fill="none" />
            <path d="M198,10 L200,5 L202,10" stroke="hsl(0, 0%, 95%)" strokeWidth="2.5" fill="none" />
            <path d="M278,15 L280,10 L282,15" stroke="hsl(0, 0%, 90%)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Glassmorphism card */}
      <div className="relative z-10 backdrop-blur-sm bg-white/5 border border-white/10 m-1 rounded-xl">
        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/40 ring-2 ring-red-400/30"
              whileHover={{ rotate: -5, scale: 1.05 }}
            >
              <Newspaper className="w-7 h-7 text-white" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-300/90 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">Sponsored</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-red-200 transition-colors">
                Anchorage Chronicle
              </h3>
              <p className="text-sm text-sky-200/80 mt-1">
                Real-time weather, breaking news & community stories
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-red-500/30"
            >
              <ExternalLink className="w-4 h-4 text-red-300" />
            </motion.div>
          </div>

          {/* Live weather simulation */}
          <motion.div 
            className="mt-5 p-4 rounded-xl bg-sky-900/40 border border-sky-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-white">28°</div>
                <div className="text-xs text-sky-200/70">
                  <div>Partly Cloudy</div>
                  <div>Feels like 22°F</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1 px-3 py-2 bg-sky-800/50 rounded-lg">
                  <Wind className="w-4 h-4 text-sky-300" />
                  <span className="text-[10px] text-sky-200">8 mph</span>
                </div>
                <div className="flex flex-col items-center gap-1 px-3 py-2 bg-sky-800/50 rounded-lg">
                  <Thermometer className="w-4 h-4 text-sky-300" />
                  <span className="text-[10px] text-sky-200">H: 32°</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alert ticker */}
          <div className="mt-4 overflow-hidden">
            <motion.div
              className="flex items-center gap-2 px-3 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-xs text-amber-200 truncate">
                Winter Storm Watch: Heavy snow 12-18" possible for Kenai Peninsula
              </span>
            </motion.div>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <CloudSnow className="w-3.5 h-3.5 text-sky-300" />
              <span className="text-xs text-slate-200">Live Weather</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs text-slate-200">Storm Alerts</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <Mountain className="w-3.5 h-3.5 text-emerald-300" />
              <span className="text-xs text-slate-200">Avalanche Warnings</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">anchoragechronicle.com</span>
            <motion.span
              className="text-sm font-semibold text-red-300 group-hover:text-red-200 transition-colors flex items-center gap-1"
            >
              View Full Forecast
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default AnchorageChronicleAd;
