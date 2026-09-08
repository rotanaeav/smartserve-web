import React from 'react';
import { Clock, MessageCircleQuestion, Zap } from 'lucide-react';

export const faqCategories = [
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
        q: "Can I customize the QR menus?",
        a: "Absolutely. You can add your logo, brand colors, and custom fonts. Menus also support high-resolution photos for every item.",
      },
      {
        q: "Does it integrate with my accounting software?",
        a: "We currently offer one-click integrations with QuickBooks Online and Xero. Daily sales data, tips, and taxes are synced automatically.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    icon: <Zap size={18} />,
    faqs: [
      {
        q: "Are there any hidden fees or transaction costs?",
        a: "No hidden fees. We charge a flat monthly subscription. However, standard credit card processing fees from our payment partners still apply to transactions.",
      },
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
