"use client";

import { GithubOutlined, LinkedinOutlined, MailOutlined, HeartFilled } from "@ant-design/icons";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base">
                SN
              </div>
              <span className="text-[var(--text-1)] font-semibold text-lg">Shah Nawrose</span>
            </div>
            <p className="text-[var(--text-3)] text-sm leading-relaxed max-w-xs">
              Frontend Software Engineer crafting performant SaaS products and web applications from Dhaka, Bangladesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[var(--text-1)] font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[var(--text-3)] hover:text-violet-500 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[var(--text-1)] font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--text-3)] hover:text-violet-500 transition-colors text-sm">
                <GithubOutlined className="text-base" /> github.com/shahnawroz
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--text-3)] hover:text-cyan-500 transition-colors text-sm">
                <LinkedinOutlined className="text-base" /> linkedin.com/in/shah-nawrose
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-[var(--text-3)] hover:text-pink-500 transition-colors text-sm">
                <MailOutlined className="text-base" /> {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-3)] text-sm flex items-center gap-1.5">
            Designed &amp; Built with <HeartFilled className="text-violet-500 text-xs" /> by{" "}
            <span className="text-[var(--text-2)]">Shah Nawrose</span> · {new Date().getFullYear()}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-3)] hover:text-violet-500 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all text-xs"
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
