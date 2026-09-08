"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { stats } from '@/mocks/about.mock';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutHero() {
  return (
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
  );
}
