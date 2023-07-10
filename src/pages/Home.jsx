import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Servicios from '../components/Servicios/Servicios'
import Pricing from '../components/Pricing/Pricing'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import FotosBanner from '../components/FotosBanner/FotosBanner'


function Home() {
  return (
    <div>
        <NavBar/>
        <Banner />
        <FotosBanner />
        <About />
        <Servicios />
        <Pricing />
        <Contact />
      
    </div>
  )
}

export default Home