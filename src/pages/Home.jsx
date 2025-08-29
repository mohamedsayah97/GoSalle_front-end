import React from 'react'
import Hero from './page1/hero/Hero'
import Navbar from './page1/navbar/Navbar'
import Lieu from './page1/lieu/Lieu'
import Partenair from './page1/partenaires/Partenair'
import Footer from './page1/footer/Footer'
import Copyright from '../components/copyright/Copyright'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Lieu />
      <Partenair />
      <Footer />
      <Copyright />

    </>
  )
}

export default Home
