
import './Boutton.scss'
import { Link } from 'react-router'

const Boutton = () => {
  return (
    <div id='boutton'>
       <Link to='/' className='btn'>Ajouter une Salle</Link>
    </div>
  )
}

export default Boutton