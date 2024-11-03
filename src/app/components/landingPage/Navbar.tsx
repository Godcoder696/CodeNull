import Image from 'next/image'
import React from 'react'
import SignInButton from './SignInButton'

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
        <SignInButton/>
      </div>
    </>
  )
}

export default Navbar
