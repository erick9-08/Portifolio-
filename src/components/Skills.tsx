"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Fundamentos Web",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    label: "Linguagens & Frameworks",
    skills: [
      { name: "Java", level: 65 },
      { name: "Python", level: 60 },
      { name: "TypeScript", level: 60 },
      { name: "React / Next.js", level: 60 },
    ],
  },
  {
    label: "Ferramentas",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
];

const techTags = ["HTML", "CSS", "JavaScript", "Java", "Python", "TypeScript", "React", "Next.js", "Tailwind", "Git"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-36 px-6" style={{ background: "var(--surface)" }}>
      <div className="w-full" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="eyebrow mb-4 block">registro 003 — stack</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: "var(--text)", fontWeight: 600 }}>
              O que uso <span style={{ fontStyle: "italic", color: "var(--muted)" }}>de verdade</span>
            </h2>
            <p className="text-sm max-w-xs md:text-right" style={{ color: "var(--muted)" }}>
              Nada aqui que não apareça nos meus repositórios públicos.
            </p>
          </div>
        </motion.div>

        {/* Stamp-style tag row */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-20">
          {techTags.map((t, i) => (
            <motion.span key={t} initial={{ opacity: 0, scale: 0.85, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: i % 2 === 0 ? -1.5 : 1.5 } : {}}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.04 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              className="font-mono text-xs px-3.5 py-2 uppercase tracking-wide"
              style={{ border: "1px solid rgba(200,138,70,0.35)", color: "var(--accent)", borderRadius: "3px" }}>
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {categories.map(({ label, skills }, ci) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + ci * 0.1 }}
              className="p-8" style={{ border: "1px solid var(--line)", borderRadius: "6px" }}>
              <div className="eyebrow mb-7">{label}</div>
              <div className="flex flex-col gap-7">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2.5">
                      <span className="text-sm" style={{ color: "var(--text)" }}>{name}</span>
                      <span className="font-mono text-xs" style={{ color: "var(--muted-2)" }}>{level}%</span>
                    </div>
                    <div className="h-[3px] overflow-hidden" style={{ background: "var(--line)" }}>
                      <motion.div className="h-full"
                        style={{ background: "var(--accent)" }}
                        initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + ci * 0.1 + si * 0.06, ease: "easeOut" }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
