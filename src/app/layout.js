// Di dalam src/app/layout.js

import './globals.css'
// Import font di sini agar global
import { Orbitron, Share_Tech_Mono } from 'next/font/google'

// Setup font config
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'S.I.G.M.A - IoT Bel Sekolah',
  description: 'Sistem IoT Genta Mandiri Akurat KKN Tematik 56 ITERA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${orbitron.variable} ${shareTechMono.variable}`}>
      <body className="bg-[#050a14] text-white antialiased selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  )
}