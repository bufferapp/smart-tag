import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const siteUrl = "https://smart-tag.bpaulino.com";
const title = "Buffer Smart Tag — A physical trigger for your digital workflows";
const description =
  "A handmade, 3D-printed, NFC-enabled token gifted at Buffer Team Retreat. Tap to publish, schedule, or automate — the physical trigger for your Buffer workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Buffer Smart Tag",
  authors: [{ name: "Bruno Paulino" }],
  creator: "Bruno Paulino",
  keywords: [
    "Buffer",
    "Smart Tag",
    "NFC",
    "automation",
    "Buffer API",
    "Buffer CLI",
    "Team Retreat",
    "3D-printed",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Buffer Smart Tag",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Buffer Smart Tag — a physical trigger for your digital workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
