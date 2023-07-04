import React from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import './product.css'



const Product = ( { product , onAddToCart } ) => {
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }

    const theme = createTheme({
        palette: {
            primary: {
                main : "#748E54"
            },
        }
    })

  return (
    <div className="container-card">
        <img className="card-media" src={product.image.url} />
        <div className="card-content">
            <div className="card-title">
                <h4>
                    {product.name}
                </h4>
                <h5>
                    {product.price.formatted_with_code}
                </h5>
            </div>
            {/* <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" /> */}
        </div>
        <div className="card-actions" onClick={ handleAddToCart }>
            <ThemeProvider theme={theme}>
                <Button 
                startIcon={<AddShoppingCart className="add-cart"/>} 
                color="primary" 
                className="card-btn"
                onClick={() => onAddToCart(product.id, 1)}
                >           
                    <p>Ajouter au Panier</p>
                </Button>
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Product