export async function getServerSiteProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: {
            users: data
        }
    }
}


export default function Page({params: {users}}){
    
    return(
    <>
        <h1>SSR apge</h1>

        {users.Map((user) => {
            return(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                </div>
            )
        })}
        </>
    )
}
// ssr da eror berdi 13 dan pas ekan yozganim 