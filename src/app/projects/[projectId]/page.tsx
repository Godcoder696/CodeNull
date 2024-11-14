'use client'
import NavBar from '@/app/components/projects/NavBar'
import React, { useState } from 'react'
import { MdOutlineDesignServices } from "react-icons/md"
import { LuDatabase } from "react-icons/lu";
import { LuPlug } from "react-icons/lu";
import { CiDesktop } from "react-icons/ci";
import { BsTabletLandscape } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";

function Page({params}) {
  const [input, setInput]= useState('');
  return (
    <>
      <div className='flex flex-col h-screen w-full'>
        <NavBar project={params.projectId}/>
        <div className='h-full bg-gray-100 w-full flex'>
          <span className='h-full w-12 bg-white flex flex-col py-4 items-center space-y-7'>
            <MdOutlineDesignServices size={18} color='#7551dc'/>
            <LuDatabase size={18} color='black'/>
            <LuPlug size={18} color='black'/>
          </span>
          <div className='h-full w-full p-3'>
            <div className='h-full bg-white rounded-md p-1 flex space-x-1'>
              <div className='w-4/6 h-full flex flex-col space-y-2 p-1'>
                <div className='flex justify-between items-center px-1'>
                  <span className='text-gray-700 '>Preview</span>
                  <span className='space-x-3 flex'>
                    <CiDesktop size={22}/>
                    <BsTabletLandscape size={22}/>
                    <CiMobile1 size={22}/>
                  </span>
                </div>
                <iframe src="" id='output' className='h-full w-full border-2 border-gray-200 rounded-md'>
                  {input}
                </iframe>
              </div>
              <div className='bg-black w-2/6 h-full p-3 text-white'>
                <textarea className='h-full w-full bg-transparent p-1' value={input} onChange={(e)=>{
                  setInput(e.target.value);
                  const output: any= document.getElementById("output");
                  if(output) output.contentDocument.body.innerHTML= input;
                }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
