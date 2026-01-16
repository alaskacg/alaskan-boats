import { motion } from "framer-motion";
import { Brain, ArrowUpRight, Zap, Shield, Target, TrendingUp } from "lucide-react";

const AlaskaConsultingAd = () => {
  return (
    <motion.a
      href="https://alaskacg.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-500 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Neural network animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(220, 60%, 50%, 0.4) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(220, 60%, 50%, 0.4) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        
        {/* Pulsing center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(220, 80%, 50%, 0.15) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating data nodes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-indigo-400/50"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.path
              d="M50,60 Q150,40 250,70 T450,50"
              stroke="hsl(220, 70%, 60%)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M30,100 Q180,80 300,110 T500,90"
              stroke="hsl(220, 70%, 60%)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/30"
              whileHover={{ rotate: 10, scale: 1.05 }}
            >
              <Brain className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Alaska Consulting Group
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-400 tracking-wide">Strategic Intelligence</span>
                <span className="text-xs text-slate-500">• Est. 2025</span>
              </div>
            </div>
          </div>
          <motion.div
            className="p-2 rounded-lg bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-indigo-400" />
          </motion.div>
        </div>

        {/* Description based on actual site content */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Navigate Alaska's new frontier with confidence. Strategic consulting at the intersection of national security, energy independence, and economic opportunity.
        </p>

        {/* Service highlights from site research */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <motion.div
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/30"
            whileHover={{ y: -2, borderColor: "hsl(220, 70%, 50%, 0.5)" }}
          >
            <Target className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-indigo-200 text-center">Market Intel</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/30"
            whileHover={{ y: -2, borderColor: "hsl(220, 70%, 50%, 0.5)" }}
          >
            <Shield className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-indigo-200 text-center">Discretion</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/30"
            whileHover={{ y: -2, borderColor: "hsl(220, 70%, 50%, 0.5)" }}
          >
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-indigo-200 text-center">Growth</span>
          </motion.div>
        </div>

        {/* Focus area tag */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Critical Minerals", "Energy Strategy", "Federal Investment"].map((tag, i) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-indigo-800/30">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400/60 bg-indigo-500/10 px-2 py-0.5 rounded">Sponsored</span>
          <motion.span
            className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center gap-1"
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
    </motion.a>
  );
};

export default AlaskaConsultingAd;
