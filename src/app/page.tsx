"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Sections
import BentoGrid from "@/components/home/BentoGrid";
import FrontOfHouse from "@/components/home/FrontOfHouse";
import BackOfHouse from "@/components/home/BackOfHouse";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroImages = ["/hero-bg.jpg", "/hero-bg2.jpg", "/hero-bg3.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-secondary selection:text-white bg-background font-sans">
      <Navbar />
      <main className="flex-1" ref={containerRef}>

        {/* ── HERO SECTION ── */}
        <section className="relative pt-60 pb-52 lg:pt-64 lg:pb-67 overflow-hidden">
          {/* Background Slider */}
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => (
              <div
                key={img}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: i === currentSlide ? 1 : 0 }}
              >
                <img src={img} alt={`Hero slide ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

              {/* Left Copy */}
              <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left pt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl lg:text-[4.5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-6 drop-shadow-lg">
                  {t("home.hero.title_part1")} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-[#E08600] to-orange-200">
                    {t("home.hero.title_part2")}
                  </span>
                </h1>
                <p className="text-lg text-white/90 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-md">
                  {t("home.hero.description")}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/faq#contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#8A4A1C] text-white font-bold text-lg hover:bg-[#683612] transition-all shadow-[0_4px_30px_rgba(118,58,18,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap border border-white/10"
                  >
                    {t("home.hero.bookDemo")} <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>

              {/* Right Mockup */}
              <motion.div
                className="w-full lg:w-1/2 relative mt-12 lg:mt-0"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              >
                <div className="relative w-full max-w-5xl mx-auto lg:scale-[1.22] lg:translate-x-10 z-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-visible bg-white p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-gray-100 border border-gray-100 aspect-[16/10]">
                    <img src="/dashboard-preview.png" alt="SmartServe Dashboard Preview" className="w-full h-full object-cover object-left-top" />
                  </div>

                  {/* Floating Metrics */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-8 lg:-bottom-6 -left-4 lg:-left-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">{t("home.hero.todaysSales")}</p>
                      <p className="text-lg font-black text-gray-900 leading-none">$4,250</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -top-6 -right-4 lg:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E08600]/10 flex items-center justify-center text-[#E08600]">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">{t("home.hero.tablesOccupied")}</p>
                      <p className="text-lg font-black text-gray-900 leading-none">18 / 24</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Slider Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full ${i === currentSlide
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </section>

        <BentoGrid />
        <FrontOfHouse />
        <BackOfHouse />
        <PartnerMarquee />
        <CtaSection />

      </main>
      <Footer />
    </div>
  );
}
