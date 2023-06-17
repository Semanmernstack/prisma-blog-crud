import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
interface Props {
    newUser: User | null
}



function Nav({ newUser }:Props) {
  return (
    <div className="flex items-center justify-between p-5 bg-amber-600 bg-gradient-to-tr bg-gradient-amber-300 bg-gradient-amber-900 shadow-lg      ">
        <div>
            <h1>Cake Bloge</h1>
        </div>
        <div>
            <h1>Welcome <span>{newUser?.name}</span></h1>
        </div>

        <div className="flex items-center space-x-3 p-2"> 
            <Link href={'/register'}>
                <p>Register</p>
            </Link>
            <Link href={'/login'}>
                <p>Login</p>
            </Link>
        </div>
        
    </div>
  )
}

export default Nav