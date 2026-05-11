import { ArrowUpRight } from "lucide-react";

function IconIG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFB() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const LINKS = [
  { label: "carforce.pl", href: "https://carforce.pl" },
  { label: "Sklep", href: "https://sklep.carforce.pl" },
  { label: "Polityka prywatności", href: "https://carforce.pl/polityka-prywatnosci" },
  { label: "Kontakt", href: "https://carforce.pl/kontakt" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/carforce.pl", Icon: IconIG },
  { label: "Facebook", href: "https://facebook.com/carforce.pl", Icon: IconFB },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-px mb-4">
              <span className="font-extrabold text-base tracking-[-0.02em] text-white">CAR</span>
              <span className="font-extrabold text-base tracking-[-0.02em] text-[#e3000f]">FORCE</span>
              <span className="w-[5px] h-[5px] rounded-full bg-[#e3000f] ml-[2px] mb-[2px] self-end shrink-0" />
            </div>
            <p className="text-[#333333] text-xs leading-[1.8] max-w-[220px]">
              {/* TODO: final copy */}
              Profesjonalny detailing i sprzęt samochodowy.<br />
              Gdynia, Polska.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#2a2a2a] text-[9px] font-semibold tracking-[0.2em] uppercase mb-4">
              Linki
            </p>
            <nav className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#444444] hover:text-white transition-colors w-fit"
                >
                  {l.label}
                  <ArrowUpRight size={10} className="opacity-40" />
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[#2a2a2a] text-[9px] font-semibold tracking-[0.2em] uppercase mb-4">
              Social
            </p>
            <nav className="flex flex-col gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-[#444444] hover:text-white transition-colors w-fit"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0f0f0f] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#2a2a2a] text-[10px] tracking-wider">
            {/* TODO: final copy */}
            © 2026 CarForce. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-[#1e1e1e] text-[10px] tracking-wider">
            Made in Gdynia 🇵🇱
          </p>
        </div>
      </div>
    </footer>
  );
}
