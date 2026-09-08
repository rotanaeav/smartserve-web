"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sections
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutCta from "@/components/about/AboutCta";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-base selection:text-white">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutMission />
        <AboutTeam />
        <AboutValues />
        <AboutTimeline />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}