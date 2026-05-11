"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#080808] py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-16"
        >
          <span className="label block mb-4">Pytania i odpowiedzi</span>
          <h2
            className="font-extrabold text-white tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {/* TODO: final copy */}
            Masz pytania?<br />
            <span className="text-[#333333]">Mamy odpowiedzi.</span>
          </h2>
        </motion.div>

        {/* Items */}
        <div className="divide-y divide-[#141414]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" as const, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-white" : "text-[#888888] group-hover:text-white"
                    }`}
                  >
                    {/* TODO: final copy */}
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "border-[#e3000f] bg-[rgba(227,0,15,0.08)] text-[#e3000f]"
                        : "border-[#222222] text-[#444444] group-hover:border-[#333333]"
                    }`}
                  >
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-[#555555] leading-[1.85]">
                        {/* TODO: final copy */}
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
