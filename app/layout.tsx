import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MG Legals',
  description: 'Proffesional Law Firm in Delhi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
