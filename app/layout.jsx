import Navbar from "@components/Navbar"
import "@styles/globals.css"

export default function RootLayout({ children }) {
  return (
  <html>
    <head/>
    <body>
      <Navbar />
      {children}
      <footer style={{display:"grid", placeItems:"center", color: "white", background:"black", paddingBlock: "2rem"}}>
        <p>Powered by <b><a href="https://agustinlopezdev.com" target="_blank" rel="noreferrer">Agustin Lopez</a></b> & <b><a href="https://nsantillan.tech" target="_blank" rel="noreferrer">Nahuel Santillan</a></b> 🚀</p>
      </footer>
    </body>
  </html>
  )
}