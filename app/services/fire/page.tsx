import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Пожарная сигнализация",
  description: "Проектирование, монтаж и обслуживание пожарной сигнализации и СОУЭ. Лицензированные работы, исполнительная документация.",
};

export default function Page() {
  return <ServicePage slug="fire" />;
}