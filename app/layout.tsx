import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tejaswedsnikita-alpha.vercel.app/"),

  openGraph: {
    title: "Tejas Patel Weds Nikita Patel",
    description: "Join as they begin their forever. 24, 25, 26 & 27 November, 2026",
    url: "https://tejaswedsnikita-alpha.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Tejas Patel Weds Nikita Patel",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Tejas Patel Weds Nikita Patel",
    description: "Join as they begin their forever. 24, 25, 26 & 27 November, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://tejaswedsnikita-alpha.vercel.app/og.jpg",
    "og:image:type": "image/jpeg",
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
