"use client";

import { motion } from "framer-motion";
import { SPECS } from "@/lib/constants";

export default function Specs() {
  return (
    <section id="specs" className="bg-[#080808] py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="lg:sticky lg:top-28"
        >
          <span className="label block mb-5">Dane techniczne</span>
          <h2
            className="font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {/* TODO: final copy */}
            Maszyna gotowa<br />na każde wyzwanie.
          </h2>
          <span className="hairline block mb-6" />
          <p className="text-[#555555] text-sm leading-[1.9] max-w-sm">
            {/* TODO: final copy */}
            Każdy parametr dobrany w oparciu o lata doświadczenia
            naszych specjalistów i codzienne potrzeby profesjonalnych
            detailerów. Zero kompromisów.
          </p>

          {/* Launch info card */}
          <div className="mt-10 p-5 rounded-[4px] border border-[#1e1e1e] bg-[#0d0d0d]">
            <div className="flex flex-col gap-2.5">
              {[
                { k: "Data premiery", v: "10 czerwca 2026" },
                { k: "Dostępność", v: "Polska — wysyłka 24h od premiery" },
                { k: "Dystrybucja", v: "sklep.carforce.pl" },
              ].map(({ k, v }) => (
                <div key={k} className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-[#444444] shrink-0">{k}</span>
                  <span className="text-[#888888] text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.05 }}
        >
          <span className="label block mb-5">Specyfikacja techniczna</span>

          <div className="divide-y divide-[#141414]">
            {SPECS.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" as const, delay: i * 0.06 }}
                className="group flex items-center justify-between gap-6 py-4 hover:bg-[rgba(255,255,255,0.01)] transition-colors px-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-px h-4 bg-[#e3000f] opacity-50 group-hover:opacity-100 shrink-0 transition-opacity" />
                  <span className="text-[#555555] text-sm">{row.label}</span>
                </div>
                <span className="text-white text-sm font-semibold text-right">{row.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-8 text-[#333333] text-xs leading-relaxed">
            {/* TODO: final copy */}
            * Specyfikacja może ulec zmianie przed oficjalną premierą. Ostateczne parametry
            zostaną potwierdzone wraz z dostępnością produktu.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
