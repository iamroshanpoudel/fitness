import React from "react";
import Image from "./images/image.jpeg";

const Nav = (props) => {
	return (
		<div id="nav">
			<h2 className="logo">Day Logger</h2>
			<div id="links">
				<a href="#" id="active-link">
					Log Day
				</a>
				<a href="#">Edit Questions</a>
				<a href="#">View Data</a>
			</div>
			<img src={Image} id="image" alt="Logger" />
		</div>
	);
};

export default Nav;
