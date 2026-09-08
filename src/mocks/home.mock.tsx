import React from 'react';
import { Store, ScanLine, CalendarRange, UtensilsCrossed } from 'lucide-react';

export const bentoFeatures = [
  {
    title: "Smart POS",
    desc: "Lightning-fast point of sale for walk-ins, table service, and takeaways.",
    descClass: "text-gray-800 max-w-[55%] md:max-w-[70%]",
    icon: <Store size={24} className="text-[#3E2B20]" />,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "md:row-span-1",
    bgClass: "bg-white",
    watermark: <Store className="absolute -right-8 -bottom-8 w-64 h-64 text-gray-50 opacity-50 group-hover:scale-110 transition-transform duration-700" />
  },
  {
    title: "QR Ordering",
    desc: "Guests can scan, order, and pay directly from their phones.",
    icon: <ScanLine size={24} className="text-[#3E2B20]" />,
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "md:row-span-2",
    bgClass: "bg-gray-50",
    watermark: <ScanLine className="absolute -right-4 -bottom-4 w-48 h-48 text-gray-100 opacity-50 group-hover:scale-110 transition-transform duration-700" />
  },
  {
    title: "Table Booking",
    desc: "Interactive floor map for guests to book their perfect table in advance.",
    icon: <CalendarRange size={24} className="text-[#3E2B20]" />,
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "md:row-span-1",
    bgClass: "bg-gray-50",
    watermark: <CalendarRange className="absolute -right-4 -bottom-4 w-40 h-40 text-gray-100 opacity-50 group-hover:scale-110 transition-transform duration-700" />
  },
  {
    title: "Kitchen Display",
    desc: "Digital display that instantly routes orders to the correct kitchen station.",
    icon: <UtensilsCrossed size={24} className="text-white" />,
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "md:row-span-1",
    bgClass: "bg-[#3E2B20] text-white",
    iconClass: "bg-white/10 border-white/10 backdrop-blur-md",
    descClass: "text-white/80",
    watermark: <UtensilsCrossed className="absolute -right-4 -bottom-4 w-40 h-40 text-white opacity-5 group-hover:scale-110 transition-transform duration-700" />
  }
];

export const frontOfHouseFeatures = [
  { title: "Floor map reservations", desc: "Guests see a real-time visualization of your restaurant." },
  { title: "QR self-ordering", desc: "No apps, no downloads. Just scan and order in seconds." },
  { title: "Live table tracking", desc: "Always know the status of every table from a single screen." }
];

export const backOfHouseFeatures = [
  { title: "Digital KDS", desc: "Priority color-coding and automatic station routing." },
  { title: "Ticket time tracking", desc: "Get alerts before orders exceed their target time." },
  { title: "Real-time sync", desc: "Waitstaff see exactly when a dish is ready to be run." }
];

export const kitchenAlerts = [
  { title: "Burger", status: "Accepted", colorClass: "bg-blue-500", delay: 0.2, ping: false },
  { title: "Steak", status: "Preparing", colorClass: "bg-yellow-500", delay: 0.4, ping: true },
  { title: "Salmon", status: "Served", colorClass: "bg-green-500", delay: 0.6, ping: false }
];

export const testimonials = [
  {
    quote: "SmartServe completely eliminated our weekend service bottlenecks. Our ticket times are down 40%, and the staff are much less stressed.",
    author: "Sarah Jenkins",
    role: "Owner, The Rustic Spoon"
  },
  {
    quote: "Finally, a system that actually understands how a real kitchen works. The color-coded KDS is an absolute game changer for our line.",
    author: "Chef Marcus",
    role: "Head Chef, Ember & Oak"
  },
  {
    quote: "We replaced three separate iPads with just SmartServe. It handles our walk-ins, online orders, and reservations flawlessly.",
    author: "David Chen",
    role: "GM, Golden Dragon"
  }
];

export const partners = [
  { name: "Romdual Restaurant", logo: "/restuarant-logo/romdual-restaurant-logo.png" },
  { name: "Romdual Restaurant", logo: "/restuarant-logo/romdual-restaurant-logo.png" },
  { name: "Romdual Restaurant", logo: "/restuarant-logo/romdual-restaurant-logo.png" },
  { name: "Romdual Restaurant", logo: "/restuarant-logo/romdual-restaurant-logo.png" },
  { name: "Romdual Restaurant", logo: "/restuarant-logo/romdual-restaurant-logo.png" },
  { name: "Romdual Restaurant", logo: "/restuarant-logo/romdual-restaurant-logo.png" }
];
