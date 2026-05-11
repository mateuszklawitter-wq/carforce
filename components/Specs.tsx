"use client";

import { motion } from "framer-motion";
import { SPECS } from "@/lib/constants";

export default function Specs() {
  return (
    <section id="specs" className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-badge block mb-4">
            {/* TODO: final copy */}
            Dane techniczne
          </span>
          <div className="red-line" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
            {/* TODO: final copy */}
            Maszyna gotowa na każde wyzwanie
          </h2>
          <p className="text-[#888888] leading-relaxed max-w-md">
            {/* TODO: final copy */}
            Każdy parametr maszyny CarForce został dobrany w oparciu o
            doświadczenie naszych specjalistów i potrzeby profesjonalnych
            detailerów. Żadnego kompromisu — tylko to, czego potrzebujesz.
          </p>
          <div className="mt-8 p-5 rounded-[6px] border border-[rgba(227,0,15,0.2)] bg-[rgba(227,0,15,0.05)]">
            <p className="text-sm text-[#888888]">
              <span className="text-white font-semibold">Data premiery:</span>{" "}
              {/* TODO: final copy */}
              10 czerwca 2025
            </p>
            <p className="text-sm text-[#888888] mt-1">
              <span className="text-white font-semibold">Dostępność:</span>{" "}
              {/* TODO: final copy */}
              Polska, wysyłka w 24h od dnia premiery
            </p>
          </div>
        </motion.div>

        {/* Right: specs table */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-badge block mb-4">
            SPECYFIKACJA TECHNICZNA
          </span>
          <div className="rounded-[6px] border border-[#222222] overflow-hidden">
            {SPECS.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-stretch border-b border-[#222222] last:border-b-0 ${
                  i % 2 === 0 ? "bg-[#111111]" : "bg-[#161616]"
                }`}
              >
                <div className="w-1 bg-[#e3000f] shrink-0" />
                <div className="flex flex-1 items-center justify-between px-5 py-4 gap-4">
                  <span className="text-[#888888] text-sm font-medium">
                    {/* TODO: final copy */}
                    {row.label}
                  </span>
                  <span className="text-white text-sm font-semibold text-right">
                    {/* TODO: final value */}
                    {row.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
