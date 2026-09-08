"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "./switchLanguage";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Home"), href: "/" },
    { name: t("About"), href: "/about" },
    { name: t("FAQs"), href: "/faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg shadow-sm ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo/smartserve-br.png" alt="SmartServe" className="h-9 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-secondary ${pathname === link.href ? 'text-brand-base' : 'text-gray-700'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
           <SwitchLanguage />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full text-brand-base bg-white/60 backdrop-blur-md border border-white/40 shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-4 flex flex-col gap-2 rounded-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-bold px-4 py-3 rounded-xl transition-colors ${pathname === link.href ? 'text-brand-base bg-brand-tint-bg' : 'text-gray-800 hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex flex-col gap-2 mt-2 border-t border-gray-100 pt-3 items-center">
              <SwitchLanguage />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}