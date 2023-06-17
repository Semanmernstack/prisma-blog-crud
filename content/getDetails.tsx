import prisma from '../lib/prismadb'
export default async function getBlogs(){
    try {
        const blogs = await prisma?.blog.findMany({
            orderBy: {
                createdAt: 'desc'

            }

        })

        const listBlogs = blogs.map((listing) => ({
            ...listing,
            


        }))
        return listBlogs
        
    } catch (error:any) {
        
    }
}