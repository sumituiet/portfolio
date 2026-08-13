import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Navbar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sumit — AI Engineer",
  description: "AI Engineer in Melbourne building production GenAI products, agents, RAG pipelines, and data platforms.",
  keywords: ["AI Engineer", "GenAI", "RAG", "Data Engineering", "Melbourne"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
