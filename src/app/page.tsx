import React from 'react'
import Navber from '../component/nav'
import Header from '../component/header'
import Index from '../component/gallary'

const Home = () => {
  return (
    <main className='flex justify-center items-center min-h-screen bg-sky-200 py-15'>
      <div className='w-full max-w-screen-xl mx-auto p-10 bg-slate-100 rounded-2xl shadow-lg'>
        <Navber/>
        <Header/>
        <Index/>
        {/* <h1 className='text-green-500 font-bold text-5xl'>HOME PAGE</h1> */}
    </div>
    </main>
    
  )
}

export default Home
