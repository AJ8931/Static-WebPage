import './globals.css'
import NavBar from './Header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from './Footer'
import { Roboto } from "@next/font/google";
config.autoAddCss = false

export const metadata = {
  title: 'Razer',
  description: 'Razer Landing Page Made by Anas Jahangir @Velopers  ',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '500', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <NavBar />
        {children}</body>
      <Footer />
    </html>
  )
}
