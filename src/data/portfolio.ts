export const personalInfo = {
  name: "Shah Nawrose",
  title: "Frontend Software Engineer",
  tagline: "Building performant, scalable web applications & SaaS products",
  email: "sh.nawrose@gmail.com",
  phone: "(+880) 1761-867763",
  location: "Mirpur, Dhaka, Bangladesh",
  github: "https://github.com/shahnawroz",
  linkedin: "https://linkedin.com/in/shah-nawrose",
  summary:
    "Results-driven Frontend Software Engineer with 3+ years of experience building performant, scalable web applications and SaaS products. Skilled in Next.js, React, and Vue.js with a strong focus on API integration, real-time data visualization, and polished UX. Proven ability to ship full-featured products independently and collaborate effectively within agile teams.",
};

export const experiences = [
  {
    id: 1,
    company: "Mians",
    role: "Software Engineer",
    period: "Aug 2024 – Present",
    location: "Dhaka, Bangladesh",
    current: true,
    description: [
      "Spearheaded frontend development across multiple client products — e-commerce platforms, market simulation tools, opinion-sharing apps, and donation platforms.",
      "Responsible for cross-panel communication architecture, REST API integration, and delivering production-ready UIs on tight deadlines.",
      "Collaborated with designers and backend engineers using Jira for sprint planning and GitHub for version control.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "REST API", "GitHub", "Jira"],
  },
  {
    id: 2,
    company: "Iching Software Lab",
    role: "Software Engineer",
    period: "Jun 2024 – Aug 2024",
    location: "Dhaka, Bangladesh",
    current: false,
    description: [
      "Contributed frontend development and API integration for an agricultural e-commerce platform, ensuring smooth data flow and seamless UX.",
    ],
    stack: ["Next.js", "React", "REST API", "Tailwind CSS"],
  },
  {
    id: 3,
    company: "Bright-I System Limited",
    role: "Executive – Post-Sales",
    period: "May 2023 – Jun 2024",
    location: "Dhaka, Bangladesh",
    current: false,
    description: [
      "Managed network configuration, enterprise client onboarding, and long-term relationship management.",
      "Served as Project Manager on select assignments, coordinating cross-team deliverables and timelines.",
    ],
    stack: ["Project Management", "Client Relations", "Network Config"],
  },
  {
    id: 4,
    company: "Mians",
    role: "Software Engineer – Intern",
    period: "Jan 2021 – Mar 2021",
    location: "Dhaka, Bangladesh",
    current: false,
    description: [
      "Built frontend components using React, Vue.js, Tailwind CSS, and Material UI within an agile product team.",
    ],
    stack: ["React", "Vue.js", "Tailwind CSS", "Material UI"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Shei Hoise",
    category: "SaaS Product",
    url: "https://sheihoise.com",
    featured: true,
    description:
      "Modern E-Commerce with Business Financial Tracker & One-Click Order Management — a full-featured SaaS platform serving as a complete business operations tool.",
    highlights: [
      "Built real-time Financial Tracker enabling revenue, expenses, and profit monitoring from a unified dashboard",
      "Implemented One-Click Order Confirm system reducing order processing time drastically",
      "Leveraged Supabase for authentication, real-time database, and serverless backend",
    ],
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
    gradient: "from-violet-600 to-cyan-500",
  },
  {
    id: 2,
    name: "Pawfect BD",
    category: "E-Commerce · Co-owner",
    url: "https://www.sheihoise.com/pawfectbd",
    featured: true,
    description:
      "An online pet store based in Bangladesh, offering premium pet food, accessories, grooming products, and care essentials for all beloved pets.",
    highlights: [
      "Co-founded and actively involved in business operations and digital presence",
      "Curated product listings for pets including food, toys, and healthcare items",
      "Focused on delivering a seamless, pet-lover-friendly shopping experience",
    ],
    stack: ["E-Commerce", "Product Management", "Business Operations"],
    gradient: "from-orange-500 to-pink-500",
  },
  {
    id: 3,
    name: "Mians AI Chatbot",
    category: "AI Product",
    url: "https://mians-chatbot.vercel.app",
    featured: true,
    description:
      "General-Purpose AI Assistant powered by OpenAI GPT with real-time streaming replies and a responsive chat UI.",
    highlights: [
      "Integrated with OpenAI API for intelligent, wide-range query handling",
      "Designed responsive chat UI with real-time streaming for native-app-like feel",
      "Deployed on Vercel with optimized API routes for fast, low-latency responses",
    ],
    stack: ["Next.js", "Tailwind CSS", "OpenAI API", "Vercel"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    name: "DaattiHome",
    category: "Client Project",
    url: "https://daattihomecollection.com/",
    featured: false,
    description:
      "Advanced Multi-Panel E-Commerce Platform with four separate panels — Agent, Client, Admin, and Vendor — with real-time cross-panel communication.",
    highlights: [
      "Built four separate panels with real-time cross-panel communication",
      "Full REST API integration for seamless data synchronization",
    ],
    stack: ["Next.js", "Tailwind CSS", "REST API", "Jira"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    name: "Bianx",
    category: "Client Project",
    url: "",
    featured: false,
    description:
      "Real-Time Market Simulation & Interactive Trading Platform with live data visualization using Apex Chart and Lightweight Chart.",
    highlights: [
      "Developed real-time trading UI with live data visualization",
      "Used Apex Chart and Lightweight Chart focusing on performance and modularity",
    ],
    stack: ["Vue.js", "Apex Chart", "Lightweight Chart", "Tailwind CSS"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    name: "Motamot",
    category: "Client Project",
    url: "",
    featured: false,
    description:
      "Public Opinion Sharing & Community Discussion Platform with dynamic community feeds and real-time user interaction flows.",
    highlights: [
      "Built dynamic community feeds enabling open public discussion",
      "Real-time user interaction flows for opinion sharing",
    ],
    stack: ["Next.js", "Tailwind CSS"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 7,
    name: "ValerieTaylorTrust",
    category: "Client Project",
    url: "https://www.valerietaylortrust.org/",
    featured: false,
    description:
      "Voluntary Service Platform with Secure Donation Processing integrated with Stripe.",
    highlights: [
      "WordPress-based platform with Stripe integration for secure donations",
      "Professional design using ElementorPro",
    ],
    stack: ["WordPress", "ElementorPro", "Stripe"],
    gradient: "from-indigo-500 to-purple-600",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "CSS / SCSS", level: 92 },
    { name: "PHP", level: 65 },
    { name: "Java", level: 60 },
  ],
  frameworks: [
    { name: "Next.js", level: 95 },
    { name: "React", level: 93 },
    { name: "Vue.js", level: 85 },
    { name: "Quasar", level: 75 },
  ],
  tools: [
    "Git & GitHub",
    "Vercel",
    "Postman",
    "Figma",
    "Jira",
    "Linux",
    "Supabase",
    "MongoDB",
    "MySQL",
    "Firebase",
  ],
  ui: [
    "Tailwind CSS",
    "Ant Design",
    "Material UI",
    "Apex Chart",
    "Lightweight Chart",
    "ElementorPro",
  ],
  other: ["OpenAI API", "REST API", "WordPress", "HTML5", "Agile / Scrum"],
};

export const education = [
  {
    institution: "American International University – Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    gpa: "3.01",
    period: "2016 – 2021",
    location: "Dhaka, Bangladesh",
  },
  {
    institution: "Adamjee Cantonment College",
    degree: "Higher Secondary School Certificate",
    gpa: "5.00",
    period: "2013 – 2016",
    location: "Dhaka, Bangladesh",
  },
  {
    institution: "Naogaon Zilla School",
    degree: "Secondary School Certificate",
    gpa: "5.00",
    period: "2004 – 2013",
    location: "Naogaon, Bangladesh",
  },
];
