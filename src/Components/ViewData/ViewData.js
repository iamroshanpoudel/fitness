import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Last7Chart from "./Last7Chart";
import moment from "moment";
import Calendar from "../Calendar/Calendar";

const ViewData = (props) => {
	// changes 2021/5/4 to 2021-5-4
	const dashedDate = (date) => {
		return moment(new Date(date).toISOString()).format("YYYY-MM-DD");
	};
	// Returns current date as string
	const addDate = () => {
		let date = new Date();
		date =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		return date;
	};

	const [dateState, setDateState] = useState(addDate());

	// style for card
	const useStyles = makeStyles((theme) => ({
		root: {
			width: "50vw",
			padding: "20px",
			height: "100%",
		},
		rowElement: {
			padding: "20px",
			display: "flex",
			flexWrap: "wrap",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		large: {
			width: theme.spacing(7),
			height: theme.spacing(7),
		},
	}));
	const classes = useStyles();
	return (
		<div>
			<Nav
				userState={props.userState}
				loginState={props.loginState}
				loginStateFunction={props.loginStateFunction}
			/>
			<div id="body-items">
				<Calendar
					dateState={dateState}
					setDateState={setDateState}
					userState={props.userState}
					isUserLoading={props.isUserLoading}
					setIsUserLoading={props.setIsUserLoading}
				/>

				<Last7Chart userState={props.userState} dateState={dateState} />
			</div>
		</div>
	);
};

export default ViewData;
