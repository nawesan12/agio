"use client"
import { createContext, useState, useMemo } from "react"

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    products: [],
    totalPrice: 0
  })
  const providerValue = useMemo(() => ({ cart, setCart }), [cart, setCart])

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  )
}