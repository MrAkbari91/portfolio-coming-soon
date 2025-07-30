import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dhruv Akbari - Full-Stack Web Developer | Portfolio Coming Soon",
  description:
    "Dhruv Akbari - Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Portfolio website launching soon with innovative projects and solutions.",
  keywords:
    "Dhruv Akbari, web developer, full-stack developer, React developer, Next.js, JavaScript, TypeScript, Node.js, MongoDB, portfolio, web development",
  authors: [{ name: "Dhruv Akbari" }],
  creator: "Dhruv Akbari",
  publisher: "Dhruv Akbari",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dhruv Akbari - Full-Stack Web Developer",
    description:
      "Experienced full-stack web developer specializing in modern web technologies. Portfolio launching soon.",
    siteName: "Dhruv Akbari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Akbari - Full-Stack Web Developer",
    description:
      "Experienced full-stack web developer specializing in modern web technologies. Portfolio launching soon.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0c0c0c",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
