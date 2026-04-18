"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  CodeOutlined,
  RocketOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { personalInfo, education } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Years Experience", icon: <CodeOutlined /> },
  { value: "10+", label: "Projects Shipped", icon: <RocketOutlined /> },
  { value: "5+", label: "Companies Served", icon: <TeamOutlined /> },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative bg-[var(--bg-primary)]" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="fade-in-section mb-16 text-center">
          <span className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-3 block">
            01. About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-1)] mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile card + Stats */}
          <div className="fade-in-section flex flex-col items-center lg:items-start gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-2xl blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/profile.png"
                  alt="Shah Nawrose"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <p className="text-white font-bold text-base leading-tight">Shah Nawrose</p>
                  <p className="text-violet-300 text-xs">Frontend Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm lg:max-w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center hover:border-violet-500/40 transition-all duration-300 group"
                >
                  <div className="text-violet-500 text-lg mb-1 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[var(--text-3)] text-xs mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="fade-in-section space-y-6">
            <p className="text-[var(--text-2)] text-lg leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: <MailOutlined />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <PhoneOutlined />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <EnvironmentOutlined />, text: personalInfo.location, href: "#" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-3 text-[var(--text-3)] hover:text-violet-500 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 text-sm group-hover:bg-violet-500/20 transition-all">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-3)] hover:text-violet-500 hover:border-violet-500 hover:bg-violet-500/10 transition-all text-sm"
              >
                <GithubOutlined /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-3)] hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all text-sm"
              >
                <LinkedinOutlined /> LinkedIn
              </a>
            </div>

            {/* Education */}
            <div className="pt-4">
              <h3 className="text-[var(--text-1)] font-semibold mb-4 flex items-center gap-2">
                <span className="text-violet-500">📚</span> Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-4 hover:border-violet-500/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[var(--text-1)] font-medium text-sm">{edu.degree}</p>
                        <p className="text-violet-500 text-xs mt-0.5">{edu.institution}</p>
                        <p className="text-[var(--text-3)] text-xs mt-0.5 flex items-center gap-1">
                          <EnvironmentOutlined /> {edu.location}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-[var(--text-3)]">{edu.period}</span>
                        <p className="text-cyan-500 text-xs font-mono mt-0.5">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
