import { Blog, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface Props {
    key: string
    data: Blog | null
    newUser: User | null
    
}



function BlogMap({key, data, newUser}:Props) {
  return (
    <div>
        <div>
            <Image className="w-[430px] object-contain" src={data?.imageSrc} alt="blog image" height={300}/>
        </div>
    </div>
  )
}

export default BlogMap