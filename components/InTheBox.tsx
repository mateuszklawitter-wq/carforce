"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

// TODO: confirm final box contents
const BOX_ITEMS = [
  { label: "Maszyna polerska CarForce CF-01",  sub: "1× 1200 W DA polisher" },
  { label: "Backing Pad 125 mm",               sub: "1× uchwyt M14" },
  { label: "Pad tnący HD — Czerwony",          sub: "1× cutting foam" },
  { label: "Pad wykończeniowy — Granatowy",    sub: "1× finishing foam" },
  { label: "Ściereczka z mikrofibry",          sub: "1× 40×40 cm" },
  { label: "Instrukcja obsługi PL/EN",         sub: "1× booklet" },
  { label: "Karta gwarancyjna",                sub: "12 miesięcy, serwis PL" },
];

const e = "easeOut" as const;

export default function InTheBox() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32 px-6 lg:px-10 border-t border-[#111111]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">

        {/* Left — visual */}
        {/* TODO: replace with real packshot photo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: e }}
          className="relative"
        >
          <div
            className="relative w-full rounded-[6px] bg-[radial-gradient(ellipse_at_center,#101010_0%,#080808_70%)] border border-[#161616] flex items-center justify-center overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <div className="text-center px-12">
              <p className="text-[#1e1e1e] text-[9px] font-semibold tracking-[0.3em] uppercase mb-2">
                {/* TODO: packshot */}
                Zawartość zestawu
              </p>
              <p className="font-extrabold text-[#111111] tracking-[-0.05em]" style={{ fontSize: "clamp(2.5rem,4vw,4rem)" }}>
                CF–01
              </p>
              <p className="text-[#141414] text-[8px] tracking-[0.3em] uppercase mt-2">
                Packshot wkrótce
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — list */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: e, delay: 0.05 }}
        >
          <span className="label block mb-5">W zestawie</span>
          <h2
            className="font-extrabold text-white tracking-[-0.035em] leading-[1.02] mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            {/* TODO: final copy */}
            Wszystko od&nbsp;pierwszego<br />
            <span className="text-[#3a3a3a]">użycia.</span>
          </h2>

          <ul className="flex flex-col divide-y divide-[#111111]">
            {BOX_ITEMS.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: e, delay: i * 0.05 }}
                className="flex items-center gap-4 py-4"
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-[rgba(227,0,15,0.08)] border border-[rgba(227,0,15,0.18)] flex items-center justify-center">
                  <Check size={11} className="text-[#e3000f]" strokeWidth={2.5} />
                </span>
                <div className="flex flex-1 items-baseline justify-between gap-4 min-w-0">
                  <span className="text-[#cccccc] text-[14px] font-medium truncate">
                    {/* TODO: final copy */}
                    {item.label}
                  </span>
                  <span className="text-[#2e2e2e] text-[10px] shrink-0 tracking-wide">{item.sub}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
