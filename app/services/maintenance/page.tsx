import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Обслуживание",
  description: "Регламентное обслуживание слаботочных систем: приёмка и аудит, плановые работы, оперативные выезды, журналы и отчётность для надзорных органов.",
};

export default function Page() {
  return <ServicePage slug="maintenance" />;
}