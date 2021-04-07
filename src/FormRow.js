import React from "react";

const FormRow = (props) => {
	// Returns JSX with appropriate input options according to type
	const getInputFormat = () => {
		if (props.question.type === "text") {
			return <input type="text"></input>;
		} else if (props.question.type === "boolean") {
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
		} else if (props.question.type === "number") {
			return <input type="number"></input>;
		} else {
			return (
				<div className="multiple-selectors">
					{props.question.options.map((option) => {
						return (
							<div>
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
		<div className="form-row" key={props.index}>
			<div>{props.question.question}</div>
			<div>{getInputFormat()}</div>
		</div>
	);
};

export default FormRow;
