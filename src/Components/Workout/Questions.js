import React, { useState } from "react";
import Nav from "../Nav/Nav";
import FormRowEdit from "./FormRowEdit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { createQuestionAPIMethod } from "../../api/client.js";

import chroma from "chroma-js";
import Select from "react-select";
import { workoutOptions } from "../Select";
import WorkoutBar from "./WorkoutBar";
import { workOuts } from "../Select";
import { set } from "lodash";
import { WorkOutline } from "@material-ui/icons";

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

	const colourStyles = {
		control: (styles) => ({ ...styles, backgroundColor: "white" }),
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
					? "#ccc"
					: isSelected
					? chroma.contrast(color, "white") > 2
						? "white"
						: "black"
					: data.color,
				cursor: isDisabled ? "not-allowed" : "default",

				":active": {
					...styles[":active"],
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
			":hover": {
				backgroundColor: data.color,
				color: "white",
			},
		}),
	};

	const [test, setTest] = useState([]);
	const [counter, setCounter] = useState(0);

	const handleChange = (value) => {
		if (value.length > counter) {
			setTest([...test, value[counter].value]);
			setCounter(counter + 1);
		} else {
			console.log(value);
			console.log("counter" + counter);
			for (var p = counter - 1; p >= 0; p--) {
				setTest([(test[p] = "")]);
			}
			console.log("during" + test);
			var tmp = [];
			for (var q = 0; q < value.length; q++) {
				tmp[q] = value[q].value;
				setTest(tmp);
			}
			console.log("a" + tmp);
			setCounter(counter - 1);
			// setTest(test[value.length] = "")
			// setCounter(counter - 1)
			// setTest(test[value.length] = "null")
			// setCounter(counter - 1)
		}
	};

	const check = (id) => {
		var a = document.getElementById("find").children[1].children[0].children[0];
		// if (.innerHTML == "Select the section...") {
		// }
		// else {
		// 	setTest([...test, document.getElementById("find").children[1].children[0].children[counter].children[0].innerHTML])
		// 	console.log(document.getElementById("find").children[1].children[0].children[counter].children[0].innerHTML)
		// 	setCounter(counter + 1)
		// 	console.log("test here" + test)
		// }
		console.log(a);
	};

	return (
		<div>
			<Nav
				userState={props.userState}
				loginState={props.loginState}
				loginStateFunction={props.loginStateFunction}
			/>
			<div id="body-items">
				<div id="questions-title">
					{/* <h2>{props.userState.name}'s Questions</h2> */}
					<AddCircleOutlineIcon id="add-btn" onClick={addBtnHandler} />
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
						<h2>Choose the Workout You want</h2>

						<Select
							closeMenuOnSelect={false}
							isMulti
							options={workoutOptions}
							styles={colourStyles}
							placeholder={"Select the section..."}
							id="find"
							onChange={handleChange}
							// onChange={(value) => console.log(value)}

							// onChange={() => {
							// 	if (document.getElementById("find").children[1].children[0].children[0].innerHTML == "Select the section...") {
							// 	}
							// 	else {
							// 		setTest([...test, document.getElementById("find").children[1].children[0].children[counter].children[0].innerHTML])
							// 		console.log(document.getElementById("find").children[1].children[0].children[counter].children[0].innerHTML)
							// 		setCounter(counter + 1)
							// 		console.log("test here" + test)
							// 	}
							// }
							// }
							// document.getElementsByClassName(" css-g1d714-ValueContainer"
							// console.log(document.getElementById("find").children[1].children[0].children[0])
						/>
					</div>
				</form>
				<div
					style={{
						width: "1200px",
						minHeight: "500px",
						marginTop: "40px",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					+{" "}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "500px",
							minHeight: "500px",
							backgroundColor: "#f8f5f1",
						}}
					>
						{workOuts.map((work, index) => {
							var a = work.exercises[0].value;
							var b = work.exercises[1].value;
							var c = work.exercises[2].value;
							console.log(test);
							console.log(counter);
							var aa = work.color;
							var aaa = work.calories;
							if (test != null) {
								for (var t = 0; t < test.length; t++) {
									if (work.name == test[t]) {
										return (
											<div key={index}>
												<WorkoutBar value={a} color={aa} calories={aaa} />
												<WorkoutBar value={b} color={aa} calories={aaa} />
												<WorkoutBar value={c} color={aa} calories={aaa} />
											</div>
										);
									}
								}
							}
						})}
					</div>
					<div
						style={{
							width: "500px",
							height: "500px",
							backgroundColor: "#f8f5f1",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Questions;
