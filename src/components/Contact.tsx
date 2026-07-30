"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", value: "github.com/erick9-08", href: "https://github.com/erick9-08", color: "#e2e8f0" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/erick-sousa", href: "https://linkedin.com/in/erick-sousa", color: "#06b6d4" },
  { icon: MailIcon, label: "Email", value: "robloxshaolin@gmail.com", href: "mailto:robloxshaolin@gmail.com", color: "#a78bfa" },
  { icon: MapPin, label: "Localização", value: "Brasil — Remoto disponível", href: null, color: "#f472b6" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const mailto = `mailto:robloxshaolin@gmail.com?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Nome: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6" style={{ background: "rgba(139,92,246,0.02)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "#a78bfa" }}>Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#e2e8f0" }}>Vamos conversar?</h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "#94a3b8" }}>Estou aberto a oportunidades de estágio, posições júnior e projetos freelance. Me manda uma mensagem!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col gap-4">
            {socials.map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="glass rounded-xl p-5 flex items-center gap-4 transition-all duration-200 group"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, color }}>
                  <Icon size={17} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: "#64748b" }}>{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors duration-200" style={{ color: "#e2e8f0" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = color)} onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: "#e2e8f0" }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-xl p-5 mt-2" style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.12),rgba(6,182,212,0.06))", border: "1px solid rgba(139,92,246,0.15)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                💡 <span style={{ color: "#a78bfa" }}>Dica:</span> Se você tem uma oportunidade de estágio ou posição júnior, adoraria saber! Estou sempre disponível para uma conversa rápida.
              </p>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}
            onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[{ name: "name", type: "text", label: "Nome", placeholder: "Seu nome" }, { name: "email", type: "email", label: "Email", placeholder: "seu@email.com" }].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>{f.label}</label>
                  <input name={f.name} type={f.type} required placeholder={f.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e2e8f0" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>Assunto</label>
              <input name="subject" type="text" required placeholder="Oportunidade de estágio / Projeto / Parceria"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e2e8f0" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
            </div>
            <div>
              <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>Mensagem</label>
              <textarea name="message" required rows={5} placeholder="Conte sobre a oportunidade ou o que você tem em mente..."
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e2e8f0" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
              style={{ background: sent ? "rgba(52,211,153,0.2)" : "linear-gradient(135deg,#7c3aed,#06b6d4)", border: sent ? "1px solid rgba(52,211,153,0.3)" : "none", color: sent ? "#34d399" : "#fff" }}
              onMouseEnter={(e) => { if (!sent) (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
              {sent ? "Mensagem enviada! ✓" : <><Send size={14} /> Enviar mensagem</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
