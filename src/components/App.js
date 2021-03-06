import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { ProductDetails } from "../pages/ProductDetails";
import { ViewCart } from "../pages/ViewCart";
import { LandingPage } from "../pages/LandingPage";

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);

	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={LandingPage} />

				<Route path="/products/:id" render={(props) => <ProductDetails shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} {...props} />} />

				<Route path="/products" render={(props) => <Products shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} {...props} />} />

				<Route path="/viewcart" render={(props) => <ViewCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
