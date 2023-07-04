import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { styled } from '@mui/material/styles';


const Navbar = ({ totalItems }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#748E54'
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

  return (
    <nav className="navigation">
        <div className="navigation-items">
          <div className="navigation-links">
              {/* <a href="/">Home</a> */}
              <a href="/about">Qui est Venus ?</a>
              {/* <a href="/product">Shopping</a> */}
              <a href="/contact">Contact</a>
          </div>
          <div className="logo">
            {/* <h1>VENUS</h1> */}
          </div>
          <div className="cart-icon">
            <ThemeProvider theme={theme} >
              <IconButton color="primary" className="icon-btn">
                <StyledBadge badgeContent={totalItems} color="secondary">
                  <ShoppingCartOutlinedIcon className="icon-btn"  />
                </StyledBadge>
              </IconButton>
            </ThemeProvider>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
