import { Link } from "react-router-dom";
import Mail from "../../components/zone-text/Mail";
import "./Inscription.scss";

const Inscription = () => {
  return (
    <div id="Inscription-container">
      <div className="ins-container">
        <Mail 
          labelText="Nom" 
          type="text" 
          name="Nom" 
          holderValue="saisie votre Nom"
        />
        <Mail 
          labelText="Prenom" 
          type="text" 
          name="Prenom" 
          holderValue="saisie votre Prenom"
        />
        <div>
          <label>Genre</label>
          <div>
            <input type="radio" id="homme" name="genre" value="homme" />
            <label htmlFor="homme">Homme</label>
            <input type="radio" id="femme" name="genre" value="femme" />
            <label htmlFor="femme">Femme</label>
          </div>
        </div>
        <Mail 
          labelText="E-mail" 
          type="email" 
          name="mail" 
          holderValue="saisie votre e-mail"
        />
        <Mail 
          labelText="Mot de passe" 
          type="password" 
          name="password" 
          holderValue="saisie votre Mot de passe"
        />
        <Mail 
          labelText="Mot de passe" 
          type="password" 
          name="password" 
          holderValue="Répéter votre Mot de passe"
        />
        <div>
          <label>Ville</label>
          <select name="ville" defaultValue="Choisir une ville">
            <option value="Choisir une ville" disabled>Choisir une ville</option>
            <option value="Sousse">Sousse</option>
            <option value="Tunis">Tunis</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Sfax">Sfax</option>
            <option value="Monastir">Monastir</option>
            <option value="Bizerte">Bizerte</option>
          </select>
        </div>
        <button className="btn-ins">Inscrire</button>
        <p className="line">Tu as déjà un compte <Link to="/login">Connectez-vous</Link></p>
      </div>
    </div>
  );
};

export default Inscription;