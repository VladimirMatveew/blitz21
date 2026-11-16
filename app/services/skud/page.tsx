import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "СКУД",
  description: "Контроль и управление доступом: точки доступа, считыватели, турникеты, права и графики, учёт времени, автоматическая разблокировка при пожаре.",
};

export default function Page() {
  return <ServicePage slug="skud" />;
}