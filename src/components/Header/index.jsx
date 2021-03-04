import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsBatteryFull, BsWifi, BsSearch, BsDot } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { FaEquals, FaShoppingCart } from "react-icons/fa";

function Header({ cartItem }) {
	console.log(cartItem);

	return (
		<>
			<div className="container">
				<section className="header-section-1">
					<span> 9:41 </span>
					<div className="header-section-1-div-icons">
						<span>
							<GiNetworkBars />
						</span>
						<span>
							<BsWifi />
						</span>
						<span>
							<BsBatteryFull />
						</span>
					</div>
				</section>
				<section className="header-section-2">
					<div>
						<FaEquals />
					</div>
					<div className="logo">
						<p> N8 </p>
					</div>
					<div className="header-section-2-div-icons">
						<span>
							<BsSearch />
						</span>
						<span>
							<Link to={{ pathname: "/viewcart", state: cartItem }}>
								<FaShoppingCart style={{ color: "black" }} />
							</Link>
							{/* <p>{props.myCart.length > 0 ? <BsDot style={{ color: "red" }} /> : null}</p> */}
						</span>
					</div>
				</section>
			</div>
		</>
	);
}

export { Header };
