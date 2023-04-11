import { useRouter } from 'next/router'

function prodctDetails() {
    const router = useRouter()
    const product = router.query.productId
    return (
    <h1>Details about the product {product}</h1>
    )
}

export default prodctDetails