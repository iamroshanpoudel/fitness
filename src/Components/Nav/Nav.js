import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	const defaultImage =
		"https://res.cloudinary.com/roshanpoudel/image/upload/v1620734424/userProfileImages/defaultImage.svg";
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
					{props.userState.profileImageURL ? (
						<img src={props.userState.profileImageURL} id="image" alt="User" />
					) : (
						<img src={defaultImage} id="image" alt="User" />
					)}
				</NavLink>
			</div>
		</div>
	);
};

export default Nav;
