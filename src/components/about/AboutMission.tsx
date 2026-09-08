"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { missionFeatures } from '@/mocks/about.mock';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutMission() {
  return (
    <section className="py-24 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div {...fadeIn} className="max-w-2xl flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold border border-[#8A4A1C]/20 shadow-sm text-sm tracking-wider uppercase mb-5">Our Mission</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-base mb-6 leading-tight">
              Built by restaurant people,<br className="hidden sm:block" /> for restaurant people.
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We built SmartServe on the floor, during service — because we lived the chaos ourselves. Every feature exists because a real partner needed it during a real rush.
            </p>
            <ul className="flex flex-wrap justify-center gap-4">
              {missionFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-brand-base flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
