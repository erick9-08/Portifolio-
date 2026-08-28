"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  {
    call: "WEB.01",
    title: "Clone Bradesco",
    description: "Réplica da landing page do banco Bradesco, focada em fidelidade visual e responsividade.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/erick9-08/Clone-Bradesco",
  },
  {
    call: "WEB.02",
    title: "Restaurante",
    description: "Site institucional para restaurante com cardápio, seções de contato e layout responsivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/erick9-08/Restaurante",
  },
  {
    call: "WEB.03",
    title: "Starbucks Landing Page",
    description: "Clone da página inicial da Starbucks com foco em estilização avançada em CSS.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/erick9-08/Starbucks",
  },
  {
    call: "WEB.04",
    title: "App Luna",
    description: "Aplicação web com interface própria, estruturada em HTML, CSS e JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/erick9-08/app-luna",
  },
  {
    call: "JAVA.01",
    title: "Sistema de Biblioteca",
    description: "Sistema de gerenciamento de biblioteca em Java, com cadastro de livros, usuários e controle de empréstimos.",
    tags: ["Java", "POO", "CRUD"],
    github: "https://github.com/erick9-08/Sistema-de-biblioteca",
  },
  {
    call: "PY.01",
    title: "Notebook Python Completo",
    description: "Notebook com estudos e exercícios completos de Python, cobrindo lógica, estruturas de dados e algoritmos.",
    tags: ["Python", "Jupyter"],
    github: "https://github.com/erick9-08/notebook-completo-em-Python",
  },
];

function CatalogCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const { call, title, description, tags, github } = project;
  const tilt = index % 2 === 0 ? -1 : 1;

  return (
    <motion.a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24, rotate: tilt * 1.4 }}
      animate={inView ? { opacity: 1, y: 0, rotate: tilt * 0.7 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ rotate: 0, y: -6 }}
      className="paper-card p-6 flex flex-col relative block"
      style={{ textDecoration: "none" }}
    >
      <div className="absolute top-3.5 left-3.5 punch-hole" />
      <div className="absolute top-3.5 right-3.5 punch-hole" />

      <div className="flex items-center justify-between mb-5 pb-4"
        style={{ borderBottom: "1px dashed rgba(33,29,22,0.25)" }}>
        <span className="font-mono text-[0.65rem] tracking-widest uppercase" style={{ color: "var(--muted-2)" }}>
          nº {call}
        </span>
        <GithubIcon size={13} />
      </div>

      <h3 className="font-display text-xl mb-3 leading-snug" style={{ color: "var(--paper-ink)", fontWeight: 600 }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(33,29,22,0.65)" }}>
        {description}
      </p>

      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px dashed rgba(33,29,22,0.25)" }}>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[0.65rem] px-2 py-0.5 uppercase tracking-wide"
              style={{ background: "rgba(33,29,22,0.06)", color: "var(--paper-ink)", borderRadius: "3px" }}>
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight size={14} style={{ color: "var(--paper-ink)" }} />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-36 px-6 overflow-hidden">
      <div className="w-full" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }} ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="eyebrow mb-4 block">registro 004 — catálogo</span>
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: "var(--text)", fontWeight: 600 }}>
              O que <span style={{ fontStyle: "italic", color: "var(--muted)" }}>construí</span>
            </h2>
          </motion.div>
          <motion.a href="https://github.com/erick9-08" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide transition-all duration-200 pb-1"
            style={{ color: "var(--muted)", borderBottom: "1px solid var(--line)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}>
            ver todos no github
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {projects.map((project, i) => (
            <CatalogCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
