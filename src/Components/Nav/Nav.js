import React from "react";
import Image from "../../images/image.jpeg";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<div id="nav">
			<h2 className="logo">Day Logger</h2>
			<div id="links">
				<NavLink to="/" activeClassName="active-link" exact>
					Log Day
				</NavLink>
				<NavLink to="questions" activeClassName="active-link" exact>
					Edit Questions
				</NavLink>
				<NavLink to="/log" activeClassName="active-link" exact>
					View Data
				</NavLink>
			</div>
			<img src={Image} id="image" alt="Logger" />
		</div>
	);
};

export default Nav;
