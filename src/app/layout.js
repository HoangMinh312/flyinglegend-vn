import './globals.css'
import { FontProvider } from './components/fontProvider'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Flying Legend Vietnam - Coming Soon',
  description: 'Flying Legend Vietnam - Under Construction',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/bank-gothic"
          rel="stylesheet"
        />
      </head>
      <body>
        <FontProvider>{children}</FontProvider>
        <Analytics />
      </body>
    </html>
  )
}

