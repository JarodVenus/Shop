import React, { Component } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import BestSeller from "./components/BestSeller"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"



function App() {
  let Component
  switch (window.location.pathname){
    case "/" :
      Component = Home
      break
    case "/product" :
      Component = Product
      break
    case "/about" : 
      Component = About
      break
    case "/contact" :
      Component = Contact
      break
    case "/cart" :
      Component = Cart 
      break
    }
  return (
    <div className="App">
      <Navbar />
      <Component />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
