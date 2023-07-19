import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import './product.css'
import CategoryBar from './CategoryBar'



const Products = ({ products, categories, onAddToCart, onAddCategories, onGetProduct, onOpen }) => {

  return (
    <div className='section'>
      <CategoryBar categories= {categories} onAddCategories={onAddCategories} />
      <Grid className='grid-container' container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} className='grid-item'>
              <Product 
              product={product}
              onAddToCart={onAddToCart}
              onOpen={onOpen}
              onGetProduct={onGetProduct}
              />
          </Grid> 
        ))}
      </Grid>
      
    </div>
  )
}

export default Products