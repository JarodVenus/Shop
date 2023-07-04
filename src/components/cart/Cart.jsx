import { IconButton } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CartItem from './CartItem';

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


  return (
    <div className='container'>
        <h3 className='cart-title'>Votre Panier :</h3>
        { renderEmptyMsg() }
        {cart.line_items.map((lineItem) => (
          <CartItem
          item={ lineItem }
          key={ lineItem.id }
          onUpdateCartQty={onUpdateCartQty}
          className="cart-item"
          />
        ))}
        <div className='cart-total'>
          <p className='cart-total-title'>Total :</p>
          <p className='cart-price'>{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div>
          <IconButton className='cart-actions'>
            <DeleteIcon />
            <ShoppingCartCheckoutIcon />
          </IconButton>
        </div>
    </div>
  )
}

export default Cart
