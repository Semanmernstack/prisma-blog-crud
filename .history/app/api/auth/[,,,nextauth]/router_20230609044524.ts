import NextAuth, { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers";
import prisma from "../../../../lib/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from 'bcrypt'



export const nextAuthOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({     
              credentials: {
                email: {
                  label: "Email",
                  type: "email",
                },
                password: { label: "Password", type: "password" }
              },
              async authorize (credentials)  {

                if (!credentials?.email || !credentials.password) {
                    throw new Error("Ivalid")
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email:credentials.email
                    }
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error("Ivalid usere")
                }

                const isCorrct = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isCorrct) {
                    throw new Error('invalid password')
                }

                return user
                // login logic goes here
              }
            
            })
    ],
    pages: {
        signIn: "/"
    },
    debug process.env.Node_ENV === "development"
    // ...
};