import { ThemeContextProvider } from '../contexts/Themecontext'
import Fotter from './components/foote/fotter'
import Navbar from './components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProviders from '../providers/ThemeProviders'
import AuthProviders from "../providers/AuthProviders"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders>

        <ThemeContextProvider>
          <ThemeProviders>


        <div className='container'>
          <div className='wrapper'>
            <Navbar/>
            {children}
            <Fotter/>
          </div>
        </div>
          </ThemeProviders>
        </ThemeContextProvider>
        </AuthProviders>
      </body>
    </html>
  )
}
