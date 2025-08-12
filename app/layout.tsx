import type { Metadata } from "next"
import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"

// Load Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

// Site-wide SEO metadata
export const metadata: Metadata = {
  title: "Dhruv Akbari - Web Developer | Portfolio",
  description:
    "Dhruv Akbari is a skilled full-stack web developer with expertise in React, Next.js, Node.js, WordPress, Shopify, and modern web technologies. Explore his portfolio for innovative web solutions and creative project showcases.",
  keywords:
    "Dhruv Akbari, web developer, full-stack developer, WordPress developer, Shopify developer, React, Next.js, JavaScript, TypeScript, Node.js, MongoDB, UI/UX designer, MERN stack developer, front-end developer, back-end developer, software engineer, web development portfolio, responsive design, SEO, freelance web developer, web app developer, PWA, tech entrepreneur, web design, SaaS, cloud computing, digital marketing, BCA, MCA, Sutex Bank College, JAIN University, Scion Infotech, Jiya Web Solutions, Upmetrics, Sassy Infotech",
  authors: [{ name: "Dhruv Akbari" }],
  creator: "Dhruv Akbari",
  publisher: "Dhruv Akbari",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhruvakbari.vercel.app", // Replace with actual URL
    title: "Dhruv Akbari - Web Developer | Portfolio",
    description:
      "Portfolio of Dhruv Akbari, an experienced web developer focused on React, Next.js, Node.js, WordPress, Shopify, and modern technologies. Explore real-world projects and creative solutions.",
    siteName: "Dhruv Akbari Portfolio",
    images: [
      {
        url: "https://dhruvakbari.vercel.app/assets/og-image.jpg", // Make sure this exists
        width: 1200,
        height: 630,
        alt: "Dhruv Akbari - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Akbari - Web Developer | Portfolio",
    description:
      "Explore the portfolio of Dhruv Akbari, a full-stack web developer experienced in React, Next.js, WordPress, Shopify, and more.",
    images: [
      {
        url: "https://dhruvakbari.vercel.app/assets/twitter-image.jpg", // Ensure this exists
        alt: "Dhruv Akbari - Web Developer Portfolio",
      },
    ],
  },
  metadataBase: new URL("https://dhruvakbari.vercel.app"),
  alternates: {
    canonical: "https://dhruvakbari.vercel.app",
  },
  // Schema Markup (Structured Data)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhruv Akbari",
    jobTitle: "Web Developer",
    url: "https://dhruvakbari.vercel.app",
    sameAs: [
      "https://github.com/mrakbari91",        // GitHub
      "https://www.linkedin.com/in/dhruvakbari", // LinkedIn
      "http://codepen.io/dhruvakbari/",        // CodePen
      "https://www.instagram.com/1bari_91/",   // Instagram
      "https://www.facebook.com/dhruvakbari",  // Facebook
      "mailto:dhruvakbari303@gmail.com",       // Email
      "https://twitter.com/Mr_Akbari_91",      // Twitter
      "https://dhruvakbari.vercel.app",        // Website
      "https://t.me/mr_akbari91",              // Telegram
    ],
    worksFor: {
      "@type": "Organization",
      name: "Dhruv Akbari Portfolio",
    },
    image: "https://dhruvakbari.vercel.app/assets/og-image.jpg", // Ensure this exists
    description:
      "Dhruv Akbari is a full-stack web developer specializing in React, Next.js, Node.js, WordPress, Shopify, and modern web technologies.",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Sutex Bank College of Computer Applications and Science (VNSGU)",
        startDate: "2019",
        endDate: "2022",
        degree: "Bachelor of Computer Applications (BCA)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "JAIN (Deemed-to-be University)",
        startDate: "2022",
        endDate: "2024",
        degree: "Master's in Computer Applications (MCA)",
      },
    ],
    educationCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's Degree",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "VNSGU",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master's Degree",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "JAIN (Deemed-to-be University)",
        },
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Developer",
      startDate: "2021-07",
      endDate: "present",
      employer: [
        {
          "@type": "Organization",
          name: "Scion Infotech",
          startDate: "2021-07",
          endDate: "2022-07",
          jobTitle: "Web Developer",
        },
        {
          "@type": "Organization",
          name: "Jiya Web Solutions",
          startDate: "2022-08",
          endDate: "2022-09",
          jobTitle: "WordPress Developer",
        },
        {
          "@type": "Organization",
          name: "Upmetrics",
          startDate: "2022-09",
          endDate: "2024-03",
          jobTitle: "Web Developer",
        },
        {
          "@type": "Organization",
          name: "Sassy Infotech",
          startDate: "2023-12",
          endDate: "present",
          jobTitle: "WordPress & Shopify Developer",
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+91-8460621361", // Updated your contact number
      areaServed: "IN",
      availableLanguage: "English",
    },
  },
  // Portfolio Schema Markup
  portfolio: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Dhruv Akbari - Web Developer Portfolio",
    url: "https://dhruvakbari.vercel.app", // Portfolio URL
    description:
      "Explore the portfolio of Dhruv Akbari, showcasing innovative web development projects, including full-stack applications, e-commerce platforms, and UI/UX design solutions.",
    creator: {
      "@type": "Person",
      name: "Dhruv Akbari",
    },
    genre: "Web Development, Full-Stack, E-commerce, UI/UX",
    license: "https://www.dhruvakbari.com/license", // Add your license URL if available
    image: "https://dhruvakbari.vercel.app/assets/portfolio-thumbnail.jpg", // Ensure this exists
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnects for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="M71tdDiU-O499RIu-uqiDLBLkJAVh67t9e107tz2UVk"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
