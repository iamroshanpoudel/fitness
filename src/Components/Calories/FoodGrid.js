import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FoodCard from "./FoodCard";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		// justifyContent: "space-around",
		// overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function FoodGrid(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{props.foodStateByDate.foodIntake.map((food, index) => {
				return <FoodCard food={food} key={index} />;
			})}
		</div>
	);
}
