import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Le Hoai Linh | Full-stack Developer',
  description: 'Full-stack Developer with 4+ years of experience across healthcare, education, e-commerce, media, and IoT.',
  keywords: ['Full-stack Developer', 'React', 'Next.js', 'Node.js', 'NestJS', 'Laravel', 'Go', 'Portfolio'],
  authors: [{ name: 'Le Hoai Linh', url: 'https://github.com/linh2206' }],
  icons: { icon: '/portfolio/icon.svg' },
  openGraph: {
    title: 'Le Hoai Linh | Full-stack Developer',
    description: 'Full-stack Developer with 4+ years of experience building scalable systems.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
