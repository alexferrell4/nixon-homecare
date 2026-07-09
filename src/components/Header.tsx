"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Assisted Living", href: "#services" },
  { label: "Independent Living", href: "#services" },
  { label: "Adult Day Care", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-semibold text-white font-serif">
              Nixon Home Care, Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-accent tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:713-633-4700"
              className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(713) 633-4700</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white rounded-sm text-sm font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-white/90 hover:text-accent transition-colors border-b border-white/10 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:713-633-4700"
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 border border-white/30 text-white rounded-sm text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                (713) 633-4700
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
