"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-sm font-semibold" style={{ color: "#f8fafc" }}>
          erick<span style={{ color: "#334155" }}>.dev</span>
        </span>

        <p className="text-xs" style={{ color: "#1e293b" }}>
          © {year} Erick Sousa — Todos os direitos reservados
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/erick9-08", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/erick-sousa", label: "LinkedIn" },
            { icon: MailIcon, href: "mailto:robloxshaolin@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="transition-colors duration-200" style={{ color: "#1e293b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#475569")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1e293b")}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
