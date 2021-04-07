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
		let currentState = [...props.questionState];
		currentState[index].type = e.target.value;
		if (
			e.target.value === "multiple-choice" &&
			currentState[index].options.length !== 3
		) {
			currentState[index].options = ["Option 1", "Option 2", "Option 3"];
		}
		props.setQuestionState(currentState);
	};
	// Handles changing of options for mcq types
	const mcqOptionChangeHandler = (e, indexArray, indexOption) => {
		let currentState = [...props.questionState];
		currentState[indexArray].options[indexOption] = e.target.value;
		props.setQuestionState(currentState);
	};

	const getQuestionOptions = () => {
		if (props.question.type === "multiple-choice") {
			return (
				<div>
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
						<DeleteOutlineIcon
							onClick={(e) => deleteBtnHandler(e, props.index)}
						/>
					</div>

					<div className="multiple-selectors">
						{props.question.options.map((option, index) => {
							return (
								<div className="multiple-radio-selectors" key={index}>
									<input
										type="radio"
										value={option}
										className="radio-btn-disabled"
										name="mcq-option-value"
									/>
									<input
										type="text"
										value={option}
										className="radio-text"
										onChange={(e) =>
											mcqOptionChangeHandler(e, props.index, index)
										}
									/>
								</div>
							);
						})}
					</div>
				</div>
			);
		} else {
			return (
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
					<DeleteOutlineIcon
						onClick={(e) => deleteBtnHandler(e, props.index)}
					/>
				</div>
			);
		}
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
			{getQuestionOptions()}
		</div>
	);
};

export default FormRowEdit;
