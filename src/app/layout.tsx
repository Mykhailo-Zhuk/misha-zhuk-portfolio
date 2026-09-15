import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://misha-zhuk-portfolio.vercel.app"),
  title: {
    default: "Mykhailo Zhuk — Full-Stack Developer (Next.js, TypeScript, AI)",
    template: "%s | Mykhailo Zhuk",
  },
  description:
    "Full-stack developer building SaaS for restaurants, salons & local businesses. Specializing in Next.js, TypeScript, and AI-augmented workflows. Available for hire.",
  keywords: [
    "Next.js developer",
    "TypeScript",
    "SaaS",
    "AI agents",
    "Telegram bot",
    "full-stack",
    "freelance",
    "Mykhailo Zhuk",
    "портфоліо розробника",
  ],
  authors: [{ name: "Mykhailo Zhuk", url: "https://github.com/Mykhailo-Zhuk" }],
  creator: "Mykhailo Zhuk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://misha-zhuk-portfolio.vercel.app",
    siteName: "Mykhailo Zhuk Portfolio",
    title: "Mykhailo Zhuk — Full-Stack Developer",
    description:
      "Full-stack developer building SaaS for restaurants, salons & local businesses.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mykhailo Zhuk Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mykhailo Zhuk — Full-Stack Developer",
    description:
      "Full-stack developer building SaaS for restaurants, salons & local businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}