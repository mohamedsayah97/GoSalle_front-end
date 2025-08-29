import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div id='header'>
      <div className='logo-item'>
        <h1><span>GoSalle</span>App</h1>
      </div>
      <div className='nav-links-container'>
        <ul className='nav-links'>
          <li><Link to='/'>Acceuil</Link></li>
          <li><Link to='/'>Liste des Salles</Link></li>
          <li><Link to='/'>Ajouter une Salle</Link></li>
        </ul>
      </div>
      {/* {
      <div className='btn-connexion'>
        <button>Déconnexion</button>
      </div>
 } */}
    </div>
  )
}

export default Header