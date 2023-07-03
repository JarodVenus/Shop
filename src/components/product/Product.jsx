import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import './product.css'



const Product = ( { product } ) => {
  return (
    <div className="container-card">
        <img className="card-media" src={product.image.url} />
        <div className="card-content">
            <div >
                <h5>
                    {product.name}
                </h5>
                <h5>
                    {product.price.formatted_with_code}
                </h5>
            </div>
            {/* <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" /> */}
        </div>
        <div className="card-actions" >
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
        </div>
    </div>
  )
}

export default Product