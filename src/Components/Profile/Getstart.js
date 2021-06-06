import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { getContrastRatio } from "@material-ui/core";
// import Background from "../../images/workout.jpg";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import {getUserStateByEmailAPIMethod,updateUserByAPIMethod} from '../../api/client'
import "date-fns";

export default function Getstart(props) {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();

	today = yyyy + "-" + mm + "-" + dd;

	// backgroundImage: "url(" + Background + ")", backgroundSize: "100vw"

	// new user state to send to db
	const [newUserState, setNewUserState] = useState({
		name: props.userState.name,
		email: props.userState.email,
		imageUrl: props.userState.imageUrl,
		physicals: {
			height: { feet: "", inches: "" },
			weight: "",
			dob: today,
			gender: "",
		},
		isAdmin: false,
		address: {
			streetAddress: "",
			fullAddress: "",
			zip: "",
		},
	});

	// height feet change handler
	const heightFeetChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.physicals.height.feet = e.target.value;
		setNewUserState(currNewUserState);
	};
	// height Inches change handler
	const heightInchesChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.physicals.height.inches = e.target.value;
		setNewUserState(currNewUserState);
	};

	// gender change handler
	const genderChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.physicals.gender = e.target.value;
		setNewUserState(currNewUserState);
	};

	// date of birth change handler
	const dobChangeHandler = (date) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.physicals.dob = date;
		setNewUserState(currNewUserState);
	};

	// weight change handler
	const weightChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.physicals.weight = e.target.value;
		setNewUserState(currNewUserState);
	};

	// street address change handler
	const streetAddressChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.address.streetAddress = e.target.value;
		setNewUserState(currNewUserState);
	};

	// full address change handler
	const fullAddressChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.address.fullAddress = e.target.value;
		setNewUserState(currNewUserState);
	};

	// zip code change handler
	const zipCodeChangeHandler = (e) => {
		let currNewUserState = { ...newUserState };
		currNewUserState.address.zip = e.target.value;
		setNewUserState(currNewUserState);
	};

	// form submit handler
	const formSubmitHandler = async(e) => {
		e.preventDefault();
		console.log(newUserState);
		await updateUserByAPIMethod(newUserState).then( (r) =>{
			sessionStorage.removeItem('userData');
			console.log(typeof r);
			const userData = JSON.stringify(r);
			sessionStorage.setItem('userData',userData);
			window.location.href = '/';
		});
	}
	return (
		<div
			style={{
				textAlign: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
				backgroundColor: "#fffff",
			}}
		>
			{/* <meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			></meta> */}
			<React.Fragment>
				<Typography
					variant="h6"
					gutterBottom
					style={{
						fontFamily: "'Courier New', 'Consolas', 'Monaco'",
						fontWeight: "bold",
						paddingTop: "50px",
					}}
				>
					Welcome To Fitness++, {props.userState.name.split(" ")[0]}
				</Typography>
				<Typography
					variant="h6"
					gutterBottom
					style={{
						fontFamily: "'Courier New', 'Consolas', 'Monaco'",
						fontWeight: "bold",
					}}
				>
					Please provide the following information to get started:
				</Typography>
				<form onSubmit={formSubmitHandler}>
					<Grid
						container
						spacing={3}
						className="grid"
						style={{
							width: "500px",
							height: "600px",
							marginLeft: "auto",
							marginRight: "auto",
							textAlign: "left",
							marginTop: "10px",
						}}
					>
						<Grid item sm={6}>
							<Input
								id="standard-adornment-height"
								type="number"
								required
								value={newUserState.physicals.height.feet}
								onChange={(e) => heightFeetChangeHandler(e)}
								endAdornment={
									<InputAdornment position="end">Feet</InputAdornment>
								}
								aria-describedby="standard-height-feet-helper-text"
								inputProps={{
									"aria-label": "height-feet",
								}}
							/>
							<FormHelperText id="standard-height-feet-helper-text">
								Height
							</FormHelperText>
						</Grid>
						<Grid item sm={6}>
							<Input
								id="standard-adornment-height-inches"
								type="number"
								required
								value={newUserState.physicals.height.inches}
								onChange={(e) => heightInchesChangeHandler(e)}
								endAdornment={
									<InputAdornment position="end">Inches</InputAdornment>
								}
								aria-describedby="standard-height-inches-helper-text"
								inputProps={{
									"aria-label": "height-inches",
								}}
							/>
							<FormHelperText id="standard-height-feet-helper-text">
								Height
							</FormHelperText>
						</Grid>
						<Grid item sm={12}>
							<FormControl required style={{ width: "182px" }}>
								<InputLabel id="demo-simple-select-required-label">
									Gender
								</InputLabel>
								<Select
									labelId="demo-simple-select-required-label"
									id="demo-simple-select-required"
									required
									value={newUserState.physicals.gender}
									onChange={(e) => genderChangeHandler(e)}
								>
									<MenuItem value="male">Male</MenuItem>
									<MenuItem value="female">Female</MenuItem>
									<MenuItem value="others">Others</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									required
									margin="normal"
									id="date-picker-dialog"
									label="Date picker dialog"
									format="MM/dd/yyyy"
									value={newUserState.physicals.dob}
									onChange={dobChangeHandler}
									maxDate={new Date()}
									KeyboardButtonProps={{
										"aria-label": "date of birth",
									}}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item sm={12}>
							<Input
								id="standard-adornment-weight"
								type="number"
								required
								endAdornment={
									<InputAdornment position="end">Kg</InputAdornment>
								}
								aria-describedby="standard-weight-helper-text"
								inputProps={{
									"aria-label": "current weight",
								}}
							/>
							<FormHelperText id="standard-weight-helper-text">
								Current weight
							</FormHelperText>
						</Grid>
						<Grid item sm={6}>
							<TextField
								required
								style={{ width: "182px" }}
								id="streetAddress"
								name=" streetAddress"
								label="streetAddress"
								fullWidth
								value={newUserState.address.streetAddress}
								onChange={(e) => streetAddressChangeHandler(e)}
							/>
						</Grid>
						<Grid item sm={6}>
							<TextField
								required
								style={{ width: "182px" }}
								id="fullAddress"
								name="fullAddress"
								label="fullAddress"
								fullWidth
								value={newUserState.address.fullAddress}
								onChange={(e) => fullAddressChangeHandler(e)}
							/>
						</Grid>
						<Grid item sm={12}>
							<TextField
								required
								style={{ width: "182px" }}
								id="zip"
								name="zip"
								label="Zip code"
								type="number"
								fullWidth
								value={newUserState.address.zip}
								onChange={(e) => zipCodeChangeHandler(e)}
							/>
						</Grid>

						<Grid item xs={4}></Grid>
					</Grid>
					<Button
						variant="contained"
						type="submit"
						style={{
							color: "white",
							backgroundColor: "#f76b8a",
							fontSize: "12px",
						}}
						// onClick={(e) => {
						// 	e.preventDefault();
						// 	alert(JSON.stringify(newUserState));
						// }}
					>
						Submit
					</Button>
				</form>
			</React.Fragment>
		</div>
	);
}
