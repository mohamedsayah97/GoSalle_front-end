import "./Partenaire.scss";

const Partenair = () => {
  return (
    <div id="partenair">
    <div className="partenair-container">
        <div className="partenair-title">
      <h1>Explorer nos partenaires</h1>
      <p>Pour un événement réussi , je gère les réservations des prestations et des salles</p>
      <p>des fetes depuis mon compte</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dcxzlpare/image/upload/v1752615220/pattiserie_epouea.jpg" alt="Patisserie" />
        <img src="https://res.cloudinary.com/dcxzlpare/image/upload/v1752615220/fleuriste_pbm2sq.jpg" alt="Fleuriste" />
      </div>
      <div className="partenair-text">
      <button className="btn-partenaire">En savoir plus</button>
    </div>
    </div>
    </div>
  )
}

export default Partenair
