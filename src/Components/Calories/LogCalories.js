import React, { useState } from "react";
import Calendar from "../LogDay/Calendar";
import Nav from "../Nav/Nav";
import AutoCompleteCalorieSearch from "./AutoCompleteCalorieSearch";
import ReactCardFlip from "react-card-flip";

const LogCalories = (props) => {
	// Returns current date as string
	const addDate = () => {
		let date = new Date();
		date =
			date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		return date;
	};

	const flipHandler = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};
	const [dateState, setDateState] = useState(addDate());
	const [isFlipped, setIsFlipped] = useState(false); //card flip state

	return (
		<div>
			<Nav userState={props.userState} />
			<div id="body-items">
				<Calendar
					dateState={dateState}
					setDateState={setDateState}
					flipHandler={flipHandler}
				/>
				<ReactCardFlip
					isFlipped={isFlipped}
					flipDirection="vertical"
					infinite={true}
				>
					<AutoCompleteCalorieSearch flipHandler={flipHandler} />
					<AutoCompleteCalorieSearch flipHandler={flipHandler} />
				</ReactCardFlip>
			</div>
		</div>
	);
};

export default LogCalories;
