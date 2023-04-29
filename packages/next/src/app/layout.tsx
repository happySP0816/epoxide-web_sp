import './globals.scss'
import { Raleway } from 'next/font/google'
import { META } from '@epoxide/web-constants'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
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
