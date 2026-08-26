"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", value: "erick9-08", href: "https://github.com/erick9-08" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "erick-sousa", href: "https://linkedin.com/in/erick-sousa" },
  { icon: MailIcon, label: "Email", value: "robloxshaolin@gmail.com", href: "mailto:robloxshaolin@gmail.com" },
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
    const mailto = `mailto:robloxshaolin@gmail.com?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Nome: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = (name: string) => ({
    background: focused === name ? "rgba(139,92,246,0.04)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused === name ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)"}`,
    color: "#e2e8f0",
    outline: "none",
    transition: "all 0.2s",
  });

  return (
    <section id="contact" className="py-40 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-20 text-center">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#a78bfa" }}>Contato</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" style={{ color: "#f8fafc" }}>
            Vamos<br />trabalhar juntos?
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "#475569" }}>
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
                  className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.04)", color: "#64748b" }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs mb-0.5" style={{ color: "#334155" }}>{label}</div>
                    <div className="text-sm font-medium truncate" style={{ color: "#94a3b8" }}>{value}</div>
                  </div>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: "#475569" }} />
                </a>
              ))}
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.12)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                💡 Tem uma vaga de estágio ou posição júnior? <span style={{ color: "#a78bfa" }}>Adoraria conversar!</span> Respondo rápido.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}
            onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-5 p-8 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ name: "name", label: "Nome", placeholder: "Seu nome", type: "text" }, { name: "email", label: "Email", placeholder: "seu@email.com", type: "email" }].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs mb-2 font-medium" style={{ color: "#334155" }}>{f.label}</label>
                  <input name={f.name} type={f.type} required placeholder={f.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm"
                    style={inputStyle(f.name)}
                    onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)} />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs mb-2 font-medium" style={{ color: "#334155" }}>Assunto</label>
              <input name="subject" type="text" required placeholder="Oportunidade / Projeto / Parceria"
                className="w-full rounded-xl px-4 py-3 text-sm"
                style={inputStyle("subject")}
                onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
            </div>
            <div>
              <label className="block text-xs mb-2 font-medium" style={{ color: "#334155" }}>Mensagem</label>
              <textarea name="message" required rows={5} placeholder="Conte sobre a oportunidade ou o que você tem em mente..."
                className="w-full rounded-xl px-4 py-3 text-sm resize-none"
                style={inputStyle("message")}
                onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
            </div>
            <button type="submit"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300 mt-1"
              style={{
                background: sent ? "rgba(52,211,153,0.1)" : "#fff",
                color: sent ? "#34d399" : "#09090b",
                border: sent ? "1px solid rgba(52,211,153,0.2)" : "none",
              }}
              onMouseEnter={(e) => { if (!sent) (e.currentTarget as HTMLElement).style.background = "#f1f5f9"; }}
              onMouseLeave={(e) => { if (!sent) (e.currentTarget as HTMLElement).style.background = "#fff"; }}>
              {sent ? "Mensagem enviada! ✓" : <><Send size={14} /> Enviar mensagem</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
