import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import { Projacts } from '../components/Projacts'
import { Testimonials } from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <About/>
      <Projacts/> 
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Home
