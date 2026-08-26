"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  {
    title: "TaskFlow App",
    description: "Gerenciamento de tarefas com autenticação JWT, drag-and-drop e filtros dinâmicos. Backend Node.js + PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    color: "#a78bfa",
    number: "01",
    github: "https://github.com/erick9-08",
    live: null,
  },
  {
    title: "API REST E-commerce",
    description: "API completa com CRUD de produtos, carrinho, pedidos e integração com pagamento. Documentada com Swagger.",
    tags: ["Node.js", "Express", "MongoDB", "Swagger"],
    color: "#06b6d4",
    number: "02",
    github: "https://github.com/erick9-08",
    live: null,
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard responsivo com gráficos em tempo real, dark mode nativo e componentes reutilizáveis.",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    color: "#f472b6",
    number: "03",
    github: "https://github.com/erick9-08",
    live: null,
  },
  {
    title: "Clone Twitter/X",
    description: "Clone funcional com feed em tempo real via WebSockets, upload de imagens e sistema de follows.",
    tags: ["React", "Socket.io", "Node.js", "Prisma"],
    color: "#34d399",
    number: "04",
    github: "https://github.com/erick9-08",
    live: null,
  },
  {
    title: "Blog Full Stack",
    description: "Plataforma de blog com editor rich-text, categorias, comentários e painel admin com SSR.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TipTap"],
    color: "#f97316",
    number: "05",
    github: "https://github.com/erick9-08",
    live: null,
  },
];

function ProjectRow({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const { title, description, tags, color, number, github, live } = project;

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative grid grid-cols-12 gap-4 py-8 transition-all duration-300 cursor-default"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.015)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>

      {/* Number */}
      <div className="col-span-1 flex items-start pt-1">
        <span className="text-xs font-mono transition-colors duration-300" style={{ color: "#1e293b" }}
          onMouseEnter={() => {}} >
          {number}
        </span>
      </div>

      {/* Title */}
      <div className="col-span-12 md:col-span-4 flex items-start gap-3">
        <motion.div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: color }} />
        <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white" style={{ color: "#cbd5e1" }}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="col-span-12 md:col-span-4 hidden md:block">
        <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{description}</p>
      </div>

      {/* Tags + Links */}
      <div className="col-span-11 md:col-span-3 flex items-start justify-between md:justify-end gap-4">
        <div className="hidden md:flex flex-wrap gap-1.5">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md font-mono"
              style={{ background: "rgba(255,255,255,0.03)", color: "#334155", border: "1px solid rgba(255,255,255,0.05)" }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={github} target="_blank" rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1 text-xs"
            style={{ color: "#475569" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>
            <GithubIcon size={14} />
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ color: "#475569" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="projects" className="py-40 px-6 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#f472b6" }}>Portfólio</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ color: "#f8fafc" }}>O que construí</h2>
          </motion.div>
          <motion.div style={{ y }}>
            <motion.a href="https://github.com/erick9-08" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex items-center gap-2 text-sm transition-all duration-200 pb-1"
              style={{ color: "#334155", borderBottom: "1px solid #1e293b" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.borderColor = "#334155"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#334155"; (e.currentTarget as HTMLElement).style.borderColor = "#1e293b"; }}>
              <GithubIcon size={14} /> Ver todos no GitHub
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
