"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import FaqHero from "@/components/faq/FaqHero";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqContact from "@/components/faq/FaqContact";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-base selection:text-white">
      <Navbar />
      <FaqHero />
      <main className="flex-1 bg-[#FAF6F2]">
        <FaqAccordion />
        <FaqContact />
      </main>
      <Footer />
    </div>
  );
}
