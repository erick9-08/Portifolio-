"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  { title: "TaskFlow App", description: "Aplicação de gerenciamento de tarefas com autenticação JWT, drag-and-drop e filtros dinâmicos. Backend em Node.js + PostgreSQL, frontend em React com Zustand.", tags: ["React", "Node.js", "PostgreSQL", "JWT", "Zustand"], color: "#a78bfa", featured: true, github: "https://github.com/erick9-08", live: null },
  { title: "API REST de E-commerce", description: "API completa com CRUD de produtos, carrinho, pedidos e integração com pagamento. Documentada com Swagger e testada com Jest.", tags: ["Node.js", "Express", "MongoDB", "Swagger", "Jest"], color: "#06b6d4", featured: true, github: "https://github.com/erick9-08", live: null },
  { title: "Dashboard Analytics", description: "Dashboard responsivo com gráficos em tempo real usando Recharts, dark mode nativo e componentes reutilizáveis em Next.js.", tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"], color: "#f472b6", featured: true, github: "https://github.com/erick9-08", live: null },
  { title: "Clone do Twitter/X", description: "Clone funcional com autenticação, feed em tempo real via WebSockets, upload de imagens e sistema de follows.", tags: ["React", "Socket.io", "Node.js", "Prisma"], color: "#34d399", featured: false, github: "https://github.com/erick9-08", live: null },
  { title: "Portfolio Pessoal v1", description: "Primeira versão do portfólio pessoal com HTML, CSS e JS puro, responsivo e com animações CSS.", tags: ["HTML", "CSS", "JavaScript"], color: "#fbbf24", featured: false, github: "https://github.com/erick9-08", live: null },
  { title: "Blog Full Stack", description: "Plataforma de blog com editor rich-text, categorias, comentários e painel admin. SSR com Next.js e banco PostgreSQL.", tags: ["Next.js", "PostgreSQL", "Prisma", "TipTap"], color: "#f97316", featured: false, github: "https://github.com/erick9-08", live: null },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#f472b6" }}>Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "#e2e8f0" }}>O que construí</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {featured.map(({ title, description, tags, color, github, live }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col group transition-all duration-300"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="h-0.5 w-12 rounded-full mb-5 transition-all duration-300 group-hover:w-full" style={{ background: color }} />
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#e2e8f0" }}>{title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#94a3b8" }}>{description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ background: `${color}12`, color: `${color}dd`, border: `1px solid ${color}22` }}>{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs transition-colors duration-200" style={{ color: "#64748b" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
                  <GithubIcon size={13} /> Código
                </a>
                {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs transition-colors duration-200" style={{ color: "#64748b" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
                    <ExternalLink size={13} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map(({ title, description, tags, color, github }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="glass rounded-xl p-5 group transition-all duration-300 cursor-default"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>{title}</h3>
                <a href={github} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "#64748b" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#64748b" }}>{description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${color}10`, color: `${color}cc` }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="mt-10 text-center">
          <a href="https://github.com/erick9-08" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200" style={{ color: "#64748b" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
            <GithubIcon size={14} /> Ver todos os projetos no GitHub <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
