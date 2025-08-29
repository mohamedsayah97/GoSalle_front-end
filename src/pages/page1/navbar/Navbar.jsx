import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div id='navbar'>
        <div className='logo'>
          <h1><span>GoSalle</span>App</h1>
        </div> 
      <div className='nav-links-container'>
        <ul className='nav-links'>
            <li><Link to='/'>Acceuil</Link></li>
            <li><Link to='/'>Nos Clients</Link></li>
            <li><Link to='/'>Contact</Link></li>
            <li><Link to='/'>Prestataire</Link></li>
        </ul>
       </div>  
        <div className='nav-btns'>
          <Link to='/inscription' className='btn-ins'>s'inscrire</Link>
          <Link to='/connexion' className='btn-cnx'>connexion</Link>  
        </div> 
    </div>
  )
}

export default Navbar
