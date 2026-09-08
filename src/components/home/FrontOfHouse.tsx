"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { frontOfHouseFeatures } from '@/mocks/home.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export default function FrontOfHouse() {
  const { t } = useTranslation();
  return (
    <section className="py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="flex-1 lg:pr-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#8A4A1C] font-bold text-xs tracking-widest uppercase mb-6 border border-orange-200 shadow-sm">{t("home.frontOfHouse.badge")}</span>
            <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-[#3E2B20] pb-4">
              {t("home.frontOfHouse.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              {t("home.frontOfHouse.description")}
            </p>

            <div className="space-y-4">
              {frontOfHouseFeatures.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group cursor-default">
                  <div className="text-[#8A4A1C] shrink-0 mt-[3px] relative">
                    <div className="absolute inset-0 bg-[#8A4A1C]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CheckCircle2 size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#3E2B20] text-xl mb-1.5 group-hover:text-[#8A4A1C] transition-colors duration-300">{t(item.title)}</h4>
                    <p className="text-gray-600 text-base leading-relaxed">{t(item.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="flex-1 w-full max-w-[520px] mx-auto relative h-[360px] lg:mt-16">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[#8A4A1C]/30">
              <img src="/front-house.png" alt="Luxury restaurant interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Payment Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 lg:-bottom-6 -left-2 lg:-left-6 bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-3.5 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center border border-[#C8E6C9]">
                  <Zap className="text-[#2E7D32]" size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">{t("home.frontOfHouse.tableStatus")}</p>
                  <p className="text-[#3E2B20] font-black text-base">{t("home.frontOfHouse.paymentReceived")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
