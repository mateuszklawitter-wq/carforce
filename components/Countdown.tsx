"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type T = { days: number; hours: number; minutes: number; seconds: number };

function calc(target: Date): T {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative bg-[#0d0d0d] border border-[#2a2a2a] rounded-[4px] w-16 h-16 flex items-center justify-center overflow-hidden">
        {/* top/bottom halves divider */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#1c1c1c]" />
        {/* subtle red corner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(227,0,15,0.04)]" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={str}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" as const }}
            className="font-extrabold text-2xl text-white tabular-nums tracking-tight"
          >
            {str}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[9px] font-semibold tracking-[0.18em] text-[#444444] uppercase">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <span className="text-[#e3000f] font-bold text-xl mb-5 select-none">:</span>
  );
}

export default function Countdown({ target }: { target: Date }) {
  const [time, setTime] = useState<T | null>(null);

  useEffect(() => {
    setTime(calc(target));
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) return <div className="h-16" />;

  const launched = time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0;
  if (launched)
    return (
      <p className="text-[#e3000f] text-sm font-semibold tracking-widest uppercase">
        Dostępne teraz
      </p>
    );

  return (
    <div className="flex items-center gap-2">
      <Unit value={time.days} label="dni" />
      <Sep />
      <Unit value={time.hours} label="godz" />
      <Sep />
      <Unit value={time.minutes} label="min" />
      <Sep />
      <Unit value={time.seconds} label="sek" />
    </div>
  );
}
