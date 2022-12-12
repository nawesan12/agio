"use client"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <>
    <header>
      <figure className="logo-container">
        <Image src="/favicon.ico" alt="" width={50} height={50}/>
      </figure>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>        
      </nav>

      <div className="cart">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </div>
    </header>

    <style jsx>{`
      header {
        display:flex;
        align-items:center;
        justify-content:space-around;
        height: 12vh;
        border: 2px solid black;
        width: min(100vw, 1200px);
        margin-inline: auto;
        border-top: none;
      }

      nav {
        display:flex;
        font-weight: 500;
      }

       nav ul {
        display:flex;
        align-items:center;
        gap: 2rem;
       }
    `}</style>
    </>
  )
}