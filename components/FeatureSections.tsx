"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    id: "moc",
    num: "01",
    eyebrow: "Moc",
    title: "1200 W bez kompromisów.",
    body: "Brushless 1200 W z elektroniczną stabilizacją obrotów. Stałe tempo pracy pod obciążeniem, niezależnie od twardości lakieru i gradacji padu.",
    stat: { v: "1200 W", l: "Moc silnika" },
    img: "/images/pads/pad-czerwony.jpg",
    alt: "Pad tnący Performance — czerwony",
    imgRight: false,
  },
  {
    id: "precyzja",
    num: "02",
    eyebrow: "Precyzja",
    title: "Pełna kontrola obrotów.",
    body: "Płynna regulacja 600–6500 rpm i 8 mm skoku pozwala pracować od agresywnej korekty po finalne wykończenie. Jedno urządzenie, cały zakres pracy.",
    stat: { v: "600–6500", l: "rpm" },
    img: "/images/pads/pad-pomaranczowy.jpg",
    alt: "Pad polerski Performance — pomarańczowy",
    imgRight: true,
  },
  {
    id: "trwalosc",
    num: "03",
    eyebrow: "Trwałość",
    title: "Zaprojektowane na lata.",
    body: "Aluminiowa głowica, łożyska precyzyjne, uszczelnienia przemysłowe. 12 miesięcy gwarancji z serwisem w Polsce.",
    stat: { v: "12 mies.", l: "Gwarancji" },
    img: "/images/pads/pad-granatowy.jpg",
    alt: "Pad wykończeniowy Performance — granatowy",
    imgRight: false,
  },
];

const e = "easeOut" as const;

export default function FeatureSections() {
  return (
    <div className="bg-[#080808]">
      {FEATURES.map((f) => (
        <section
          key={f.id}
          className="relative border-b border-[#111111] last:border-b-0"
        >
          <div
            className={`grid lg:grid-cols-2 ${f.imgRight ? "lg:grid-flow-dense" : ""}`}
            style={{ minHeight: "min(85vh, 800px)" }}
          >
            {/* Image panel */}
            <div
              className={`relative overflow-hidden ${f.imgRight ? "lg:col-start-2" : ""}`}
              style={{ minHeight: "60vw" }}
            >
              <Image
                src={f.img}
                alt={f.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Soft fade toward text side */}
              <div
                aria-hidden
                className={`absolute inset-0 ${
                  f.imgRight
                    ? "bg-gradient-to-l from-transparent to-[rgba(8,8,8,0.35)]"
                    : "bg-gradient-to-r from-transparent to-[rgba(8,8,8,0.35)]"
                }`}
              />
            </div>

            {/* Text panel */}
            <div
              className={`flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-28 ${
                f.imgRight ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, ease: e }}
                className="flex flex-col gap-7 max-w-md"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#e3000f] text-xs font-bold tracking-[0.25em]">
                    {f.num}
                  </span>
                  <span className="w-8 h-px bg-[#1f1f1f]" />
                  <span className="label !text-[#666666]">{f.eyebrow}</span>
                </div>

                <h2
                  className="font-extrabold text-white leading-[1.02] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.4rem)" }}
                >
                  {/* TODO: final copy */}
                  {f.title}
                </h2>

                <p className="text-[#555555] text-[15px] leading-[1.85]">
                  {/* TODO: final copy */}
                  {f.body}
                </p>

                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-white text-3xl font-extrabold tracking-[-0.02em] leading-none">
                    {f.stat.v}
                  </span>
                  <span className="text-[#3a3a3a] text-[10px] font-semibold tracking-[0.18em] uppercase">
                    {f.stat.l}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
