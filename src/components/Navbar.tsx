"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GDevIcon from "./GDevIcon";

const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <GDevIcon className="w-[35px] h-[15px] text-white shrink-0" />
            </div>
            <span className="text-xl font-bold hidden sm:block">
              <span className="text-gradient">Gabriel</span>Dev
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-primary-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-400 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5"
            >
              Fale Comigo
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                  activeSection === link.id
                    ? "bg-primary-500/10 text-primary-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
