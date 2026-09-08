"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { values } from '@/mocks/about.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutValues() {
  const { t } = useTranslation();
  return (
    <section className="pt-20 pb-12 bg-[#FAF6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold border border-[#8A4A1C]/20 shadow-sm text-sm tracking-wider uppercase mb-4">{t("about.values.badge")}</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{t("about.values.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white text-brand-base rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                {v.icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{t(v.title)}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{t(v.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
