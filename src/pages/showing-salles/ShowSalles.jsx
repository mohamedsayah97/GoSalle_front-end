import React from 'react'
import SalleCard from '../../components/salle-card/SalleCard'
import './showSalles.scss'

const salles=[
  {
    id:1,
    nomSalle:"salle 1",
    description:"description de la salle 1",
    capacite:50,
    adresseSalle:"adresse de la salle 1",
    prix:500,
    image:"https://res.cloudinary.com/dcxzlpare/image/upload/v1743938779/4022f2a88984deb9037d2384de9024d5_ewcdpz.png",
    etat:"disponible",  
    type:"salle de conférence"
  },
  {
    id:2,
    nomSalle:"salle 2",
    description:"description de la salle 2",
    capacite:100,
    adresseSalle:"adresse de la salle 2",
    prix:1000,
    image:"https://res.cloudinary.com/dcxzlpare/image/upload/v1743938834/0de408af19e776d74743b16381aa97a3_iordyy.png",
    etat:"indisponible",  
    type:"salle de réunion"
  },
  {
    id:3,
    nomSalle:"salle 3",
    description:"description de la salle 3",
    capacite:200,
    adresseSalle:"adresse de la salle 3",
    prix:1500,
    image:"https://res.cloudinary.com/dcxzlpare/image/upload/v1752615222/salle_udxlx2.jpg",
    etat:"disponible",  
    type:"salle de formation"
  }
]


const ShowSalles = () => {
  return (
    <div>
      <div>
        <h1>Liste des Salles</h1>
        <div>
            {salles.map((salle)=>(
                <SalleCard key={salle.id} salle={salle} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ShowSalles
