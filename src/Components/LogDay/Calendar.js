import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Calendar = (props) => {
	// Increases the date by 1 on right arrow click
	const increaseDate = (e) => {
		let date = new Date(props.dateState);
		date.setDate(date.getDate() + 1);
		let currDate = new Date();
		let newDate =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		if (date <= currDate) {
			props.setDateState(newDate);
			props.flipHandler(e);
		}
	};

	// Decreases the date by 1 on left arrow click
	const decreaseDate = (e) => {
		let date = new Date(props.dateState);
		date.setDate(date.getDate() - 1);
		let newDate =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

		props.setDateState(newDate);
		props.flipHandler(e);
	};

	return (
		<div id="calendar">
			<div onClick={decreaseDate}>
				<ArrowBackIosIcon id="date-before" />
			</div>
			<div>
				<h2>{props.dateState}</h2>
			</div>
			<div onClick={increaseDate}>
				<ArrowForwardIosIcon id="date-after" />
			</div>
		</div>
	);
};

export default Calendar;
