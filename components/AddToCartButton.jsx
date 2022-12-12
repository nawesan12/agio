"use client"
import { useContext } from "react"
import { CartContext } from "@context/CartContext"
export default function AddToCartButton({ id, title, image, price }) {

  const { cart } = useContext(CartContext)

  const addToCart = () => {
    const productAlreadyInCart = cart.products.find((product) => product.id === id)
    if(!productAlreadyInCart) {
      cart.products.push({id, price, name, title, quantity: 1})
      return
    }
    cart.products[cart.products.indexOf(productAlreadyInCart)].quantity += 1
    console.log(cart)
    return
  }

  return (
    <button onClick={addToCart} style={{background: "black", color: "white", fontSize: "1rem", fontWeight:"500", padding:".5rem 1.5rem", marginBlock:"1rem 0"}}>
      Add To Cart
    </button>
  )
}