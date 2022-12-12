const fetchProduct = ({ name }) => {
  return fetch('https://fakestoreapi.com/products/7').then(res => res.json())
}

export default async function Page({params}) {

  const product = await fetchProduct(params.name.replace(/%20/g, " "))

  return (
    <>
    {JSON.stringify(product)}
    </>
  )
}