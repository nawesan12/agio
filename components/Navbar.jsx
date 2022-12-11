"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <>
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>

    <style jsx>{`
      nav a {
        font-weight: 500;
      }  

      nav {
        display:flex;
        gap: 2rem;
      }
    `}</style>
    </>
  )
}