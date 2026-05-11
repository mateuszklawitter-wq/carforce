"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

// TODO: update list when final box contents confirmed
const BOX_ITEMS = [
  { label: "Maszyna polerska CarForce CF-01", sub: "1× 1200W DA polisher" },
  { label: "Backing Pad 125 mm", sub: "1× uchwyt M14" },
  { label: "Pad tnący DA 135 mm", sub: "1× cutting foam" },
  { label: "Pad wykończeniowy DA 135 mm", sub: "1× finishing foam" },
  { label: "Ściereczka z mikrofibry", sub: "1× 40×40 cm" },
  { label: "Instrukcja obsługi PL/EN", sub: "1× booklet" },
  { label: "Karta gwarancyjna", sub: "12 miesięcy, serwis PL" },
];

export default function InTheBox() {
  return (
    <section className="bg-[#080808] py-20 px-6 border-t border-[#111111]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">

        {/* Left — image placeholder */}
        {/* TODO: replace with real pack shot / studio photo of opened box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="relative"
        >
          <div
            className="relative w-full rounded-[6px] bg-[#0a0a0a] border border-[#161616] flex items-center justify-center overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Bracket corners */}
            {[
              "top-0 left-0 border-t border-l",
              "top-0 right-0 border-t border-r",
              "bottom-0 left-0 border-b border-l",
              "bottom-0 right-0 border-b border-r",
            ].map((cls) => (
              <span
                key={cls}
                className={`absolute w-5 h-5 border-[#e3000f]/30 ${cls}`}
              />
            ))}
            <div className="text-center">
              <p className="text-[#1e1e1e] text-[9px] font-semibold tracking-[0.22em] uppercase mb-1">
                {/* TODO: packshot */}
                Zawartość zestawu
              </p>
              <p className="text-[#161616] text-[8px] tracking-widest uppercase">
                Zdjęcie wkrótce
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.05 }}
        >
          <span className="label block mb-5">W zestawie</span>
          <h2
            className="font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-8"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            {/* TODO: final copy */}
            Wszystko czego potrzebujesz,<br />
            <span className="text-[#444444]">od pierwszego użycia.</span>
          </h2>

          <ul className="flex flex-col divide-y divide-[#111111]">
            {BOX_ITEMS.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" as const, delay: i * 0.055 }}
                className="flex items-center gap-4 py-3.5"
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-[rgba(227,0,15,0.08)] border border-[rgba(227,0,15,0.15)] flex items-center justify-center">
                  <Check size={10} className="text-[#e3000f]" strokeWidth={2.5} />
                </span>
                <div className="flex flex-1 items-baseline justify-between gap-4">
                  <span className="text-[#cccccc] text-sm font-medium">
                    {/* TODO: final copy */}
                    {item.label}
                  </span>
                  <span className="text-[#333333] text-[10px] shrink-0">{item.sub}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
