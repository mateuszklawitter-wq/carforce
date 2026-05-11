"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SHOPIFY_URL } from "@/lib/constants";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error ?? "Coś poszło nie tak. Spróbuj ponownie.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Błąd połączenia. Sprawdź internet i spróbuj ponownie.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="relative py-28 px-6 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(227,0,15,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="section-badge block mb-4"
        >
          {/* TODO: final copy */}
          Pre-order
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
        >
          {/* TODO: final copy */}
          Bądź pierwszy. Odbierz ofertę&nbsp;pre-order.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#888888] mb-10 leading-relaxed"
        >
          {/* TODO: final copy */}
          Zapisz się na listę i zyskaj dostęp do specjalnej ceny premierowej,
          priorytetową wysyłkę oraz ekskluzywny pakiet akcesoriów gratis dla
          pierwszych 100 zamawiających.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[rgba(227,0,15,0.1)] border border-[rgba(227,0,15,0.3)] flex items-center justify-center">
                <CheckCircle2 size={32} className="text-[#e3000f]" />
              </div>
              <p className="text-white text-xl font-bold">
                {/* TODO: final copy */}
                Zapisano!
              </p>
              <p className="text-[#888888]">
                {/* TODO: final copy */}
                Damy Ci znać jako pierwszemu. Sprawdź skrzynkę&nbsp;— wyślemy
                potwierdzenie.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="twoj@email.pl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                  aria-label="Adres email"
                  disabled={status === "loading"}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="shrink-0 h-12"
                >
                  {status === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      {/* TODO: final copy */}
                      Zapisz mnie na listę
                    </>
                  )}
                </Button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-sm text-[#e3000f]">{errorMsg}</p>
              )}

              <p className="mt-4 text-[#555555] text-sm">
                {/* TODO: final copy */}
                Bez spamu. Informujemy tylko o premierze i ofercie specjalnej.
              </p>
            </form>
          )}
        </motion.div>

        {/* Secondary link to shop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-[#222222]"
        >
          <p className="text-[#888888] text-sm">
            {/* TODO: final copy */}
            Chcesz zamówić już teraz?{" "}
            <a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#e3000f] transition-colors inline-flex items-center gap-1"
            >
              Przejdź do sklepu <ArrowRight size={14} />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
