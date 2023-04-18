import React from "react";
import SvgCart from "../assets/car"


const Navbar = () => {
  return (
    <nav className="navigation">
        <div className="navigation-items">
          <div className="navigation-links">
              <a href="/">Home</a>
              <a href="/product">Produits</a>
              <a href="/contact">Contact</a>
              <a href="/about">A Propos</a>
          </div>
          <div className="logo">
            <h1>VENUS</h1>
          </div>
          <div className="panier" >
              <SvgCart className="cart" />
              <a href="/cart">0</a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
