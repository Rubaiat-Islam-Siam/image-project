import React, { FC } from 'react'
import Image from 'next/image'
import { SaveIcon } from '../icon'
import { IImage } from '@/src/type'

const Card: FC<IImage> = (props) => {
    
   const {name,url,likes,share} = props || {}
  return (
    <figure className='relative w-fit group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-slate-200/20 bg-gradient-to-br from-slate-900/10 to-slate-800/10'>
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
        
        {/* Image with enhanced effects */}
        <div className="relative overflow-hidden rounded-2xl">
            <Image
                alt={name}
                src={url}
                width={400}
                height={400}
                className="w-full max-w-md group-hover:scale-110 transition-all duration-500 ease-out transform-gpu"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Stats badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-bold text-slate-800 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                {likes} Likes
            </span>
        </div>

        {/* Enhanced caption area */}
        <figcaption className='w-full absolute -bottom-24 left-0 p-5 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-slate-900/30 text-white flex gap-4 invisible group-hover:visible group-hover:bottom-0 transition-all duration-500 backdrop-blur-sm'>
            <div className='space-y-3 flex-1'>
                <p className='text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>{name}</p>
                <div className="flex items-center gap-4">
                    <p className='font-semibold flex items-center gap-2'>
                        <span className="flex items-center gap-1">
                            <span className="w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></span>
                            {likes} Likes
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="flex items-center gap-1">
                            <span className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                            {share} Share
                        </span>
                    </p>
                </div>
                {/* Progress bar for engagement */}
                <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-700"
                        style={{ width: `${Math.min((likes / 1000) * 100, 100)}%` }}
                    ></div>
                </div>
            </div>
            <button className='p-3 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl  hover:border-white/20 group/btn'>
                <SaveIcon className="w-6 h-6 text-white group-hover/btn:text-rose-400 transition-colors duration-300"/>
            </button>
        </figcaption>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500/50 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/50 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-2xl group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
    </figure>
  )
}

export default Card