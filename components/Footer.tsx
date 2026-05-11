import { ExternalLink } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Left: brand */}
        <div>
          <div className="flex items-center gap-0.5 mb-3">
            <span className="font-extrabold text-lg tracking-tight text-white">CAR</span>
            <span className="font-extrabold text-lg tracking-tight text-[#e3000f]">FORCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e3000f] ml-0.5 mb-0.5 self-end" />
          </div>
          <p className="text-[#555555] text-sm leading-relaxed max-w-xs">
            {/* TODO: final copy */}
            Profesjonalny detailing i akcesoria samochodowe. Gdynia, Polska.
          </p>
        </div>

        {/* Center: links */}
        <div className="flex flex-col gap-3">
          <p className="text-[#888888] text-xs uppercase tracking-widest font-semibold mb-1">
            Linki
          </p>
          {[
            { label: "carforce.pl", href: "https://carforce.pl" },
            { label: "sklep.carforce.pl", href: "https://sklep.carforce.pl" },
            { label: "Polityka prywatności", href: "https://carforce.pl/polityka-prywatnosci" },
            { label: "Kontakt", href: "https://carforce.pl/kontakt" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888888] hover:text-white transition-colors inline-flex items-center gap-1.5 w-fit"
            >
              {link.label}
              <ExternalLink size={11} className="opacity-50" />
            </a>
          ))}
        </div>

        {/* Right: socials */}
        <div className="flex flex-col gap-3">
          <p className="text-[#888888] text-xs uppercase tracking-widest font-semibold mb-1">
            Social media
          </p>
          <a
            href="https://instagram.com/carforce.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors w-fit"
          >
            <IconInstagram />
            Instagram
          </a>
          <a
            href="https://facebook.com/carforce.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors w-fit"
          >
            <IconFacebook />
            Facebook
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#161616] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[#444444] text-xs">
          <p>{/* TODO: final copy */}© 2025 CarForce. Wszelkie prawa zastrzeżone.</p>
          <p>Made in Gdynia 🇵🇱</p>
        </div>
      </div>
    </footer>
  );
}
