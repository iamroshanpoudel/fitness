import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";

const FormRowEdit = (props) => {
	// Handles deleting of a question from Edit questions
	const deleteBtnHandler = (e, index) => {
		let currentState = [...props.questionState];
		currentState.splice(index, 1); // delete item from array
		props.setQuestionState(currentState);
	};

	// Handles changing of question as user types
	const editQuestionHandler = (e, index) => {
		let currentState = [...props.questionState];
		currentState[index].question = e.target.value;
		props.setQuestionState(currentState);
	};

	// Handles changing of question types
	const editQuestionTypeHandler = (e, index) => {
		console.log(e.target.value);
		let currentState = [...props.questionState];
		currentState[index].type = e.target.value;
		props.setQuestionState(currentState);
		console.log(props.questionState[index]);
	};

	return (
		<div className="form-row">
			<div>
				{
					<input
						type="text"
						value={props.question.question}
						onChange={(e) => editQuestionHandler(e, props.index)}
					/>
				}
			</div>
			<div className="form-row-second">
				<select
					name="answer-type"
					onChange={(e) => editQuestionTypeHandler(e, props.index)}
					value={props.question.type}
				>
					<option value="multiple-choice">Multiple Choice</option>
					<option value="text">Text</option>
					<option value="number">Number</option>
					<option value="boolean">Boolean</option>
				</select>
				<DeleteOutlineIcon onClick={(e) => deleteBtnHandler(e, props.index)} />
			</div>
		</div>
	);
};

export default FormRowEdit;
