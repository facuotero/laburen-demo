import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// 🔤 Fuente principal (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LaburenAI",
  description: "Boost your business with AI Agents trained on your data.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-(--color-background-dark) text-white`}
      >
        {children}
      </body>
    </html>
  )
}