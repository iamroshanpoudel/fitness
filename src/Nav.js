import React from "react";
import Image from "./images/image.jpeg";
import { Route, Link } from "react-router-dom";

const Nav = (props) => {
	return (
		<div id="nav">
			<h2 className="logo">Day Logger</h2>
			<div id="links">
				<Link to="/">Log Day</Link>
				<Link to="questions">Edit Questions</Link>
				<Link to="/">View Data</Link>
			</div>
			<img src={Image} id="image" alt="Logger" />
		</div>
	);
};

export default Nav;
