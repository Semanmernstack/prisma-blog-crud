"use client"
import { Blog } from '@prisma/client'
import React, { useState } from 'react'
import InputData from '../components/InputData'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import ImageUpload from '../components/ImageUpload'

interface InitalStateProps {
    name?:string,
    imageSrc:string
    description:string
}   

const initialState:InitalStateProps = {
    name:'',
    imageSrc:'',
    description:''
}




function page() {

    const [state,setState] = useState(initialState)
    const router = useRouter()
    const handleChange = (event:any) => {
        setState({ ...state, [event.target.name]: event.target.value }); 
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        axios.post("/api/details", state)
        .then(() => {
            router.push('/')
        })


        
    }

    const setCustomValue = (id:any, value:any) => {
        setState((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      };
    
      const imageSrc = state.imageSrc;

  return (

    <div className='p-3'   >
         <form onSubmit={onSubmit} className='   lg:md-w-5xl max-w-md mx-auto '>


            <div className="bg-zinc-900 text-white">
               <ImageUpload  value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc',value)}     />
            </div>

            <div  className='flex flex-col w-full justify-center items-center mt-2 p-2 gap-2'>
                <InputData placeholder='Blog header' id='name' type='text' value={state.name} name='name' onChange={handleChange}/>
                <InputData  big placeholder='Blog content or description' id='description' type='text' value={state.description} name='description' onChange={handleChange}/>
            
                <div>
                    <button className="cursor-pointer animate-pulse" type='submit'>Submit</button>

                </div>
            
            </div>

        </form>
    </div>
   


    
  )
}

export default page