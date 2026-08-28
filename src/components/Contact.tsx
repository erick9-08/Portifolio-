"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", value: "erick9-08", href: "https://github.com/erick9-08" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "erick-sousa-oliveira", href: "https://www.linkedin.com/in/erick-sousa-oliveira-a73147305/" },
  { icon: MailIcon, label: "Email", value: "oliveiraericksousa@gmail.com", href: "mailto:oliveiraericksousa@gmail.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const mailto = `mailto:oliveiraericksousa@gmail.com?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Nome: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = (name: string) => ({
    background: focused === name ? "rgba(200,138,70,0.05)" : "transparent",
    border: `1px solid ${focused === name ? "var(--accent)" : "var(--line)"}`,
    color: "var(--text)",
    outline: "none",
    transition: "all 0.2s",
    borderRadius: "4px",
  });

  return (
    <section id="contact" className="py-36 px-6" style={{ background: "var(--surface)" }}>
      <div className="w-full" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="eyebrow mb-4 block">registro 005 — contato</span>
          <h2 className="font-display text-5xl md:text-6xl mb-4" style={{ color: "var(--text)", fontWeight: 600 }}>
            Vamos <span style={{ fontStyle: "italic", color: "var(--muted)" }}>conversar?</span>
          </h2>
          <p className="text-base max-w-md" style={{ color: "var(--muted)" }}>
            Aberto a oportunidades de estágio, posições júnior e projetos freelance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-2">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 transition-all duration-200"
                  style={{ border: "1px solid var(--line)", borderRadius: "4px" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; }}>
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid var(--line)", color: "var(--muted)", borderRadius: "4px" }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[0.65rem] uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-2)" }}>{label}</div>
                    <div className="text-sm font-medium truncate" style={{ color: "var(--text)" }}>{value}</div>
                  </div>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: "var(--accent-2)" }} />
                </a>
              ))}
            </div>

            <div className="p-6" style={{ border: "1px solid rgba(200,138,70,0.25)", borderRadius: "4px", background: "rgba(200,138,70,0.04)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Tem uma vaga de estágio ou posição júnior? <span style={{ color: "var(--accent)" }}>Adoraria conversar!</span> Respondo rápido.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}
            onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-5 p-8"
            style={{ border: "1px solid var(--line)", borderRadius: "6px" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ name: "name", label: "Nome", placeholder: "Seu nome", type: "text" }, { name: "email", label: "Email", placeholder: "seu@email.com", type: "email" }].map((f) => (
                <div key={f.name}>
                  <label className="font-mono text-[0.65rem] uppercase tracking-wide block mb-2" style={{ color: "var(--muted-2)" }}>{f.label}</label>
                  <input name={f.name} type={f.type} required placeholder={f.placeholder}
                    className="w-full px-4 py-3 text-sm"
                    style={inputStyle(f.name)}
                    onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)} />
                </div>
              ))}
            </div>
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-wide block mb-2" style={{ color: "var(--muted-2)" }}>Assunto</label>
              <input name="subject" type="text" required placeholder="Oportunidade / Projeto / Parceria"
                className="w-full px-4 py-3 text-sm"
                style={inputStyle("subject")}
                onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
            </div>
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-wide block mb-2" style={{ color: "var(--muted-2)" }}>Mensagem</label>
              <textarea name="message" required rows={5} placeholder="Conte sobre a oportunidade ou o que você tem em mente..."
                className="w-full px-4 py-3 text-sm resize-none"
                style={inputStyle("message")}
                onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
            </div>
            <button type="submit"
              className="flex items-center justify-center gap-2.5 px-6 py-4 font-medium text-sm transition-all duration-300 mt-1"
              style={{
                background: sent ? "rgba(74,154,140,0.12)" : "var(--accent)",
                color: sent ? "var(--accent-2)" : "#1a1206",
                border: sent ? "1px solid var(--accent-2)" : "none",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => { if (!sent) (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "none"; }}>
              {sent ? "Mensagem enviada ✓" : <><Send size={14} /> Enviar mensagem</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
