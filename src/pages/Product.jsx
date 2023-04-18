import React from 'react'
import "../styles/product.css"
import SvgGlass from '../assets/glass'

const Product = () => {
  return (
    <div className='section'>
        
        <div className='product-bar'>
            <div className='src-div'>
                <input id="src-input" placeholder="Nom du produit" />
                <SvgGlass className="src" />
            </div>
            <div className='filters'>
                <div className='classif'>
                    <label>Perles : </label>
                    <select>
                        <option>Type</option>
                        <option>Oeil de tigre</option>
                        <option>Jade</option>
                        <option>Obsidienne</option>
                    </select>
                </div>
                <div className='checkboxes'>
                    <label for="bracelets" >Bracelets : </label>
                    <input type="checkbox" name="bracelets" id="bracelets" />
                    <label for="colliers" >Colliers : </label>
                    <input type="checkbox" name="colliers" id="colliers" />
                    <label for="pendentifs" >Pendentifs : </label>
                    <input type="checkbox" name="pendentifs" id="pendentifs" />
                </div>
            </div>
        </div>


    </div>
  )
}

export default Product