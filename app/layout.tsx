import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Karthik Talam — Full Stack Engineer',
  description:
    "I'm a Full Stack Engineer with 7+ years of shipping products that move the needle. I specialize in React, Next.js, and Node.js — turning complex problems into elegant, fast, and delightful digital experiences.",
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Lead Engineer'],
  authors: [{ name: 'Karthik Talam', url: 'https://github.com/karthik-js' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Karthik Talam — Full Stack Engineer',
    description:
      'Building fast, scalable web products that users love — from pixel-perfect UIs to robust backend systems.',
    siteName: 'Karthik Talam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthik Talam — Full Stack Engineer',
    description:
      'Building fast, scalable web products that users love — from pixel-perfect UIs to robust backend systems.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
