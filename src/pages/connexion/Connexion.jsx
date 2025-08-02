import { Link } from "react-router"
import Mail from "../../components/zone-text/Mail"
import "./Connexion.scss"
import { useState } from "react"
import { Instance } from "../../config/axios"

const Connexion = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    Instance.post("/clients/login", {email, password})
      .then((response) => {
        console.log("Connexion réussie", response.data)
        alert("Connexion réussie, bienvenue !")
        window.location.href = "/" // Rediriger vers la page d'accueil après la connexion réussie
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion", error.response)
        alert("Erreur lors de la connexion, veuillez vérifier vos identifiants.")
      })



  }
  return (
    <div id="login-container">
      <form onSubmit={handleSubmit}>
      <div className="connexion-container">
     <Mail 
     labelText="E-mail" 
     type="mail" 
     name="email" 
     value={email}
     holderValue="saisie votre e-mail"
     onChange={(e) => setEmail(e.target.value)}
      />
     <Mail 
     labelText="Mot de passe" 
     type="password" 
     name="password" 
     value={password}
     holderValue="saisie votre Mot de passe"
     onChange={(e) => setPassword(e.target.value)}
     />
     <button className="btn-connexion">Connecter</button>
     <p className="ligne">Pas de compte ? <Link>rejoignez-nous</Link></p>
    </div>
    </form>
    </div>
  )
}

export default Connexion
