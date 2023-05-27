import './globals.scss'
import { Raleway } from 'next/font/google'
import { META } from '@epoxide/web-constants'
import type { Metadata } from 'next'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: META.TITLE,
  description: META.DESCRIPTION,
  themeColor: META.THEME,
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
  twitter: {
    card: 'summary_large_image',
    title: META.TITLE,
    description: META.DESCRIPTION,
    images: [META.TWITTER_IMAGE],
    creator: META.TWITTER_CREATOR,
    creatorId: META.TWITTER_CREATOR_ID,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
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
