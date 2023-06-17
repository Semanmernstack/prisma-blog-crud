"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import InputData from '../components/InputData'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import {signIn} from 'next-auth/react'

interface InitialStateProps {
    name:string,
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    name:'',
    email:'',
    password:''
}

function page() {
    const router = useRouter()
    const [state,setState] = useState(initialState)

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        signIn('credentials', {
            ...state,
            redirect:false,
         })
         .then((callback) => {
    
            if(callback?.ok) {
                router.refresh()
            }
    
            if(callback?.error) {
                throw new Error('Wrong Credentials')
            }
         })
         router.push('/')
        
    }

  return (
    <div>
         <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
                <InputData placeholder='Email' id='email' type="email" name='email' onChange={handleChange} value={state.email}/>
                <InputData placeholder='Password' id='password' type="password" name='password' onChange={handleChange} value={state.password}/>
                <button type='submit'>Submit</button>
                </div>

                <div>
                <div>Haven't got an account ? <Link href='/register'>Sign up</Link></div>
            </div>
        </form>
    </div>
  )
    
 
}

export default page