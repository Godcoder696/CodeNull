import React from 'react'
import Navbar from './components/landingPage/Navbar'
import Hero from './components/landingPage/Hero'
import Faq from './components/landingPage/FAQ/Faq'
import Features from './components/landingPage/Features/Features'
import Footer from './components/landingPage/Footer'

function Home() {
  return (
    <div className='textured-bg min-h-screen w-full flex flex-col'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home