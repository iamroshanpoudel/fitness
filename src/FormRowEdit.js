import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";

const FormRowEdit = (props) => {
	// Takes a question type and returns JSX for select options with
	// given input type selected (at the top)
	const getOptionTypes = (questionType) => {
		let questionTypes = ["number", "text", "boolean", "multiple-choice"];
		switch (questionType) {
			case "number":
				return (
					<div className="form-row-second">
						<select name="answer-type">
							<option value="number">Number</option>
							<option value="text">Text</option>
							<option value="boolean">Boolean</option>
							<option value="multiple-choice">Multiple Choice</option>
						</select>
						<DeleteOutlineIcon />
					</div>
				);
			case "text":
				return (
					<div className="form-row-second">
						<select name="answer-type">
							<option value="text">Text</option>
							<option value="number">Number</option>
							<option value="boolean">Boolean</option>
							<option value="multiple-choice">Multiple Choice</option>
						</select>
						<DeleteOutlineIcon />
					</div>
				);
			case "boolean":
				return (
					<div className="form-row-second">
						<select name="answer-type">
							<option value="boolean">Boolean</option>
							<option value="text">Text</option>
							<option value="number">Number</option>
							<option value="multiple-choice">Multiple Choice</option>
						</select>
						<DeleteOutlineIcon />
					</div>
				);
			default:
				return (
					<div className="form-row-second">
						<select name="answer-type">
							<option value="multiple-choice">Multiple Choice</option>
							<option value="text">Text</option>
							<option value="number">Number</option>
							<option value="boolean">Boolean</option>
						</select>
						<DeleteOutlineIcon />
					</div>
				);
		}
	};

	// Returns JSX with appropriate input options selected according to type
	const getQuestionType = () => {
		return getOptionTypes(props.question.type);
	};
	return (
		<div className="form-row">
			<div>
				{
					<input
						type="text"
						value={props.question.question}
						onChange={() => alert("You are typing")}
					/>
				}
			</div>
			<div>{getQuestionType()}</div>
		</div>
	);
};

export default FormRowEdit;
