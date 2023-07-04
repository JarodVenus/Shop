import React, { useState } from 'react'
import Cart from './Cart';
import { Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartNav = ({ cart, handleUpdateCartQty }) => {
    const [isCartVisible, setCartVisible] = useState(false);

    const theme = createTheme({
        palette: {
            primary:{
                main : "#748E54"
            }
        }
    })
  
    const renderOpenButton = () => (
        <ThemeProvider theme={theme} >
            <Button className="nav-cart-btn-open" startIcon={<ShoppingCartOutlinedIcon color="primary"/>}>
                {cart !== null ? <span>{cart.total_items}</span> : ''}
            </Button>
        </ThemeProvider>
    );
  
    const renderCloseButton = () => (
      <ThemeProvider theme={theme}>
        <IconButton color="primary">
            <CloseIcon />
        </IconButton>
      </ThemeProvider>
    );
  
    return (
      <div className="sidebar">
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
          { !isCartVisible ? renderOpenButton() : renderCloseButton() }
      </div>
        { isCartVisible &&
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
          />
        }  
      </div>
    );
  };
  
  export default CartNav;