import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className='flex flex-col md:flex-row items-center justify-between px-10 py-4  border-gray-300 text-slate-700 '>
      
      <h1 className='text-lg font-medium mb-2 md:mb-0 text-slate-600'>
        Connect with me
      </h1>

      <div className='flex gap-6 text-2xl'>
        
        <Link 
          href="https://www.linkedin.com/in/muntazir-mehdi-5aa2462ba/"
          target='_blank'
          className='hover:text-blue-700 transition'
        >
          <FaLinkedin />
        </Link>

        
        <Link 
          href="mailto:muntazir3637@gmail.com"
          target='_blank'
          className='hover:text-red-500 transition'
        >
          <IoMdMail />
        </Link>
      </div>

    </footer>
  )
}

export default Footer
