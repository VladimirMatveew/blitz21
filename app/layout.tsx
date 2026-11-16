import type { Metadata, Viewport } from "next";
import { Golos_Text, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const golos = Golos_Text({ subsets: ["latin", "cyrillic"], variable: "--font-golos", display: "swap" });
const onest = Onest({ subsets: ["latin", "cyrillic"], variable: "--font-onest", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://blitz21.ru"),
  title: { default: "ООО «БЛИЦ» — инженерные системы пожарной и охранной безопасности", template: "%s — ООО «БЛИЦ»" },
  description: "Пожарная сигнализация, СКС, видеонаблюдение и СКУД: проектирование, монтаж, пусконаладка и обслуживание. От небольших помещений до школ, предприятий и складов.",
  keywords: ["пожарная сигнализация", "СКС", "видеонаблюдение", "СКУД", "монтаж", "обслуживание", "БЛИЦ"],
  openGraph: {
    title: "ООО «БЛИЦ» — инженерные системы безопасности",
    description: "Пожарная сигнализация, СКС, видеонаблюдение и СКУД. Полный цикл работ и исполнительная документация.",
    url: "https://blitz21.ru",
    siteName: company.legal,
    locale: "ru_RU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${golos.variable} ${onest.variable}`}>
      <body className="pt-[var(--hdr)] bg-[#08090b] text-[#eef3f8]">
        <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0 overflow-hidden">
          <defs>
            <filter id="blitz-logo-alpha" colorInterpolationFilters="sRGB">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        -1 0 0 0 1"
                result="silhouette"
              />
              <feComposite in="silhouette" in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}