import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsDot } from "react-icons/bs";
import { FaEquals, FaShoppingCart } from "react-icons/fa";

function ProductsNav({ shoppingCart }) {
	console.log(shoppingCart);
	return (
		<>
			<div className="container">
				<section className="header-section-2">
					<div>
						<FaEquals />
					</div>
					<div className="logo-div">
						<div className="logo">
							<p> N8 </p>
						</div>
					</div>
					<div className="header-section-2-div-icons">
						<span>
							<BsSearch />
						</span>
						<span className="link-red">
							<Link to={{ pathname: "/viewcart", state: shoppingCart }}>
								<FaShoppingCart style={{ color: "black" }} />

								{shoppingCart.length > 0 ? <BsDot className="red-dot" /> : null}
							</Link>
						</span>
					</div>
				</section>
			</div>
		</>
	);
}

export { ProductsNav };
