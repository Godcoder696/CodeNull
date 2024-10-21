import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <>
      <div className='h-10 flex justify-around items-center py-7 '>
        <span className='flex space-x-1 items-center'>
          <Image src="/CodeNull.png" height={40} width={40} alt=''/>
          <span className='font-bold'>Code Null</span>
        </span>
        <span className='space-x-10'>
          <span>features</span>
          <span>about</span>
          <span>pricing</span>
          <span>integrations</span>
        </span>
        <button className='bg-white text-[#7551dc] px-4 py-1 rounded-2xl shadow-md hover:shadow-none'>
          Login
        </button>
      </div>
    </>
  )
}

export default Navbar
