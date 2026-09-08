"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutCta() {
  return (
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
            className="px-8 py-3.5 rounded-full bg-white text-brand-base font-extrabold text-base hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-base hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center"
          >
            See the Platform
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
