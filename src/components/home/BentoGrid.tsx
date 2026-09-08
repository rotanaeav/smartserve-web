"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Store, ScanLine, CalendarRange, UtensilsCrossed, Users, QrCode } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BentoGrid() {
  const bentoFeatures = [
    {
      title: "Smart POS",
      desc: "Lightning-fast point of sale for walk-ins, table service, and takeaways.",
      descClass: "text-gray-800 max-w-[55%] md:max-w-[50%]",
      icon: <Store size={24} className="text-brand-base" />,
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "md:row-span-1",
      bgClass: "bg-gradient-to-br from-white to-brand-tint-bg/50 overflow-visible",
      content: (
        <div className="absolute right-4 bottom-4 w-[45%] h-full min-h-[200px] pointer-events-none flex items-end justify-end">
          {/* Abstract Receipt */}
          <div className="absolute right-12 bottom-0 w-32 h-40 bg-white rounded-t-xl shadow-xl border border-gray-100 p-5 transform rotate-[-5deg] group-hover:translate-y-[-10px] group-hover:rotate-[-8deg] transition-all duration-500 flex flex-col gap-3 z-10">
            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-1"></div>
            <div className="w-3/4 h-1.5 bg-gray-100 rounded-full"></div>
            <div className="w-1/2 h-1.5 bg-gray-100 rounded-full"></div>
            <div className="w-full flex justify-between mt-auto">
              <div className="w-1/2 h-4 bg-[#683612] rounded-md"></div>
            </div>
          </div>
          {/* Abstract Credit Card */}
          <div className="absolute right-0 bottom-8 w-40 h-24 bg-[#2D1F17] rounded-xl shadow-2xl border border-[#3E2B20] p-4 transform rotate-[10deg] group-hover:translate-y-[-20px] group-hover:translate-x-[-10px] group-hover:rotate-[5deg] transition-all duration-500 z-20 flex flex-col justify-between">
            <div className="w-7 h-4.5 bg-[#D4AF37] rounded-sm"></div>
            <div className="flex justify-end relative">
              <div className="w-6 h-6 rounded-full bg-[#EB001B] absolute right-4 z-10"></div>
              <div className="w-6 h-6 rounded-full bg-[#F79E1B] opacity-90 relative z-20"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "QR Ordering",
      desc: "Guests can scan, order, and pay directly from their phones.",
      icon: <ScanLine size={24} className="text-brand-base" />,
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "md:row-span-2",
      bgClass: "bg-gradient-to-b from-white to-gray-50",
      content: (
        <div className="flex-1 flex items-end justify-center min-h-[280px] pt-10">
          <div className="relative group-hover:-translate-y-4 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-brand-secondary/10 blur-3xl rounded-full scale-150 translate-y-10" />

            {/* Phone Mockup */}
            <div className="w-48 h-80 bg-[#1A110D] rounded-t-[2.5rem] p-1.5 shadow-2xl relative border-x-4 border-t-4 border-[#2A1D16] z-10 flex flex-col items-center">
              {/* Phone Notch */}
              <div className="absolute top-1.5 inset-x-0 h-5 flex justify-center z-20">
                <div className="w-16 h-4 bg-[#1A110D] rounded-b-2xl"></div>
              </div>

              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-t-[2rem] overflow-hidden flex flex-col relative">
                {/* Screen Header */}
                <div className="bg-brand-base pt-8 pb-10 px-4 text-center rounded-b-[2rem] shadow-sm">
                  <p className="text-white text-xs font-bold tracking-widest uppercase mb-1">Table 12</p>
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto"></div>
                </div>

                {/* QR / Menu items overlay */}
                <div className="flex-1 -mt-6 px-4 flex flex-col items-center gap-3">
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100 w-full flex justify-center group-hover:scale-105 transition-transform duration-500">
                    <QrCode size={70} className="text-brand-base" strokeWidth={1.5} />
                  </div>
                  <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 shrink-0"></div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 shrink-0"></div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Table Booking",
      desc: "Interactive floor map for guests to book their perfect table in advance.",
      icon: <CalendarRange size={24} className="text-brand-base" />,
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "md:row-span-1",
      bgClass: "bg-white",
      content: (
        <div className="mt-8 relative h-16 w-full flex justify-center gap-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${i === 0 ? '-translate-x-12 rotate-[-10deg] bg-white border border-gray-100 group-hover:-translate-x-16 z-10' : i === 1 ? 'z-30 bg-brand-base border-4 border-white group-hover:-translate-y-2' : 'translate-x-12 rotate-[10deg] bg-white border border-gray-100 group-hover:translate-x-16 z-20'}`}>
              <Users size={20} className={i === 1 ? 'text-white' : 'text-gray-400'} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Kitchen Display",
      desc: "Digital display that instantly routes orders to the correct kitchen station.",
      icon: <UtensilsCrossed size={24} className="text-white" />,
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "md:row-span-1",
      bgClass: "bg-brand-base text-white relative overflow-hidden",
      iconClass: "text-brand-base bg-white/20 border-white/20 backdrop-blur-md",
      descClass: "text-white/80",
      content: (
        <div className="mt-6 flex flex-col gap-3 relative z-10">
          <div className="h-12 w-full bg-white/10 rounded-xl flex items-center px-4 gap-4 backdrop-blur-sm border border-white/10 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="h-2 w-1/3 bg-white/40 rounded-full" />
              <div className="h-1.5 w-1/4 bg-white/20 rounded-full" />
            </div>
            <div className="text-xs font-bold text-red-300">12m</div>
          </div>
          <div className="h-12 w-[85%] bg-white/10 rounded-xl flex items-center px-4 gap-4 backdrop-blur-sm border border-white/10 transform transition-all duration-700 group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="h-2 w-1/2 bg-white/30 rounded-full" />
              <div className="h-1.5 w-1/3 bg-white/20 rounded-full" />
            </div>
            <div className="text-xs font-bold text-yellow-300">5m</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="max-w-2xl mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#8A4A1C] font-bold text-xs tracking-widest uppercase mb-5 border border-orange-200 shadow-sm">Platform</span>
          <h3 className="text-4xl md:text-4xl font-extrabold text-brand-base leading-tight">
            Everything you need to <br className="hidden md:block" /> run the house
          </h3>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {bentoFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
              className={`${feature.colSpan} ${feature.rowSpan || ''} ${feature.bgClass} rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-brand-secondary/40 hover:shadow-2xl hover:shadow-brand-base/10 transition-all duration-500`}
            >
              {/* Optional Background Pattern */}
              {feature.iconClass && <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />}

              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm border border-gray-100 ${feature.iconClass || ""}`}>
                  {feature.icon}
                </div>
                <h4 className={`text-2xl font-bold mb-3 ${feature.iconClass && feature.iconClass.includes('text-white') ? 'text-white' : 'text-brand-base'}`}>{feature.title}</h4>
                <p className={`text-lg leading-relaxed ${feature.descClass || 'text-gray-600'}`}>{feature.desc}</p>

                {feature.content && (
                  <div className="mt-6 flex-1 relative flex flex-col justify-end">
                    {feature.content}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
