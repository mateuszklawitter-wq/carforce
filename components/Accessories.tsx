"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SHOPIFY_URL } from "@/lib/constants";

const e = "easeOut" as const;

// TODO: per-product Shopify URLs when available
const COLLECTION_URL = "https://sklep.carforce.pl/collections/pady-polerskie-performance";

const PADS = [
  {
    id: "pad-czerwony",
    name: "Pad Tnący HD",
    grade: "Cut",
    color: "Czerwony",
    colorHex: "#c0392b",
    body: "Najagresywniejszy w linii. Do głębokiej korekty lakieru, usuwania rys, hologramów i oksydacji.",
    spec: "Ø 135 mm · Twardy",
    img: "/images/pads/pad-czerwony.jpg",
  },
  {
    id: "pad-pomaranczowy",
    name: "Pad Tnący Medium",
    grade: "Cut+",
    color: "Pomarańczowy",
    colorHex: "#e67e22",
    body: "Wszechstronny do korekty średniego stopnia. Usuwa drobne rysy, gotuje powierzchnię pod polerowanie.",
    spec: "Ø 135 mm · Średni",
    img: "/images/pads/pad-pomaranczowy.jpg",
  },
  {
    id: "pad-jasnoniebieski",
    name: "Pad Polerski",
    grade: "Polish",
    color: "Jasnoniebieski",
    colorHex: "#85c1e9",
    body: "Etap polerowania pośredniego. Usuwa hologramy po korekcie, przygotowuje pod wykończenie.",
    spec: "Ø 135 mm · Miękki",
    img: "/images/pads/pad-jasnoniebieski.jpg",
  },
  {
    id: "pad-granatowy",
    name: "Pad Wykończeniowy",
    grade: "Finish",
    color: "Granatowy",
    colorHex: "#1a3a6e",
    body: "Miękka pianka do finalnego polerowania i nanoszenia ochrony. Gładkie wykończenie, brak pióropuszy.",
    spec: "Ø 135 mm · Bardzo miękki",
    img: "/images/pads/pad-granatowy.jpg",
  },
  {
    id: "pad-turkusowy",
    name: "Pad Ultra Fine",
    grade: "Ultra Fine",
    color: "Turkusowy",
    colorHex: "#1abc9c",
    body: "Ultrasoftowy. Bezpieczny dla powłok ceramicznych. Idealny pod nanoszenie wosków i sealantów.",
    spec: "Ø 135 mm · Ultrasoftowy",
    img: "/images/pads/pad-turkusowy.jpg",
  },
  {
    id: "pad-bordowy",
    name: "Pad Final Finish",
    grade: "Wax",
    color: "Bordowy",
    colorHex: "#6e1a1a",
    body: "Do aplikacji wosków, powłok i sealantów. Porowata pianka rozprowadza preparat równomiernie.",
    spec: "Ø 135 mm · Porowaty",
    img: "/images/pads/pad-bordowy.jpg",
  },
];

export default function Accessories() {
  return (
    <section id="accessories" className="bg-[#080808] py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: e }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24"
        >
          <div className="max-w-xl">
            <span className="label block mb-5">Pady Performance</span>
            <h2
              className="font-extrabold text-white tracking-[-0.04em] leading-[0.98]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)" }}
            >
              {/* TODO: final copy */}
              Sześć gradacji.<br />
              <span className="text-[#2e2e2e]">Jeden system.</span>
            </h2>
            <p className="text-[#555555] text-[15px] leading-[1.75] mt-6 max-w-md">
              {/* TODO: final copy */}
              Linia padów stworzona pod maszynę CF&#8209;01. Od najtwardszego HD
              Cut po porowaty Wax — pełne pokrycie procesu detailingowego.
            </p>
          </div>
          <a
            href={COLLECTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:inline-flex items-center gap-2 h-11 px-5 text-[11px] font-semibold tracking-[0.12em] uppercase border border-[#1e1e1e] text-[#888888] rounded-[3px] hover:border-[#e3000f]/40 hover:text-white transition-all shrink-0"
          >
            Cała kolekcja
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Pads grid — 2 col on tablet, 3 on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111111]">
          {PADS.map((pad, i) => (
            <motion.a
              key={pad.id}
              href={COLLECTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: e, delay: i * 0.06 }}
              className="group relative bg-[#080808] flex flex-col hover:bg-[#0c0c0c] transition-colors duration-300"
            >
              {/* Image — generous, taller */}
              <div className="relative w-full overflow-hidden bg-[#050505]" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={pad.img}
                  alt={`${pad.name} — CarForce Performance`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Grade chip */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="inline-block px-2.5 py-1 text-[9px] font-bold tracking-[0.16em] uppercase bg-black/60 backdrop-blur-sm border border-white/10 text-white rounded-[2px]">
                    {pad.grade}
                  </span>
                </div>
                {/* Color swatch + name */}
                <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-[2px] border border-white/[0.06]">
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-white/10"
                    style={{ background: pad.colorHex }}
                  />
                  <span className="text-white/80 text-[10px] font-medium tracking-wide">
                    {pad.color}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 p-6 lg:p-7 flex-1">
                <h3 className="text-white font-bold text-lg tracking-[-0.015em] leading-tight">
                  {pad.name}
                </h3>
                <p className="text-[#444444] text-[13px] leading-[1.75] flex-1">
                  {/* TODO: final copy */}
                  {pad.body}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#111111]">
                  <span className="text-[#2e2e2e] text-[10px] font-medium tracking-wide">{pad.spec}</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.07em] uppercase text-[#888888] group-hover:text-[#e3000f] transition-colors">
                    Kup
                    <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Top red line on hover */}
              <div className="absolute left-0 right-0 top-0 h-px bg-[#e3000f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* Mobile collection CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <a
            href={COLLECTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 text-[11px] font-semibold tracking-[0.12em] uppercase border border-[#1e1e1e] text-[#888888] rounded-[3px] hover:border-[#e3000f]/40 hover:text-white transition-all"
          >
            Cała kolekcja <ArrowRight size={12} />
          </a>
        </div>

        {/* Secondary row — backing pad / extras */}
        <motion.a
          href={SHOPIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: e }}
          className="group mt-px bg-[#080808] flex items-center justify-between gap-6 p-6 lg:p-8 hover:bg-[#0c0c0c] transition-colors border-t border-[#111111]"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border border-[#1e1e1e] flex items-center justify-center shrink-0 bg-[#0a0a0a]">
              <div className="w-7 h-7 rounded-full border border-[#2a2a2a]" />
            </div>
            <div>
              <p className="text-white font-bold text-base mb-1">Backing Pad 125 mm</p>
              <p className="text-[#444444] text-xs">Uchwyt elastyczny M14 · uniwersalny pod całą linię padów</p>
            </div>
          </div>
          <span className="hidden sm:flex items-center gap-2 text-[11px] font-semibold tracking-[0.07em] uppercase text-[#888888] group-hover:text-[#e3000f] transition-colors shrink-0">
            Kup w sklepie <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
