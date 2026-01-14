"use client"

import React from 'react'
import Card from './card'
import { data } from '@/src/lib/db'
import { useSearchParams } from 'next/navigation'

const Index = () => {
    const Params = useSearchParams();
    const category = Params.get("category");
    
    const image = data.filter((item)=> 
    category? item.category === category : item
);
  return (
    <div className='mt-10 grid grid-cols-3 gap-2.5'>
      {image.map((item) => (
        <Card key={item.id} {...item}/>
      ))} 
    </div>
  )
}

export default Index
