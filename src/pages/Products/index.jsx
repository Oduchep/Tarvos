import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { MainNav } from "../../components/MainNav";
import { ProductsNav } from "../../components/ProductsNav";
import { faceMasks } from "../../Api/index";
import "./Products.css";

function Products(props) {
	const items = faceMasks();

	return (
		<>
			<MainNav />
			<ProductsNav shoppingCart={props.shoppingCart} />
			<main className="main">
				{items.map((item) => (
					<section key={item.id} className="item-section">
						<div className="container">
							<div className="item-img-div">
								<Link to={{ pathname: `/products/${item.id}`, state: `${item.id}` }}>
									<img src={item.image} alt="face mask" className="item-img" />
								</Link>
							</div>
							<div>
								<h2 className="item-name">{item.name}</h2>
								<div className="item-quantity-heart-div">
									<div>
										<span className="item-price">{item.price}</span>
										<span className="item-quantity">Unisex Pack of {item.quantity}</span>
									</div>
									<BsHeart />
								</div>
							</div>
						</div>
					</section>
				))}
			</main>
		</>
	);
}

export { Products };
