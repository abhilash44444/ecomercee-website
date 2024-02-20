import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-4 align-middle border-x-2'>
           <span className=' px-1 py-1 font-bold text-xl  text-blue-500'>LOGO</span>

           <div className='flex gap-6 align-middle font-semibold  text-blue-500'>
             <Link className='px-1 py-1 hover:text-red-700' to='/'>Home</Link>
             <Link className='px-1 py-1  hover:text-red-700' to='/cart'>Cart</Link>
             <span className='border-2 border-blue-400 bg-green-600 text-white px-1 py-1 rounded-md'>Cart items:0</span>
           </div>
    </div>
  )
}

export default Navbar