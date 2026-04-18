"use client";

import React, { useEffect, useRef, useState } from "react";
import { Form, Input, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { personalInfo } from "@/data/portfolio";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  iconClass: string;
  hoverClass: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    message.success("Message sent! I'll get back to you soon.");
    form.resetFields();
    setLoading(false);
  };

  const contactItems: ContactItem[] = [
    {
      icon: <MailOutlined />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      iconClass: "text-violet-500 bg-violet-500/10 border-violet-500/20",
      hoverClass: "hover:border-violet-500/40",
    },
    {
      icon: <PhoneOutlined />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      iconClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      hoverClass: "hover:border-cyan-500/40",
    },
    {
      icon: <EnvironmentOutlined />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      iconClass: "text-pink-500 bg-pink-500/10 border-pink-500/20",
      hoverClass: "hover:border-pink-500/40",
    },
  ];

  const inputStyle = {
    background: "var(--bg-surface)",
    borderColor: "var(--border)",
    color: "var(--text-1)",
  };

  return (
    <section id="contact" className="section-padding relative bg-[var(--bg-primary)]" ref={sectionRef}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in-section mb-16 text-center">
          <span className="text-violet-500 font-mono text-sm tracking-widest uppercase mb-3 block">
            05. Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-1)] mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="fade-in-section space-y-8">
            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 glass-card rounded-xl p-4 ${item.hoverClass} transition-all group`}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-lg group-hover:scale-110 transition-transform ${item.iconClass}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[var(--text-3)] text-xs mb-0.5">{item.label}</p>
                    <p className="text-[var(--text-1)] font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-[var(--text-3)] text-sm mb-3">Find me on</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] text-[var(--text-2)] hover:text-violet-500 hover:border-violet-500 hover:bg-violet-500/10 transition-all text-sm font-medium"
                >
                  <GithubOutlined /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] text-[var(--text-2)] hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all text-sm font-medium"
                >
                  <LinkedinOutlined /> LinkedIn
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 border-green-500/20 hover:border-green-500/30 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-500 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">
                Currently open to freelance projects and full-time frontend engineering roles. Let&apos;s build something great together!
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-in-section">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-[var(--text-1)] font-bold text-xl mb-6">Send a Message</h3>
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <Form.Item
                    name="name"
                    label={<span className="text-[var(--text-3)] text-sm">Your Name</span>}
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input placeholder="John Doe" size="large" style={inputStyle} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={<span className="text-[var(--text-3)] text-sm">Your Email</span>}
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Invalid email" },
                    ]}
                  >
                    <Input placeholder="john@example.com" size="large" style={inputStyle} />
                  </Form.Item>
                </div>

                <Form.Item
                  name="subject"
                  label={<span className="text-[var(--text-3)] text-sm">Subject</span>}
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input placeholder="Project Inquiry / Freelance / Job Offer..." size="large" style={inputStyle} />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span className="text-[var(--text-3)] text-sm">Message</span>}
                  rules={[{ required: true, message: "Please enter a message" }]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </Form.Item>

                <Form.Item className="mb-0 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base flex items-center justify-center gap-2 shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <><SendOutlined /> Send Message</>
                    )}
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
