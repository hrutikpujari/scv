import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "V3 SCV School Site",
  description: "V3 SCV School Site - Shankarroa Chavan Vidyalaya & Junior College",
  keywords: ["education", "school", "junior college", "SCV", "Shankarroa Chavan Vidyalaya"],
  authors: [{ name: "SCV" }],
  openGraph: {
    title: "V3 SCV School Site",
    description: "V3 SCV School Site - Shankarroa Chavan Vidyalaya & Junior College",
    url: "https://scv.org.in",
    siteName: "V3 SCV School Site",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V3 SCV School Site",
    description: "V3 SCV School Site - Shankarroa Chavan Vidyalaya & Junior College",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
