"use client"
import { Blog, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from '@/image'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { SafeBlog, SafeUser } from '@/Types/types'


interface Props {
    key: string
    data: SafeBlog
    newUser?: SafeUser | null  
    
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
    <div className=' flex flex-col lg:flex-row hover:scale-105 transition ease-in   shadow-2xl gap-2 space-y-3 mb-4 max-w-xl md:max-2xl: lg:max-w-5xl mx-auto text-white rounded-md bg-gray-950  p-4'>
        <div></div>
        <div className='flex flex-col lg:flex-row  gap-2' >
            <img src={data?.imageSrc} alt=" image"
                className="w-[350px] lg:w-[530px] mx-auto object-contain h-[350px] lg:h-[500px] shadow-lg"

             />
             <div className="lg:flex lg:flex-col">
            <div className=" items-center max-w-[300px] mx-auto  md:max-w-[300px] lg:max-w-xl p-2 gap-4 flex flex-col text-white ">
                <h1 className="text-xl text-center underline p-2 decoration-slate-50 md:text-2xl font-bold italic">{data?.name}</h1>
                <p className='text-xs font-serif md:text-lg'>{data?.description}</p>
            </div> 

            <div className='p-4 lg:text-lg'>
                {data?.userId === newUser?.id && (

                    <div className="flex items-center  justify-center gap-4 underline hover:animate-pulse text-white mt-2 hover:text-slate-500 cursor-pointer text-sm ">
                        <button  onClick={onDelete} className=" cursor-pointer " >Deletete </button>
                        <button onClick={() => router.push(`/details/${data.id}`)} className=" cursor-pointer " > Edit</button>

                    </div>

                )}

            </div>
            </div>
            
        </div>
        
       
    </div>
  )
}

export default BlogMap
