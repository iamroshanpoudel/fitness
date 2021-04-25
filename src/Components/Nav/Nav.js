import React from "react";
import Image from "../../images/image.jpeg";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<div id="nav">
			<h2 className="logo">Day Logger</h2>
			<div id="links">
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
			</div>
			<img src={Image} id="image" alt="Logger" />
		</div>
	);
};

export default Nav;
