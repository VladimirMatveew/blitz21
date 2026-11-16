import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Видеонаблюдение",
  description: "IP-видеонаблюдение: расчёт зон и пикселей на метр, PoE-бюджет, архив, аналитика, удалённый доступ и интеграция со СКУД.",
};

export default function Page() {
  return <ServicePage slug="video" />;
}