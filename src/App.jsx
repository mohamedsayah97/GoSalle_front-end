import Navbar from './pages/page1/navbar/Navbar.jsx'
import Hero from './pages/page1/hero/Hero.jsx'
import Lieu from './pages/page1/lieu/Lieu.jsx'
import Partenair from './pages/page1/partenaires/Partenair.jsx'
import Footer from './pages/page1/footer/Footer.jsx'
import Copyright from './components/copyright/Copyright.jsx'
import Connexion from './pages/connexion/Connexion.jsx'
import Inscription from './pages/inscription/Inscription.jsx'
import Header from './components/header/Header.jsx'
import Boutton from './components/boutton/Boutton.jsx'
import AjoutSalle from './pages/ajoutSalle/AjoutSalle.jsx'



const App = () => {
  return (
    <>
     {/* <Navbar />
     <Hero />
     <Lieu />
     <Partenair />
     <Footer />
     <Copyright />
      <Connexion /> 
     <Inscription /> */}
     <Header />
     {/* <Boutton /> */}
     <AjoutSalle />
    </>
  )
}

export default App
