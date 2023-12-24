import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AsideBar from '@/components/layouts/AsideBar'
import HeroContainer from '@/components/layouts/HeroContainer'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Info',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AsideBar />
        <HeroContainer>{children}</HeroContainer>
      </body>
    </html>
  )
}
