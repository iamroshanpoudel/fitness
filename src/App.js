import "./App.css";
import Nav from "./Nav";
import Log from "./Log";
import React, { useState } from "react";
import Questions from "./Questions";
import { Route, Switch } from "react-router-dom";

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
			<Switch>
				<Route
					path="/"
					exact
					render={(props) => <Log {...props} questionState={questionState} />}
				/>
				<Route
					path="/questions"
					exact
					render={(props) => (
						<Questions
							{...props}
							questionState={questionState}
							setQuestionState={setQuestionState}
						/>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
