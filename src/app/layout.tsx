import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe UI | Premium React Components",
  description: "Beautifully crafted, copy-paste React components with glassmorphism and fluid animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-background text-foreground relative selection:bg-white/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-background to-background -z-10 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
