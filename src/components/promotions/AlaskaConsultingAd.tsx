import { motion } from "framer-motion";
import { Briefcase, Target, LineChart, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";

const AlaskaConsultingAd = () => {
  const services = [
    { icon: Target, label: "Strategy" },
    { icon: LineChart, label: "Growth" },
    { icon: Users, label: "Teams" },
  ];

  return (
    <motion.a
      href="https://alaskacg.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(220, 60%, 40%, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(220, 60%, 40%, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(220, 70%, 50%, 0.2) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating data points */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <motion.div
              className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30"
              whileHover={{ rotate: 5 }}
            >
              <Briefcase className="w-6 h-6 text-blue-400" />
            </motion.div>
            <div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                Alaska Consulting Group
              </h3>
              <p className="text-xs text-blue-300/70">Business Strategy & Growth</p>
            </div>
          </div>
          <motion.div
            className="p-1.5 rounded-lg bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-blue-900/30 border border-blue-800/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -2, borderColor: "hsl(220, 70%, 50%, 0.5)" }}
            >
              <service.icon className="w-5 h-5 text-blue-400" />
              <span className="text-xs text-blue-200">{service.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-2 mb-5">
          {["Strategic Planning", "Market Analysis", "Operational Excellence"].map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-2 text-sm text-blue-200/80"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-blue-800/40">
          <motion.div
            className="flex items-center justify-between"
            whileHover={{ x: 3 }}
          >
            <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
              Grow Your Business
            </span>
            <motion.div
              className="flex items-center gap-1 text-blue-400"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

export default AlaskaConsultingAd;
