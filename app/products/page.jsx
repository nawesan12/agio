import Image from "next/image"

const fetchProducts = async () => {
  const products = await fetch('https://fakestoreapi.com/products')
  const data = await products.json()
  return data
}

export default async function Page() {
  const products = await fetchProducts()
  console.log(products)

  return (
    <>
    <h2>Productos</h2>
    <section style={{width: "min(100vw, 1000px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gridAutoRows: "repeat(auto-fit, minmax(200px, 1fr))", marginInline:"auto", gap: "2rem"}}>
    {products.map((e, index) => (
      <article key={index}>
        <Image src={e.image} alt="" width={200} height={200}/>
        <h4>{e.title}</h4>
        <p>US$ {e.price}</p>
        <span>{`★`.repeat(Math.ceil(e.rating.rate))}</span>
      </article>
    ))}
    </section>
    </>
  )
}