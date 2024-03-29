import React from "react";
import { IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item , onUpdateCartQty , onRemoveFromCart }) => {
	const handleUpdateCartQty = (lineItemId, quantity) => {
		onUpdateCartQty(lineItemId, quantity);
	};

	const handleRemoveFromCart = () => {
		onRemoveFromCart(item.id);
	  }


	return (
		<div className="cart-item">
			<img className="item-image" src={item.image.url} alt={item.name} />
			<div className="item-details">
				<h4 className="item-name">{item.name}</h4>
				<div className="item-qty">
					<button className="qty-btn" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}> - </button>
					<p>{item.quantity}</p>
					<button className="qty-btn" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}> + </button>
				</div>
				<div className="item-price">
					{item.line_total.formatted_with_symbol}
				</div>
			</div>
			<button className="supprimer" onClick={ handleRemoveFromCart } >
				<DeleteIcon />
			</button>
		</div>
	);
};

export default CartItem;
