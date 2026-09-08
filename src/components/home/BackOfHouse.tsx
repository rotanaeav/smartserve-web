"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { backOfHouseFeatures, kitchenAlerts } from '@/mocks/home.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export default function BackOfHouse() {
  const { t } = useTranslation();
  return (
    <section className="py-28 lg:py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="flex-1 w-full max-w-[520px] mx-auto relative h-[360px] lg:mt-16">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[#8A4A1C]/30">
              <img src="/back-house.jpg" alt="Professional kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D16]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Kitchen Alerts */}
            <div className="absolute top-8 -right-2 lg:-right-6 flex flex-col gap-3">
              {kitchenAlerts.map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: alert.delay }}
                  className="bg-white/90 backdrop-blur-md rounded-xl p-3 pr-5 shadow-xl flex items-center gap-3 border border-white/50"
                >
                  <div className={`w-2 h-2 rounded-full ${alert.colorClass} ml-1 ${alert.ping ? 'animate-ping' : ''}`} />
                  <span className="font-bold text-[#3E2B20] text-sm">{t(alert.title)} • {t(alert.status)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="flex-1 lg:pl-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E08600]/10 text-[#E08600] font-bold text-xs tracking-widest uppercase mb-6 border border-[#E08600]/20 shadow-sm">{t("home.backOfHouse.badge")}</span>
            <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-[#3E2B20] pb-4">
              {t("home.backOfHouse.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              {t("home.backOfHouse.description")}
            </p>

            <div className="space-y-4">
              {backOfHouseFeatures.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group cursor-default">
                  <div className="text-[#3E2B20] shrink-0 mt-[3px] relative">
                    <div className="absolute inset-0 bg-[#E08600]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <UtensilsCrossed size={20} className="relative z-10 group-hover:scale-110 group-hover:text-[#E08600] transition-all duration-500 ease-out" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#3E2B20] text-xl mb-1.5 group-hover:text-[#E08600] transition-colors duration-300">{t(item.title)}</h4>
                    <p className="text-gray-600 text-base leading-relaxed">{t(item.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
