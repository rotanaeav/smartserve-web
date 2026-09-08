"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

export default function FaqHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-brand-tint-bg to-white border-b border-gray-100">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-base rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-light/20 text-brand-dark shadow-sm font-bold text-sm mb-8">
            <Headphones size={14} className="text-brand-base" />
            Support Center
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            How can we <span className="text-brand-base">help you?</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Browse common questions below, or reach out to our team directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
