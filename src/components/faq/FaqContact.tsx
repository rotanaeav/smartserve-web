"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Zap, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 }
};

export default function FaqContact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold border border-[#8A4A1C]/20 shadow-sm text-xs tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">Our team responds within 24 hours. We're here to help you succeed.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form — takes 3 cols */}
          <motion.div {...fadeIn} className="lg:col-span-3 bg-white rounded-3xl border border-gray-200 p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-7">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-base/30 focus:border-brand-base focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Restaurant Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-base/30 focus:border-brand-base focus:bg-white transition-all" placeholder="The Great Cafe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-base/30 focus:border-brand-base focus:bg-white transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-base/30 focus:border-brand-base focus:bg-white transition-all" placeholder="+855 12 345 678" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-base/30 focus:border-brand-base focus:bg-white transition-all resize-none" placeholder="Tell us about your restaurant..." />
              </div>
              <button type="button" className="w-full bg-brand-base text-white font-bold text-base py-4 rounded-xl hover:bg-brand-secondary transition-all shadow-lg shadow-brand-base/20 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info — takes 2 cols */}
          <motion.div {...fadeIn} className="lg:col-span-2 flex flex-col gap-5">
            {/* Info cards */}
            {[
              { icon: <MapPin size={20} />, label: "Office", value: "Tech District, Phnom Penh, Cambodia" },
              { icon: <Phone size={20} />, label: "Phone", value: "+855 12 345 678", sub: "Mon–Fri, 8am–6pm ICT" },
              { icon: <Mail size={20} />, label: "Email", value: "hello@smartserve.co", sub: "We reply within 24 hours" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.6 }} className="bg-white rounded-2xl border border-gray-200 p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-tint-bg rounded-xl flex items-center justify-center text-brand-base shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                  {item.sub && <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>}
                </div>
              </motion.div>
            ))}

            {/* Response time badge */}
            <div className="bg-brand-base rounded-2xl p-6 flex items-center gap-4 mt-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-extrabold text-sm">Fast Response</p>
                <p className="text-white/60 text-xs mt-0.5">Average reply under 2 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
