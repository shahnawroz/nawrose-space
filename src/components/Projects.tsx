"use client";

import { useEffect, useRef, useState } from "react";
import { Tag } from "antd";
import { LinkOutlined, StarFilled } from "@ant-design/icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filters = ["All", "Featured", "Client Project"];

  const filtered =
    filter === "Featured"
      ? projects.filter((p) => p.featured)
      : filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative bg-[var(--bg-primary)]" ref={sectionRef}>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in-section mb-12 text-center">
          <span className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-3 block">
            03. Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-1)] mb-4">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            From SaaS platforms to real-time trading tools — here&apos;s a selection of my work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="fade-in-section flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "border border-[var(--border)] text-[var(--text-3)] hover:border-violet-500/50 hover:text-violet-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const isPawfect = project.name === "Pawfect BD";

  return (
    <div
      className="fade-in-section glass-card rounded-2xl overflow-hidden group hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 pb-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            {isPawfect && <span className="text-orange-400 text-lg">🐾</span>}
            <h3 className="text-[var(--text-1)] font-bold text-lg group-hover:text-violet-500 transition-colors">
              {project.name}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.featured && (
              <span className="flex items-center gap-1 text-xs text-amber-500 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                <StarFilled style={{ fontSize: 10 }} /> Featured
              </span>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-3)] hover:text-violet-500 hover:border-violet-500/40 transition-all"
              >
                <LinkOutlined />
              </a>
            )}
          </div>
        </div>

        <span
          className={`inline-block text-xs px-2.5 py-0.5 rounded-full border mb-3 ${
            isPawfect
              ? "text-orange-500 bg-orange-500/10 border-orange-500/20"
              : "text-violet-500 bg-violet-500/10 border-violet-500/20"
          }`}
        >
          {project.category}
        </span>

        <p className="text-[var(--text-3)] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="space-y-1.5 mb-5">
          {project.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-[var(--text-3)] text-xs leading-relaxed">
              <span className="text-violet-500 mt-0.5 flex-shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
          {project.stack.map((tech) => (
            <Tag key={tech} className="!text-xs !px-2 !py-0">{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
