import { useRouter } from 'next/router'

function GoodsId() {
    const router = useRouter()
    const goodId = router.query.goodsId

    return <h1>items here {goodId} </h1>
}

export default GoodsId