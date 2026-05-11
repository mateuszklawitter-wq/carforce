"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Gauge } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Moc przemysłowa",
    desc: "Silnik 1200 W zaprojektowany do ciągłej pracy w warunkach warsztatowych — bez przegrzewania, bez kompromisów.",
  },
  {
    icon: Gauge,
    title: "Precyzja detailingu",
    desc: "Elektronicznie stabilizowana prędkość obrotowa zapewnia idealny efekt na każdym etapie — od korekty po wykończenie.",
  },
  {
    icon: Shield,
    title: "Trwałość na lata",
    desc: "Obudowa z materiałów premium, 12 miesięcy gwarancji i serwis gwarancyjny w Polsce. Inwestycja, która się opłaca.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span className="section-badge block mb-3">
            {/* TODO: final copy */}
            Dlaczego CarForce
          </span>
          <div className="red-line mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            {/* TODO: final copy */}
            Zaprojektowane przez detailerów
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={card}
              className="group bg-[#161616] border border-[#222222] rounded-[6px] p-8 transition-all duration-300 hover:border-[rgba(227,0,15,0.35)] hover:shadow-[0_0_30px_rgba(227,0,15,0.08)]"
            >
              <div className="w-12 h-12 rounded-[6px] bg-[rgba(227,0,15,0.1)] border border-[rgba(227,0,15,0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(227,0,15,0.15)] transition-colors">
                <Icon size={22} className="text-[#e3000f]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">
                {/* TODO: final copy */}
                {title}
              </h3>
              <p className="text-[#888888] leading-relaxed text-sm">
                {/* TODO: final copy */}
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
