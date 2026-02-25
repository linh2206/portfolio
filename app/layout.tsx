import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Resume - Le Hoai Linh - Full-stack Developer',
  description: 'Full-stack Developer with 3+ years of experience across healthcare, education, e-commerce, and IoT. Node.js, Laravel, React.js, NestJS, Next.js.',
  keywords: ['Full-stack Developer', 'React', 'Next.js', 'Node.js', 'NestJS', 'Laravel', 'Portfolio'],
  authors: [{ name: 'LE HOAI LINH', url: 'https://github.com/linh2206' }],
  openGraph: {
    title: 'Le Hoai Linh | Full-stack Developer',
    description: 'Full-stack Developer with 3+ years of experience building scalable systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
