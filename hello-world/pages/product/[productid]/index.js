import { useRouter } from 'next/router'

function prodctDetails() {
    const router = useRouter()
    const {productId} = router.query.productId
    return (
    <h1>Details about the product {productId}</h1>
    )
}

export default prodctDetails