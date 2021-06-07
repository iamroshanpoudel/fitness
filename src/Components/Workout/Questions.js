import React, { useState } from "react";
import Nav from "../Nav/Nav";
import FormRowEdit from "./FormRowEdit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { createQuestionAPIMethod } from "../../api/client.js";


import chroma from 'chroma-js';
import Select from 'react-select';
import { workoutOptions } from '../Select';
import WorkoutBar from "./WorkoutBar";
import UserworkOut from "./UserWorkout";
import { workOuts } from '../Select';
import { set } from "lodash";
import { WorkOutline } from "@material-ui/icons";
import { card } from "../../util/material-kit-react";

import Calendar from "../Calendar/Calendar";

const Questions = (props) => {
	// console.log(props);
	// Adds a question to the form
	const addBtnHandler = async () => {
		let currentState = [...props.questionState];
		let newQuestion = {
			answerType: "multiple-choice",
			text: "Add your question here",
			multipleChoiceResponses: ["Option 1", "Option 2", "Option 3"],
		};
		currentState.push(newQuestion);
		createQuestionAPIMethod(newQuestion, (response) => {
			console.log();
		});
		// change state after 50 ms to account for delay in db communication
		setTimeout(() => {
			props.setIsDataStale(!props.isDataState);
		}, 50);
	};

	// Selection Box

	const colourStyles = {
		control: styles => ({ ...styles, backgroundColor: 'white' }),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			const color = chroma(data.color);
			return {
				...styles,
				backgroundColor: isDisabled
					? null
					: isSelected
						? data.color
						: isFocused
							? color.alpha(0.1).css()
							: null,
				color: isDisabled
					? '#ccc'
					: isSelected
						? chroma.contrast(color, 'white') > 2
							? 'white'
							: 'black'
						: data.color,
				cursor: isDisabled ? 'not-allowed' : 'default',

				':active': {
					...styles[':active'],
					backgroundColor:
						!isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
				},
			};
		},
		multiValue: (styles, { data }) => {
			const color = chroma(data.color);
			return {
				...styles,
				backgroundColor: color.alpha(0.1).css(),
			};
		},
		multiValueLabel: (styles, { data }) => ({
			...styles,
			color: data.color,
		}),
		multiValueRemove: (styles, { data }) => ({
			...styles,
			color: data.color,
			':hover': {
				backgroundColor: data.color,
				color: 'white',
			},
		}),
	};

	const [exerciseList, setexerciseList] = useState([]);
	const [user, setUser] = useState([]);
	const [counter, setCounter] = useState(0)
	const [totalCal, setTotalCal] = useState(0);

	const handleChange = (value) => {
		if (value.length > counter) {
			setexerciseList([...exerciseList, value[counter].value])
			setCounter(counter + 1)
		}
		else {
			for (var p = counter - 1; p >= 0; p--) {
				setexerciseList([exerciseList[p] = ""])
			}
			var tmp = []
			for (var q = 0; q < value.length; q++) {
				tmp[q] = value[q].value
				setexerciseList(tmp)
			}
			setCounter(counter - 1)
		}
	}

	const handleClick = (value, color, calories) => {
		// setUser([...user, {value: {value}, color :{color}, calories:{calories}}])

		var tem = { value: value, color: color, calories: calories }
		console.log("type checking" + typeof (calories));
		setUser([...user, tem])
		console.log(user);
		var newCal = parseFloat(totalCal) + parseFloat(calories)
		setTotalCal(newCal.toFixed(2))
	}

	const handleUser = (index) => {
		var tepo = []
		var num = 0
		for (var y = 0; y < user.length; y++) {
			if (y != index) {
				tepo[num] = user[y]
				num++
			}
		}
		setUser(tepo)
		var tempCalorie = parseFloat(totalCal) - parseFloat(user[index].calories)
		setTotalCal(tempCalorie.toFixed(2))
		if (index == 0) {
			setTotalCal(0)
		}
	}

	const sendCaltoParent = (calorie, check, value) => {
		if (check == 1) {
			var tempCal = (parseFloat(totalCal) + parseFloat(calorie)).toFixed(2)
			setTotalCal(tempCal)
			var tempUser = []
			for (var m = 0; m < user.length; m++) {
				if (user[m].value == value) {
					var checking = parseFloat(user[m].calories) + calorie
					var checkingPar = String(checking)
					var tempList = { value: user[m].value, color: user[m].color, calories: checkingPar }
					tempUser[m] = tempList
				}
				else {
					tempUser[m] = user[m]
				}
			}
			setUser(tempUser)
			console.log(user);
		}
		else {
			var tempCal = (parseFloat(totalCal) - parseFloat(calorie)).toFixed(2)
			setTotalCal(tempCal)
			var tempUser = []
			for (var m = 0; m < user.length; m++) {
				if (user[m].value == value) {
					var checking = parseFloat(user[m].calories) - calorie
					var checkingPar = String(checking)
					var tempList = { value: user[m].value, color: user[m].color, calories: checkingPar }
					tempUser[m] = tempList
				}
				else {
					tempUser[m] = user[m]
				}
			}
			setUser(tempUser)
		}

	}

	// Calendar

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

	const [isFlipped, setIsFlipped] = useState(false); // card flip state
	const [dateState, setDateState] = useState(addDate());


	return (
		<div>
			<Nav userState={props.userState} loginState={props.loginState} loginStateFunction={props.loginStateFunction} />
			<div id="body-items">
				<div id="questions-title">
					{/* <h2>{props.userState.name}'s Questions</h2> */}
					{/*	<Calendar
						dateState={dateState}
						setDateState={setDateState}
						userState={props.userState}
						setUserState={props.setUserState}
						setIsUserLoading={props.setIsUserLoading}
						flipHandler={flipHandler}
					/> */}
				</div>

				<form action="#" method="">
					<div id="form-section">
						{props.questionState.map((question, index) => {
							return (
								<FormRowEdit
									question={question}
									questionState={props.questionState}
									setQuestionState={props.setQuestionState}
									key={index}
									index={index}
								/>
							);
						})}
						<h2>
							Choose the Workout You want
						</h2>

						<Select
							closeMenuOnSelect={false}
							isMulti
							options={workoutOptions}
							styles={colourStyles}
							placeholder={"Select the section..."}
							id="find"
							onChange={handleChange}
						/>


					</div>
				</form>
				<div style={{ width: "1200px", minHeight: "500px", marginTop: "40px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<div style={{ width: "500px", minHeight: "500px", backgroundColor: "#f8f5f1" }}>
						{workOuts.map((work, index) => {
							var a = work.exercises[0].value
							var b = work.exercises[1].value
							var c = work.exercises[2].value
							var d = work.exercises[3].value
							var aa = work.color
							var aaa = work.exercises[0].calories
							var bbb = work.exercises[1].calories
							var ccc = work.exercises[2].calories
							var ddd = work.exercises[3].calories

							if (exerciseList != null) {
								for (var t = 0; t < exerciseList.length; t++) {
									if (work.name == exerciseList[t]) {
										return (
											<div key={index}>
												<WorkoutBar value={a} color={aa} calories={aaa} onClick={() => handleClick(a, aa, aaa)} />
												<WorkoutBar value={b} color={aa} calories={bbb} onClick={() => handleClick(b, aa, bbb)} />
												<WorkoutBar value={c} color={aa} calories={ccc} onClick={() => handleClick(c, aa, ccc)} />
												<WorkoutBar value={d} color={aa} calories={ddd} onClick={() => handleClick(d, aa, ddd)} />
											</div>
										);
									}
								}
							}
						})}
					</div>
					<div style={{ position: "relative", width: "500px", minHeight: "500px", backgroundColor: "#f8f5f1" }}>
						{user.map((exercises, index) => {
							return (
								<div key={index}>
									<UserworkOut value={exercises.value} color={exercises.color} calories={exercises.calories} sendCaltoParent={sendCaltoParent}
										onDelete={() => handleUser(index)} />
								</div>
							);
						})}
						<div style={{ position: "absolute", bottom: "-100px", left: "20px", width: "450px", height: "75px", backgroundColor: "#39a6a3", borderRadius: "10px" }}>
							<h3>TotalCal Sum</h3>
							<h3 style={{ position: "absolute", left: "180px", bottom: "10px", fontSize: "25px" }}>{totalCal} Kcal</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;
