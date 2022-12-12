import Link from "next/link"

export default function GoToProductDetail({ name }) {
  return <Link href={`/products/${name}`}>Details</Link>
}