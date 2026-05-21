import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SlidesEasy — Custom Presentation Templates for Your Brand',
    template: '%s | SlidesEasy',
  },
  description:
    'Custom-designed presentation templates built around your brand guidelines. We design in PowerPoint, Google Slides, Keynote, Canva & Figma. AI-powered branded slides.',
  keywords: [
    'presentation templates',
    'PowerPoint templates',
    'Google Slides templates',
    'Keynote templates',
    'branded presentation design',
    'custom slide templates',
    'brand presentation',
  ],
  openGraph: {
    type: 'website',
    title: 'SlidesEasy — Custom Presentation Templates for Your Brand',
    description:
      'Custom presentation templates built around your brand guidelines. Designed in PowerPoint, Google Slides, Keynote, Canva & Figma.',
    siteName: 'SlidesEasy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlidesEasy — Custom Presentation Templates for Your Brand',
    description:
      'Custom presentation templates built around your brand guidelines.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
