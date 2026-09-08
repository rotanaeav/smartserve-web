"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqCategories } from '@/mocks/faq.mock';
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function FaqAccordion() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {faqCategories.map((cat, ci) => (
            <motion.div key={ci} {...fadeIn}>
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-brand-tint-bg text-brand-base flex items-center justify-center">
                  {cat.icon}
                </div>
                <h2 className="text-base font-extrabold text-gray-900 uppercase tracking-wider">
                  {t(cat.category)}
                </h2>
              </div>

              {/* FAQ items */}
              <div className="space-y-3">
                {cat.faqs.map((faq, i) => {
                  const key = `${ci}-${i}`;
                  const isOpen = openFaq === key;
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-brand-base/40' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <button
                        className="w-full flex items-center justify-between px-5 py-4 gap-3 text-left"
                        onClick={() => setOpenFaq(isOpen ? null : key)}
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-[#8A4A1C] text-white text-base font-bold flex items-center justify-center shrink-0">
                            ?
                          </span>
                          <span className={`font-semibold text-base transition-colors ${isOpen ? 'text-brand-base' : 'text-gray-800'}`}>
                            {t(faq.q)}
                          </span>
                        </div>
                        <span className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-brand-base' : 'text-gray-400'}`}>
                          <ChevronDown size={18} />
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5">
                              <div className="ml-[3rem] border-l-2 border-gray-300 pl-4 text-gray-600 leading-relaxed text-sm">
                                {t(faq.a)}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
