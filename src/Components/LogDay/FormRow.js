import React from "react";

const FormRow = (props) => {
	// Returns JSX with appropriate input options according to type
	const getInputFormat = () => {
		if (props.question.answerType === "text") {
			return <input type="text"></input>;
		} else if (props.question.answerType === "boolean") {
			return (
				<div className="boolean-selectors">
					<div>
						<input type="radio" value="True" name="radio-btn" />
						True
					</div>
					<div>
						<input type="radio" value="False" name="radio-btn" />
						False
					</div>
				</div>
			);
		} else if (props.question.answerType === "number") {
			return <input type="number"></input>;
		} else {
			return (
				<div className="multiple-selectors">
					{props.question.multipleChoiceResponses.map((option, index) => {
						return (
							<div key={index}>
								<input type="radio" value={option} name="radio-btn" />
								{option}
							</div>
						);
					})}
				</div>
			);
		}
	};
	return (
		<div className="form-row">
			<div>{props.question.text}</div>
			<div>{getInputFormat()}</div>
		</div>
	);
};

export default FormRow;
