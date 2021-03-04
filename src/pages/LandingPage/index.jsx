import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
	return (
		<>
			<main className="conatiner">
				<h1 style={{ margin: "20px", textAlign: "center" }}> Tarvos Test 2 Site </h1>
				<Link to="/products">
					<h3 style={{ margin: "20px", textAlign: "center" }}>Click here to use the applicaton</h3>
				</Link>
			</main>
		</>
	);
}

export { LandingPage };
