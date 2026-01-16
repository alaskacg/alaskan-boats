import { motion } from "framer-motion";
import { Brain, ArrowUpRight, Zap, Shield, Target, TrendingUp, Gem, Factory } from "lucide-react";

const AlaskaConsultingAd = () => {
  return (
    <motion.a
      href="https://alaskacg.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl transition-all duration-500 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Strategic/Intelligence-themed background */}
      <div className="absolute inset-0">
        {/* Base - sophisticated dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        
        {/* Animated grid network - data visualization feel */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(220, 60%, 50%, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(220, 60%, 50%, 0.3) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        
        {/* Pulsing strategic nodes - representing intelligence network */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(220, 80%, 50%, 0.2) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(260, 70%, 50%, 0.15) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Data flow lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            d="M0,100 Q100,80 200,100 T400,80 T600,100"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -32] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0,140 Q150,120 300,150 T600,130"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(220, 80%, 60%)" />
              <stop offset="50%" stopColor="hsl(260, 70%, 60%)" />
              <stop offset="100%" stopColor="hsl(220, 80%, 60%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating data points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
                background: i % 2 === 0 ? "hsl(220, 80%, 60%)" : "hsl(260, 70%, 60%)",
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphism card */}
      <div className="relative z-10 backdrop-blur-sm bg-white/5 border border-white/10 m-1 rounded-xl">
        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40 ring-2 ring-indigo-400/30"
                whileHover={{ rotate: 10, scale: 1.05 }}
              >
                <Brain className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                  Alaska Consulting Group
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <motion.div
                    className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/20 rounded border border-indigo-500/30"
                    animate={{ boxShadow: ["0 0 10px hsl(220, 80%, 50%, 0)", "0 0 20px hsl(220, 80%, 50%, 0.3)", "0 0 10px hsl(220, 80%, 50%, 0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-3 h-3 text-indigo-300" />
                    <span className="text-xs font-bold text-indigo-200 tracking-wider">STRATEGIC INTELLIGENCE</span>
                  </motion.div>
                  <span className="text-xs text-slate-400">Since 2025</span>
                </div>
              </div>
            </div>
            <motion.div
              className="p-2 rounded-lg bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity border border-indigo-500/30"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-5 h-5 text-indigo-300" />
            </motion.div>
          </div>

          {/* Key insight from site - positioned as value prop */}
          <motion.div 
            className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 mb-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-indigo-100 leading-relaxed">
              "Alaska stands at the intersection of <span className="text-indigo-300 font-semibold">national security</span>, <span className="text-purple-300 font-semibold">energy independence</span>, and <span className="text-sky-300 font-semibold">economic opportunity</span>. The convergence creates a window that will not remain open indefinitely."
            </p>
          </motion.div>

          {/* Service highlights - based on actual site content */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { icon: Target, label: "Critical Minerals", color: "indigo" },
              { icon: Factory, label: "Energy Strategy", color: "purple" },
              { icon: Shield, label: "Defense Intel", color: "sky" },
              { icon: Gem, label: "Resource Dev", color: "emerald" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ y: -3, borderColor: "hsl(220, 70%, 50%, 0.5)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                <span className="text-[10px] text-center text-slate-300">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Key stats from site research */}
          <div className="flex items-center justify-center gap-6 py-3 mb-4 border-y border-white/10">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-bold text-white">16%</div>
              <div className="text-[10px] text-indigo-300">U.S. Oil Capacity</div>
            </motion.div>
            <div className="w-px h-8 bg-white/20" />
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-bold text-white">$900B</div>
              <div className="text-[10px] text-indigo-300">Allied Investment</div>
            </motion.div>
            <div className="w-px h-8 bg-white/20" />
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-bold text-white">2026</div>
              <div className="text-[10px] text-indigo-300">Resource Renaissance</div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300/60 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Sponsored</span>
            <motion.span
              className="text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors flex items-center gap-1"
            >
              Schedule Consultation
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

export default AlaskaConsultingAd;
