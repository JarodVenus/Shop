import React, { useEffect, useState,useRef } from "react"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Products from "./components/product/Products"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { commerce } from "./lib/commerce"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Cart from "./components/cart/Cart"
import Hero from "./components/Hero"


function App() {
  const [products, setProducts] = useState([]);
  const [bestsellers, setBestsellers] = useState([]); 
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoriesFiltered, setCategoriesFiltered] = useState("");
  
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    
    setProducts(data);
  }
  
  const fetchBestSellers = async () => {
    const { data } = await commerce.products.list( {category_slug: ["best-seller"]});
    
    setBestsellers(data);
  }
  
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart);
  }
  
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data)
  }

  console.log(products)
  
  useEffect(() => {
    fetchProducts();
    fetchBestSellers();
    fetchCart();
    fetchCategories();
  },[])
  
  
  const ref = useRef(null);
  
  const handleAddCategory = (selectedCategory) => {
    setCategoriesFiltered(selectedCategory);
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart);
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const resp = await commerce.cart.update(lineItemId, { quantity })
    setCart(resp.cart);
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const resp = await commerce.cart.remove(lineItemId)
    console.log(resp)
  }

  const handleEmptyCart = async () => {
    const cart = commerce.cart.empty()
    console.log(cart);
  }

      
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero
                handleClick={handleClick} 
                onAddToCart={handleAddToCart}
                bestproducts={bestsellers}
              />
              <div ref={ref}>
              <Products 
              products={products}
              categories={categories}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onAddCategories={handleAddCategory}
              />
              <Newsletter />
              </div>
            </>
          }/>
          <Route exact path="/cart" element={
              <Cart 
                  cart={cart}
                  onUpdateCartQty={handleUpdateCartQty}
                  onEmptyCart={handleEmptyCart}
                />
          }
          />
        <Route exact path="/about" element={
          <About />
        } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
