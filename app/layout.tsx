import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], variable: "--font-unbounded", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://blitz21.ru"),
  title: { default: "ООО «БЛИЦ» — инженерные системы пожарной и охранной безопасности", template: "%s — ООО «БЛИЦ»" },
  description: "Проектирование, монтаж и обслуживание пожарной сигнализации, СКС, видеонаблюдения и СКУД. Полный цикл работ и исполнительная документация.",
  keywords: ["пожарная сигнализация", "СКС", "видеонаблюдение", "СКУД", "монтаж", "обслуживание", "БЛИЦ"],
  openGraph: {
    title: "ООО «БЛИЦ» — инженерные системы безопасности",
    description: "Пожарная сигнализация, СКС, видеонаблюдение и СКУД. Проектирование, монтаж, ПНР и обслуживание.",
    url: "https://blitz21.ru",
    siteName: company.legal,
    locale: "ru_RU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${jetbrains.variable}`}>
      <body className="pt-20 bg-neutral-950 text-neutral-100 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}