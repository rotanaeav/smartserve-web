"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { missionFeatures } from '@/mocks/about.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutMission() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div {...fadeIn} className="max-w-2xl flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold border border-[#8A4A1C]/20 shadow-sm text-sm tracking-wider uppercase mb-5">{t("about.mission.badge")}</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-base mb-6 leading-tight">
              {t("about.mission.title_part1")}<br className="hidden sm:block" /> {t("about.mission.title_part2")}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t("about.mission.description")}
            </p>
            <ul className="flex flex-wrap justify-center gap-4">
              {missionFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-brand-base flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  {t(item)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
