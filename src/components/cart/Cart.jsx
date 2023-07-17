import { Button, Grid } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = ({ cart, onUpdateCartQty, onEmptyCart, onRemoveFromCart }) => {
	const handleEmptyCart = () => {
		onEmptyCart();
	};

	const renderEmptyMsg = () => {
		if (cart.total_unique_items > 0) {
			return;
		}

		return (
			<div className="container">
				<p className="empty-msg">Vous n'avez encore aucuns articles !</p>
			</div>
		);
	};

	const renderCartItem = () => (
		<div className="container">

			<div className="item-container">
				<div className="item-list">
					{cart.line_items.map((lineItem) => (
						<CartItem
							item={lineItem}
							key={lineItem.id}
							onUpdateCartQty={onUpdateCartQty}
							onRemoveFromCart={onRemoveFromCart}
							className="cart-item"
						/>
					))}
				</div>
			</div>

			<div className="sidebar">
				<div className="cart-actions">

					<div className="cart-total">
						<p className="cart-total-text" >Total :</p>
						<p className="cart-price">{cart.subtotal.formatted_with_symbol}</p>
					</div>

					<div className="cart-buttons">
						<button
							className="empty button"
							onClick={() => handleEmptyCart()}
						>
							<DeleteIcon />
							<span>effacer panier</span>
						</button>
						<button
							className="button checkout"
							onClick={() => handleEmptyCart()}
						>
							<ShoppingCartCheckoutIcon />
							<span>Paiement</span>
						</button>
					</div>

				</div>
			</div>

		</div>
	);

	if (!cart?.line_items)
		return (
			<div className="cart">
				<p>...Loading</p>
			</div>
		);

	return (
		<div className="cart">
			<h3 className="cart-title">Votre Panier :</h3>
			{!cart.line_items.length ? renderEmptyMsg() : renderCartItem()}
		</div>
	);
};

export default Cart;
