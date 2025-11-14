import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Path to $1 Million - Wealth Building Strategies',
  description: 'Comprehensive guide to building wealth through entrepreneurship, investing, and strategic financial planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
