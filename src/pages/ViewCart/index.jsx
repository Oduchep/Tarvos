import React, { useState } from "react";
import { Button } from "../../components/Button";
import { MainNav } from "../../components/MainNav";
import { ShoppingCartNav } from "../../components/ShoppingCartNav";
import "./ViewCart.css";

function ViewCart(props) {
	const [cart, setCart] = useState(props.location.state);
	console.log(cart);

	const hadnleDelete = (itemId) => {
		const items = cart.filter((c) => c.id !== itemId);
		props.setShoppingCart(items);
		setCart(items);
	};

	return (
		<>
			<MainNav />
			<ShoppingCartNav cartItem={cart} />
			<main>
				{props.shoppingCart.length > 0 ? (
					cart.map((item) => (
						<section key={item.id} className="cart-section">
							<div className="container">
								<div className="cart-img-div">
									<img src={item.image} alt="face mask" className="cart-img" />
								</div>
								<div className="cart-item-details">
									<h2 className="cart-name">{item.name}</h2>
									<div>
										<span className="item-price">Rs {item.price}</span>
										<span className="item-quantity">Unisex Pack of {item.quantity}</span>
									</div>
									<p> Size : {item.size} </p>
									<button className="remove" onClick={() => hadnleDelete(item.id)}>
										REMOVE
									</button>
								</div>
								<div className="cart-quantity-control">
									<span className="plus"> + </span>
									<span className="number"> 1 </span>
									<span className="minus"> - </span>
								</div>
							</div>
						</section>
					))
				) : (
					<div className="container" style={{ marginTop: "2rem" }}>
						<p> Your cart is empty </p>
					</div>
				)}
				<section className="cart-payment-details">
					<p> Cart Details</p>
					<div className="total-discount">
						<div>
							<p>Total Amount</p>
							<h3> Rs {}</h3>
						</div>
						<div>
							<p> Discount </p>
							<h3> Rs {0} </h3>
						</div>
					</div>
					<div className="final-amount">
						<p> Final Amount </p>
						<h3> Rs {} </h3>
					</div>

					<Button className="btn" text="CHECKOUT" />
				</section>
			</main>
		</>
	);
}

export { ViewCart };
