# nawrose-space — Shah Nawrose Portfolio

A modern, dark-themed personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Ant Design**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Ant Design 5
- **Deployment**: Vercel (recommended)

## Features

- ✨ Animated hero with typewriter effect & particle canvas
- 🌙 Dark theme with violet/cyan gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Glassmorphism card design
- ⚡ Smooth scroll animations
- 💼 Experience timeline
- 🚀 Projects grid with filter (includes Pawfect BD)
- 📊 Skills with progress bars
- 📩 Contact form (ready to wire up to EmailJS or Resend)
- 🔝 SEO-optimized metadata

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Adding Your Profile Photo

Place your photo in the `public/` folder as `profile.png`, then update the About component to use:

```tsx
import Image from "next/image";

// Replace the placeholder div with:
<Image
  src="/profile.png"
  alt="Shah Nawrose"
  fill
  className="object-cover"
/>
```

## Wiring Up the Contact Form

To make the contact form actually send emails, integrate [EmailJS](https://emailjs.com) or [Resend](https://resend.com):

```bash
npm install @emailjs/browser
```

Update `handleSubmit` in `src/components/Contact.tsx` with your service credentials.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Customization

All portfolio content lives in one file:

```
src/data/portfolio.ts
```

Update `personalInfo`, `experiences`, `projects`, `skills`, and `education` there.

---

Built with ❤️ by Shah Nawrose
# nawrose-space
