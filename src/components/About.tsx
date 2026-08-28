"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "7+", label: "repositórios públicos" },
  { num: "1+", label: "ano de estudo" },
  { num: "6", label: "tecnologias em uso" },
  { num: "100%", label: "comprometimento" },
];

const values = [
  { title: "Clean Code", desc: "Código legível, bem estruturado e fácil de manter." },
  { title: "Aprendizado Rápido", desc: "Me adapto a novas tecnologias e contextos com agilidade." },
  { title: "Atenção aos Detalhes", desc: "Cada pixel e cada interação importam para mim." },
  { title: "Colaboração", desc: "Trabalho bem em equipe, comunicação clara e objetiva." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-36 px-6 overflow-hidden" ref={sectionRef}>
      <div className="w-full" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }} ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="eyebrow mb-6 block">registro 002 — sobre mim</span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight" style={{ color: "var(--text)", fontWeight: 600 }}>
              Construindo o<br />
              <span style={{ fontStyle: "italic", color: "var(--muted)" }}>futuro, um commit por vez</span>
            </h2>
            <p className="text-base leading-8 mb-6" style={{ color: "var(--muted)" }}>
              Sou desenvolvedor em início de carreira, estudando por conta própria e construindo projetos práticos com HTML, CSS, JavaScript, Java e Python. Recentemente venho aprofundando em React, Next.js e TypeScript — inclusive este portfólio foi construído com esse stack.
            </p>
            <p className="text-base leading-8 mb-10" style={{ color: "var(--muted)" }}>
              Busco uma oportunidade de estágio ou posição júnior onde possa aplicar o que já sei, aprender com profissionais experientes e crescer rápido dentro de um time.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Remoto", "Presencial SP", "Início imediato"].map((tag) => (
                <span key={tag} className="font-mono text-xs px-4 py-2"
                  style={{ border: "1px solid var(--line)", color: "var(--muted)", borderRadius: "4px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — stats card */}
          <motion.div style={{ y }} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="paper-card p-9 relative">
              <div className="absolute top-4 right-4 punch-hole" />
              <div className="font-mono text-[0.65rem] tracking-widest uppercase mb-6 pb-4"
                style={{ borderBottom: "1px dashed rgba(33,29,22,0.25)", color: "var(--muted-2)" }}>
                resumo — 002
              </div>
              <div className="grid grid-cols-2 gap-7 mb-8">
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <div className="font-display text-4xl mb-1" style={{ color: "var(--paper-ink)", fontWeight: 700 }}>{num}</div>
                    <div className="text-xs" style={{ color: "var(--muted-2)" }}>{label}</div>
                  </div>
                ))}
              </div>
              <div className="pt-6" style={{ borderTop: "1px dashed rgba(33,29,22,0.25)" }}>
                <div className="font-mono text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted-2)" }}>
                  stack principal
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Java", "Python", "TypeScript", "React / Next.js"].map((t) => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1"
                      style={{ background: "rgba(33,29,22,0.06)", color: "var(--paper-ink)", borderRadius: "3px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--line)" }}>
          {values.map(({ title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="p-7 transition-all duration-300"
              style={{ background: "var(--bg)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg)"; }}>
              <div className="font-mono text-xs mb-4" style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-medium mb-2 text-sm" style={{ color: "var(--text)" }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
