"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import ThemeSwitch from "./theme-switch";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "AI demo", href: "#ai-demo" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mb-8 sm:mb-14">
      <nav
        aria-label="Primary navigation"
        className="glass-panel flex items-center justify-between rounded-2xl px-3 py-2 shadow-lg shadow-slate-950/[0.04]"
      >
        <a href="#top" className="rounded-xl px-2 py-1 font-mono text-sm font-bold tracking-[0.18em]">
          SUMIT<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            aria-label="GitHub profile"
            className="icon-button"
            href="https://github.com/sumituiet"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub aria-hidden="true" />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="icon-button"
            href="https://www.linkedin.com/in/sumituiet/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin aria-hidden="true" />
          </a>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
