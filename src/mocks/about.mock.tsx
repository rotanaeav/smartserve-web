import React from 'react';
import { Lightbulb, Heart, Shield, Users } from 'lucide-react';

export const stats = [
  { value: "1", label: "Restaurant Served", sub: "Our very first partner!" },
  { value: "100+", label: "Orders Processed", sub: "Every single month" },
  { value: "99.9%", label: "Platform Uptime", sub: "SLA guaranteed" },
  { value: "48h", label: "Onboarding Time", sub: "From signup to live" },
];

export const values = [
  {
    icon: <Lightbulb size={26} />,
    title: "Innovation",
    desc: "We continuously evolve based on direct feedback from our restaurant partners. Every feature exists because someone needed it in the heat of service."
  },
  {
    icon: <Heart size={26} />,
    title: "Simplicity",
    desc: "Complex operations don't need complex software. We obsess over intuitive design that reduces staff training time from days to minutes."
  },
  {
    icon: <Shield size={26} />,
    title: "Reliability",
    desc: "When the dining room is full, your system cannot fail. Our cloud infrastructure and offline-first design guarantee you are always up."
  },
  {
    icon: <Users size={26} />,
    title: "Partnership",
    desc: "We're not just a vendor — we are a growth partner. Our success is measured by the success of the restaurants we serve."
  },
];

export const timeline = [
  { year: "July 2026", title: "The Idea", desc: "Frustrated with disconnected restaurant tools in Phnom Penh, our founders decided to build something better — from scratch." },
  { year: "July 2026", title: "First Build", desc: "SmartServe v1 launched with a working POS and QR ordering system. Our very first restaurant partner came on board." },
  { year: "August 2026", title: "Kitchen Display", desc: "Built and shipped the Kitchen Display System based on real partner feedback, connecting the full FOH-to-kitchen pipeline." },
  { year: "August 2026", title: "Table Booking", desc: "Launched the interactive floor map and table booking system, making SmartServe a complete restaurant management platform." },
  { year: "September 2026", title: "Now & Growing", desc: "Three months in — one partner, a full platform, and big plans ahead. English & Khmer support live. More restaurants coming soon." },
];

export const missionFeatures = [
  "No forced hardware", 
  "Khmer & English", 
  "Free onboarding", 
  "24/7 priority support"
];

export const team = [
  { name: "Piseth", role: "Co-Founder & CEO", img: "/founder_img/Piseth.jpg" },
  { name: "RTN", role: "Co-Founder & CTO", img: "/founder_img/RTN.jpg" },
  { name: "TR", role: "Lead Developer", img: "/founder_img/TR.png" },
  { name: "WN", role: "UI/UX Designer", img: "/founder_img/WN.png" },
  { name: "SIM SOL", role: "Co-Founder" },
  { name: "LIN POWIN", role: "Co-Founder" }
];
