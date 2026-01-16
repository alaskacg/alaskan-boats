import { motion } from "framer-motion";
import { Newspaper, ExternalLink, MapPin, Heart, Shield, Users, Compass, Mountain, Star } from "lucide-react";

const AnchorageChronicleAd = () => {
  const values = [
    { icon: MapPin, title: "Local Focus", desc: "From the Kenai to the Kuskokwim" },
    { icon: Shield, title: "Trustworthy", desc: "Accuracy over speed" },
    { icon: Users, title: "Community-Driven", desc: "Your neighbors, your stories" },
    { icon: Compass, title: "Regional Understanding", desc: "Tailored to each community" },
    { icon: Heart, title: "Alaska Spirit", desc: "Resilience & independence" },
    { icon: Star, title: "Balanced", desc: "Triumphs & challenges" },
  ];

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
      {/* Alaska-inspired background */}
      <div className="absolute inset-0">
        {/* Base gradient - warm earth tones with deep blues */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950" />
        
        {/* Subtle aurora glow at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 opacity-40"
          style={{
            background: "linear-gradient(180deg, hsl(160, 60%, 30%, 0.4) 0%, transparent 100%)",
          }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mtGradChronicle" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(215, 25%, 20%)" />
                <stop offset="100%" stopColor="hsl(215, 30%, 12%)" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 L0,70 L50,50 L100,65 L150,35 L200,55 L250,25 L300,45 L350,30 L400,50 L450,40 L500,60 L550,45 L600,55 L600,100 Z"
              fill="url(#mtGradChronicle)"
            />
            {/* Snow caps */}
            <path d="M148,35 L150,30 L152,35" stroke="hsl(0, 0%, 85%)" strokeWidth="2" fill="none" />
            <path d="M248,25 L250,18 L252,25" stroke="hsl(0, 0%, 90%)" strokeWidth="2.5" fill="none" />
            <path d="M348,30 L350,24 L352,30" stroke="hsl(0, 0%, 85%)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Content card */}
      <div className="relative z-10 backdrop-blur-sm bg-white/5 border border-white/10 m-1 rounded-xl">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <motion.div
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center shadow-xl shadow-red-500/40 ring-2 ring-red-400/30"
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                <Newspaper className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-300/90 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">Sponsored</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-red-200 transition-colors mt-1">
                  Anchorage Chronicle
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  News That Doesn't Just Inform—It Inspires
                </p>
              </div>
            </div>
            <motion.div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-red-500/30"
            >
              <ExternalLink className="w-4 h-4 text-red-300" />
            </motion.div>
          </div>

          {/* Mission statement */}
          <motion.div 
            className="p-4 rounded-xl bg-gradient-to-r from-emerald-900/40 to-slate-800/50 border border-emerald-500/20 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-slate-200 leading-relaxed italic">
              "Alaska deserves a news source that reflects its spirit—one that is <span className="text-emerald-300 font-semibold">honest</span>, <span className="text-sky-300 font-semibold">resilient</span>, and ultimately <span className="text-amber-300 font-semibold">hopeful</span> about the future of the Last Frontier."
            </p>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -2 }}
              >
                <value.icon className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">{value.title}</div>
                  <div className="text-[10px] text-slate-400">{value.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Promise section */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 mb-5">
            <Mountain className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">Our Promise</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We tell stories that matter. We investigate issues that affect your lives. We hold power accountable—but we also celebrate your communities and highlight the good work being done across Alaska.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-slate-400">anchoragechronicle.com</span>
            <motion.span
              className="text-sm font-semibold text-red-300 group-hover:text-red-200 transition-colors flex items-center gap-1"
            >
              Read Alaska's Stories
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
