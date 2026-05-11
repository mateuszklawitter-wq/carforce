"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Each feature section uses a pad macro photo as its dramatic visual
// Photos are from the CarForce Performance Pad lineup — same dark-background style
const FEATURES = [
  {
    id: "moc",
    num: "01",
    title: "Moc przemysłowa.",
    sub: "1200 W bez kompromisów.",
    body: "Silnik brushless 1200 W zaprojektowany do ciągłej pracy warsztatowej. Elektroniczna stabilizacja prędkości utrzymuje stałe obroty pod obciążeniem — niezależnie od twardości lakieru czy gradacji padu.",
    detail: "1200 W · Brushless",
    img: "/images/pads/pad-czerwony.jpg",
    alt: "Pad tnący CarForce Performance — czerwony",
    imgRight: false,
  },
  {
    id: "precyzja",
    num: "02",
    title: "Precyzja\ndetailingu.",
    sub: "600–6500 rpm, pełna kontrola.",
    body: "Płynna regulacja skoku 8 mm i elektronicznie sterowana prędkość pozwalają pracować zarówno na etapie agresywnej korekty jak i finalnego wykończenia. Jeden przyrząd — cały zakres pracy.",
    detail: "8 mm skok · 600–6500 rpm",
    img: "/images/pads/pad-pomaranczowy.jpg",
    alt: "Pad polerski CarForce Performance — pomarańczowy",
    imgRight: true,
  },
  {
    id: "trwalosc",
    num: "03",
    title: "Trwałość\nna lata.",
    sub: "Premium materiały, serwis w Polsce.",
    body: "Aluminiowa obudowa głowicy, łożyska precyzyjne i uszczelnienia przemysłowe. 12 miesięcy gwarancji z serwisem gwarancyjnym na terenie Polski. Narzędzie, które rośnie razem z Twoim biznesem.",
    detail: "12 mies. gwarancji · PL serwis",
    img: "/images/pads/pad-granatowy.jpg",
    alt: "Pad wykończeniowy CarForce Performance — granatowy",
    imgRight: false,
  },
];

const e = "easeOut" as const;

export default function FeatureSections() {
  return (
    <div>
      {FEATURES.map((f, i) => (
        <section
          key={f.id}
          className={`relative overflow-hidden ${i % 2 === 0 ? "bg-[#080808]" : "bg-[#0a0a0a]"}`}
        >
          <div
            className={`max-w-[1400px] mx-auto grid lg:grid-cols-2 ${f.imgRight ? "lg:grid-flow-dense" : ""}`}
            style={{ minHeight: "80vh" }}
          >
            {/* ── image panel ── */}
            <div
              className={`relative overflow-hidden ${f.imgRight ? "lg:col-start-2" : ""}`}
              style={{ minHeight: "50vw", maxHeight: "700px" }}
            >
              <Image
                src={f.img}
                alt={f.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient fade toward text side */}
              <div
                className={`absolute inset-0 ${
                  f.imgRight
                    ? "bg-gradient-to-l from-transparent via-transparent to-[rgba(8,8,8,0.5)]"
                    : "bg-gradient-to-r from-transparent via-transparent to-[rgba(8,8,8,0.5)]"
                }`}
              />
            </div>

            {/* ── text panel ── */}
            <div
              className={`flex flex-col justify-center px-10 py-20 lg:px-16 xl:px-24 ${
                f.imgRight ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: e }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="font-extrabold tracking-[-0.04em] text-[#161616] select-none"
                    style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}
                  >
                    {f.num}
                  </span>
                  <span className="label">{f.sub}</span>
                </div>

                <h2
                  className="font-extrabold text-white leading-[1.04] tracking-[-0.03em] whitespace-pre-line"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
                >
                  {/* TODO: final copy */}
                  {f.title}
                </h2>

                <span className="block w-8 h-[2px] bg-[#e3000f]" />

                <p className="text-[#555555] text-base leading-[1.85] max-w-md">
                  {/* TODO: final copy */}
                  {f.body}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#1e1e1e] rounded-[3px]">
                    <span className="w-px h-3.5 bg-[#e3000f]" />
                    <span className="text-[#444444] text-[11px] font-semibold tracking-wider">{f.detail}</span>
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
