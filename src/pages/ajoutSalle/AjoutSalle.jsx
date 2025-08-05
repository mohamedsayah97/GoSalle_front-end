import { useState } from 'react';
import Mail from '../../components/zone-text/Mail';
import './AjoutSalle.scss';
import { Instance } from '../../config/axios';
import { useNavigate } from 'react-router';

const AjoutSalle = () => {
  const [nomSalle, setNomSalle] = useState('');
  const [description, setDescription] = useState('');
  const [capacite, setCapacite] = useState('');
  const [adresseSalle, setAdresseSalle] = useState('');
  const [prix, setPrix] = useState('');
  const [image, setImage] = useState(null);
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   const formData = new FormData();
    formData.append('nomSalle', nomSalle);
    formData.append('description', description);
    formData.append('capacite', capacite);
    formData.append('adresseSalle', adresseSalle);
    formData.append('prix', prix);
    formData.append('image', image);
    formData.append('type', type);

    Instance.post('/salles/create', formData)
      .then((response) => {
        console.log('Salle ajoutée avec succès', response.data);
        alert('Salle ajoutée avec succès');
        navigate('/'); 

        // Réinitialiser le formulaire après l'ajout
        setNomSalle('');
        setDescription('');
        setCapacite('');
        setAdresseSalle('');
        setPrix('');
        setImage(null);
        setType('');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout de la salle', error.response);
        alert('Erreur lors de l\'ajout de la salle');
      });
  };

  return (
    <div id='ajoutSalle'>
      <h1>Ajout Salle</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="salleName">Nom de la salle:</label>
        <Mail 
          type="text" 
          id="nomSalle" 
          name="nomSalle" 
          value={nomSalle}
          onChange={(e) => setNomSalle(e.target.value)}
          placeholder="Entrez le nom de la salle"
          required 
        />
        
        <label htmlFor="salleDescription">Description :</label>
        <textarea 
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Entrez la description de la salle"
          required
        >
        </textarea><br/>
        
        <label htmlFor="salleCapacity">Capacité :</label>
        <Mail
          type="number"
          id="capacite"
          name="capacite"
          value={capacite}
          onChange={(e) => setCapacite(e.target.value)}
          placeholder="Entrez la capacité de la salle"
          required 
        /><br/>
        
        <label htmlFor="salleLocation">Adresse :</label>
        <Mail
          type="text"
          id="adresseSalle"
          name="adresseSalle"
          value={adresseSalle}
          onChange={(e) => setAdresseSalle(e.target.value)}
          placeholder="Entrez l'adresse de la salle"
          required 
        /><br/>
        
        <label htmlFor="sallePrice">Prix :</label>
        <Mail
          type="number"
          id="prix"
          name="prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          placeholder="Entrez le prix de la salle"
          required 
        /><br/>
        
        <label htmlFor="salleImage">Image :</label>
        <Mail
          type="file"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}        
          accept="image/*"
          required 
        /><br/>
        
        <label htmlFor="salleType">Type de salle :</label>
       <select 
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="" disabled>Choisissez un type</option>
          <option value="Salle de réunion">Salle de réunion</option>
          <option value="Salle de conférence">Salle de conférence</option>
          <option value="Salle de séminaire">Salle de séminaire</option>
          <option value="salle des fêtes">Salle des fêtes</option>
       </select>
        <br/>
        
        <button type="submit">Ajouter la salle</button>
        
      </form>
    </div>
  )
}

export default AjoutSalle;