import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maszyna polerska CarForce | Pre-order",
  description:
    "Profesjonalna maszyna polerska od CarForce — marki detailingowej z Gdyni. Zapisz się na pre-order i odbierz ofertę premierową jako pierwszy.",
  openGraph: {
    title: "Maszyna polerska CarForce | Pre-order",
    description:
      "Profesjonalna maszyna polerska od CarForce. Zapisz się na pre-order.",
    images: [{ url: "/og-image.jpg" }],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
