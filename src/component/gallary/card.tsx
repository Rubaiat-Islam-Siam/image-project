import React, { FC } from 'react'
import Image from 'next/image'
import { SaveIcon } from '../icon'
import { IImage } from '@/src/type'

const Card: FC<IImage> = (props) => {
    
   const {name,url,likes,share} = props || {}
  return (
    <figure className='relative w-fit  group overflow-hidden rounded'>
        <Image
        alt={name}
         src={url}
         width={400}
         height={400}
         className="w-full max-w-md group-hover:scale-105 transition-all duration-200"
          />
          <figcaption className='w-full absolute -bottom-20 left-0 p-3 bg-slate-900/30 text-white flex  gap-1.5 invisible group-hover:visible group-hover:bottom-0 transition-all duration-200 justify-between items-center'>
            <div className='space-y-2'>
                <p className='text-xl font-bold'>{name}</p>
                <p className='font-semibold'>{likes} Likes | {share} Share</p>
            </div>
            <button className='mr-0'>
                <SaveIcon/>
            </button>
          </figcaption>

    </figure>
  )
}

export default Card
