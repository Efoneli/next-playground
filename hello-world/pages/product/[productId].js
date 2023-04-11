import { useRouter  }  from "next/router"
import { use } from "react"

function Id() {
    const router = useRouter
    const productId = router.query.productId
    return <h1>Details about product {productId}</h1>
}

export default Id