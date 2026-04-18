import type { Metadata } from "next";
import AntdProvider from "@/components/AntdProvider";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shah Nawrose — Frontend Software Engineer",
  description:
    "Portfolio of Shah Nawrose — Frontend Software Engineer specializing in Next.js, React, Vue.js, and scalable SaaS products.",
  keywords: [
    "Shah Nawrose",
    "Frontend Engineer",
    "Next.js",
    "React",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Shah Nawrose" }],
  openGraph: {
    title: "Shah Nawrose — Frontend Software Engineer",
    description:
      "Explore the work and projects of Shah Nawrose, a Frontend Software Engineer from Dhaka, Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AntdProvider>{children}</AntdProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
