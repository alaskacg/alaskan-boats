import { motion } from "framer-motion";
import { Brain, ArrowUpRight, Zap } from "lucide-react";

const AlaskaConsultingAd = () => {
  return (
    <motion.a
      href="https://alaskacg.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 shadow-lg hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Animated neural network background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 400 200">
          {/* Network nodes */}
          {[
            { cx: 50, cy: 40 }, { cx: 120, cy: 80 }, { cx: 80, cy: 140 },
            { cx: 180, cy: 50 }, { cx: 220, cy: 120 }, { cx: 160, cy: 160 },
            { cx: 280, cy: 70 }, { cx: 320, cy: 130 }, { cx: 350, cy: 60 },
          ].map((pos, i) => (
            <motion.circle
              key={i}
              cx={pos.cx}
              cy={pos.cy}
              r="3"
              fill="hsl(220, 80%, 60%)"
              animate={{ opacity: [0.3, 1, 0.3], r: [2, 4, 2] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
          {/* Network lines */}
          <motion.path
            d="M50,40 L120,80 L180,50 L280,70 M120,80 L220,120 L320,130 M80,140 L160,160 L220,120"
            stroke="hsl(220, 70%, 50%)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Pulsing glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(220, 80%, 50%, 0.2) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 p-6">
        {/* Header with established date */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
              whileHover={{ rotate: 10 }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  Alaska Consulting Group
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-semibold text-blue-400 tracking-wide">Strategic Intelligence</span>
              </div>
            </div>
          </div>
          <motion.div
            className="p-2 rounded-lg bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </motion.div>
        </div>

        {/* Tagline with animated underline */}
        <div className="relative mb-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Transform your Alaska business with data-driven strategy and market insights. Since 2025.
          </p>
        </div>

        {/* Services chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Market Analysis", "Strategic Planning", "Growth Advisory"].map((service, i) => (
            <motion.span
              key={service}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {service}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-blue-800/30">
          <span className="text-xs text-slate-500">Sponsored</span>
          <motion.span
            className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            Explore Services
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

export default AlaskaConsultingAd;
