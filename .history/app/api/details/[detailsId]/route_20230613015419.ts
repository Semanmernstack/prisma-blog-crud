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

export async function PUT(request:Request, { params}: {params:IParams}) {
    
    const newUser = await getUser()
    const m = await request.json()
    const currentUser = await getUser()

    const {detailsId} = params

    const detailUpdate = await prisma.blog.update({
        where: {
            id:detailsId
            
        },
        data: m
    })
    return NextResponse.json(detailUpdate)


}