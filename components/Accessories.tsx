"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { SHOPIFY_URL } from "@/lib/constants";

// TODO: replace placeholder images with real product photos
// TODO: update href values to real Shopify product URLs when available
const ACCESSORIES = [
  {
    id: "pad-cut",
    badge: null,
    badgeLabel: null,
    category: "Pady polerskie",
    name: "Pad tnący DA 135 mm",
    desc: "Agresywny pad do korekty głębokich rys i hologramów. Pianka o wysokiej gęstości, kompatybilna z maszyną CarForce.",
    detail: "Ø 135 mm · 3-pack",
    href: SHOPIFY_URL,
    available: true,
  },
  {
    id: "pad-finish",
    badge: null,
    badgeLabel: null,
    category: "Pady polerskie",
    name: "Pad wykończeniowy DA 135 mm",
    desc: "Miękka pianka do finalnego polerowania i nanoszenia ochrony. Gładka powierzchnia, zero pióropuszy.",
    detail: "Ø 135 mm · 3-pack",
    href: SHOPIFY_URL,
    available: true,
  },
  {
    id: "backing",
    badge: null,
    badgeLabel: null,
    category: "Akcesoria",
    name: "Backing Pad 125 mm",
    desc: "Profesjonalny uchwyt na pady. Elastyczna podstawa minimalizuje wibracje i zapewnia równomierne przyleganie.",
    detail: "125 mm · M14",
    href: SHOPIFY_URL,
    available: true,
  },
  {
    id: "paste-cut",
    badge: "WKRÓTCE",
    badgeLabel: "soon",
    category: "Pasty polerskie",
    name: "Pasta korygująca CarForce Cut",
    desc: "Wysoka skuteczność korekty, łatwe usuwanie. Opracowana specjalnie pod pady i maszyny CarForce.",
    detail: "250 ml",
    href: null,
    available: false,
  },
  {
    id: "paste-finish",
    badge: "WKRÓTCE",
    badgeLabel: "soon",
    category: "Pasty polerskie",
    name: "Pasta wykończeniowa CarForce Finish",
    desc: "Bezpieczna dla wszelkich lakierów, pozostawia efekt głębokiego połysku. Bez olejów maskujących.",
    detail: "250 ml",
    href: null,
    available: false,
  },
  {
    id: "bag",
    badge: null,
    badgeLabel: null,
    category: "Akcesoria",
    name: "Torba transportowa CarForce",
    desc: "Dedykowana torba do transportu maszyny i akcesoriów. Twarda skorupa, wnętrze z pianki wyciętej pod kształt urządzenia.",
    detail: "Pasuje do CF-01",
    href: SHOPIFY_URL,
    available: true,
  },
];

export default function Accessories() {
  return (
    <section id="accessories" className="bg-[#0d0d0d] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="label block mb-4">Akcesoria</span>
            <h2
              className="font-extrabold text-white tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {/* TODO: final copy */}
              Kompletny system.<br />
              <span className="text-[#555555]">Jeden ekosystem.</span>
            </h2>
          </div>
          <a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-[#555555] hover:text-white transition-colors shrink-0"
          >
            {/* TODO: final copy */}
            Wszystkie produkty
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#161616]">
          {ACCESSORIES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: i * 0.07 }}
              className={`group relative bg-[#0d0d0d] flex flex-col ${
                item.available ? "hover:bg-[#0f0f0f]" : "opacity-60"
              } transition-colors duration-300`}
            >
              {/* Image placeholder area */}
              {/* TODO: replace with <Image src={item.image} ... /> */}
              <div className="relative w-full bg-[#0a0a0a] border-b border-[#141414] flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
                {/* Coming soon overlay */}
                {!item.available && (
                  <div className="absolute inset-0 bg-[#0a0a0a]/60 z-10 flex items-center justify-center">
                    <span className="label px-3 py-1 border border-[rgba(227,0,15,0.25)] rounded-[3px] bg-[rgba(227,0,15,0.05)]">
                      Wkrótce
                    </span>
                  </div>
                )}
                {/* Placeholder visual */}
                <div className="relative z-0 flex flex-col items-center gap-3 text-center px-6">
                  <div className="w-14 h-14 rounded-full border border-[#1e1e1e] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-[#2a2a2a]" />
                  </div>
                  <p className="text-[#1e1e1e] text-[9px] font-semibold tracking-[0.2em] uppercase">
                    {/* TODO: product photo */}
                    Zdjęcie produktu
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#333333] text-[9px] font-semibold tracking-[0.18em] uppercase">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[#e3000f] text-[9px] font-bold tracking-[0.15em] uppercase border border-[rgba(227,0,15,0.25)] px-2 py-0.5 rounded-[2px]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-[15px] tracking-[-0.01em] leading-snug">
                  {/* TODO: final copy */}
                  {item.name}
                </h3>

                <p className="text-[#444444] text-xs leading-[1.8] flex-1">
                  {/* TODO: final copy */}
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#141414]">
                  <span className="text-[#333333] text-[10px] font-medium">
                    {item.detail}
                  </span>

                  {item.available && item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase text-[#555555] hover:text-white transition-colors"
                    >
                      <ShoppingCart size={12} />
                      Kup w sklepie
                      <ArrowRight size={11} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="text-[#2a2a2a] text-[11px] font-medium tracking-wide">
                      Niedostępny
                    </span>
                  )}
                </div>
              </div>

              {/* Left bar on hover */}
              {item.available && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e3000f] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile "all products" link */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-[#555555] hover:text-white transition-colors"
          >
            Wszystkie produkty
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
