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
  title: "Dhruv Akbari - Web Developer | Portfolio Coming Soon",
  description:
    "Dhruv Akbari - Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Portfolio website launching soon with innovative projects and solutions.",
  keywords:
    "Dhruv Akbari, web developer, Wordpress developer, shopify developer, full-stack developer, React developer, Next.js, JavaScript, TypeScript, Node.js, MongoDB, portfolio, web development",
  authors: [{ name: "Dhruv Akbari" }],
  creator: "Dhruv Akbari",
  publisher: "Dhruv Akbari",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dhruv Akbari Web Developer",
    description:
      "Experienced web developer specializing in modern web technologies. Portfolio launching soon.",
    siteName: "Dhruv Akbari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Akbari - Full-Stack Web Developer",
    description:
      "Experienced full-stack web developer specializing in modern web technologies. Portfolio launching soon.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0c0c0c"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="M71tdDiU-O499RIu-uqiDLBLkJAVh67t9e107tz2UVk" />
        <script type="text/javascript">
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sq69d2011p");
      </script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
