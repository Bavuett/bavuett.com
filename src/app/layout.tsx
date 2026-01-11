import type { Metadata } from 'next'
import './globals.scss'

import Navbar from './components/navbar'

import { Suse, SpaceGrotesk } from './fonts/fonts'
import Footer from './components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://bavuett.com'),
  title: {
    default: '@Bavuett',
    template: '%s — @Bavuett',
  },
  description: 'Il mio bizzarro flusso di coscienza. Creando, imparando, e rompendo cose. Lorenzo Barretta - Blog personale su tecnologia, programmazione e pensieri.',
  keywords: ['Lorenzo Barretta', 'Bavuett', 'Blog', 'Tecnologia', 'Programmazione', 'Scrittura', 'Informazione'],
  authors: [{ name: 'Lorenzo Barretta' }, { name: '@Bavuett' }],
  creator: 'Lorenzo Barretta',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://bavuett.com',
    title: '@Bavuett - Creando, imparando, e rompendo cose',
    description: 'Il mio bizzarro flusso di coscienza. Blog personale su tecnologia, programmazione e pensieri.',
    siteName: '@Bavuett',
  },
  twitter: {
    card: 'summary_large_image',
    title: '@Bavuett - Creando, imparando, e rompendo cose',
    description: 'Il mio bizzarro flusso di coscienza. Blog personale su tecnologia, programmazione e pensieri.',
    creator: '@Bavuett',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Suse.variable + " " + SpaceGrotesk.variable}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
