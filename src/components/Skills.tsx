"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stack = [
  { name: "React", category: "Frontend", level: 85 },
  { name: "Next.js", category: "Frontend", level: 80 },
  { name: "TypeScript", category: "Frontend", level: 78 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express", category: "Backend", level: 75 },
  { name: "PostgreSQL", category: "Backend", level: 70 },
  { name: "MongoDB", category: "Backend", level: 65 },
  { name: "Prisma", category: "Backend", level: 70 },
  { name: "Git / GitHub", category: "Tools", level: 88 },
  { name: "Docker", category: "Tools", level: 55 },
  { name: "Figma", category: "Tools", level: 60 },
];

const categoryColor: Record<string, string> = {
  Frontend: "#a78bfa",
  Backend: "#06b6d4",
  Tools: "#f472b6",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-40 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-20">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#06b6d4" }}>Tecnologias</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ color: "#f8fafc" }}>Meu stack</h2>
            <p className="text-sm max-w-xs md:text-right" style={{ color: "#475569" }}>
              Tecnologias que uso no dia a dia para construir produtos completos.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {stack.map(({ name, category, level }, i) => {
            const color = categoryColor[category];
            return (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="group p-5 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = `${color}25`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-medium text-sm mb-0.5" style={{ color: "#e2e8f0" }}>{name}</div>
                    <div className="text-xs" style={{ color: `${color}99` }}>{category}</div>
                  </div>
                  <div className="text-sm font-mono font-medium" style={{ color: "#334155" }}>{level}%</div>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <motion.div className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}66)` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.1 + i * 0.04, ease: "easeOut" }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
