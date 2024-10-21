import React from 'react'
import Navbar from './components/landingPage/Navbar'
import Hero from './components/landingPage/Hero'

function Home() {
  return (
    <div className='textured-bg h-screen w-full flex flex-col'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home