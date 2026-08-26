"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "10+", label: "Projetos entregues" },
  { num: "2+", label: "Anos de estudo" },
  { num: "15+", label: "Tecnologias" },
  { num: "100%", label: "Comprometimento" },
];

const values = [
  { title: "Clean Code", desc: "Código legível, bem estruturado e fácil de manter.", icon: "◈" },
  { title: "Performance", desc: "Foco em entregar experiências rápidas e fluidas.", icon: "⚡" },
  { title: "Detalhes", desc: "Cada pixel e cada interação importam para mim.", icon: "◎" },
  { title: "Colaboração", desc: "Trabalho bem em equipe, comunicação clara e objetiva.", icon: "⟡" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="py-40 px-6 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <span className="text-xs font-medium tracking-widest uppercase mb-6 block" style={{ color: "#a78bfa" }}>Sobre mim</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight" style={{ color: "#f8fafc" }}>
              Construindo o<br />
              <span style={{ color: "#475569" }}>futuro digital</span>
            </h2>
            <p className="text-base leading-8 mb-6" style={{ color: "#64748b" }}>
              Sou desenvolvedor Full Stack em início de carreira apaixonado por transformar ideias complexas em produtos digitais simples, bonitos e funcionais. Tenho base sólida em JavaScript/TypeScript, React e Node.js.
            </p>
            <p className="text-base leading-8 mb-10" style={{ color: "#64748b" }}>
              Busco uma oportunidade de estágio ou posição júnior onde possa contribuir de verdade, aprender com profissionais experientes e crescer rápido.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Remoto", "Presencial SP", "Início imediato"].map((tag) => (
                <span key={tag} className="text-xs px-4 py-2 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — parallax stats card */}
          <motion.div style={{ y }} className="relative">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="relative rounded-3xl p-10 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top right, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  {stats.map(({ num, label }) => (
                    <div key={label} className="group">
                      <div className="text-4xl font-bold mb-1 tracking-tight" style={{ color: "#f8fafc" }}>{num}</div>
                      <div className="text-sm" style={{ color: "#475569" }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 mt-10 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-xs mb-3 tracking-widest uppercase" style={{ color: "#334155" }}>Stack principal</div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"].map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-lg font-mono"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#64748b" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(({ title, desc, icon }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group p-6 rounded-2xl transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.2)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; }}>
              <div className="text-2xl mb-4" style={{ color: "#a78bfa" }}>{icon}</div>
              <h3 className="font-semibold mb-2 text-sm" style={{ color: "#e2e8f0" }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
