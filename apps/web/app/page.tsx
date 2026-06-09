
import { client } from '@repo/db/client'

export default async function Home() {

  const user = await client.users.findFirst()

  return (
    <div> 
      {user?.name},
      {user?.password}
    </div>
  )
}