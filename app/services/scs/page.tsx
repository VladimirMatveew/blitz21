import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "СКС и сети",
  description: "Структурированные кабельные системы: проект трасс, медь и оптика, коммутация, маркировка, тестирование и паспорт СКС по каждому порту.",
};

export default function Page() {
  return <ServicePage slug="scs" />;
}