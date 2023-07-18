// API la bilan ishlash
//day 6 My written code worked 
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Page() {
  const data = await getData()
  return <main>
    <h1>Home PAge!!!</h1>

    {(
      <h3>{data.map(user =>(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <h6>{user.email}</h6>
        </div>
      )
      )}</h3>
    )}
  </main>
}