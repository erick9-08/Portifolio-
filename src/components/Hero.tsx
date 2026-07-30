"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden px-6" id="hero">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#a78bfa" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#a78bfa" }} />
            Disponível para oportunidades
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          <span style={{ color: "#e2e8f0" }}>Olá, sou </span>
          <br />
          <span className="gradient-text">Erick Sousa</span>
        </motion.h1>

        <motion.p {...fadeUp(0.35)} className="text-lg md:text-xl max-w-xl mx-auto mb-4 leading-relaxed" style={{ color: "#94a3b8" }}>
          Desenvolvedor <span style={{ color: "#a78bfa" }}>Full Stack</span> apaixonado por construir interfaces bonitas e sistemas robustos.
        </motion.p>

        <motion.p {...fadeUp(0.45)} className="text-sm max-w-md mx-auto mb-12" style={{ color: "#64748b" }}>
          Busco minha primeira oportunidade como estagiário ou dev júnior para contribuir em projetos reais e crescer junto com a equipe.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#projects" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300"
            style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", color: "#fff" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
            Ver projetos
          </a>
          <a href="#contact" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#e2e8f0" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}>
            Entre em contato
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center gap-5">
          {[
            { icon: GithubIcon, href: "https://github.com/erick9-08", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/erick-sousa", label: "LinkedIn" },
            { icon: MailIcon, href: "mailto:robloxshaolin@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748b" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}>
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#334155" }}>
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
