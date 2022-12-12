import "@styles/globals.css"
import Navbar from "@components/Navbar"
import { CartProvider } from "@context/CartContext"
import Footer from "@components/Footer"

export default function RootLayout({ children }) {
  return (
  <html>
    <head/>
    <body>
      <CartProvider>
        <Navbar />
        {children}
        <Footer />
      </CartProvider>
    </body>
  </html>
  )
}