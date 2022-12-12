import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import GoToProductDetail from "./GoToProductDetails";

export default function ProductCard({ id, image, title, price, rating }) {
  return (
    <article style={{display:'flex', flexDirection:"column", justifyContent:"space-between", alignItems:"center", border:"1px solid #eee", borderRadius:".5rem", padding:"1rem"}}>
      <Image src={image} alt="" width={200} height={200} style={{objectFit:"contain", position:"relative", overflow:"hidden"}}/>
      <h4>{title}</h4>
      <p style={{display:'flex', justifyContent:"space-between", alignItems:"center", width:"100%-"}}><b>US$ {price}</b> <span style={{color:"#555"}}>{`★`.repeat(rating)}</span></p>

      <AddToCartButton id={id} image={image} title={title} price={price} />
      <GoToProductDetail name={title}/>
    </article>
  )
}