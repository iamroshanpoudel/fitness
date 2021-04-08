import React from "react";
import Nav from "../Nav/Nav";
import FormRowEdit from "./FormRowEdit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const Questions = (props) => {
	const addBtnHandler = () => {
		let currentState = [...props.questionState];
		let newQuestion = {
			type: "multiple-choice",
			question: "Add your question here",
			answer: "",
			options: ["Option 1", "Option 2", "Option 3"],
		};
		currentState.push(newQuestion);
		props.setQuestionState(currentState);
	};

	return (
		<div>
			<Nav />
			<div id="body-items">
				<div id="questions-title">
					<h2>Roshan's Questions</h2>
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
					</div>
					<div>
						<input
							type="submit"
							value="Save"
							id="save-button"
							onClick={() => alert("The form isn't connected to backend")}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Questions;
