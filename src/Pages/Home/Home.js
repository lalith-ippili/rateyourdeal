import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import './Home.css'
import About from './Components/About'
import Faq from './Components/Faq'
import Services from './Components/Buying/Services'
import CallToActions from './Components/CallToActions'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home-total-div'>
      <Navbar />
      <Hero />
      <About heading="About Us"/>
      <Services />
      <CallToActions />
      <Faq />
      <Footer/>

    </div>
  )
}

export default Home
