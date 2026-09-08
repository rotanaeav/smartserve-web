"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export default function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeIn}
          className="relative rounded-[3rem] overflow-hidden bg-brand-base text-center py-20 px-6 sm:px-12 shadow-2xl"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary rounded-full blur-[100px] opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E08600] rounded-full blur-[100px] opacity-40" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to upgrade your service?
            </h2>
            <p className="text-lg text-white/90 mb-10 font-medium max-w-xl mx-auto">
              Join the next generation of restaurants running on SmartServe. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq#contact"
                className="px-8 py-3.5 rounded-full bg-white text-brand-base font-extrabold text-base hover:bg-brand-tint-bg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                Book a Demo <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full bg-black/20 text-white font-bold text-base hover:bg-black/30 border border-white/20 transition-all backdrop-blur-md flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
