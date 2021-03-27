import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Calendar = (props) => {
	// Returns current date as string
	const addDate = () => {
		let date = new Date();
		date =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		return date;
	};

	// Date State
	const [dateState, setDateState] = useState(addDate());

	// Increases the date by 1 on right arrow click
	const increaseDate = () => {
		let date = new Date(dateState);
		date.setDate(date.getDate() + 1);
		let currDate = new Date();
		let newDate =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		if (date <= currDate) {
			setDateState(newDate);
		}
	};

	// Decreases the date by 1 on left arrow click
	const decreaseDate = () => {
		let date = new Date(dateState);
		date.setDate(date.getDate() - 1);
		let newDate =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		setDateState(newDate);
	};

	return (
		<div id="calendar">
			<div onClick={decreaseDate}>
				<ArrowBackIosIcon id="date-before" />
			</div>
			<div>
				<h2>{dateState}</h2>
			</div>
			<div onClick={increaseDate}>
				<ArrowForwardIosIcon id="date-after" />
			</div>
		</div>
	);
};

export default Calendar;
