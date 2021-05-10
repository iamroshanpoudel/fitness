import React from "react";
import Image from "../../images/image.jpeg";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<div id="nav">
			<div id="links">
				<h2 className="logo">Day Logger</h2>
				<NavLink to="/" activeClassName="active-link" className="alink" exact>
					Log Day
				</NavLink>
				<NavLink
					to="questions"
					activeClassName="active-link"
					className="alink"
					exact
				>
					Edit Questions
				</NavLink>
				<NavLink
					to="/log"
					activeClassName="active-link link"
					className="alink"
					exact
				>
					View Data
				</NavLink>
				<NavLink to="/profile" exact>
					<img src={Image} id="image" alt="User Image" />
				</NavLink>
			</div>
		</div>
	);
};

export default Nav;
