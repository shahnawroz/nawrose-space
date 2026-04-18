"use client";

import { useEffect, useRef, useState } from "react";
import { Tag } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { personalInfo } from "@/data/portfolio";

const roles = [
  "Frontend Software Engineer",
  "Next.js Specialist",
  "React Developer",
  "SaaS Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-violet-500 dark:text-violet-300 text-sm font-medium">
            Available for freelance &amp; full-time roles
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[var(--text-1)] mb-4 leading-tight">
          Hi, I&apos;m <span className="gradient-text">Shah Nawrose</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-3xl font-semibold text-[var(--text-2)] mb-6 h-10 flex items-center justify-center gap-2">
          <span className="text-cyan-500">&lt;</span>
          <span className="font-mono text-cyan-500 dark:text-cyan-300">{displayed}</span>
          <span className="w-[2px] h-6 bg-cyan-500 animate-pulse" />
          <span className="text-cyan-500">/&gt;</span>
        </div>

        {/* Tagline */}
        <p className="text-[var(--text-2)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS", "Supabase"].map((tag) => (
            <Tag key={tag} className="!px-3 !py-1 !text-sm">{tag}</Tag>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-lg shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 rounded-xl border border-[var(--border)] text-[var(--text-2)] font-semibold text-lg hover:border-violet-500 hover:text-violet-500 hover:bg-violet-500/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { href: personalInfo.github, icon: <GithubOutlined />, hover: "hover:border-violet-500 hover:text-violet-500" },
            { href: personalInfo.linkedin, icon: <LinkedinOutlined />, hover: "hover:border-cyan-500 hover:text-cyan-500" },
            { href: `mailto:${personalInfo.email}`, icon: <MailOutlined />, hover: "hover:border-pink-500 hover:text-pink-500" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={i < 2 ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`w-11 h-11 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-3)] hover:bg-violet-500/10 transition-all duration-200 text-lg ${item.hover}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-3)] hover:text-violet-500 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDownOutlined className="text-lg animate-bounce" />
      </button>
    </section>
  );
}
