const ITEMS = [
  "PROFESJONALNE POLEROWANIE",
  "MADE IN GDYNIA",
  "1200 W",
  "PREMIERA CZERWIEC 2026",
  "CARFORCE DETAILING",
  "POLSKA MARKA",
  "12 MIESIĘCY GWARANCJI",
  "600–6500 OBR/MIN",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[#1a1a1a] bg-[#0a0a0a] py-3.5 select-none">
      <div className="flex gap-0 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-[#333333] text-[10px] font-semibold tracking-[0.22em] uppercase px-7">
              {item}
            </span>
            <span className="text-[#e3000f] text-[5px]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
