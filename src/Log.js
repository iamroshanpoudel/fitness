import React from "react";
import Nav from "./Nav";
import Calendar from "./Calendar";
import FormRow from "./FormRow";

const Log = (props) => {
	return (
		<div>
			<Nav />
			<div id="body-items">
				<Calendar />
				<form action="" method="POST">
					<div id="form-section">
						{props.questionState.map((question) => {
							return <FormRow question={question} />;
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

export default Log;
