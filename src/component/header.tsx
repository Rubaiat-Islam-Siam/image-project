import React from 'react'
import { SearchIcon } from './icon'

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-2.5">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 pr-10 bg-slate-200 border-2 border-slate-100 focus:outline-none text-slate-500 rounded-lg"
        />

        <button className="absolute -right-23 top-1/2 -translate-y-1/2 text-slate-500">
          <SearchIcon />
        </button>
      </div>
      <button className='px-8 bg-slate-800 text-white text-base font-bold py-3 rounded-xl hover:bg-slate-700 active:translate-y-0.5'>UPLOAD</button>
    </div>
  )
}

export default Header
