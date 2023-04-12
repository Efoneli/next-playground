function UserList() {
    return <h1>List of users</h1>
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const data = await response.json()
    return (
 
    console.log(data)
    )
}