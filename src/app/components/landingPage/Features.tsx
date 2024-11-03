import React from 'react'
import Feature from './Feature'

function Features() {
  return (
    <>
        <div className='flex flex-col space-y-5'>
            <div className='text-center text-4xl'>
                Create Websites <br />In <span className='font-semibold'>Minutes</span>
            </div>
            <div className='flex flex-col px-28 py-6 space-y-4'>
                <Feature/>
            </div>
        </div> 
    </>
  )
}

export default Features
