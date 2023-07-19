import React from "react";
import { useMediaQuery, useTheme } from '@mui/material'
import { AddShoppingCart } from "@mui/icons-material";
import './product.css'



const Product = ( { product , onAddToCart , onOpen, onGetProduct} ) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    
    
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }

    const handleOpen = () => {
        onOpen()
        onGetProduct(product)
    }
    
  return (
    <div className="container-card"  >
        <img className="card-media" onClick={handleOpen} src={product.image.url} />
        <div className="card-content">
            <div className="card-title">
                <h4>
                    {product.name}
                </h4>
                <h4>
                    {product.price.formatted_with_code}
                </h4>
            </div>
            {/* <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" /> */}
        </div>
        <div className="card-actions" onClick={ handleAddToCart }> 
                <button 
                className="card-btn"
                >
                    <AddShoppingCart className="add-cart"/>           
                    {matches ? (<p>Ajouter au Panier</p>) : "" }
                </button>
        </div>
    </div>
  )
}

export default Product