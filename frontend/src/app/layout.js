import Header from '@/components/header'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'

const nunito = Nunito({subsets: ['latin']})

export const metadata = {
  title: 'Home',
  description: 'It is home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-100`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
