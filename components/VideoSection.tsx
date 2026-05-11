"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="bg-[#080808] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-12 flex flex-col items-center text-center gap-4"
        >
          <span className="label">W akcji</span>
          <h2
            className="font-extrabold text-white tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {/* TODO: final copy */}
            Zobacz maszynę w&nbsp;pracy
          </h2>
        </motion.div>

        {/* Video embed placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="relative group cursor-pointer"
        >
          {/* TODO: Replace inner content with:
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
                title="CarForce maszyna polerska"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
                className="w-full h-full rounded-[6px]"
              />
          */}
          <div
            className="w-full rounded-[6px] bg-[#0d0d0d] border border-[#1e1e1e] group-hover:border-[rgba(227,0,15,0.25)] transition-colors duration-300 overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Radial centre glow */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(227,0,15,0.07) 0%, transparent 60%)",
              }}
            />

            {/* Subtle grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-5">
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full border border-[#222222] group-hover:border-[rgba(227,0,15,0.3)] transition-colors duration-300 flex items-center justify-center">
                    {/* Inner fill */}
                    <div className="w-14 h-14 rounded-full bg-[#e3000f] group-hover:bg-[#b8000c] transition-colors duration-200 flex items-center justify-center shadow-[0_0_30px_rgba(227,0,15,0.3)] group-hover:shadow-[0_0_50px_rgba(227,0,15,0.5)]">
                      <Play size={20} className="text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <p className="text-[#444444] text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {/* TODO: final copy */}
                  CarForce — Premierowy Pokaz
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#333333] text-xs mt-5 tracking-wider uppercase"
        >
          {/* TODO: final copy */}
          Maszyna CarForce w warunkach warsztatowych — korekta lakieru, polerowanie
          wykończeniowe
        </motion.p>
      </div>
    </section>
  );
}
