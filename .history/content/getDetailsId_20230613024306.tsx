import prisma from '../lib/prismadb'


interface Props {
    detailsId:  string
}

export default async function getDetailsId (params: Props) {
    try {
        const detailsId = params.detailsId
        const m = await prisma.blog.findUnique({
            where: {
                id: detailsId
            },

            include: {
                user: true
            }
        })

        if(!m) {
            return null
        }
        return {
            ...m,
            user: {
                ...m.user
            }
        }
    } catch (error: any) {
        
    }

}