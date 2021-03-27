import "./App.css";
import Nav from "./Nav";
import Calendar from "./Calendar";
import FormRow from "./FormRow";
import React, { useState } from "react";

function App() {
	const [questionState, setQuestionState] = useState([
		{ type: "number", question: "Number of pushups", answer: "", options: [] },
		{
			type: "boolean",
			question: "Had a long walk today",
			answer: "",
			options: ["True", "False"],
		},
		{
			type: "text",
			question: "One great thing that happened today",
			answer: "",
			options: [],
		},
		{
			type: "multiple-choice",
			question: "Today was a:",
			answer: "",
			options: ["Ok day", "Bad day", "Great day"],
		},
	]);
	return (
		<div className="App">
			<Nav />
			<div id="body-items">
				<Calendar />
				<form action="" method="POST">
					<div id="form-section">
						{questionState.map((question) => {
							return <FormRow question={question} />;
						})}
					</div>
					<div>
						<input type="submit" value="Save" id="save-button"></input>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
