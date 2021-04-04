import React from "react";
import Nav from "./Nav";
import FormRowEdit from "./FormRowEdit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const Questions = (props) => {
	return (
		<div>
			<Nav />
			<div id="body-items">
				<div id="questions-title">
					<h2>Roshan's Questions</h2>
					<AddCircleOutlineIcon id="add-btn" />
				</div>

				<form action="" method="POST">
					<div id="form-section">
						{props.questionState.map((question) => {
							return <FormRowEdit question={question} />;
						})}
					</div>
					<div>
						<input type="submit" value="Save" id="save-button"></input>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Questions;
