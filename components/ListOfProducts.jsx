import ProductCard from "./ProductCard"
import products from "../data.json"

export default function ListOfProducts() {
  return (
    <>
    <section style={{width: "min(100vw, 1200px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gridAutoRows: "repeat(auto-fit, minmax(200px, 1fr))", marginInline:"auto", gap: "5rem"}}>
    {
      products.map((e, index) => (
        <ProductCard 
          key={index} 
          id={e.id}
          image={e.image}
          title={e.title} 
          price={e.price}
          rating={Math.ceil(e.rating.rate)}
        />
      ))
    }
    </section>
    </>
  )
}