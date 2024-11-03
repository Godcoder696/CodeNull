'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

function SignInButton() {
  const {data: session}= useSession();
  if(session && session.user){
    return (
      <>
        <button className='bg-white text-[#7551dc] px-4 py-1 rounded-2xl shadow-md hover:shadow-none'>
          {session.user.name}
        </button>  
      </>
    )
  }
  return (
    <>
      <button 
        onClick={async ()=>{
          await signIn()
        }}
        className='bg-white text-[#7551dc] px-4 py-1 rounded-2xl shadow-md hover:shadow-none'>
        Login
      </button>  
    </>
  )
}

export default SignInButton
