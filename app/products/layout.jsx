export default function Layout({ children }) {
  return (
    <>
    <section style={{display:"flex", flexDirection:"column", alignItems: "center", marginBlock: "5vh"}}>
      {children}
    </section>
    <footer>Productos</footer>
    </>
  )
}