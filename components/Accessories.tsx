"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { SHOPIFY_URL } from "@/lib/constants";

// TODO: update href values to real Shopify product URLs per product
// TODO: update prices when confirmed
const PADS = [
  {
    id: "pad-czerwony",
    name: "Pad Tnący HD",
    color: "Czerwony",
    colorHex: "#c0392b",
    desc: "Najagresywniejszy pad w linii. Do głębokiej korekty lakieru, usuwania rys, hologramów i oksydacji. Twarda pianka o wysokiej gęstości.",
    spec: "Ø 135 mm · Twardy",
    grade: "Cut",
    img: "/images/pads/pad-czerwony.jpg",
    href: "https://sklep.carforce.pl/collections/pady-polerskie-performance",
    available: true,
  },
  {
    id: "pad-pomaranczowy",
    name: "Pad Tnący Medium",
    color: "Pomarańczowy",
    colorHex: "#e67e22",
    desc: "Wszechstronny pad do korekty średniego stopnia. Usuwa drobne rysy i defekty lakieru przy jednoczesnym dobry wykończeniu.",
    spec: "Ø 135 mm · Średni",
    grade: "Cut+",
    img: "/images/pads/pad-pomaranczowy.jpg",
    href: "https://sklep.carforce.pl/collections/pady-polerskie-performance",
    available: true,
  },
  {
    id: "pad-jasnoniebieski",
    name: "Pad Polerski",
    color: "Jasnoniebieski",
    colorHex: "#85c1e9",
    desc: "Pad do polerowania etap II. Usuwa drobne rysy po agresywnym padzie, jednocześnie przygotowując powierzchnię pod wykończenie.",
    spec: "Ø 135 mm · Miękki",
    grade: "Polish",
    img: "/images/pads/pad-jasnoniebieski.jpg",
    href: "https://sklep.carforce.pl/collections/pady-polerskie-performance",
    available: true,
  },
  {
    id: "pad-granatowy",
    name: "Pad Wykończeniowy",
    color: "Granatowy",
    colorHex: "#1a3a6e",
    desc: "Miękki pad do finalnego polerowania i nanoszenia ochrony. Gładka pianka, brak pióropuszy, doskonały połysk.",
    spec: "Ø 135 mm · Bardzo miękki",
    grade: "Finish",
    img: "/images/pads/pad-granatowy.jpg",
    href: "https://sklep.carforce.pl/collections/pady-polerskie-performance",
    available: true,
  },
  {
    id: "pad-turkusowy",
    name: "Pad Ultra Fine",
    color: "Turkusowy",
    colorHex: "#1abc9c",
    desc: "Ultrasoftowy pad do finalnego lakieru i wosków. Bezpieczny dla wszelkich powłok ceramicznych i ochronnych.",
    spec: "Ø 135 mm · Ultrasoftowy",
    grade: "Ultra Fine",
    img: "/images/pads/pad-turkusowy.jpg",
    href: "https://sklep.carforce.pl/collections/pady-polerskie-performance",
    available: true,
  },
  {
    id: "pad-bordowy",
    name: "Pad Final Finish",
    color: "Bordowy",
    colorHex: "#6e1a1a",
    desc: "Do aplikacji wosków, powłok i sealantów. Porowata pianka ułatwia równomierne rozprowadzenie preparatu na dużych powierzchniach.",
    spec: "Ø 135 mm · Porowaty",
    grade: "Wax/Sealant",
    img: "/images/pads/pad-bordowy.jpg",
    href: "https://sklep.carforce.pl/collections/pady-polerskie-performance",
    available: true,
  },
];

const EXTRAS = [
  {
    id: "backing",
    name: "Backing Pad 125 mm",
    color: null,
    colorHex: null,
    desc: "Profesjonalny uchwyt elastyczny M14. Minimalizuje wibracje, zapewnia równomierne przyleganie padu do powierzchni.",
    spec: "125 mm · M14 · Universal",
    grade: null,
    img: null,
    href: SHOPIFY_URL,
    available: true,
  },
];

const e = "easeOut" as const;

function GradeChip({ grade }: { grade: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-[9px] font-bold tracking-[0.14em] uppercase border border-[#222222] text-[#444444] rounded-[2px]">
      {grade}
    </span>
  );
}

export default function Accessories() {
  return (
    <section id="accessories" className="bg-[#080808] py-28 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: e }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="label block mb-4">Pady Performance</span>
            <h2
              className="font-extrabold text-white tracking-[-0.035em] leading-[1.03]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {/* TODO: final copy */}
              Kompletna linia.<br />
              <span className="text-[#333333]">Sześć gradacji.</span>
            </h2>
          </div>
          <a
            href="https://sklep.carforce.pl/collections/pady-polerskie-performance"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#444444] hover:text-white transition-colors shrink-0"
          >
            Wszystkie pady
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Pads grid — 3 col on desktop, 2 on tablet */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111111] mb-px">
          {PADS.map((pad, i) => (
            <motion.a
              key={pad.id}
              href={pad.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: e, delay: i * 0.06 }}
              className="group relative bg-[#080808] flex flex-col hover:bg-[#0c0c0c] transition-colors duration-300"
            >
              {/* Product image */}
              <div className="relative w-full overflow-hidden bg-[#050505]" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={pad.img}
                  alt={`${pad.name} — CarForce Performance`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Grade badge top-right */}
                <div className="absolute top-4 right-4 z-10">
                  <GradeChip grade={pad.grade!} />
                </div>
                {/* Color swatch bottom-left */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full border border-white/10"
                    style={{ background: pad.colorHex ?? "#888" }}
                  />
                  <span className="text-[#aaaaaa] text-[10px] font-medium">{pad.color}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-white font-bold text-base tracking-[-0.01em] leading-snug">
                  {pad.name}
                </h3>
                <p className="text-[#3a3a3a] text-xs leading-[1.8] flex-1">
                  {/* TODO: final copy */}
                  {pad.desc}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#111111]">
                  <span className="text-[#2a2a2a] text-[10px] font-medium">{pad.spec}</span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold tracking-wide text-[#444444] group-hover:text-[#e3000f] transition-colors">
                    <ShoppingCart size={11} />
                    Kup
                    <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Hover: left red bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e3000f] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            </motion.a>
          ))}
        </div>

        {/* Extras row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111111]">
          {EXTRAS.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: e, delay: i * 0.06 }}
              className="group relative bg-[#080808] flex items-center gap-5 p-6 hover:bg-[#0c0c0c] transition-colors"
            >
              <div className="w-16 h-16 rounded-full border border-[#1e1e1e] flex items-center justify-center shrink-0 bg-[#0a0a0a]">
                <div className="w-8 h-8 rounded-full border border-[#2a2a2a]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm mb-1">{item.name}</p>
                <p className="text-[#333333] text-xs">{item.spec}</p>
              </div>
              <ArrowRight size={14} className="text-[#2a2a2a] group-hover:text-[#e3000f] transition-colors shrink-0" />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e3000f] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            </motion.a>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="https://sklep.carforce.pl/collections/pady-polerskie-performance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#444444] hover:text-white transition-colors"
          >
            Wszystkie pady <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
