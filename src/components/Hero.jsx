import React from "react";
import SvgArrow from "../assets/arrow.jsx";

const Hero = () => {
  return (
    <div className="section">
      <div className="hero">
        <h1>
          Révèlez votre force intérieure <br /> tout en sublimant votre look
        </h1>
        <span>Voir le Magasin</span>
      </div>
      {/* Les catégories pourraient être les suivantes : Types de perles / Utilisation / Couleur / Style / Taille */}
      <div className="categories">
      
        <div className="category">
          <div className="box type">
            <span>
              <h2>Les Types de perles</h2>
              <SvgArrow className="arrow" />
            </span>
          </div>
        </div>
        
        <div className="category">
          <div className="box util">
            <span>
              <h2>Leur Utilisation</h2>
              <SvgArrow className="arrow" />
            </span>
          </div>
        </div>
        
        <div className="category">
          <div className="box styl">
            <span>
              <h2>Différents Styles</h2>
              <SvgArrow className="arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
