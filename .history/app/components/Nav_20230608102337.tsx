import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div>
        <div>
            <h1>Cake Bloge</h1>

        <div>
            <Link href={'/register'}>
                <p>Register</p>
            </Link>
            <Link href={'/login'}>
                <p>Login</p>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Nav