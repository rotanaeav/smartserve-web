"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { partners } from '@/mocks/home.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export default function PartnerMarquee() {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-[#FFF9F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-[#8A4A1C] font-bold text-sm tracking-wider uppercase mb-4 shadow-sm border border-orange-200">{t("home.partners.badge")}</span>
          <h2 className="text-4xl font-extrabold text-[#3E2B20]">{t("home.partners.title")}</h2>
        </motion.div>

        {/* Partner Logos */}
        <div className="relative mt-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFF9F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFF9F2] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div className="flex gap-24 items-center whitespace-nowrap animate-marquee">
              {/* Real logos + duplicated for seamless loop */}
              {[...Array(12)].map((_, i) => {
                const partner = partners[i % partners.length];
                return (
                  <div key={i} className="flex flex-col items-center gap-5 flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 max-w-[180px] object-contain"
                    />
                    <span className="text-xl font-bold text-gray-600 tracking-wide">{t(partner.name)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
