import "./App.css";
import Log from "./Components/LogDay/Log";
import React, { useState, useEffect } from "react";
import Questions from "./Components/EditQuestions/Questions";
import { Route, Switch } from "react-router-dom";
import { getQuestionsAPIMethod, getUserByAPIMethod } from "./api/client.js";
import Data from "./Components/Data";
import Profile from "./Components/Profile/Profile";
import {isLoggedIn, loginAlert} from "./util/googleLogin";
import Main from "./Components/Main";

function App() {
	const defaultUser = {
		name: "",
		email: "",
		address: [
			{
				streetAddress: "",
				fullAddress: "",
			},
		],
		profileImageURL: "",
	};
	const [questionState, setQuestionState] = useState([]);
	const [isDataState, setIsDataStale] = useState(false);
	const [userState, setUserState] = useState(defaultUser);

	// useEffect(() => {
	// 	getQuestionsAPIMethod((questions) => {
	// 		setQuestionState(questions);
	// 	});
	// 	getUserByAPIMethod((user) => {
	// 		setUserState(user);
	// 	});
	// }, [isDataState]);

	return (
		<div className="App">
			<Switch>
				<Route 
					path="/main" 
					exact 
					render={(props) => (
						<Main {...props}
						/>
					)} 
				/>
				<Route
					path="/"
					exact
					render={(props) => (
						<Log
							{...props}
							questionState={questionState}
							userState={userState}
							setUserState={setUserState}
						/>
					)}
				/>
				<Route
					path="/questions"
					exact
					render={(props) => (
						isLoggedIn() ?
						<Questions
							{...props}
							questionState={questionState}
							setQuestionState={setQuestionState}
							isDataState={isDataState}
							setIsDataStale={setIsDataStale}
							userState={userState}
							setUserState={setUserState}
						/>
						:  loginAlert()
					)}
				/>
				<Route
					path="/log"
					exact
					render={(props) => (
						isLoggedIn() ?
						<Data
							{...props}
							questionState={questionState}
							userState={userState}
							setUserState={setUserState}
						/>
						: loginAlert()
					)}
				/>
				<Route
					path="/profile"
					exact
					render={(props) => (
						isLoggedIn() ?
						<Profile
							{...props}
							userState={userState}
							setUserState={setUserState}
							isDataState={isDataState}
							setIsDataStale={setIsDataStale}
						/>
						:  loginAlert()
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
