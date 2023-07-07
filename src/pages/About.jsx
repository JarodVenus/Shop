import React from 'react'
import portrait from "../assets/portrait.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='presentation' >
        <div className='portrait'>
          {/* <img className="portrait-img" src={portrait} /> */}
          <span className='portrait-nom'>Chantal, fondatrice de Venus</span>
        </div>
        <div className='presentation-text'>
          <h2 className='subtitle'>Les perles, bien plus qu'une passion, c'est un mode de vie</h2>
          <p className='paragraph'>Initiée au perles dès mon plus jeune âge, j'y ai d'abord trouvé un moyen de m'apaiser. Plus tard, ce passe-temps s'est transformé en véritable passion, les perles ont eu des bienfaits réels sur mon quotidien et celui de proches.</p>
        </div>
      </div>
    </div>
  )
}

export default About