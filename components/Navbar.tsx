"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Specyfikacja", id: "specs" },
  { label: "Video", id: "video" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={false}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(13,13,13,0.85)] backdrop-blur-xl border-b border-[#1a1a1a]"
            : "bg-transparent"
        }`}
      >
        {/* Progress bar — thin red line at very top */}
        {scrolled && (
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#e3000f] to-transparent opacity-40" />
        )}

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-px select-none group">
            <span className="font-extrabold text-[1.15rem] tracking-[-0.02em] text-white group-hover:text-white/90 transition-colors">
              CAR
            </span>
            <span className="font-extrabold text-[1.15rem] tracking-[-0.02em] text-[#e3000f]">
              FORCE
            </span>
            <span className="w-[5px] h-[5px] rounded-full bg-[#e3000f] ml-[2px] mb-[2px] self-end shrink-0" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onMouseEnter={() => setActive(l.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => scrollTo(l.id)}
                className="relative px-4 py-2 text-[13px] font-medium text-[#666666] hover:text-white transition-colors duration-200"
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-[4px] bg-white/[0.04]"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo("waitlist")}
            className="hidden md:flex items-center gap-2 h-9 px-5 text-[12px] font-semibold tracking-[0.08em] uppercase bg-[#e3000f] text-white rounded-[4px] hover:bg-[#b8000c] transition-colors duration-200 shadow-[0_0_20px_rgba(227,0,15,0.2)] hover:shadow-[0_0_30px_rgba(227,0,15,0.35)]"
          >
            {/* TODO: final copy */}
            Pre-order
          </button>

          {/* Mobile */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-[#888888] hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[rgba(10,10,10,0.98)] backdrop-blur-xl border-b border-[#1a1a1a] px-6 py-6 flex flex-col gap-1 md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left px-3 py-3 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-[4px] hover:bg-white/[0.03]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("waitlist")}
              className="mt-4 h-11 px-5 text-[12px] font-semibold tracking-[0.08em] uppercase bg-[#e3000f] text-white rounded-[4px] hover:bg-[#b8000c] transition-colors"
            >
              Pre-order
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
