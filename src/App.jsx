import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Products from "./components/product/Products"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import { commerce } from "./lib/commerce"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Cart from "./components/cart/Cart"


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = commerce.cart.retrieve()
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = commerce.cart.add(productId, quantity)
    setCart(item.cart);
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const resp = commerce.cart.update(lineItemId, { quantity })
    setCart(resp.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])
  

      
  console.log(products)
      
  return (
    <Router>
      <div className="App">
        <Navbar
        totalItems={cart.total_items}
        />
        <Routes>
          <Route exact path="/" element={
            <>
              <Home />
              <Products 
              products={products}
              onAddToCart={handleAddToCart}
              />
            </>
          }/>
          <Route exact path="/cart" element={
            <>
              <Cart 
                  cart={cart}
                  onUpdateCartQty={handleUpdateCartQty}
                />
            </>
          }
          />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
