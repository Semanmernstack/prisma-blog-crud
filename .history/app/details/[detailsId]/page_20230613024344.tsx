"use client"
import ImageUpload from '@/app/components/ImageUpload'
import InputData from '@/app/components/InputData'
import { Blog, User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface InitalStateProps {
    name:string,
    description:string
    imageSrc:string
    
  }   
  
  
  const initialState:InitalStateProps = {
    name:'',
    description:'',
    imageSrc:''
  }

interface Props {
    user: User
    blog: Blog
    detailsId: string
}

function page({ user, blog, detailsId }:Props) {
    const router = useRouter()
    const [state,setState] = useState(initialState)
    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });

    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.put(`/api/details/${detailsId}`,state)
        .then(() => {
            router.refresh()
            // router.push('/')
            // reset()
        })

        .catch((err) => {
            throw new Error(err)
        })
        .finally(() => {
            router.push('/')
        })
    }

    const setCustomValue = (id:any, value:any) => {
        setState((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      };
  




  return (
    <div>
         <form onSubmit={onSubmit}>
      <div>
        <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc',value)}/>
      </div>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <InputData placeholder='Name' id="name" type='text' value={state.name} name='name' onChange={handleChange}/>
        <InputData placeholder='Description' id="description" type='text' value={state.description} name='description' onChange={handleChange}/>
        <div> 
        </div>
        <button type='submit'>Submit</button>
        </div>
        
    </form>
    </div>
  )
}

export default page