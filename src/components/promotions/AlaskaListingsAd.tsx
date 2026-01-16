import { motion } from "framer-motion";
import { Home, MapPin, ExternalLink, Mountain, Ship, Pickaxe, TreePine, Users, CheckCircle2 } from "lucide-react";

const AlaskaListingsAd = () => {
  const regionSites = [
    { name: "Kenai", url: "kenailistings.com", new: true },
    { name: "Tongass", url: "tongasslistings.com" },
    { name: "Chugach", url: "chugachlistings.com" },
    { name: "Alcan", url: "alcanlistings.com" },
  ];

  return (
    <motion.a
      href="https://aklistings.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl transition-all duration-500 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Alaska wilderness-inspired background */}
      <div className="absolute inset-0">
        {/* Base gradient - forest to mountain */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950" />
        
        {/* Northern lights subtle effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 opacity-40"
          style={{
            background: "linear-gradient(180deg, hsl(160, 50%, 30%, 0.4) 0%, hsl(140, 40%, 25%, 0.2) 50%, transparent 100%)",
          }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mountain range silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-36 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mtGradAK" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(160, 40%, 20%)" />
                <stop offset="100%" stopColor="hsl(160, 30%, 8%)" />
              </linearGradient>
              <linearGradient id="treeLine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 35%, 15%)" />
                <stop offset="100%" stopColor="hsl(150, 30%, 6%)" />
              </linearGradient>
            </defs>
            {/* Far mountains */}
            <motion.path
              d="M0,100 L0,65 L50,40 L100,55 L150,25 L200,45 L250,15 L300,35 L350,20 L400,50 L450,30 L500,55 L550,40 L600,55 L600,100 Z"
              fill="url(#mtGradAK)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            />
            {/* Tree line */}
            <path
              d="M0,100 L0,78 C20,75 40,80 60,76 C80,72 100,78 120,74 C140,70 160,76 180,72 C200,68 220,74 240,70 C260,66 280,72 300,68 C320,64 340,70 360,66 C380,62 400,68 420,64 C440,60 460,66 480,62 C500,58 520,64 540,60 C560,56 580,62 600,58 L600,100 Z"
              fill="url(#treeLine)"
            />
            {/* Snow caps */}
            <path d="M248,15 L250,10 L252,15" stroke="hsl(0, 0%, 95%)" strokeWidth="2.5" fill="none" />
            <path d="M148,25 L150,20 L152,25" stroke="hsl(0, 0%, 90%)" strokeWidth="2" fill="none" />
            <path d="M348,20 L350,14 L352,20" stroke="hsl(0, 0%, 92%)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Floating location pins */}
        {[
          { left: "10%", top: "20%" },
          { left: "25%", top: "35%" },
          { left: "45%", top: "18%" },
          { left: "65%", top: "28%" },
          { left: "80%", top: "22%" },
          { left: "90%", top: "38%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2 + i * 0.3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center backdrop-blur-sm border border-emerald-500/40">
              <MapPin className="w-2.5 h-2.5 text-emerald-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glassmorphism card */}
      <div className="relative z-10 backdrop-blur-sm bg-white/5 border border-white/10 m-1 rounded-xl">
        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400/30"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Home className="w-7 h-7 text-white" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300/80 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">Sponsored</span>
                <motion.span 
                  className="text-[10px] font-bold uppercase tracking-wider text-amber-300/90 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30"
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Beta • Free Listings
                </motion.span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                Alaska Listings
              </h3>
              <p className="text-sm text-emerald-200/70 mt-0.5">
                The Last Frontier Marketplace
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-emerald-500/30"
            >
              <ExternalLink className="w-4 h-4 text-emerald-300" />
            </motion.div>
          </div>

          {/* Regional sites showcase */}
          <div className="grid grid-cols-4 gap-2 mb-5">
            {regionSites.map((site, i) => (
              <motion.div 
                key={site.name}
                className="relative flex flex-col items-center gap-1 p-3 rounded-xl bg-emerald-900/40 border border-emerald-700/30"
                whileHover={{ y: -2, borderColor: "hsl(160, 60%, 50%, 0.5)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {site.new && (
                  <span className="absolute -top-1.5 -right-1.5 text-[8px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded">NEW</span>
                )}
                <Mountain className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-medium text-emerald-100">{site.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Specialized markets */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { icon: Ship, label: "Boats", color: "sky" },
              { icon: Pickaxe, label: "Mining", color: "amber" },
              { icon: TreePine, label: "Cabins", color: "emerald" },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ y: -2 }}
              >
                <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                <span className="text-xs text-slate-200">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators from site */}
          <div className="flex flex-wrap gap-3 mb-4 p-3 rounded-xl bg-emerald-900/30 border border-emerald-700/20">
            {[
              { icon: Users, text: "Community Driven" },
              { icon: CheckCircle2, text: "Verified Sellers" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs text-emerald-200">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 py-3 mb-4 border-y border-white/10">
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-xl font-bold text-white">FREE</div>
              <div className="text-[10px] text-emerald-300">During Beta</div>
            </motion.div>
            <div className="w-px h-8 bg-white/20" />
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-xl font-bold text-white">60</div>
              <div className="text-[10px] text-emerald-300">Day Listings</div>
            </motion.div>
            <div className="w-px h-8 bg-white/20" />
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-xl font-bold text-white">8+</div>
              <div className="text-[10px] text-emerald-300">Regional Sites</div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">aklistings.com</span>
            <motion.span
              className="text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors flex items-center gap-1"
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
