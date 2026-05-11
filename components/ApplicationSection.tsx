"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// TODO: replace bg with real lifestyle/workshop photo (e.g. /images/application-bg.jpg)
// Ideal shot: detailer using the machine on a dark/black car in a workshop

export default function ApplicationSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a]" style={{ minHeight: "90vh" }}>

      {/* ── background: pad macro photo used as dramatic backdrop ── */}
      {/* TODO: swap src to lifestyle/workshop photo when available */}
      <div className="absolute inset-0">
        {/* Placeholder gradient — replace with <Image fill src="/images/application-bg.jpg" ... /> */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, #1a0202 0%, #0a0a0a 60%)",
          }}
        />
        {/* Pad texture used as dramatic bg element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <Image
            src="/images/pads/pad-czerwony.jpg"
            alt=""
            fill
            className="object-cover object-left"
            aria-hidden
          />
        </div>
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.97) 40%, rgba(10,10,10,0.6) 70%, rgba(10,10,10,0.3) 100%)",
          }}
        />
      </div>

      {/* ── content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full py-32">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="label block mb-6"
          >
            W zastosowaniu
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" as const, delay: 0.08 }}
            className="font-extrabold text-white leading-[1.02] tracking-[-0.035em] mb-7"
            style={{ fontSize: "clamp(2.6rem, 5vw, 5rem)" }}
          >
            {/* TODO: final copy */}
            Moc, która<br />
            <span className="text-[#e3000f]">zmienia lakier.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.18 }}
            className="text-[#555555] text-base leading-[1.85] mb-10 max-w-md"
          >
            {/* TODO: final copy */}
            CarForce CF&#8209;01 przenosi profesjonalne detailingowe
            doświadczenie z&nbsp;Gdyni prosto w&nbsp;Twoje ręce.
            Od&nbsp;agresywnej korekty po&nbsp;finalne wykończenie —
            bez&nbsp;kompromisów.
          </motion.p>

          {/* 3 quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.28 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            {[
              { v: "1200 W", l: "Moc" },
              { v: "8 mm", l: "Skok" },
              { v: "2,4 kg", l: "Waga" },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="text-white text-2xl font-extrabold tracking-tight">{v}</p>
                <p className="text-[#333333] text-[10px] font-semibold tracking-[0.16em] uppercase mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.35 }}
            onClick={() => scrollTo("waitlist")}
            className="group inline-flex items-center gap-2 h-12 px-8 text-[12px] font-bold tracking-[0.1em] uppercase bg-[#e3000f] text-white rounded-[3px] hover:bg-[#b8000c] transition-all shadow-[0_4px_30px_rgba(227,0,15,0.25)] hover:shadow-[0_4px_45px_rgba(227,0,15,0.45)]"
          >
            {/* TODO: final copy */}
            Zarezerwuj pre-order
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
