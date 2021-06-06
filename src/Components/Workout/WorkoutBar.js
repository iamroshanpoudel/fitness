import React, { useState } from "react";
import pushup from "../../images/push-up.jpg";
import Button from "@material-ui/core/Button";

function WorkoutBar(props) {
	// const [workout, setWorkout] = useState("pushup");

	const barstyle = {
		width: "450px",
		height: "60px",
		margin: "10px 25px",
		border: "0.5px solid #e1f1dd",
		borderRadius: "6px",
		backgroundColor: props.color,

		// backgroundColor: "#e1f1dd",

		// backgroundColor: "rgb(219,240,255,0.6)",
		// backgroundImage:"url(" + pushup + ")",
		// backgroundSize:"cover"
	};

	const image = {
		width: "50px",
		height: "50px",
		borderRadius: "8px",
		position: "relative",
		right: "150px",
	};

	// { position: "relative", bottom: "25px", left: "250px" }

	return (
		<Button variant="outlined" style={barstyle}>
			{/* <img src={pushup} style={image}></img> */}
			<h5 style={{ position: "relative" }}>{props.value}</h5>
			<p>{props.calories}</p>
		</Button>
	);
}

export default WorkoutBar;
