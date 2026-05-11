"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Gauge } from "lucide-react";

const FEATURES = [
  {
    num: "01",
    icon: Zap,
    title: "Moc przemysłowa",
    desc: "Silnik 1200 W zaprojektowany do ciągłej pracy warsztatowej — elektronicznie stabilizowany, bez przegrzewania, bez kompromisów.",
    detail: "1200 W",
  },
  {
    num: "02",
    icon: Gauge,
    title: "Precyzja detailingu",
    desc: "Płynna regulacja prędkości 600–6500 rpm zapewnia idealny wynik na każdym etapie — od agresywnej korekty po delikatne wykończenie.",
    detail: "600–6500 rpm",
  },
  {
    num: "03",
    icon: Shield,
    title: "Trwałość na lata",
    desc: "Obudowa z materiałów klasy premium, 12 miesięcy gwarancji z serwisem w Polsce. Narzędzie, które rośnie razem z Twoim biznesem.",
    detail: "12 mies. gwarancji",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0d0d0d] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-20 max-w-xl"
        >
          <span className="label block mb-4">Dlaczego CarForce</span>
          <h2
            className="font-extrabold text-white tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {/* TODO: final copy */}
            Zaprojektowane przez<br />
            <span className="text-[#e3000f]">detailerów.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {FEATURES.map(({ num, icon: Icon, title, desc, detail }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 }}
              className="group relative bg-[#0d0d0d] p-10 flex flex-col gap-6 hover:bg-[#0f0f0f] transition-colors duration-300"
            >
              {/* Top: number + icon */}
              <div className="flex items-start justify-between">
                <span
                  className="font-extrabold tracking-[-0.04em] text-[#1c1c1c] group-hover:text-[#222222] transition-colors select-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
                >
                  {num}
                </span>
                <div className="w-11 h-11 rounded-[4px] bg-[rgba(227,0,15,0.08)] border border-[rgba(227,0,15,0.12)] group-hover:border-[rgba(227,0,15,0.25)] group-hover:bg-[rgba(227,0,15,0.12)] transition-all duration-300 flex items-center justify-center">
                  <Icon size={19} className="text-[#e3000f]" />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-bold text-xl tracking-[-0.01em]">
                  {/* TODO: final copy */}
                  {title}
                </h3>
                <p className="text-[#555555] text-sm leading-[1.8]">
                  {/* TODO: final copy */}
                  {desc}
                </p>
              </div>

              {/* Footer detail */}
              <div className="mt-auto pt-4 border-t border-[#1a1a1a]">
                <span className="label">{detail}</span>
              </div>

              {/* Hover: left red bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e3000f] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
