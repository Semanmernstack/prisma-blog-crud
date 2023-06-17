"use client"
import { Blog, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from '@/image'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
import axios from 'axios'


interface Props {
    key: string
    data: Blog 
    newUser: User | null    
}



 



function BlogMap({key, data, newUser}:Props) {
    const router = useRouter()

    const onDelete = () => {
        axios.delete(`/api/details/${data.id}`)
        .then(() => {
            router.push('/')
          })
    }

    

  return (
    <div className='shadow-2xl gap-4 p-4'>
        <div className='flex flex-col lg:flex-row items-center gap-2' >
            <img src={data?.imageSrc} alt=" image"
                className="w-[430px] object-contain h-[430px] shadow-lg"

             />
            <div className="w-[500px] gap-4 flex flex-col text-white ">
                <h1 className="text-xl text-center underline p-2 decoration-slate-50 md:text-2xl font-bold italic">{data?.name}</h1>
                <p className=''>{data?.description}</p>
            </div> 
            
        </div>
        {data?.userId === newUser?.id && (

            <div className="flex items-center gap-4 text-white mt-2 hover:text-slate-500 ">
                <button  onClick={onDelete} className=" cursor-pointer text-lg" >Deletete </button>
                <button onClick={() => router.push(`/details/${data.id}`)} className=" cursor-pointer text-lg" > Edit</button>
            
            </div>

        )}
    </div>
  )
}

export default BlogMap