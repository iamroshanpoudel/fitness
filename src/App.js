import "./App.css";
import Log from "./Components/LogDay/Log";
import React, { useState, useEffect } from "react";
import Questions from "./Components/EditQuestions/Questions";
import { Route, Switch } from "react-router-dom";
import { getQuestionsAPIMethod } from "./api/client.js";
import Data from "./Components/Data";
import Profile from "./Components/Profile/Profile";

function App() {
	const [questionState, setQuestionState] = useState([]);
	const [isDataState, setIsDataStale] = useState(false);

	useEffect(() => {
		getQuestionsAPIMethod((questions) => {
			setQuestionState(questions);
		});
	}, [isDataState]);

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
							isDataState={isDataState}
							setIsDataStale={setIsDataStale}
						/>
					)}
				/>
				<Route
					path="/log"
					exact
					render={(props) => <Data {...props} questionState={questionState} />}
				/>
				<Route path="/profile" exact component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
