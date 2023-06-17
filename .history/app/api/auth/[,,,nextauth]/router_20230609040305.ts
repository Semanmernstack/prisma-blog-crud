import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";



export const nextAuthOptions: NextAuthOptions = {

    adapter: PrismaAdapte(cli)
    providers: [
      Credentials({
        name: "credentials",
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "jsmith@gmail.com",
          },
          password: { label: "Password", type: "password" },
        },
        authorize: async (credentials, request) => {
          // login logic goes here
        },
      }),
    ],
    // ...
  };