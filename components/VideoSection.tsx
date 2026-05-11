"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="section-badge block mb-3">
            {/* TODO: final copy */}
            W akcji
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {/* TODO: final copy */}
            Zobacz maszynę w pracy
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* TODO: replace with YouTube iframe or next/video component */}
          {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... /> */}
          <div
            className="relative w-full rounded-[6px] border border-[#e3000f]/30 bg-[#0d0d0d] flex items-center justify-center group cursor-pointer overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Subtle inner glow */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(227,0,15,0.06) 0%, transparent 60%)",
              }}
            />
            <button
              className="relative z-10 flex flex-col items-center gap-4"
              aria-label="Odtwórz film"
            >
              <div className="w-18 h-18 rounded-full border-2 border-[#e3000f] flex items-center justify-center bg-[rgba(227,0,15,0.1)] group-hover:bg-[rgba(227,0,15,0.2)] group-hover:shadow-[0_0_40px_rgba(227,0,15,0.25)] transition-all duration-300 p-5">
                <Play size={32} className="text-[#e3000f] fill-[#e3000f] ml-1" />
              </div>
              <p className="text-[#888888] text-sm tracking-wide">
                {/* TODO: final copy */}
                CarForce Maszyna Polerska — premierowy pokaz
              </p>
            </button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#555555] text-sm mt-6"
        >
          {/* TODO: final copy */}
          Film prezentujący maszynę CarForce w warunkach warsztatowych — korekta
          lakieru, polerowanie wykończeniowe i więcej.
        </motion.p>
      </div>
    </section>
  );
}
