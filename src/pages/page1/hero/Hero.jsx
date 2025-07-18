import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div id='hero'>
      <div className='hero-section'>
        <p>Trouver et Réserver</p>
        <h1>Votre Salle de réunion</h1>
        <h1>Salle de conférence ou</h1>
        <h1>encore salle des fetes</h1><br />

        <p>Maniére moderne pour gérer les salles</p>
        <button className='btn'>En savoir plus</button>
      </div>
    </div>
  )
}

export default Hero
