import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'selfoder',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        
      </body>
    </html>
  )
}
