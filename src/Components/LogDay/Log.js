import React from "react";
import Nav from "../Nav/Nav";
import Calendar from "./Calendar";
import FormRow from "./FormRow";

const Log = (props) => {
	return (
		<div>
			<Nav />
			<div id="body-items">
				<Calendar />
				<form action="#" method="">
					<div id="form-section">
						{props.questionState.map((question, index) => {
							return <FormRow question={question} key={index} />;
						})}
					</div>
					<div>
						<input
							type="submit"
							value="Save"
							id="save-button"
							onClick={() => alert("The form isn't connected to backend!!")}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Log;
