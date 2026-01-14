"use client"

import React from 'react'
import Card from './card'
import { data } from '@/src/lib/db'
import { useSearchParams } from 'next/navigation'

const Index = () => {
    const Params = useSearchParams();
    const category = Params.get("category");
    const search = Params.get("search")

    const image = data.filter((item)=>
    (search
        ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        : true 
    ) && (category? item.category === category : true)
    );

  return (
    <div className='mt-10 grid grid-cols-3 gap-2.5'>
        {
            image.length > 0? (
                image.map((item)=>  <Card key={item.id} {...item}/>)
            ) : (
                <h2 className='text-slate-400 font-bold text-center col-span-3 text-3xl pt-5'>Data Not Found</h2>
            )
        }
    </div>
  )
}

export default Index
