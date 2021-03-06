import React from "react";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";

function ShoppingCartNav({ cartItem }) {
	return (
		<>
			<div className="container">
				<section className="shopping-cart-nav">
					<div className="shopping-cart-nav-div-1">
						<Link to={{ pathname: "/products", state: cartItem }} style={{ color: "black" }}>
							<FaLessThan />
						</Link>
					</div>
					<div className="shopping-cart-nav-div-2">
						<p> Shopping Cart </p>
					</div>
				</section>
			</div>
		</>
	);
}

export { ShoppingCartNav };
