"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Shield, Users, Target, Rocket, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6 }
  };

  const stats = [
    { value: "1", label: "Restaurant Served", sub: "Our very first partner!" },
    { value: "1M+", label: "Orders Processed", sub: "Every single month" },
    { value: "99.9%", label: "Platform Uptime", sub: "SLA guaranteed" },
    { value: "48h", label: "Onboarding Time", sub: "From signup to live" },
  ];

  const values = [
    {
      icon: <Lightbulb size={26} />,
      title: "Innovation",
      desc: "We continuously evolve based on direct feedback from our restaurant partners. Every feature exists because someone needed it in the heat of service."
    },
    {
      icon: <Heart size={26} />,
      title: "Simplicity",
      desc: "Complex operations don't need complex software. We obsess over intuitive design that reduces staff training time from days to minutes."
    },
    {
      icon: <Shield size={26} />,
      title: "Reliability",
      desc: "When the dining room is full, your system cannot fail. Our cloud infrastructure and offline-first design guarantee you are always up."
    },
    {
      icon: <Users size={26} />,
      title: "Partnership",
      desc: "We're not just a vendor — we are a growth partner. Our success is measured by the success of the restaurants we serve."
    },
  ];

  const timeline = [
    { year: "July 2026", title: "The Idea", desc: "Frustrated with disconnected restaurant tools in Phnom Penh, our founders decided to build something better — from scratch." },
    { year: "July 2026", title: "First Build", desc: "SmartServe v1 launched with a working POS and QR ordering system. Our very first restaurant partner came on board." },
    { year: "August 2026", title: "Kitchen Display", desc: "Built and shipped the Kitchen Display System based on real partner feedback, connecting the full FOH-to-kitchen pipeline." },
    { year: "August 2026", title: "Table Booking", desc: "Launched the interactive floor map and table booking system, making SmartServe a complete restaurant management platform." },
    { year: "September 2026", title: "Now & Growing", desc: "Three months in — one partner, a full platform, and big plans ahead. English & Khmer support live. More restaurants coming soon." },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-base selection:text-white">
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative pt-52 pb-40 overflow-hidden">
          {/* Dark charcoal background */}
          <div className="absolute inset-0 bg-[#111111] z-0" />
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/60 to-[#111111] z-0" />
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E08600] rounded-full blur-[200px] opacity-15 z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C87000] rounded-full blur-[150px] opacity-10 z-0" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 font-semibold text-sm mb-8">
                <Rocket size={14} className="text-orange-300" />
                Our Story
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                Empowering Every<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-[#E08600] to-orange-200">
                  Restaurant to Thrive.
                </span>
              </h1>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
                We started SmartServe because we lived the chaos of running a restaurant without the right tools. Our mission: democratize enterprise-grade restaurant technology for every establishment, regardless of size or budget.
              </p>
            </motion.div>
          </div>

          {/* Stats floating cards */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
                >
                  <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                  <div className="font-bold text-white/90 text-sm mb-0.5">{s.label}</div>
                  <div className="text-xs text-white/50">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="py-24 bg-[#FAF6F2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch gap-16">

              {/* Left */}
              <motion.div {...fadeIn} className="flex-1 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-tint-bg text-brand-base font-bold text-xs tracking-wider uppercase mb-5 self-start">Our Mission</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-base mb-5 leading-tight">
                  Built by restaurant people,<br />for restaurant people.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                  We built SmartServe on the floor, during service — because we lived the chaos ourselves. Every feature exists because a real partner needed it during a real rush.
                </p>
                <ul className="space-y-3">
                  {["No forced hardware upgrades", "Khmer & English support", "Free onboarding", "24/7 priority support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                      <div className="w-5 h-5 rounded-full bg-brand-base flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right */}
              <motion.div {...fadeIn} className="flex-1 relative min-h-[300px]">
                <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-full">
                  <img src="/hero-bg2.jpg" alt="Restaurant" className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-base/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-lg leading-tight">"Built on the floor,<br/>during service."</p>
                    <p className="text-white/50 text-xs mt-1">— The SmartServe Team</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold text-sm tracking-wider uppercase mb-4">The People</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Meet the Team</h2>
              <p className="text-gray-500 mt-4 text-lg">A small but mighty team that built a full platform in just 3 months.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
              {[
                { name: "Piseth", role: "Co-Founder & CEO", img: "/founder_img/Piseth.jpg" },
                { name: "RTN", role: "Co-Founder & CTO", img: "/founder_img/RTN.jpg" },
                { name: "TR", role: "Lead Developer", img: "/founder_img/TR.png" },
                { name: "WN", role: "UI/UX Designer", img: "/founder_img/WN.png" },
                { name: "SIM SOL", role: "Co-Founder" },
                { name: "LIN POWIN", role: "Co-Founder" },
              ].map((member, i) => {
                const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                return (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative mb-5">
                      <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 bg-[#FCECDA] flex items-center justify-center">
                        {member.img ? (
                          <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <span className="text-5xl font-black text-[#8A4A1C]">
                            {initials}
                          </span>
                        )}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-base rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <h4 className="font-extrabold text-gray-900 text-lg leading-tight">{member.name}</h4>
                    <p className="text-brand-base font-semibold text-sm mt-1">{member.role}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="pt-20 pb-12 bg-[#FAF6F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold text-sm tracking-wider uppercase mb-4">What Drives Us</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Our Core Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white text-brand-base rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-32 bg-[#FAF6F2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold text-sm tracking-wider uppercase mb-4">How We Got Here</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Our Journey</h2>
            </motion.div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-[28px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-base via-brand-secondary to-transparent -translate-x-1/2" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-start gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block" />

                    {/* Dot */}
                    <div className="absolute left-[28px] lg:left-1/2 w-5 h-5 bg-brand-base rounded-full border-4 border-white shadow-lg -translate-x-1/2 mt-5 z-10" />

                    {/* Card */}
                    <div className={`flex-1 ml-14 lg:ml-0 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-7 hover:shadow-lg transition-shadow">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-base text-white font-extrabold text-sm mb-3">{item.year}</span>
                        <h4 className="font-extrabold text-gray-900 text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 bg-brand-base relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-15" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E08600] rounded-full blur-[120px] opacity-30" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-300 rounded-full blur-[120px] opacity-20" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 mb-6 text-white/60 font-semibold">
              <Target size={18} />
              Join the Movement
            </motion.div>
            <motion.h2 {...fadeIn} className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Want to be part of the story?
            </motion.h2>
            <motion.p {...fadeIn} className="text-xl text-white/70 mb-12 font-medium">
              Whether you are a small cafe or a multi-outlet hotel group, SmartServe has a plan to fit your operation.
            </motion.p>
            <motion.div {...fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq#contact"
                className="px-10 py-4 rounded-full bg-white text-brand-base font-extrabold text-lg hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
              <Link
                href="/"
                className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center"
              >
                See the Platform
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}