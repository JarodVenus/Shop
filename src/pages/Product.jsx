import React from 'react'
import "../styles/product.css"

const Product = () => {
  return (
    <div className='section'>
        
        <div className='product-bar'>
            <input placeholder="Nom du produit" />
            <div className='filters'>
                <div className='classif'>
                    <label>Catégories : </label>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className='checkboxes'>
                    <label>Type : </label>
                    <label>Bracelets : </label>
                    <input type="checkbox" name="bracelets" />
                    <label>Colliers : </label>
                    <input type="checkbox" name="colliers" />
                    <label>Pendentifs : </label>
                    <input type="checkbox" name="pendentifs" />
                </div>
            </div>
        </div>


    </div>
  )
}

export default Product