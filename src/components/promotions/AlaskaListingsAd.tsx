import { motion } from "framer-motion";
import { Home, MapPin, Search, Heart, ExternalLink, Sparkles } from "lucide-react";

const AlaskaListingsAd = () => {
  const categories = [
    { icon: Home, label: "Homes", count: "500+" },
    { icon: MapPin, label: "Land", count: "200+" },
  ];

  return (
    <motion.a
      href="https://aklistings.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 border border-emerald-800/30 hover:border-emerald-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated mountain silhouette background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 200 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(160, 40%, 25%)" />
              <stop offset="100%" stopColor="hsl(160, 30%, 15%)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,60 L0,45 L20,30 L40,45 L50,25 L60,40 L80,15 L100,35 L120,20 L140,38 L160,22 L180,42 L200,28 L200,60 Z"
            fill="url(#mountainGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
          />
          {/* Snow caps */}
          <motion.path
            d="M48,25 L50,23 L52,25"
            stroke="hsl(0, 0%, 90%)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.path
            d="M78,15 L80,12 L82,15"
            stroke="hsl(0, 0%, 90%)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.path
            d="M118,20 L120,17 L122,20"
            stroke="hsl(0, 0%, 90%)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
        </svg>
        
        {/* Floating property icons */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 22}%`,
              bottom: `${35 + (i % 2) * 15}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Home className="w-3 h-3 text-emerald-400/50" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <motion.div
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 relative"
              whileHover={{ rotate: -5 }}
            >
              <Home className="w-6 h-6 text-emerald-400" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
              </motion.div>
            </motion.div>
            <div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Alaska Listings
              </h3>
              <p className="text-xs text-emerald-300/70">Real Estate & Property</p>
            </div>
          </div>
          <motion.div
            className="p-1.5 rounded-lg bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>

        {/* Search preview */}
        <motion.div
          className="flex items-center gap-2 p-3 rounded-xl bg-emerald-900/30 border border-emerald-800/30 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ borderColor: "hsl(160, 50%, 40%, 0.5)" }}
        >
          <Search className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-200/70">Find your Alaska dream property...</span>
        </motion.div>

        {/* Category stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="flex items-center gap-3 p-3 rounded-xl bg-emerald-900/20 border border-emerald-800/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -2, borderColor: "hsl(160, 50%, 40%, 0.4)" }}
            >
              <cat.icon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-lg font-bold text-white">{cat.count}</div>
                <div className="text-xs text-emerald-300/60">{cat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured badge */}
        <motion.div
          className="flex items-center gap-2 text-sm text-emerald-300/80 mb-4"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="w-4 h-4 text-red-400" />
          <span>New listings added daily</span>
        </motion.div>

        {/* CTA */}
        <div className="pt-4 border-t border-emerald-800/40">
          <motion.div
            className="flex items-center justify-between"
            whileHover={{ x: 3 }}
          >
            <span className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
              Browse Properties
            </span>
            <motion.span
              className="text-emerald-400"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

export default AlaskaListingsAd;
