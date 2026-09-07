"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle2, QrCode, ChefHat, TableProperties,
  Zap, Shield, BarChart3, Clock, Users, TrendingUp, Award,
  Store, ScanLine, CalendarRange, UtensilsCrossed, MonitorSmartphone
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Home() {
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

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const bentoFeatures = [
    {
      title: "Smart POS",
      desc: "Lightning-fast point of sale for walk-ins, table service, and takeaways.",
      descClass: "text-gray-800 max-w-[55%] md:max-w-[50%]",
      icon: <Store size={24} className="text-brand-base" />,
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "md:row-span-1",
      bgClass: "bg-gradient-to-br from-white to-brand-tint-bg/50 overflow-visible",
      content: (
        <div className="absolute right-4 bottom-4 w-[45%] h-full min-h-[200px] pointer-events-none flex items-end justify-end">
          {/* Abstract Receipt */}
          <div className="absolute right-12 bottom-0 w-32 h-40 bg-white rounded-t-xl shadow-xl border border-gray-100 p-5 transform rotate-[-5deg] group-hover:translate-y-[-10px] group-hover:rotate-[-8deg] transition-all duration-500 flex flex-col gap-3 z-10">
            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-1"></div>
            <div className="w-3/4 h-1.5 bg-gray-100 rounded-full"></div>
            <div className="w-1/2 h-1.5 bg-gray-100 rounded-full"></div>
            <div className="w-full flex justify-between mt-auto">
              <div className="w-1/2 h-4 bg-[#683612] rounded-md"></div>
            </div>
          </div>
          {/* Abstract Credit Card */}
          <div className="absolute right-0 bottom-8 w-40 h-24 bg-[#2D1F17] rounded-xl shadow-2xl border border-[#3E2B20] p-4 transform rotate-[10deg] group-hover:translate-y-[-20px] group-hover:translate-x-[-10px] group-hover:rotate-[5deg] transition-all duration-500 z-20 flex flex-col justify-between">
            <div className="w-7 h-4.5 bg-[#D4AF37] rounded-sm"></div>
            <div className="flex justify-end relative">
              <div className="w-6 h-6 rounded-full bg-[#EB001B] absolute right-4 z-10"></div>
              <div className="w-6 h-6 rounded-full bg-[#F79E1B] opacity-90 relative z-20"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "QR Ordering",
      desc: "Guests can scan, order, and pay directly from their phones.",
      icon: <ScanLine size={24} className="text-brand-base" />,
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "md:row-span-2",
      bgClass: "bg-gradient-to-b from-white to-gray-50",
      content: (
        <div className="flex-1 flex items-end justify-center min-h-[280px] pt-10">
          <div className="relative group-hover:-translate-y-4 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-brand-secondary/10 blur-3xl rounded-full scale-150 translate-y-10" />

            {/* Phone Mockup */}
            <div className="w-48 h-80 bg-[#1A110D] rounded-t-[2.5rem] p-1.5 shadow-2xl relative border-x-4 border-t-4 border-[#2A1D16] z-10 flex flex-col items-center">
              {/* Phone Notch */}
              <div className="absolute top-1.5 inset-x-0 h-5 flex justify-center z-20">
                <div className="w-16 h-4 bg-[#1A110D] rounded-b-2xl"></div>
              </div>

              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-t-[2rem] overflow-hidden flex flex-col relative">
                {/* Screen Header */}
                <div className="bg-brand-base pt-8 pb-10 px-4 text-center rounded-b-[2rem] shadow-sm">
                  <p className="text-white text-xs font-bold tracking-widest uppercase mb-1">Table 12</p>
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto"></div>
                </div>

                {/* QR / Menu items overlay */}
                <div className="flex-1 -mt-6 px-4 flex flex-col items-center gap-3">
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100 w-full flex justify-center group-hover:scale-105 transition-transform duration-500">
                    <QrCode size={70} className="text-brand-base" strokeWidth={1.5} />
                  </div>
                  <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 shrink-0"></div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 shrink-0"></div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Table Booking",
      desc: "Interactive floor map for guests to book their perfect table in advance.",
      icon: <CalendarRange size={24} className="text-brand-base" />,
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "md:row-span-1",
      bgClass: "bg-white",
      content: (
        <div className="mt-8 relative h-16 w-full flex justify-center gap-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${i === 0 ? '-translate-x-12 rotate-[-10deg] bg-white border border-gray-100 group-hover:-translate-x-16 z-10' : i === 1 ? 'z-30 bg-brand-base border-4 border-white group-hover:-translate-y-2' : 'translate-x-12 rotate-[10deg] bg-white border border-gray-100 group-hover:translate-x-16 z-20'}`}>
              <Users size={20} className={i === 1 ? 'text-white' : 'text-gray-400'} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Kitchen Display",
      desc: "Digital display that instantly routes orders to the correct kitchen station.",
      icon: <UtensilsCrossed size={24} className="text-white" />,
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "md:row-span-1",
      bgClass: "bg-brand-base text-white relative overflow-hidden",
      iconClass: "text-brand-base bg-white/20 border-white/20 backdrop-blur-md",
      descClass: "text-white/80",
      content: (
        <div className="mt-6 flex flex-col gap-3 relative z-10">
          <div className="h-12 w-full bg-white/10 rounded-xl flex items-center px-4 gap-4 backdrop-blur-sm border border-white/10 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="h-2 w-1/3 bg-white/40 rounded-full" />
              <div className="h-1.5 w-1/4 bg-white/20 rounded-full" />
            </div>
            <div className="text-xs font-bold text-red-300">12m</div>
          </div>
          <div className="h-12 w-[85%] bg-white/10 rounded-xl flex items-center px-4 gap-4 backdrop-blur-sm border border-white/10 transform transition-all duration-700 group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="h-2 w-1/2 bg-white/30 rounded-full" />
              <div className="h-1.5 w-1/3 bg-white/20 rounded-full" />
            </div>
            <div className="text-xs font-bold text-yellow-300">5m</div>
          </div>
        </div>
      )
    }
  ];

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
                  Run a Smarter <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-[#E08600] to-orange-200">
                    Restaurant
                  </span>
                </h1>
                <p className="text-lg text-white/90 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-md">
                  SmartServe is the all-in-one platform powering modern restaurants - from the front door to the kitchen. Replace 4 apps with one seamlessly integrated solution.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/faq#contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#8A4A1C] text-white font-bold text-lg hover:bg-[#683612] transition-all shadow-[0_4px_30px_rgba(118,58,18,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap border border-white/10"
                  >
                    Book a Free Demo <ArrowRight size={20} />
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
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Today's Revenue</p>
                      <p className="text-lg font-black text-gray-900 leading-none">$4,820</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -top-8 lg:-top-6 -right-4 lg:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E08600]/10 flex items-center justify-center text-[#E08600]">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Tables Occupied</p>
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
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? "w-8 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ── BENTO GRID FEATURES ── */}
        <section id="features" className="py-24 lg:py-32 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="max-w-2xl mb-16">
              <h2 className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-3">Platform</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-brand-base leading-tight">
                Everything you need to <br className="hidden md:block" /> run the house.
              </h3>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {bentoFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                  className={`${feature.colSpan} ${feature.rowSpan} ${feature.bgClass} rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-brand-secondary/40 hover:shadow-2xl hover:shadow-brand-base/10 transition-all duration-500`}
                >
                  {/* Optional Background Pattern */}
                  {feature.iconClass && <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />}

                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm border border-gray-100 ${feature.iconClass || ""}`}>
                      {feature.icon}
                    </div>
                    <h4 className={`text-2xl font-bold mb-3 ${feature.iconClass ? 'text-white' : 'text-brand-base'}`}>{feature.title}</h4>
                    <p className={`text-lg leading-relaxed ${feature.descClass || 'text-black-900'}`}>{feature.desc}</p>

                    {feature.content && (
                      <div className="mt-6 flex-1 relative">
                        {feature.content}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SPLIT SERVICES SECTION ── */}
        <section className="py-24 bg-brand-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Front of House */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
              <motion.div {...fadeIn} className="flex-1 lg:pr-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold text-xs tracking-widest uppercase mb-6 border border-brand-tint-border">Front of House</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-base mb-6 leading-[1.1]">Run your front of house like clockwork</h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
                  Deliver a flawless guest experience with intuitive tools designed for hospitality professionals.
                </p>

                <div className="space-y-8 mt-10">
                  {[
                    { title: "Floor map reservations", desc: "Guests see a real-time visualization of your restaurant." },
                    { title: "QR self-ordering", desc: "No apps, no downloads. Just scan and order in seconds." },
                    { title: "Live table tracking", desc: "Always know the status of every table from a single screen." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary text-white flex items-center justify-center shrink-0 mt-1 shadow-md"><CheckCircle2 size={20} /></div>
                      <div>
                        <h4 className="font-extrabold text-brand-base text-xl mb-1">{item.title}</h4>
                        <p className="text-gray-800 text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="flex-1 w-full relative">
                <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <img src="https://images.unsplash.com/photo-1414235077428-33898f82d7c1?q=80&w=1200&auto=format&fit=crop" alt="Fine dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-base/20 mix-blend-overlay" />
                </div>
              </motion.div>
            </div>

            {/* Back of House */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <motion.div {...fadeIn} className="flex-1 w-full relative">
                <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <img src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1200&auto=format&fit=crop" alt="Kitchen display" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#E08600]/20 mix-blend-overlay" />
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="flex-1 lg:pl-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold text-xs tracking-widest uppercase mb-6 border border-brand-tint-border">Back of House</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-base mb-6 leading-[1.1]">Keep your kitchen in perfect sync</h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
                  Keep your kitchen firing on all cylinders with tools that eliminate miscommunication and reduce wait times.
                </p>

                <div className="space-y-8 mt-10">
                  {[
                    { title: "Digital KDS", desc: "Priority color-coding and automatic station routing." },
                    { title: "Ticket time tracking", desc: "Get alerts before orders exceed their target time." },
                    { title: "Real-time sync", desc: "Waitstaff see exactly when a dish is ready to be run." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-base text-white flex items-center justify-center shrink-0 mt-1 shadow-md"><Zap size={20} /></div>
                      <div>
                        <h4 className="font-extrabold text-brand-base text-xl mb-1">{item.title}</h4>
                        <p className="text-gray-800 text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ── LOGO MARQUEE ── */}
        <section className="py-32 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-tint-bg text-brand-base font-bold text-sm tracking-wider uppercase mb-4">What Our Partners Say</span>
              <h2 className="text-4xl font-extrabold text-gray-700">Trusted by restaurants that care.</h2>
            </motion.div>

            {/* Partner Logos */}
            <div className="relative mt-8">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-hidden">
                <div className="flex gap-24 items-center whitespace-nowrap animate-marquee">
                  {/* Real logos + duplicated for seamless loop */}
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-5 flex-shrink-0">
                      <img
                        src="/restuarant-logo/romdual-restaurant-logo.png"
                        alt="Romdual Restaurant"
                        className="h-16 max-w-[180px] object-contain"
                      />
                      <span className="text-xl font-bold text-gray-600 tracking-wide">Romdual Restaurant</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ELEVATED CTA ── */}
        <section className="py-24 lg:py-32 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeIn}
              className="relative rounded-[3rem] overflow-hidden bg-brand-base text-center py-20 px-6 sm:px-12 shadow-2xl"
            >
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary rounded-full blur-[100px] opacity-60" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E08600] rounded-full blur-[100px] opacity-40" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to upgrade your service?
                </h2>
                <p className="text-lg text-white/90 mb-10 font-medium max-w-xl mx-auto">
                  Join the next generation of restaurants running on SmartServe. Get started today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/faq#contact"
                    className="px-10 py-5 rounded-full bg-white text-brand-base font-extrabold text-lg hover:bg-brand-tint-bg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                  >
                    Book a Demo <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/about"
                    className="px-10 py-5 rounded-full bg-black/20 text-white font-bold text-lg hover:bg-black/30 border border-white/20 transition-all backdrop-blur-md flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
