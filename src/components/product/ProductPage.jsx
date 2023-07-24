import { AddShoppingCart } from '@mui/icons-material'
import React from 'react'
import { stripHtml } from "string-strip-html";


const ProductPage = ({ product, onAddToCart }) => {
    const description = stripHtml(product.description).result;

    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }

  return (
    <div className='product-page'>
        <div className='product-image'>
            <img src={product.image.url} />
        </div>
        <div className='product-details'>
            <div className='title-descr'>
                <h2>{product.name}</h2>
                <p>Description du produit :</p>
                <p>{description}</p>
            </div>
           
            <button className='addcart'  onClick={ handleAddToCart }>
                <AddShoppingCart />
                Ajouter au panier
            </button>
        </div>
        
    </div>
  )
}

export default ProductPage