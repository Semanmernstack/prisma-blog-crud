import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getUser() {
    const session = await getServerSession(authOptions)

    try {
        if(!session?.user?.email) {
            return null;
        }

        const newUser = await prisma?.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })


        if (!newUser) {
            return null;
        }


        return {
            ...newUser,
            
          };
    } catch (error:any) {
        return null;
        
    }
}