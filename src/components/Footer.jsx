import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='hidden lg:block w-screen text-center bg-neutral-600 bg-opacity-35 fixed bottom-0  py-2'>
        
        <div className='flex items-center justify-center gap-4 '>
          <Link className='text-neutral-400' to="/" >About</Link>
          <Link className='text-neutral-400' to="/">Contact</Link>
        </div>
        <div className="flex items-center justify-center gap-1">
        <p className='text-sm '>Created With </p>
        <FaHeart className='text-red-500' />
        <p> By M.Massum</p>
        </div>
    </footer>
  )
}

export default Footer