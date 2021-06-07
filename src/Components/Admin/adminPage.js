import React from "react";
import Nav from "../Nav/Nav";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AdminPage = (props) => {
	console.log(props);

	return (
		<div>
			<Nav
				userState={props.userState}
				loginState={props.loginState}
				loginStateFunction={props.loginStateFunction}
			/>
		</div>
	);
};

export default AdminPage;
