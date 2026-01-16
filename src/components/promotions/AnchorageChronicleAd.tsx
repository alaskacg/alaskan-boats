import { motion } from "framer-motion";
import { Newspaper, TrendingUp, Bell, ExternalLink, Mountain, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnchorageChronicleAd = () => {
  return (
    <motion.a
      href="https://anchoragechronicle.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full"
          style={{
            background: "conic-gradient(from 180deg, transparent 0%, hsl(150, 60%, 30%) 10%, hsl(120, 50%, 25%) 20%, transparent 30%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, hsl(200, 50%, 30%) 10%, hsl(180, 40%, 25%) 20%, transparent 30%)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 p-6 backdrop-blur-sm bg-slate-900/60">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <Newspaper className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Anchorage Chronicle
              </h3>
              <p className="text-xs text-slate-400">Local News & Stories</p>
            </div>
          </div>
          <motion.div
            className="p-1.5 rounded-lg bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </motion.div>
        </div>

        {/* Animated city silhouette */}
        <div className="relative h-20 mb-4 overflow-hidden rounded-lg bg-gradient-to-t from-slate-950 to-transparent">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
            <motion.path
              d="M0,50 L0,35 L10,35 L10,25 L15,25 L15,30 L25,30 L25,15 L30,15 L30,10 L35,10 L35,20 L45,20 L45,25 L55,25 L55,12 L60,12 L60,8 L65,8 L65,18 L75,18 L75,30 L85,30 L85,22 L90,22 L90,28 L100,28 L100,18 L110,18 L110,10 L115,10 L115,22 L125,22 L125,32 L135,32 L135,20 L140,20 L140,25 L150,25 L150,15 L155,15 L155,10 L160,10 L160,22 L170,22 L170,35 L180,35 L180,28 L190,28 L190,35 L200,35 L200,50 Z"
              fill="hsl(210, 30%, 20%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            {/* Building windows that twinkle */}
            {[...Array(12)].map((_, i) => (
              <motion.rect
                key={i}
                x={15 + i * 15}
                y={30 + (i % 3) * 5}
                width="2"
                height="2"
                fill="hsl(45, 70%, 60%)"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </svg>
          
          {/* Aurora streaks */}
          <motion.div
            className="absolute top-0 left-0 w-full h-8"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(150, 60%, 40%, 0.3), hsl(120, 50%, 35%, 0.2), transparent)",
            }}
            animate={{ x: [-100, 200] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Breaking News", "Local Events", "Community"].map((tag, i) => (
            <motion.span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-slate-400">
            <TrendingUp className="w-3.5 h-3.5 text-green-400" />
            <span>Daily Updates</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Bell className="w-3.5 h-3.5 text-amber-400" />
            <span>Alerts</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <span className="text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors flex items-center gap-2">
            Read Latest Stories
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default AnchorageChronicleAd;
