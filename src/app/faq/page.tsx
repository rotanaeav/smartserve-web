"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, ChevronDown,
  MessageCircleQuestion, Clock, Headphones,
  ArrowRight, Zap
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6 },
  };

  const faqCategories = [
    {
      category: "Getting Started",
      icon: <Clock size={18} />,
      faqs: [
        {
          q: "Do I need special hardware to run SmartServe?",
          a: "No special hardware required! SmartServe is entirely browser-based. You can run it on any existing iPads, Android tablets, laptops, or desktop computers you already own.",
        },
        {
          q: "How long does onboarding take?",
          a: "Most restaurants are fully configured and taking live orders within 48 hours of signing up. Our onboarding team will walk you through everything in a single session.",
        },
        {
          q: "Is there a free trial?",
          a: "Yes! We offer a full-featured 14-day free trial with no credit card required. You get access to every module — POS, QR ordering, KDS, and table booking — with no limitations.",
        },
      ],
    },
    {
      category: "Platform & Features",
      icon: <MessageCircleQuestion size={18} />,
      faqs: [
        {
          q: "Does SmartServe work offline?",
          a: "Yes. Our POS and KDS modules have an offline-first design. Orders taken during a network outage are queued and automatically synced when the connection is restored.",
        },
        {
          q: "Does it support Khmer language?",
          a: "SmartServe was built with Southeast Asia in mind. The platform fully supports English and Khmer simultaneously — QR menus can be in Khmer while the POS runs in English.",
        },
        {
          q: "How many devices can I use?",
          a: "There is no device limit. You can run SmartServe on as many tablets, phones, and computers as you need. All devices sync in real-time.",
        },
      ],
    },
    {
      category: "Pricing & Support",
      icon: <Headphones size={18} />,
      faqs: [
        {
          q: "What kind of support do you offer?",
          a: "All plans include email and chat support. Premium plans include a dedicated account manager and a 24/7 priority hotline. Our average response time is under 2 hours.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Absolutely. No long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. No cancellation fees.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-base selection:text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-brand-tint-bg to-white border-b border-gray-100">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-base rounded-full blur-[160px] opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-light/20 text-brand-dark shadow-sm font-bold text-sm mb-8">
              <Headphones size={14} className="text-brand-base" />
              Support Center
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              How can we <span className="text-brand-base">help you?</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Browse common questions below, or reach out to our team directly.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-[#FAF6F2]">

        {/* ── FAQs ── */}
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
                      {cat.category}
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
                                {faq.q}
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
                                    {faq.a}
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

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tint-bg text-brand-base font-bold text-xs tracking-wider uppercase mb-4">
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
                  <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl border border-gray-200 p-5 flex items-start gap-4">
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

      </main>
      <Footer />
    </div>
  );
}
