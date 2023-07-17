import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Badge, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#454411'
      },
      secondary: {
        main: "hsla(0, 0%, 0%, 0)"
      }
    }
  })
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 15,
      top: 25,
      padding: '0 4px',
    },
  }));

  const location = useLocation();

  

  return (
    <nav className="navigation">
        <div className="navigation-items">
          <div className="navigation-links">
              {/* <a href="/">Home</a> */}
              <Link to="/about">Qui est Venus ?</Link>
              {/* <a href="/product">Shopping</a> */}
              <Link to="/contact">Contact</Link>
          </div>
          <div className="logo">
            <Link to="/">
              <img width="64" height="64" src="https://img.icons8.com/laces/64/454411/venus-symbol.png" alt="venus-symbol"/>
            </Link>
          </div>
          {location.pathname == '/cart' ? (
            <div>
              <ThemeProvider theme={theme} >
                <IconButton component={Link} to='/' color="primary" className="icon-btn">
                  <CloseIcon />
                </IconButton>
              </ThemeProvider>
            </div>
          ) : (
            <div className="cart-icon">
            <ThemeProvider theme={theme} >
              <IconButton component={Link} to="/cart" color="primary" className="icon-btn">
                {/* <StyledBadge badgeContent={totalItems} color="secondary"> */}
                  <ShoppingCartOutlinedIcon className="icon-btn"  />
                {/* </StyledBadge> */}
              </IconButton>
            </ThemeProvider>
          </div>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
