"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { label: "Frontend", color: "#a78bfa", skills: [{ name: "React", level: 85 }, { name: "Next.js", level: 80 }, { name: "TypeScript", level: 78 }, { name: "Tailwind CSS", level: 90 }, { name: "HTML / CSS", level: 95 }] },
  { label: "Backend", color: "#06b6d4", skills: [{ name: "Node.js", level: 80 }, { name: "Express", level: 78 }, { name: "PostgreSQL", level: 70 }, { name: "MongoDB", level: 65 }, { name: "REST APIs", level: 82 }] },
  { label: "Ferramentas", color: "#f472b6", skills: [{ name: "Git / GitHub", level: 88 }, { name: "Docker", level: 55 }, { name: "Linux", level: 65 }, { name: "Figma", level: 60 }, { name: "Prisma ORM", level: 70 }] },
];

const techIcons = [
  { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" }, { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "TS" }, { name: "PostgreSQL", icon: "🐘" }, { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" }, { name: "Git", icon: "⎇" }, { name: "Tailwind", icon: "💨" },
  { name: "Prisma", icon: "◆" }, { name: "Express", icon: "Ex" }, { name: "Figma", icon: "🎨" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6" style={{ background: "rgba(139,92,246,0.02)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#06b6d4" }}>Tecnologias</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "#e2e8f0" }}>Meu stack</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-wrap justify-center gap-3 mb-20">
          {techIcons.map(({ name, icon }, i) => (
            <motion.div key={name} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              className="glass flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-default" style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <span className="text-sm">{icon}</span><span>{name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(({ label, color, skills }, ci) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + ci * 0.1 }} className="glass rounded-2xl p-6">
              <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color }}>{label}</div>
              <div className="flex flex-col gap-4">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm" style={{ color: "#e2e8f0" }}>{name}</span>
                      <span className="text-xs" style={{ color: "#64748b" }}>{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg,${color},${color}99)` }}
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
