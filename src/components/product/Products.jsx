import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import './product.css'
import CategoryBar from './CategoryBar'


// const products = [
//   { id:1, name:"Oeil de tigre/émassié", description:"Bracelet double à élastique", price:"5€", image:"https://i.ibb.co/N9XknhT/bracelet-perles-double-onyx-hematite-oeil-de-tigre-bracelets-tendances-fr-1.jpg"},
//   { id:2, name:"Oeil de tigre/émassié", description:"Bracelet double à fermoir", price:"15€", image:"https://i.ibb.co/N9XknhT/bracelet-perles-double-onyx-hematite-oeil-de-tigre-bracelets-tendances-fr-1.jpg"}
// ];

const Products = ({ products, categories, onAddToCart, onAddCategories }) => {
  
  return (
    <div className='section'>
      <CategoryBar categories= {categories} onAddCategories={onAddCategories} />
      <Grid className='grid-container' container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} className='grid-item'>
              <Product 
              product={product}
              onAddToCart={onAddToCart}
              />
          </Grid> 
        ))}
      </Grid>
    </div>
  )
}

export default Products