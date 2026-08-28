"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }}>
        <span className="font-mono text-sm" style={{ color: "var(--text)" }}>
          erick<span style={{ color: "var(--accent)" }}>.dev</span>
        </span>

        <p className="font-mono text-xs" style={{ color: "var(--muted-2)" }}>
          © {year} Erick Sousa — registro encerrado
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/erick9-08", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/erick-sousa-oliveira-a73147305/", label: "LinkedIn" },
            { icon: MailIcon, href: "mailto:oliveiraericksousa@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="transition-colors duration-200" style={{ color: "var(--muted-2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-2)")}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
