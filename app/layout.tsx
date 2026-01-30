import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="pt-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
