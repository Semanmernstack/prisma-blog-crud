import getBlogs from "@/content/getDetails"
import { getUser } from "@/content/getUser"
import BlogMap from "./components/BlogMap"


export default async function Home() {
  const newUser = await getUser()
  const blogs = await getBlogs()
  return (
    <main className="flex flex-col items-center underline bg-gray-950 text-white shadow-inner justify-center space-y-3 max-w-5xl rounded-md mx-auto p-6 gap-4">
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
