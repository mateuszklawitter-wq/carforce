"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d] border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0.5 select-none">
          <span className="font-extrabold text-xl tracking-tight text-white">
            CAR
          </span>
          <span className="font-extrabold text-xl tracking-tight text-[#e3000f]">
            FORCE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e3000f] ml-0.5 mb-0.5 self-end" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
          {/* TODO: final copy */}
          <button onClick={() => scrollTo("specs")} className="hover:text-white transition-colors">
            Specyfikacja
          </button>
          <button onClick={() => scrollTo("faq")} className="hover:text-white transition-colors">
            FAQ
          </button>
          <button onClick={() => scrollTo("waitlist")} className="hover:text-white transition-colors">
            Pre-order
          </button>
        </nav>

        {/* CTA */}
        <Button
          className="hidden md:inline-flex"
          onClick={() => scrollTo("waitlist")}
        >
          {/* TODO: final copy */}
          Zapisz się na listę
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#222222] px-6 py-6 flex flex-col gap-5">
          {[
            { label: "Specyfikacja", id: "specs" },
            { label: "FAQ", id: "faq" },
            { label: "Pre-order", id: "waitlist" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium text-[#888888] hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => scrollTo("waitlist")} className="mt-2 w-full">
            Zapisz się na listę
          </Button>
        </div>
      )}
    </header>
  );
}
