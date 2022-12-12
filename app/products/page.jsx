import ListOfProducts from "@components/ListOfProducts"

// const fetchProducts = async () => {
//   const products = await fetch('https://fakestoreapi.com/products')
//   const data = await products.json()
//   return data
// }

export default function Page() {
  // const products = await fetchProducts()

  return (
    <>
    <ListOfProducts />
    </>
  )
}