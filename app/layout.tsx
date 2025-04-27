import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Riad Ashrafov | Web Developer',
  description: 'Minimalistic and modern portfolio of Riad Ashrafov. Building clean web applications using React, Next.js, and Nuxt.js.',
  keywords: ['Riad Ashrafov', 'Web Developer', 'Next.js Developer', 'Frontend Developer', 'Portfolio'],
  authors: [{ name: 'Riad Ashrafov', url: 'https://riadashrafov.xyz' }],
  creator: 'Riad Ashrafov',
  openGraph: {
    title: 'Riad Ashrafov | Web Developer',
    description: 'Building modern web experiences with React, Next.js, and Nuxt.js.',
    url: 'https://riadashrafov.xyz',
    siteName: 'Riad Ashrafov Portfolio',
    images: [
      {
        url: '/og-image.png', // пока заглушка
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


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
        <ThemeProvider disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
