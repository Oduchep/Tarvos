import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainNav } from "../../components/MainNav";
import { ProductDetailsNav } from "../../components/ProductDetailsNav";
import "./ProductDetails.css";
import { faceMasks } from "../../Api/index";
import { BsHeart, BsShield, BsShuffle } from "react-icons/bs";
import { BiSmile, BiSun } from "react-icons/bi";
import { Button } from "../../components/Button";

function ProductDetails(props) {
	const [success, setSuccess] = useState("");
	const items = faceMasks();
	const picked = props.match.params.id;

	const selected = items.filter(function (item) {
		return item.id == picked;
	});
	const current = selected[0];
	console.log(current);

	const [toggle, setToggle] = useState({ clicked: false });
	const handleAdd = () => {
		setToggle({ clicked: !toggle.clicked });
		console.log(props.shoppingCart);
	};

	const handleSize = (e) => {
		const target = e.target.innerText;
		props.setShoppingCart([...props.shoppingCart, current]);
		current.size = target;
		setSuccess("Item has been added to cart");
		setToggle({ clicked: !toggle.clicked });
		console.log(current.size);
	};

	return (
		<>
			<MainNav />
			<ProductDetailsNav cartItem={props.shoppingCart} />
			<main className="main">
				{success && <div className="success-message">{success}</div>}
				<section key={current.id} className="current-section">
					<article className="item-section">
						<div className="sizes">
							<div className={current.size === "S" ? "small-picked" : "small"}>
								<span> S </span>
							</div>
							<div className={current.size === "M" ? "medium-picked" : "medium"}>
								<span> M </span>
							</div>
							<div className={current.size === "L" ? "large-picked" : "large"}>
								<span> L </span>
							</div>
						</div>
						<div className="container">
							<div className="item-img-div">
								<img src={current.image} alt="face mask" className="item-img" />
							</div>
							<div>
								<h2 className="item-name">{current.name}</h2>
								<div className="item-quantity-heart-div">
									<div>
										<span className="item-price">N {current.price}</span>
										<span className="item-quantity">Unisex Pack of {current.quantity}</span>
									</div>
									<BsHeart />
								</div>
							</div>
						</div>
					</article>
					<div className="container second-container">
						<div className="product-description">
							<p> 100% Original Products</p>
							<p>
								This item is not returnable. Items like inner-wear, personal care, make-up, socks and certain accessories do not come under our return
								policy. <span style={{ color: "red" }}> Read More</span>
							</p>
						</div>
						<p className="spec"> Spec </p>
						<div className="product-details-icons">
							<span>
								<BsShield />
							</span>
							<p> Anti-pollution, anti-dust </p>
						</div>
						<div className="product-details-icons">
							<span>
								<BsShuffle />
							</span>
							<p> Reusable </p>
						</div>
						<div className="product-details-icons">
							<span>
								<BiSmile />
							</span>
							<p> Pleated at sides for extra comfort</p>
						</div>
						<div className="product-details-icons">
							<span>
								<BiSun />
							</span>
							<p> Wider face coverage for maximum protection </p>
						</div>

						<div className={toggle.clicked ? "select-size" : "display-none"}>
							<div className="select-size-container">
								<h2> Select Size </h2>
								<div className="select-size-div">
									<div className="small">
										<span onClick={handleSize}> S </span>
									</div>
									<div className="medium">
										<span onClick={handleSize}> M </span>
									</div>
									<div className="large">
										<span onClick={handleSize}> L </span>
									</div>
								</div>
								<span> Size Chart </span>
							</div>
						</div>
						{current.size === "" ? (
							<Button className="btn" text="ADD TO CART" handleClick={handleAdd} />
						) : (
							<Link to="/products">
								<Button className="btn" text="CONTINUE" />
							</Link>
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export { ProductDetails };
