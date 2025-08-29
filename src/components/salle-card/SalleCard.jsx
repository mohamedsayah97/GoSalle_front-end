// SalleCard.js
import React, { use, useEffect } from 'react';


const SalleCard = ({ salle }) => {
    
  return (
    <div>
      <img src={salle?.image} alt={salle?.nomSalle}/>
      <h2>{salle?.nomSalle}</h2>
      <p>{salle?.description}</p>
      <p>Capacité: {salle?.capacite}</p>
      <p>Adresse: {salle?.adresseSalle}</p>
      <p>Prix: {salle?.prix} DT</p>
      <p>État: {salle?.etat}</p>
      <p>Type: {salle?.type}</p>
    </div>
  );
};

export default SalleCard;