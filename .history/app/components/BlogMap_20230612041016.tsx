"use client"
import { Blog, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from '@/image'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'


interface Props {
    key: string
    data: Blog | null
    newUser: User | null    
}



 



function BlogMap({key, data, newUser}:Props) {
    const router = useRouter()
  return (
    <div className='shadow-2xl'>
        <div className='flex flex-col lg:flex-row items-center gap-2' >
            <img src={data?.imageSrc} alt=" image"
                className="w-[430px] object-contain h-[430px] shadow-lg"

             />
            <div className="w-[500px] gap-4 flex flex-col ">
                <h1 className="text-xl text-center underline decoration-slate-50 md:text-2xl font-bold italic">{data?.name}</h1>
                <p>{data?.description}</p>
            </div> 
            
        </div>
        {data?.userId === newUser?.id && (

            <div className="flex items-center gap-4 mt-2">
                <button   >Deletete</button>
                <button > Edit</button>
            
            </div>

        )}
    </div>
  )
}

export default BlogMap