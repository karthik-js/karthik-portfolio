import { Navbar } from "@/components/layout/Navbar";
import { ServicesContent } from "@/components/sections/ServicesContent";

export const metadata = {
  title: "Services — Karthik Talam | Frontend Consulting",
  description:
    "Frontend consulting, Next.js architecture reviews, and technical mentoring by Karthik Talam. Available for code reviews, consulting hours, and fractional lead engagements.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesContent />
    </>
  );
}
