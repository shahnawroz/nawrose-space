"use client";

import { useEffect, useRef } from "react";
import { Tag, Timeline } from "antd";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const timelineItems = experiences.map((exp) => ({
    dot: (
      <div
        className={`w-4 h-4 rounded-full border-2 ${
          exp.current
            ? "bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/50"
            : "bg-[var(--bg-card)] border-[var(--border)]"
        }`}
      />
    ),
    children: (
      <div className="glass-card rounded-2xl p-4 sm:p-6 hover:border-violet-500/40 transition-all duration-300 group mb-2 ml-2" style={{ marginTop: "-4px" }}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-[var(--text-1)] font-bold text-lg group-hover:text-violet-500 transition-colors">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/15 border border-green-500/30 text-green-500">
                  Current
                </span>
              )}
            </div>
            <p className="text-violet-500 font-semibold text-base">{exp.company}</p>
            <p className="text-[var(--text-3)] text-sm mt-0.5">{exp.location}</p>
          </div>
          <span className="text-[var(--text-3)] text-sm font-mono bg-[var(--bg-surface)] border border-[var(--border)] px-3 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--text-2)] text-sm leading-relaxed">
              <span className="text-violet-500 mt-1.5 flex-shrink-0">▸</span>
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <Tag key={tech} className="!text-xs">{tech}</Tag>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="section-padding relative overflow-hidden section-alt" ref={sectionRef}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="fade-in-section mb-16 text-center">
          <span className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-3 block">
            02. Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-1)] mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            3+ years of crafting digital experiences across SaaS products, e-commerce platforms, and enterprise tools.
          </p>
        </div>

        <div className="fade-in-section">
          <Timeline mode="left" items={timelineItems} style={{ paddingLeft: "8px" }} />
        </div>
      </div>
    </section>
  );
}
