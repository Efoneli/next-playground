import Link from 'next/link'
function Product( {productId = 100} ) {
  return (
    <>
      <Link href='/'>
        <p>Home</p>
      </Link>
        
        <li>

          <Link href='/product/1'>
            product 1
          </Link>
          </li>
        <li>product 2</li>
        <li>product 3</li>
        <Link href={`/product/${productId}`}>
            product {productId}
          </Link>
    </>
  )
}

export default Product