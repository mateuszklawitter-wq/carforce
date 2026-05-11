const ITEMS = [
  "Profesjonalne polerowanie",
  "Made in Gdynia",
  "1200 W",
  "Premiera czerwiec 2026",
  "CarForce Detailing",
  "6 gradacji padów",
  "12 miesięcy gwarancji",
  "600–6500 obr/min",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[#111111] bg-[#070707] py-5 select-none">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-7">
            <span className="text-[#5a5a5a] text-[11px] font-semibold tracking-[0.32em] uppercase pl-7">
              {item}
            </span>
            <span className="text-[#e3000f] text-[6px]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
