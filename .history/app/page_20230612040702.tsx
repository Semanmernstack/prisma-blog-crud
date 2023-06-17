import getBlogs from "@/content/getDetails"
import { getUser } from "@/content/getUser"
import BlogMap from "./components/BlogMap"


export default async function Home() {
  const newUser = await getUser()
  const blogs = await getBlogs()
  return (
    <main className="flex flex-col items-center bg-gray-950 justify-center max-w-7xl mx-auto p-24 gap-4">
      <div>
        {blogs?.map((item) => (
         <BlogMap
          key={item.id}
          data={item}
          newUser={newUser}
         />
          
        ))}
      </div>
      
    </main>
  )
}
