import type { Metadata } from 'next'
import './globals.scss'

import Navbar from './components/navbar'

import { IBMPlexSans, LibreBaskerville } from './fonts/fonts'

export const metadata: Metadata = {
  title: '@Bavuett',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={IBMPlexSans.variable + " " + LibreBaskerville.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
