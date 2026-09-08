"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { team } from '@/mocks/about.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function AboutTeam() {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold border border-[#8A4A1C]/20 shadow-sm text-sm tracking-wider uppercase mb-4">{t("about.team.badge")}</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{t("about.team.title")}</h2>
          <p className="text-gray-500 mt-4 text-lg">{t("about.team.description")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
          {team.map((member, i) => {
            const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            return (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-5">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 bg-[#FCECDA] flex items-center justify-center">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <span className="text-5xl font-black text-[#8A4A1C]">
                        {initials}
                      </span>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-base rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>
                <h4 className="font-extrabold text-gray-900 text-lg leading-tight">{t(member.name)}</h4>
                <p className="text-brand-base font-semibold text-sm mt-1">{t(member.role)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
