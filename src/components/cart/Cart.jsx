import { Button, Grid } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CartItem from './CartItem';
import './cart.css'

const Cart = ({ cart , onUpdateCartQty }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMsg = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className='empty-msg'>
        Vous n'avez encore aucuns articles !
      </p>
    );
  }

  const renderCartItem = () => (
    <div className='container'>
      <div className='item-list'>
        {cart.line_items.map((lineItem) => (
          <CartItem
          item={ lineItem }
          key={ lineItem.id }
          onUpdateCartQty={onUpdateCartQty}
          className="cart-item"
          />
        ))}
      </div>
      <div className='cart-actions'>
      <div className='cart-total'>
        <p className='cart-total-title'>Total :</p>
        <p className='cart-price'>{cart.subtotal.formatted_with_symbol}</p>
      </div>
      <div className='cart-buttons'>
        <Button className='cart-action' startIcon={<DeleteIcon />} variant="contained" color='error' >
          <p>effacer panier</p>
        </Button>
        <Button className='cart-action' startIcon={<ShoppingCartCheckoutIcon />} variant="contained" color="success">
          <p>Paiement</p>
        </Button>
      </div>
      </div>
    </div>
  )

  if (!cart.line_items) return (
  <div className='cart'>
    <p>...Loading</p>
  </div>
  )


  return (
    <div className='cart'>
        <h3 className='cart-title'>Votre Panier :</h3>
        { !cart.line_items.length ? renderEmptyMsg() : renderCartItem() }
        </div>
  )
}

export default Cart
