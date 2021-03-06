import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsDot } from "react-icons/bs";
import { FaShoppingCart, FaLessThan } from "react-icons/fa";

function ProductDetailsNav({ cartItem }) {
	console.log(cartItem);
	return (
		<>
			<div className="container">
				<section className="header-section-2">
					<div>
						<Link to={{ pathname: "/products", state: cartItem }} style={{ color: "black" }}>
							<FaLessThan />
						</Link>
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
							<Link to={{ pathname: "/viewcart", state: cartItem }}>
								<FaShoppingCart style={{ color: "black" }} />

								{cartItem.length > 0 ? <BsDot className="red-dot" /> : null}
							</Link>
						</span>
					</div>
				</section>
			</div>
		</>
	);
}

export { ProductDetailsNav };
