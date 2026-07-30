"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const cards = [
  { icon: Code2, title: "Clean Code", desc: "Escrevo código legível, organizado e de fácil manutenção.", color: "#a78bfa" },
  { icon: Lightbulb, title: "Aprendizado Rápido", desc: "Me adapto a novas tecnologias e contextos com agilidade.", color: "#06b6d4" },
  { icon: Rocket, title: "Entrega de Valor", desc: "Foco em resolver problemas reais com soluções eficientes.", color: "#f472b6" },
  { icon: Users, title: "Trabalho em Equipe", desc: "Colaborativo, comunicativo e comprometido com o time.", color: "#34d399" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#a78bfa" }}>Sobre mim</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: "#e2e8f0" }}>Quem sou eu?</h2>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#94a3b8" }}>
            Sou desenvolvedor Full Stack em início de carreira, com forte base em JavaScript/TypeScript, React e Node.js. Tenho paixão por transformar ideias em produtos digitais funcionais e bonitos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-base leading-8 mb-6" style={{ color: "#94a3b8" }}>
              Comecei minha jornada no desenvolvimento por curiosidade e hoje é minha maior paixão. Estudo constantemente as melhores práticas de desenvolvimento, desde a arquitetura de software até a experiência do usuário.
            </p>
            <p className="text-base leading-8" style={{ color: "#94a3b8" }}>
              Busco uma oportunidade de estágio ou posição júnior onde possa aplicar meus conhecimentos, contribuir de verdade e crescer junto com uma equipe incrível.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Disponível para remoto", "Aberto a presencial SP", "Início imediato"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", color: "#a78bfa" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.15),rgba(6,182,212,0.08))", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-center px-8">
                <div className="text-6xl font-bold mb-2 gradient-text">ES</div>
                <p style={{ color: "#64748b" }} className="text-sm">Erick Sousa</p>
                <p style={{ color: "#a78bfa" }} className="text-xs mt-1">Full Stack Developer</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[{ num: "10+", label: "Projetos" }, { num: "2+", label: "Anos estudando" }, { num: "5+", label: "Tecnologias" }, { num: "100%", label: "Comprometido" }].map(({ num, label }) => (
                    <div key={label} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-xl font-bold gradient-text">{num}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass rounded-2xl p-6 group transition-all duration-300" style={{ cursor: "default" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}18`, color }}>
                <Icon size={18} />
              </div>
              <h3 className="font-semibold mb-2 text-sm" style={{ color: "#e2e8f0" }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
