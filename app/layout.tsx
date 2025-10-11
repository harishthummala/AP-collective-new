import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import { Libre_Baskerville } from "next/font/google"
import { Overpass_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Anant Parinay Collective",
  description: "Luxury wedding film house",
  generator: "v0.app",
}

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-eb-garamond",
})
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
})
const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-overpass-mono",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${overpassMono.variable} ${ebGaramond.variable} antialiased`}
    >
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
