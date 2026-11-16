import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Пожарная сигнализация",
  description: "АПС, СОУЭ и АСПИ: обследование, проект, монтаж, пусконаладка, испытания и обслуживание. Лицензированные работы, исполнительная документация.",
};

export default function Page() {
  return <ServicePage slug="fire" />;
}