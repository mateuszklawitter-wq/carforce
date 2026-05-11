"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const e = "easeOut" as const;

export default function ApplicationSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative w-full overflow-hidden bg-[#050505]" style={{ minHeight: "90vh" }}>

      {/* Right-half image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <Image
          src="/images/pads/pad-czerwony.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
        {/* Vignette to blend into bg */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(5,5,5,0.45)] to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.4)] via-transparent to-[rgba(5,5,5,0.6)]" />
      </div>

      {/* Mobile: dim the bg image more */}
      <div className="lg:hidden absolute inset-0 z-0 bg-[rgba(5,5,5,0.8)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center min-h-[90vh] py-32">
        <div className="max-w-xl">

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: e }}
            className="label block mb-8"
          >
            W zastosowaniu
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: e, delay: 0.1 }}
            className="font-extrabold text-white leading-[0.96] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
          >
            {/* TODO: final copy */}
            Moc, która<br />
            <span className="text-[#e3000f]">zmienia lakier.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: e, delay: 0.22 }}
            className="text-[#666666] text-[17px] leading-[1.75] mb-12 max-w-md"
          >
            {/* TODO: final copy */}
            CarForce&nbsp;CF&#8209;01 przenosi gdyńskie doświadczenie detailingowe
            wprost w&nbsp;Twoje ręce. Od&nbsp;agresywnej korekty po&nbsp;finalne wykończenie
            &mdash; w&nbsp;jednym urządzeniu, z&nbsp;sześcioma padami w&nbsp;ekosystemie.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: e, delay: 0.32 }}
            className="flex flex-wrap gap-x-10 gap-y-5 mb-12"
          >
            {[
              { v: "1200 W", l: "Moc silnika" },
              { v: "8 mm",   l: "Skok tłoka" },
              { v: "2,4 kg", l: "Waga" },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="text-white text-3xl font-extrabold tracking-[-0.025em] leading-none">{v}</p>
                <p className="text-[#333333] text-[10px] font-semibold tracking-[0.18em] uppercase mt-2">{l}</p>
              </div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: e, delay: 0.42 }}
            onClick={() => scrollTo("waitlist")}
            className="group inline-flex items-center gap-2 h-12 px-8 text-[12px] font-bold tracking-[0.1em] uppercase bg-[#e3000f] text-white rounded-[3px] hover:bg-[#b8000c] transition-all shadow-[0_4px_30px_rgba(227,0,15,0.3)] hover:shadow-[0_4px_50px_rgba(227,0,15,0.5)]"
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
