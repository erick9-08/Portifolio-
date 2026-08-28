"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

const TITLES = ["full stack developer", "dev em formação", "aprendiz de java & python", "construtor de interfaces"];

function TypeWriter() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const target = TITLES[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      setPause(true);
      timeout = setTimeout(() => { setPause(false); setDeleting(true); }, 1600);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTitleIdx((i) => (i + 1) % TITLES.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx, pause]);

  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[0.9em] animate-pulse" style={{ background: "var(--accent)" }} />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-20" id="hero">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,138,70,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="w-full relative z-10" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
          {/* Left — statement */}
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="eyebrow flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-2)" }} />
              registro nº 001 — disponível para oportunidades
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6" style={{ color: "var(--text)", fontWeight: 600 }}>
              Erick<br />
              <span style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 500 }}>Sousa</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-lg md:text-xl mb-8" style={{ color: "var(--muted)" }}>
              <TypeWriter />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base md:text-lg leading-relaxed max-w-md mb-10" style={{ color: "var(--muted)" }}>
              Estudo HTML, CSS, JavaScript, Java e Python por conta própria — e venho documentando cada projeto no GitHub.
              Agora aprofundando em React e Next.js, buscando um estágio ou vaga júnior pra crescer de verdade dentro de um time.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-all duration-300"
                style={{ background: "var(--accent)", color: "#1a1206", borderRadius: "4px" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = "none")}>
                Ver catálogo de projetos
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: "https://github.com/erick9-08", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/erick-sousa-oliveira-a73147305/", label: "LinkedIn" },
                  { icon: MailIcon, href: "mailto:oliveiraericksousa@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="flex items-center justify-center w-11 h-11 transition-all duration-200"
                    style={{ border: "1px solid var(--line)", color: "var(--muted)", borderRadius: "4px" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent-2)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-2)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; }}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — index card */}
          <motion.div initial={{ opacity: 0, y: 30, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ rotate: 0, y: -4 }}
            className="paper-card p-7 relative"
            style={{ transformOrigin: "center" }}>
            <div className="absolute top-4 left-4 punch-hole" />
            <div className="absolute top-4 right-4 punch-hole" />

            <div className="font-mono text-[0.65rem] tracking-widest uppercase mb-6 pb-4 flex items-center justify-between"
              style={{ borderBottom: "1px dashed rgba(33,29,22,0.25)", color: "var(--muted-2)" }}>
              <span>ficha de identificação</span>
              <span>001.26</span>
            </div>

            <div className="flex flex-col gap-4 font-mono text-sm">
              {[
                { label: "nome", value: "Erick Sousa" },
                { label: "função", value: "Full Stack Jr." },
                { label: "status", value: "disponível" },
                { label: "local", value: "Brasil · remoto" },
                { label: "stack", value: "JS · Java · Python" },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-3">
                  <span style={{ color: "var(--muted-2)" }}>{row.label}</span>
                  <span className="flex-1 mx-2" style={{ borderBottom: "1px dotted rgba(33,29,22,0.3)" }} />
                  <span style={{ color: "var(--paper-ink)", fontWeight: 600 }}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 flex items-center justify-between" style={{ borderTop: "1px dashed rgba(33,29,22,0.25)" }}>
              <span className="font-mono text-[0.65rem] tracking-widest uppercase" style={{ color: "var(--muted-2)" }}>
                erick9-08
              </span>
              <span className="px-2.5 py-1 text-[0.65rem] font-mono font-semibold tracking-wide uppercase"
                style={{ color: "var(--accent-2)", border: "1px solid rgba(74,154,140,0.4)", borderRadius: "3px", transform: "rotate(-4deg)" }}>
                ativo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
