"use client"

import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
interface Props {
    newUser: User | null
}



function Nav({ newUser }:Props) {
  return (
    <div className="flex items-center justify-between p-5 bg-amber-600 bg-gradient-to-tr bg-gradient-amber-300 bg-gradient-amber-900 shadow-lg      ">
        <div className="flex flex-col space-y-4">
            <h1 className="text-lg md:text-xl lg:text-2xl italic font-extrabold text-zinc-900">PemsBlog</h1>
            <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold">Welcome <span>{newUser?.name}</span></h1>
        </div>
        

        <div className="flex items-center space-x-3 p-2"> 
            <Link href={'/post'}>
                <p>Post</p>
            </Link>
            <Link href={'/login'}>
                <p>Login</p>
            </Link>
            {newUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}

        </div>
        
    </div>
  )
}

export default Nav