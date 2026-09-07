import Link from "next/link";
import { UtensilsCrossed, MapPin, Mail, Phone, ExternalLink, Globe, AtSign, Rss, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#faf5f0] border-t border-brand-base/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex flex-col items-center md:items-start gap-4">
              <img src="/logo/smartserve-br.png" alt="SmartServe Technologies" className="h-16 w-auto object-contain" />
            </Link>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-sm">
              The all-in-one platform built specifically to empower modern restaurants with seamless FOH and BOH operations.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm hover:bg-[#fff0e8] transition-colors"><Globe size={18} /></a>
              <a href="#" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm hover:bg-[#fff0e8] transition-colors"><AtSign size={18} /></a>
              <a href="#" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm hover:bg-[#fff0e8] transition-colors"><Rss size={18} /></a>
              <a href="#" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm hover:bg-[#fff0e8] transition-colors"><Send size={18} /></a>
            </div>
          </div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-base">
              Quick Links
            </h3>
            <div className="mt-2.5 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#e88d2b] to-[#e88d2b]/20" />
            <ul className="mt-6 space-y-3">
              {[
                { label: "Platform Features", href: "/#features" },
                { label: "Our Services", href: "/#services" },
                { label: "About the Company", href: "/about" },
                { label: "FAQs & Support", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2.5 text-base text-gray-600 hover:text-brand-base transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e8d5c8] group-hover:bg-[#e88d2b]/60 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-base">
              Contact Us
            </h3>
            <div className="mt-2.5 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#e88d2b] to-[#e88d2b]/20" />
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm">
                  <MapPin size={18} />
                </span>
                <span className="leading-snug mt-1">123 Innovation Drive,<br/>Tech District, City 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm">
                  <Phone size={18} />
                </span>
                <span className="leading-snug text-base">+855 12 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-[#faebe5] text-[#e88d2b] shadow-sm">
                  <Mail size={18} />
                </span>
                <span className="leading-snug text-base">hello@smartserve.co</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-base/15 bg-[#f5ece3]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-brand-base">SmartServe Technologies</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-base transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-base transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
