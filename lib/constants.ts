export const SHOPIFY_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_URL ?? "https://sklep.carforce.pl/products/maszyna-polerska";

// TODO: update year when confirmed — currently targeting 10 June 2026
export const LAUNCH_DATE = new Date("2026-06-10T10:00:00+02:00");

export const SPECS = [
  { label: "Moc silnika", value: "1200 W" },
  { label: "Prędkość obrotowa", value: "600 – 6500 obr./min" },
  { label: "Waga", value: "2,4 kg" },
  { label: "Długość kabla", value: "5 m" },
  { label: "Uchwyt", value: "Backing pad 125 mm" },
  { label: "Gwarancja", value: "12 miesięcy" },
  { label: "Zakres zastosowań", value: "Korekta lakieru, polerowanie, wykończenie" },
];

export const FAQ_ITEMS = [
  {
    q: "Kiedy maszyna będzie dostępna?",
    a: "Planowana data premiery to 10 czerwca 2026. Osoby zapisane na listę pre-order otrzymają powiadomienie jako pierwsze i będą mogły złożyć zamówienie przed oficjalną sprzedażą.",
  },
  {
    q: "Czym różni się pre-order od zwykłego zamówienia?",
    a: "Pre-order pozwala zarezerwować maszynę w specjalnej cenie premierowej, zanim trafi do regularnej sprzedaży. Realizacja wysyłki nastąpi od daty premiery.",
  },
  {
    q: "Jak mogę zapłacić?",
    a: "Akceptujemy płatności kartą, BLIK, przelew bankowy oraz płatności ratalne. Szczegóły dostępne przy finalizacji zamówienia w sklepie.",
  },
  {
    q: "Czy mogę anulować zamówienie pre-order?",
    a: "Tak, zamówienie pre-order można anulować bez podania przyczyny do momentu wysyłki. Wystarczy skontaktować się z nami mailowo lub telefonicznie.",
  },
  {
    q: "Jaka jest polityka zwrotów?",
    a: "Oferujemy 14-dniowe prawo do zwrotu zgodnie z przepisami prawa konsumenckiego. Produkt musi być nieużywany i w oryginalnym opakowaniu.",
  },
  {
    q: "Do jakich zastosowań nadaje się ta maszyna?",
    a: "Maszyna przeznaczona jest do profesjonalnej korekty lakieru, polerowania wykończeniowego oraz codziennej pracy detailera. Sprawdzi się zarówno w warunkach warsztatowych, jak i mobilnych.",
  },
];
