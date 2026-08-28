"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Catálogo", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <div className="w-full flex items-center justify-between px-6 py-4 transition-all duration-500"
        style={{
          maxWidth: "72rem",
          marginLeft: "auto",
          marginRight: "auto",
          background: scrolled ? "rgba(11,14,19,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}>
        <a href="#" className="font-mono text-sm font-medium tracking-wide" style={{ color: "var(--text)" }}>
          erick<span style={{ color: "var(--accent)" }}>.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="eyebrow transition-colors duration-200" style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:oliveiraericksousa@gmail.com"
          className="hidden md:flex items-center gap-2 font-mono text-xs font-medium px-5 py-2.5 transition-all duration-200"
          style={{ background: "var(--paper)", color: "var(--paper-ink)", borderRadius: "4px" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = "brightness(0.95)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = "none")}>
          fale comigo
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="block w-5 h-px transition-all duration-300"
            style={{ background: "var(--text)", transform: menuOpen ? "rotate(45deg) translate(2px,2px)" : "none" }} />
          <span className="block w-5 h-px transition-all duration-300"
            style={{ background: "var(--text)", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-300"
            style={{ background: "var(--text)", transform: menuOpen ? "rotate(-45deg) translate(2px,-2px)" : "none" }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden w-full mt-2 overflow-hidden"
            style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto", background: "rgba(11,14,19,0.96)", backdropFilter: "blur(16px)", border: "1px solid var(--line)", borderRadius: "6px" }}>
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3 text-sm font-mono" style={{ color: "var(--muted)", borderBottom: "1px solid var(--line)" }}
                    onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="mailto:oliveiraericksousa@gmail.com" className="block py-3 text-sm font-mono font-medium" style={{ color: "var(--accent)" }}>
                  fale comigo →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
