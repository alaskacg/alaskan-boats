import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      {/* Dark BLUE (no purple) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--charcoal)) 0%, hsl(215 55% 12%) 45%, hsl(var(--charcoal)) 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--ocean-steel) / 0.35) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--ocean-steel) / 0.35) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content (compact) */}
      <div className="relative z-10 flex items-center gap-4 p-4 md:p-5">
        {/* Simple monogram badge (no uploaded logo) */}
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-ocean-deep/15 border border-ocean-steel/30 flex items-center justify-center flex-shrink-0"
          whileHover={{ scale: 1.03 }}
        >
          <span className="font-display text-sm md:text-base font-bold text-snow-peak tracking-wider">
            ACG
          </span>
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-bold uppercase tracking-wider text-ocean-mist/80 bg-ocean-steel/20 px-2 py-0.5 rounded border border-ocean-steel/30">
            Sponsored
          </span>
          <h3 className="font-display text-lg md:text-xl font-bold text-snow-peak group-hover:text-ocean-mist transition-colors mt-1">
            Alaska Consulting Group
          </h3>
          <p className="text-xs text-ocean-mist/70 mt-0.5">Strategic Intelligence</p>
        </div>

        {/* Arrow */}
        <motion.div className="w-10 h-10 rounded-full bg-ocean-steel/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-ocean-steel/30 flex-shrink-0">
          <ArrowUpRight className="w-4 h-4 text-ocean-mist" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default AlaskaConsultingAd;

