import prisma from '../lib/prismadb'
export default async function getBlogs(){
    try {
        const blogs = await prisma?.blog.findMany({
            orderBy: {
                createdAt: 'desc'

            }

        })
        
    } catch (error:any) {
        
    }
}