import React, { useState } from "react";
import Header from "./Header";
import headerStyle from "../../util/headerStyle";
import HeaderLinks from "./HeaderLinks";

const Nav = (props) => {
	return (
		<Header
			props={headerStyle.info}
			loginState={props.loginState}
			loginStateFunction={props.loginStateFunction}
		/>
	);
};

export default Nav;
