import './globals.scss'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'epoxide',
  description: 'Library and landing page for epoxide.',
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
