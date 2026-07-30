"use client";

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 py-10 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm flex items-center gap-1.5" style={{ color: "#334155" }}>
          Feito com <Heart size={12} fill="currentColor" style={{ color: "#a78bfa" }} /> por <span style={{ color: "#94a3b8" }}>Erick Sousa</span> — {year}
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/erick9-08", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/erick-sousa", label: "LinkedIn" },
            { icon: MailIcon, href: "mailto:robloxshaolin@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="transition-colors duration-200" style={{ color: "#334155" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}>
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs" style={{ color: "#1e293b" }}>Next.js · TypeScript · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
