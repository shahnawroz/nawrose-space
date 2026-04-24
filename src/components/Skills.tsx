"use client";

import { useEffect, useRef } from "react";
import { Progress } from "antd";
import { skills } from "@/data/portfolio";

const progressCategories = [
  { title: "Languages", icon: "⌨️", items: skills.languages },
  { title: "Frameworks", icon: "⚛️", items: skills.frameworks },
];

const tagCategories = [
  { title: "Tools & Databases", icon: "🛠️", items: skills.tools },
  { title: "UI / Styling", icon: "🎨", items: skills.ui },
  { title: "APIs & Other", icon: "🔌", items: skills.other },
];

export default function Skills() {
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
    <section id="skills" className="section-padding relative overflow-hidden section-alt" ref={sectionRef}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-64 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in-section mb-16 text-center">
          <span className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-3 block">
            04. Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-1)] mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            A curated set of technologies I use to build modern, performant products.
          </p>
        </div>

        {/* Progress bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {progressCategories.map((cat) => (
            <div key={cat.title} className="fade-in-section glass-card rounded-2xl p-6 hover:border-violet-500/30 transition-all">
              <h3 className="text-[var(--text-1)] font-semibold text-lg mb-6 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[var(--text-2)] text-sm font-medium">{skill.name}</span>
                      <span className="text-violet-500 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <Progress
                      percent={skill.level}
                      showInfo={false}
                      strokeLinecap="round"
                      size={["100%", 6]}
                      strokeColor={{ "0%": "#6366f1", "100%": "#22d3ee" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag grids */}
        <div className="grid md:grid-cols-3 gap-6">
          {tagCategories.map((cat) => (
            <div key={cat.title} className="fade-in-section glass-card rounded-2xl p-6 hover:border-violet-500/30 transition-all">
              <h3 className="text-[var(--text-1)] font-semibold text-base mb-5 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-2)] hover:border-violet-500/50 hover:text-violet-500 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="fade-in-section mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-violet-500/20 bg-violet-500/5 text-[var(--text-3)] text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Always learning — currently exploring AI integrations &amp; micro-frontend architectures
          </div>
        </div>
      </div>
    </section>
  );
}
