"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '@/mocks/about.mock';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutTimeline() {
  return (
    <section className="py-32 bg-[#FAF6F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold border border-[#8A4A1C]/20 shadow-sm text-sm tracking-wider uppercase mb-4">How We Got Here</span>
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
                transition={{ delay: i * 0.1, duration: 0.6 }}
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
  );
}
