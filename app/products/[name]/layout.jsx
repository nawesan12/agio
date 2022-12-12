export default function Layout({ children, params }) {
  return (
    <>
    <h2>{params.name.replace(/%20/g, " ")}</h2>
    {children}
    </>
  )
}