"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <div className={`max-w-6xl mx-auto rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 ${scrolled ? "shadow-xl" : ""}`}
        style={{
          background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}>
        <a href="#" className="text-sm font-semibold tracking-tight" style={{ color: "#f8fafc" }}>
          erick<span style={{ color: "#475569" }}>.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs font-medium tracking-wide transition-colors duration-200 uppercase"
                style={{ color: "#334155", letterSpacing: "0.08em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:robloxshaolin@gmail.com"
          className="hidden md:flex items-center gap-2 text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-200"
          style={{ background: "#fff", color: "#09090b" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#e2e8f0")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}>
          Fale comigo
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="block w-5 h-px transition-all duration-300"
            style={{ background: "#94a3b8", transform: menuOpen ? "rotate(45deg) translate(2px,2px)" : "none" }} />
          <span className="block w-5 h-px transition-all duration-300"
            style={{ background: "#94a3b8", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-300"
            style={{ background: "#94a3b8", transform: menuOpen ? "rotate(-45deg) translate(2px,-2px)" : "none" }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl overflow-hidden"
            style={{ background: "rgba(9,9,11,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3 text-sm" style={{ color: "#64748b", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="mailto:robloxshaolin@gmail.com" className="block py-3 text-sm font-medium" style={{ color: "#a78bfa" }}>
                  Fale comigo →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
