'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

function SignInButton() {
  const {data: session}= useSession();
  if(session && session.user){
    return (
      <>
        <div className='flex space-x-2'>
          <Link href="/projects">
            <button
              className='bg-white text-[#7551dc] px-4 py-1 rounded-2xl shadow-md hover:shadow-none'
            >
              Projects
            </button> 
          </Link> 
          <button 
            className='bg-white text-[#7551dc] px-4 py-1 rounded-2xl shadow-md hover:shadow-none'
            onClick={()=>{signOut()}}
            >
            Sign Out
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      <button 
        onClick={async ()=>{
          await signIn()
        }}
        className='bg-[#7551dc] text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 duration-200'>
        Login
      </button>  
    </>
  )
}

export default SignInButton
