import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lutfan Anas Zahir | Lecturer, Researcher & Software Engineer",
  description: "Academic portfolio of Lutfan Anas Zahir - Lecturer at Universitas Tulungagung specializing in Computational Intelligence, Data Science, Optimization Algorithms, and Web3/Blockchain development.",
  keywords: ["Lutfan Anas Zahir", "Lecturer", "Researcher", "Computational Intelligence", "Data Science", "Machine Learning", "Web3", "Blockchain", "Optimization Algorithms", "Universitas Tulungagung"],
  authors: [{ name: "Lutfan Anas Zahir" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Lutfan Anas Zahir | Lecturer, Researcher & Software Engineer",
    description: "Academic portfolio specializing in Computational Intelligence, Data Science, and Web3 development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lutfan Anas Zahir | Lecturer, Researcher & Software Engineer",
    description: "Academic portfolio specializing in Computational Intelligence, Data Science, and Web3 development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
