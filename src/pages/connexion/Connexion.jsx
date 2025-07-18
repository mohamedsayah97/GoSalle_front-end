import { Link } from "react-router"
import Mail from "../../components/zone-text/Mail"
import "./Connexion.scss"

const Connexion = () => {
  return (
    <div id="login-container">
      <div className="connexion-container">
     <Mail 
     labelText="E-mail" 
     type="mail" 
     name="mail" 
     holderValue="saisie votre e-mail"
      />
     <Mail 
     labelText="Mot de passe" 
     type="password" 
     name="password" 
     holderValue="saisie votre Mot de passe"
     />
     <button className="btn-connexion">Connecter</button>
     <p className="ligne">Pas de compte ? <Link>rejoignez-nous</Link></p>
    </div>
    </div>
  )
}

export default Connexion
