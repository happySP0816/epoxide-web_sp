import 'src/styles/globals.scss'
import { Raleway } from 'next/font/google'
import { META } from '@epoxide/web-constants'
import type { Metadata, Viewport } from 'next'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: META.TITLE,
  description: META.DESCRIPTION,
  metadataBase: new URL(META.URL),
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    url: META.URL,
    locale: META.LOCALE,
    type: META.TYPE,
    images: META.OG_IMAGE,
  },
  twitter: {
    card: META.TWITTER_CARD,
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
  verification: {
    google: META.GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  colorScheme: META.COLOR_SCHEME,
  themeColor: META.THEME_COLOR,
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
