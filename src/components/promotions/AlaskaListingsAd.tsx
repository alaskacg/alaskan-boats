import { motion } from "framer-motion";
import { Home, MapPin, ExternalLink, Mountain, Ship, Pickaxe, TreePine, Users, CheckCircle2, Sparkles, Globe, Star } from "lucide-react";

const AlaskaListingsAd = () => {
  const regionSites = [
    { name: "Kenai Peninsula", slug: "kenai", new: true },
    { name: "Tongass", slug: "tongass" },
    { name: "Chugach", slug: "chugach" },
    { name: "Alcan Corridor", slug: "alcan" },
    { name: "Bristol Bay", slug: "bristol" },
    { name: "Prudhoe Bay", slug: "prudhoe" },
  ];

  const categories = [
    { icon: Ship, label: "Boats & Watercraft", color: "from-sky-500 to-blue-600", textColor: "text-sky-300" },
    { icon: Pickaxe, label: "Mining Equipment", color: "from-amber-500 to-orange-600", textColor: "text-amber-300" },
    { icon: TreePine, label: "Cabins & Land", color: "from-emerald-500 to-green-600", textColor: "text-emerald-300" },
    { icon: Home, label: "Real Estate", color: "from-rose-500 to-pink-600", textColor: "text-rose-300" },
  ];

  return (
    <motion.a
      href="https://aklistings.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Immersive Alaska wilderness background */}
      <div className="absolute inset-0">
        {/* Deep wilderness gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/90 to-slate-950" />
        
        {/* Aurora borealis effect at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(180deg, hsl(160, 70%, 30%, 0.4) 0%, hsl(140, 60%, 25%, 0.25) 30%, hsl(120, 50%, 20%, 0.15) 60%, transparent 100%)",
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated aurora streaks */}
        <motion.div
          className="absolute top-0 left-0 w-full h-40"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(160, 80%, 40%, 0.3), hsl(140, 70%, 35%, 0.25), hsl(180, 60%, 35%, 0.2), transparent)",
          }}
          animate={{ x: [-400, 800] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-10 left-0 w-full h-32"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(140, 60%, 35%, 0.25), hsl(160, 70%, 40%, 0.3), transparent)",
          }}
          animate={{ x: [600, -600] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 40}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Layered mountain silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-44 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 800 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mtFar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(160, 30%, 20%)" />
                <stop offset="100%" stopColor="hsl(160, 25%, 10%)" />
              </linearGradient>
              <linearGradient id="mtMid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(155, 35%, 15%)" />
                <stop offset="100%" stopColor="hsl(155, 30%, 7%)" />
              </linearGradient>
              <linearGradient id="mtNear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 40%, 10%)" />
                <stop offset="100%" stopColor="hsl(150, 35%, 4%)" />
              </linearGradient>
            </defs>
            
            {/* Far mountains */}
            <motion.path
              d="M0,120 L0,70 L60,45 L120,60 L180,30 L240,50 L300,20 L360,40 L420,15 L480,35 L540,25 L600,55 L660,35 L720,50 L780,40 L800,55 L800,120 Z"
              fill="url(#mtFar)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
            
            {/* Mid mountains */}
            <motion.path
              d="M0,120 L0,85 L80,60 L160,75 L240,45 L320,65 L400,35 L480,55 L560,40 L640,70 L720,50 L800,65 L800,120 Z"
              fill="url(#mtMid)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
            />
            
            {/* Near tree line */}
            <path
              d="M0,120 L0,95 C30,92 60,98 90,93 C120,88 150,95 180,90 C210,85 240,92 270,87 C300,82 330,89 360,84 C390,79 420,86 450,81 C480,76 510,83 540,78 C570,73 600,80 630,75 C660,70 690,77 720,72 C750,67 780,74 800,69 L800,120 Z"
              fill="url(#mtNear)"
            />
            
            {/* Snow caps on peaks */}
            <path d="M298,20 L300,14 L302,20" stroke="hsl(0, 0%, 95%)" strokeWidth="3" fill="none" />
            <path d="M418,15 L420,8 L422,15" stroke="hsl(0, 0%, 98%)" strokeWidth="3" fill="none" />
            <path d="M538,25 L540,18 L542,25" stroke="hsl(0, 0%, 93%)" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        {/* Animated location pins floating */}
        {[
          { left: "8%", top: "22%" },
          { left: "22%", top: "35%" },
          { left: "38%", top: "18%" },
          { left: "55%", top: "30%" },
          { left: "72%", top: "20%" },
          { left: "88%", top: "32%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5 + i * 0.3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center backdrop-blur-sm border border-emerald-400/50 shadow-lg shadow-emerald-500/20"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin className="w-3 h-3 text-emerald-300" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content card with glassmorphism */}
      <div className="relative z-10 backdrop-blur-md bg-black/20 border border-white/10 m-1 rounded-xl shadow-2xl">
        <div className="p-6 md:p-8">
          {/* Header Section */}
          <div className="flex items-start gap-5 mb-6">
            {/* Animated Logo */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/50 ring-2 ring-emerald-400/40">
                <Home className="w-9 h-9 md:w-10 md:h-10 text-white" />
              </div>
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
              </motion.div>
            </motion.div>

            {/* Title & Tags */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300/80 bg-emerald-500/25 px-2.5 py-1 rounded-full border border-emerald-500/40">Sponsored</span>
                <motion.span 
                  className="text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-gradient-to-r from-amber-500/30 to-orange-500/30 px-2.5 py-1 rounded-full border border-amber-500/40 flex items-center gap-1"
                  animate={{ boxShadow: ["0 0 10px hsl(40, 90%, 50%, 0)", "0 0 20px hsl(40, 90%, 50%, 0.4)", "0 0 10px hsl(40, 90%, 50%, 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3 fill-amber-400" />
                  Beta • Free Listings
                </motion.span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-200 transition-colors tracking-tight">
                Alaska Listings
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Globe className="w-4 h-4 text-emerald-400" />
                <p className="text-sm md:text-base text-emerald-200/80 font-medium">
                  The Last Frontier Marketplace
                </p>
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-emerald-500/40 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <ExternalLink className="w-5 h-5 text-emerald-300" />
            </motion.div>
          </div>

          {/* Category Cards - Premium style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.label}
                className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-4 text-center"
                whileHover={{ y: -4, borderColor: "hsl(160, 60%, 50%, 0.5)", scale: 1.02 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <motion.div 
                  className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <cat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <span className={`text-xs font-medium ${cat.textColor}`}>{cat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Regional Network - Interactive Grid */}
          <motion.div 
            className="p-4 rounded-xl bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Mountain className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-200">Regional Network</span>
              <span className="text-[10px] text-emerald-400/70 ml-auto">8+ specialized sites</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {regionSites.map((site, i) => (
                <motion.div 
                  key={site.name}
                  className="relative flex items-center justify-center p-2 rounded-lg bg-black/20 border border-emerald-700/30 text-center"
                  whileHover={{ y: -2, borderColor: "hsl(160, 60%, 50%, 0.6)", backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {site.new && (
                    <span className="absolute -top-1.5 -right-1.5 text-[7px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded shadow-lg">NEW</span>
                  )}
                  <span className="text-[10px] font-medium text-emerald-100">{site.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators - Premium Badge Style */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { icon: Users, text: "Community Driven", desc: "Built by Alaskans" },
              { icon: CheckCircle2, text: "Verified Sellers", desc: "Track record displayed" },
              { icon: MapPin, text: "Local Focus", desc: "Regional expertise" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ borderColor: "hsl(160, 50%, 50%, 0.4)" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <item.icon className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-xs font-medium text-white block">{item.text}</span>
                  <span className="text-[9px] text-emerald-300/70">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats - Premium Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { value: "FREE", label: "During Beta", highlight: true },
              { value: "60", label: "Day Listings" },
              { value: "8+", label: "Regional Sites" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className={`text-center p-4 rounded-xl ${stat.highlight ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30' : 'bg-white/5 border border-white/10'}`}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <div className={`text-2xl font-bold ${stat.highlight ? 'text-amber-300' : 'text-white'}`}>{stat.value}</div>
                <div className={`text-[10px] ${stat.highlight ? 'text-amber-200/80' : 'text-emerald-300'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">aklistings.com</span>
              <span className="text-xs text-emerald-400/60">•</span>
              <span className="text-xs text-emerald-400/80">Join the beta today</span>
            </div>
            <motion.span
              className="text-sm font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30"
              whileHover={{ backgroundColor: "hsl(160, 60%, 40%, 0.3)" }}
            >
              Browse All Listings
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

export default AlaskaListingsAd;
