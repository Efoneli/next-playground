// import { useRouter } from 'next/router'

function GoodsId( { users }) {
    // const router = useRouter()
    // const goodId = router.query.goodsId

    return 
        <>
            <h1>List of users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </>

    // <>
    // <h1>
    // {post.id} {post.title }
    // </h1>
    // <p>{post.body}</p>
    // </>
    // <h1>items here  </h1>
}

export default GoodsId

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data,
        }
    }
}