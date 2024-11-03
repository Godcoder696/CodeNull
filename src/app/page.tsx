import React from 'react'
import Navbar from './components/landingPage/Navbar'
import Hero from './components/landingPage/Hero'
import Features from './components/landingPage/Features'

function Home() {
  return (
    <div className='textured-bg min-h-screen w-full flex flex-col'>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  )
}

export default Home