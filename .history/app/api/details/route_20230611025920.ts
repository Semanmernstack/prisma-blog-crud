import { getUser } from "@/content/getUser";
import prisma from '../../../lib/prismadb'
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const newUser = await getUser()
    if (!newUser) {
        return 
    }

    const { name, description, imageSrc } = await request.json()

    const every = await prisma.blog.create({
        data: {
            name: name,
            imageSrc: imageSrc,
            description: description,
            userId: newUser.id
           
        }
    })

    return NextResponse.json(every);
}