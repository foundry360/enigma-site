import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Enigma is an AI Action Governance gateway. It decides whether an AI-mediated action may proceed under enterprise policy, enforces that decision on the request path, routes exceptions to an authorized approver, and produces evidence of what was decided.";

export const metadata: Metadata = {
  metadataBase: new URL("https://enigma.foundry360.us"),
  title: {
    default: "Enigma — AI Action Governance Gateway",
    template: "%s — Enigma",
  },
  description,
  keywords: [
    "AI action governance",
    "AI governance gateway",
    "agent governance",
    "policy decision point",
    "AI audit evidence",
  ],
  openGraph: {
    title: "Enigma — AI Action Governance Gateway",
    description,
    type: "website",
    siteName: "Enigma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enigma — AI Action Governance Gateway",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
