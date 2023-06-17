import { getUser } from "@/content/getUser"
import prisma from '../../../../lib/prismadb'
import { NextResponse } from "next/server"

interface IParams {
    detailsId?:string
}



export async function DELETE(request:Request, { params}: {params:IParams}) {
    const newUser = await getUser()

    const {detailsId} = params

    const detailDelete = await prisma.blog.deleteMany({
        where: {
            id:detailsId,
            userId:newUser?.id
        }
    })
    return NextResponse.json(detailDelete)


}