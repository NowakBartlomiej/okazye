import './globals.css'
import { Nunito } from 'next/font/google'
import Providers from '@/providers/providers'
import Navigation from '@/components/navigation'



const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'It is home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen bg-gray-100'>
      <body className={`${nunito.className} `}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
