import './globals.scss'
import { Raleway } from 'next/font/google'
import { META } from '@epoxide/web-constants'
import type { Metadata } from 'next'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(META.URL),
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    url: META.URL,
    locale: META.LOCALE,
    type: 'website',
    images: META.OG_IMAGE,
  },
  title: META.TITLE,
  description: META.DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
