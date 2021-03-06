import React from "react";
import "../Header.css";
import { BsBatteryFull, BsWifi } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

function MainNav() {
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
			</div>
		</>
	);
}

export { MainNav };
