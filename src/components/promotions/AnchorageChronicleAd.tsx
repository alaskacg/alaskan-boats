import { motion } from "framer-motion";
import { Newspaper, ExternalLink, CloudSnow, Radio, AlertTriangle } from "lucide-react";

const AnchorageChronicleAd = () => {
  return (
    <motion.a
      href="https://anchoragechronicle.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-500 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Aurora background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 opacity-40"
          style={{
            background: "linear-gradient(180deg, hsl(160, 60%, 30%, 0.4) 0%, hsl(180, 50%, 25%, 0.2) 50%, transparent 100%)",
          }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Animated aurora streaks */}
        <motion.div
          className="absolute top-0 left-0 w-full h-24"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(150, 60%, 40%, 0.3), hsl(180, 50%, 35%, 0.2), transparent)",
          }}
          animate={{ x: [-200, 400] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* City skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 400 50" preserveAspectRatio="none">
          <path
            d="M0,50 L0,40 L20,40 L20,30 L30,30 L30,35 L50,35 L50,20 L60,20 L60,15 L70,15 L70,25 L90,25 L90,30 L110,30 L110,18 L120,18 L120,12 L130,12 L130,22 L150,22 L150,35 L170,35 L170,25 L180,25 L180,30 L200,30 L200,20 L220,20 L220,12 L230,12 L230,25 L250,25 L250,38 L270,38 L270,28 L280,28 L280,32 L300,32 L300,22 L310,22 L310,15 L320,15 L320,28 L340,28 L340,40 L360,40 L360,32 L380,32 L380,40 L400,40 L400,50 Z"
            fill="hsl(210, 30%, 15%)"
          />
          {/* Twinkling windows */}
          {[...Array(15)].map((_, i) => (
            <motion.rect
              key={i}
              x={20 + i * 25}
              y={32 + (i % 3) * 6}
              width="3"
              height="3"
              fill="hsl(45, 70%, 60%)"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2 + (i % 3), delay: i * 0.15, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 p-5">
        <div className="flex items-start gap-4">
          {/* Logo/Icon */}
          <motion.div
            className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30"
            whileHover={{ rotate: -5, scale: 1.05 }}
          >
            <Newspaper className="w-7 h-7 text-white" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 bg-red-500/10 px-2 py-0.5 rounded">Sponsored</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-red-300 transition-colors">
              Anchorage Chronicle
            </h3>
            <p className="text-sm text-slate-300 mt-1 line-clamp-2">
              Real-time weather, breaking news, and community stories across Alaska
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
          >
            <ExternalLink className="w-4 h-4 text-red-400" />
          </motion.div>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 rounded-lg border border-slate-700/50">
            <CloudSnow className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs text-slate-300">Live Weather</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 rounded-lg border border-slate-700/50">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-slate-300">Storm Alerts</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 rounded-lg border border-slate-700/50">
            <Radio className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs text-slate-300">Breaking News</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between">
          <span className="text-xs text-slate-500">anchoragechronicle.com</span>
          <motion.span
            className="text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors flex items-center gap-1"
          >
            Read Latest
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

export default AnchorageChronicleAd;
