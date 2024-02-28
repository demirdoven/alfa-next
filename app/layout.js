import { Roboto_Condensed } from 'next/font/google'
// import localFont from 'next/font/local'

import './globals.css'
import Header from '@/components/header/Header'
// import SiteFooter from '@/components/Footer/SiteFooter'
import { ThemeContextProvider } from '@/components/context/theme'
import { MiniCartContextProvider } from '@/components/context/miniCart'

// const lato = Lato({
//   weight: ['100', '300', '400', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lato',
// })
// const oswald = Oswald({
//   weight: ['200', '300', '400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-oswald',
// })
const robotoCondensed = Roboto_Condensed({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-robotoCondensed',
})


// const helvetica = localFont({
//   src: [
//     {
//       path: '../public/fonts/Helvetica_Black_Condensed_Oblique.otf',
//     }
//   ],
//   variable: '--font-helvetica'
// })



export const metadata = {
  title: 'ALFATIRES.COM | Best tires and rims for your car',
  description: 'Best tires and rims for your car',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
            <ThemeContextProvider>
              <MiniCartContextProvider>
                <Header />
                <main className="flex max-w-[100%] overflow-hidden min-h-screen flex-col items-center justify-between relative z-10">
                  {children}
                </main>
                
                {/* <SiteFooter />*/}
              
                
            </MiniCartContextProvider> 
          </ThemeContextProvider> 
      </body>
    </html>
  )
}
