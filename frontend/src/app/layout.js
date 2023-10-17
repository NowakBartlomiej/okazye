import './globals.css'
import Header from '@/components/header'
import { Nunito } from 'next/font/google'
import Providers from '@/providers/providers'

const nunito = Nunito({subsets: ['latin']})

export const metadata = {
  title: 'Home',
  description: 'It is home page',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${nunito.className} h-screen bg-gray-100`}>
          <Providers>
            <Header />
            {children}
          </Providers> 
        </body>
      </html>
  )
}
