import React, { useState } from "react";
import { MainNav } from "../../components/MainNav";
import { ShoppingCartNav } from "../../components/ShoppingCartNav";
import "./ViewCart.css";

function ViewCart(props) {
	const [cart, setCart] = useState(props.location.state);
	console.log(cart);

	return (
		<>
			<MainNav />
			<ShoppingCartNav cartItem={cart} />
			<main>
				{cart.map((item) => (
					<section key={item.id} className="cart-section">
						<div className="container">
							<div className="cart-img-div">
								<img src={item.image} alt="face mask" className="cart-img" />
							</div>
							<div className="cart-item-details">
								<h2 className="cart-name">{item.name}</h2>
								<div>
									<span className="item-price">{item.price}</span>
									<span className="item-quantity">Unisex Pack of {item.quantity}</span>
								</div>
								<p> Size : {} </p>
								<button className="remove"> REMOVE </button>
							</div>
							<div className="cart-quantity-control">
								<span className="plus"> + </span>
								<span className="number"> 1 </span>
								<span className="minus"> - </span>
							</div>
						</div>
					</section>
				))}
			</main>
		</>
	);
}

export { ViewCart };
