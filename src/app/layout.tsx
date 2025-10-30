import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local"
import { Navbar } from "@/components/shared/Navbar"
import Footer2 from "@/components/shared/Footer2"

// 🔤 Fuente principal (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSerif = localFont({
  src: "../../public/fonts/source-serif-pro.semibold.otf",
  variable: "--font-source-serif",
  weight: "600",
  display: "swap",
});

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
    <html lang="en" className="white">
      <body
        className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased text-white`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer2 />
      </body>
    </html>
  )
}