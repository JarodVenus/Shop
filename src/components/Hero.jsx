import React from "react";
import SvgArrow from "../assets/arrow.jsx";
import Product from "./product/Product.jsx";

const Hero = ({handleClick , bestproducts, onAddToCart, onGetProduct, onOpen}) => {
  return (
    <div className="section">
    
      <div className="hero">
        <h1>
          Révèlez votre force intérieure tout en<br/>sublimant votre look
        </h1>
        <span onClick={handleClick}>Voir le catalogue</span>
        <div className="separation" />
        <h3 className="bestsellers-title">La sélection Venus</h3>
        <div className="bestsellers-box" >
          {bestproducts.map((product) => (
            <div className="bestseller-item" key={product.id}>
              <Product
              product={product}
              onAddToCart={onAddToCart}
              onGetProduct={onGetProduct}
              onOpen={onOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
