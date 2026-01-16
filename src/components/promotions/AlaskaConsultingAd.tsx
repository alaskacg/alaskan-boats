import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import acgLogo from "@/assets/logos/alaska-consulting-logo.mp4";

const AlaskaConsultingAd = () => {
  return (
    <motion.a
      href="https://alaskacg.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(210, 50%, 40%, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(210, 50%, 40%, 0.3) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4 p-4 md:p-5">
        {/* Video Logo */}
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/30 bg-slate-900 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <video
            src={acgLogo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-bold uppercase tracking-wider text-blue-300/70 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/20">Sponsored</span>
          <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-blue-200 transition-colors mt-1">
            Alaska Consulting Group
          </h3>
          <p className="text-xs text-blue-200/70 mt-0.5">Strategic Intelligence</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-blue-500/30 flex-shrink-0"
        >
          <ArrowUpRight className="w-4 h-4 text-blue-300" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default AlaskaConsultingAd;
