import { useRouter } from 'next/router'

const ProductDetails = () => {
    const router = useRouter()
    console.log(router, 'this is the router')
    const productId = router.query.productId
    console.log(productId, 'thisis product id')
  return (
    <div>
        <h1>Details about the product {productId}</h1>
    </div>
  )
}

export default ProductDetails