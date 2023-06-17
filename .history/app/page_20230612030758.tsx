import getBlogs from "@/content/getDetails"
import { getUser } from "@/content/getUser"


export default async function Home() {
  const newUser = await getUser()
  const blogs = await getBlogs()
  return (
    <main className="bg-red-700">
      <div>
        {blogs?.map((item) => (
          <div>{item.description}</div>
          
        ))}
      </div>
      
    </main>
  )
}
