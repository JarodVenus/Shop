import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Products from "./components/product/Products"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import { commerce } from "./lib/commerce"


function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }
  
  useEffect(() => {
    fetchProducts();
  },[])
  
  let Component
  switch (window.location.pathname){
    case "/" :
      Component = Home
      break
      // case "/product" :
      //   Component = Products
      //   break
    case "/about" : 
    Component = About
    break
    case "/contact" :
      Component = Contact
      break
      case "/cart" :
        Component = Cart 
        break
      };
      
      console.log(products)
      
  return (
    <div className="App">
      <Navbar />
      <Component />
      <Products products={products}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
