"use client"
import React, { useState } from 'react'
import InputData from '../components/InputData'
import Link from 'next/link'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import axios from 'axios'

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

        axios.post("/api/register", state) 
        .then(() => {
            router.refresh()
        })
        .then(() => {
            router.push("/login")
        })
        .catch((err:any) => {

        })
        

    }
   


  return (
    <div>
        <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
            <InputData placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name}/>
            <InputData placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email}/>
            <InputData placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password}/>
            
            <button type='submit'>Submit</button>
            </div>

            <div>
            <div>Do you have an account ? <Link href='/login'>Sign in</Link></div>
            </div>
        </form>
    </div>
  )
}

export default page