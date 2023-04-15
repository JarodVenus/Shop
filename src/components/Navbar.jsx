import React from "react";
import SvgCart from "../assets/car";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="navigation-items">
        <div className="navigation-links">
            <a href="">Home</a>
            <a href="">Produit</a>
            <a href="">Contact</a>
            <a href="">A Propos</a>
        </div>
        <div className="logo">
          <h1>VENUS</h1>
        </div>
            <SvgCart className="cart" />
      </div>
    </div>
  );
};

export default Navbar;
