import { Link } from "react-router-dom";
import Mail from "../../components/zone-text/Mail";
import "./Inscription.scss";
import { useState } from "react";
import { Instance } from "../../config/axios";
import { Alert } from "bootstrap";

const Inscription = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [genre, setGenre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ville, setVille] = useState("Choisir une ville");
  const [dateNaissance, setDateNaissance] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    Alert("Les mots de passe ne correspondent pas");
    return;
  }

  if (!nom || !prenom || !genre || !email || !password || !ville) {
    console.error("Veuillez remplir tous les champs obligatoires");
    return;
  }
  
  Instance.post('/clients/signup', {
    nom,
    prenom,
    genre,
    email,
    password,
    confirmPassword,
    ville,
    dateNaissance
  })
  .then((response) => {
    console.log("Inscription réussie", response.data);
    alert("Inscription réussie, vous pouvez maintenant vous connecter !");
    window.location.href = "/login"; // Rediriger vers la page de connexion après l'inscription réussie
  })
  .catch((error) => {
    console.error("Erreur lors de l'inscription", error.response);
  });
};

  return (
    <div id="Inscription-container">
      <form onSubmit={handleSubmit}>
        <div className="ins-container">
          <Mail
            labelText="Nom"
            type="text"
            name="Nom"
            value={nom}
            holderValue="saisie votre Nom"
            onChange={(e) => setNom(e.target.value)}
          />
          <Mail
            labelText="Prenom"
            type="text"
            name="Prenom"
            value={prenom}
            holderValue="saisie votre Prenom"
            onChange={(e) => setPrenom(e.target.value)}
          />
          <div>
            <label>Genre</label>
            <div>
              <input
                type="radio"
                id="homme"
                name="genre"
                value="Homme"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="homme">Homme</label>
              <input
                type="radio"
                id="femme"
                name="genre"
                value="Femme"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="femme">Femme</label>
            </div>
          </div>
          <Mail
            labelText="E-mail"
            type="email"
            name="mail"
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
          <Mail
            labelText="Mot de passe"
            type="password"
            name="password"
            value={confirmPassword}
            holderValue="Répéter votre Mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div>
            <label>Date de naissance</label>
            <input
              type="date"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            />
          </div>
          <div>
            <label>Ville</label>
            <select
              name="ville"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            >
              <option value="Choisir une ville" disabled>
                Choisir une ville
              </option>
              <option value="Sousse">Sousse</option>
              <option value="Tunis">Tunis</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Monastir">Monastir</option>
              <option value="Bizerte">Bizerte</option>
            </select>
          </div>
          <button className="btn-ins">Inscrire</button>
          <p className="line">
            Tu as déjà un compte <Link to="/login">Connectez-vous</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Inscription;