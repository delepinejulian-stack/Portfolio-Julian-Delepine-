import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Delepine · Communication & direction artistique",
  description:
    "Portfolio de Julian Delepine : communication, production audiovisuelle et direction artistique.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="dark h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
