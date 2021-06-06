import React from "react";
import Nav from "../Nav/Nav";
import {
	uploadImageToCloudinaryAPIMethod,
	updateUserByAPIMethod,
} from "../../api/client";

import { GoogleLogout } from "react-google-login";
import { logout } from "../../util/googleLogin";

import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import CustomizedSnackbars from "../../util/Alert";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";

import "date-fns";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const Profile = (props) => {
	const defaultImage =
		"https://res.cloudinary.com/roshanpoudel/image/upload/v1620734424/userProfileImages/defaultImage.svg";

	const onSubmitHandler = (e) => {
		e.preventDefault();
		updateUserByAPIMethod(props.userState, (response) => {
			window.location.reload();
		});
	};

	const imageChangeHandler = async (e) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			const selectedFile = e.target.files[0];
			const formData = new FormData();

			const unsignedUploadPreset = "jackSparrow";
			formData.append("file", selectedFile);
			formData.append("upload_preset", unsignedUploadPreset);

			await uploadImageToCloudinaryAPIMethod(formData, (response) => {
				console.log("Upload success");

				// Now the URL gets saved to the author
				const updatedUser = {
					...props.userState,
					imageUrl: response.url,
				};
				props.setUserState(updatedUser);
				console.log(updatedUser);
			});
		}
	};

	const removeImageHandler = (e) => {
		e.preventDefault();
		const updatedUser = {
			...props.userState,
			imageUrl: defaultImage,
		};
		props.setUserState(updatedUser);
	};

	const nameChangeHandler = (e) => {
		const updatedUser = {
			...props.userState,
			name: e.target.value,
		};
		props.setUserState(updatedUser);
	};

	const emailChangeHandler = (e) => {
		const updatedUser = {
			...props.userState,
			email: e.target.value,
		};
		props.setUserState(updatedUser);
	};

	// height feet change handler
	const heightFeetChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.physicals.height.feet = e.target.value;
		props.setUserState(updatedUser);
	};
	// height Inches change handler
	const heightInchesChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.physicals.height.inches = e.target.value;
		props.setUserState(updatedUser);
	};

	// gender change handler
	const genderChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.physicals.gender = e.target.value;
		props.setUserState(updatedUser);
	};

	// date of birth change handler
	const dobChangeHandler = (date) => {
		let updatedUser = { ...props.userState };
		updatedUser.physicals.dob = date;
		props.setUserState(updatedUser);
	};

	// weight change handler
	const weightChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.physicals.weight = e.target.value;
		props.setUserState(updatedUser);
	};

	// street address change handler
	const streetAddressChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.address.streetAddress = e.target.value;
		props.setUserState(updatedUser);
	};

	// full address change handler
	const fullAddressChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.address.fullAddress = e.target.value;
		props.setUserState(updatedUser);
	};

	// zip code change handler
	const zipCodeChangeHandler = (e) => {
		let updatedUser = { ...props.userState };
		updatedUser.address.zip = e.target.value;
		props.setUserState(updatedUser);
	};
	// style for card
	const useStyles = makeStyles((theme) => ({
		root: {
			width: "50vw",
		},
		rowElement: {
			padding: "20px",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		large: {
			width: theme.spacing(7),
			height: theme.spacing(7),
		},
	}));
	const classes = useStyles();

	return (
		<div>
			<Nav
				userState={props.userState}
				loginState={props.loginState}
				loginStateFunction={props.loginStateFunction}
			/>

			<div id="body-items">
				<Card className={classes.root} variant="outlined">
					<CardContent>
						<div id="questions-title">
							<h2>Edit Your Profile</h2>
						</div>
						<div id="form-section">
							<form onSubmit={onSubmitHandler}>
								<div>
									<h3>Profile Photo</h3>
								</div>
								<div className={classes.rowElement} style={{}}>
									<input accept="image/*" id="image-button-file" type="file" />
									<label htmlFor="image-button-file">
										<Avatar
											alt={props.userState.name}
											src={props.userState.imageUrl}
											className={classes.large}
										/>
									</label>

									<input
										accept="image/*"
										id="icon-button-file"
										type="file"
										onChange={imageChangeHandler}
									/>
									<label htmlFor="icon-button-file">
										<Button variant="contained" component="span">
											<input
												accept="image/*"
												id="icon-button-file"
												type="file"
											/>
											Upload New Image
										</Button>
									</label>

									<div className="underlined" onClick={removeImageHandler}>
										Remove Image
									</div>
								</div>
								<div className={classes.rowElement}>
									<TextField
										id="name"
										style={{ width: "300px" }}
										name="Name"
										label="Name"
										value={props.userState.name}
										onChange={nameChangeHandler}
										required
									/>
									<TextField
										style={{ width: "300px" }}
										id="email"
										name="user-email"
										label="Email"
										value={props.userState.email}
										onChange={emailChangeHandler}
										required
									/>
									<FormControl required style={{ width: "182px" }}>
										<InputLabel id="demo-simple-select-required-label">
											Gender
										</InputLabel>
										<Select
											labelId="demo-simple-select-required-label"
											id="demo-simple-select-required"
											required
											value={props.userState.physicals.gender}
											onChange={(e) => genderChangeHandler(e)}
										>
											<MenuItem value="male">Male</MenuItem>
											<MenuItem value="female">Female</MenuItem>
											<MenuItem value="others">Others</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div className={classes.rowElement}>
									<TextField
										style={{ width: "300px" }}
										id="street-addr"
										name="street-addr"
										label="Street Address"
										value={props.userState.address.streetAddress}
										onChange={streetAddressChangeHandler}
										required
									/>
									<TextField
										id="Full-addr"
										style={{ width: "300px" }}
										name="Full-addr"
										type="text"
										label="Full Address"
										value={props.userState.address.fullAddress}
										onChange={fullAddressChangeHandler}
										required
									/>
									<TextField
										id="Zip code"
										name="Zip code"
										label="Zip code"
										value={props.userState.address.zip}
										onChange={zipCodeChangeHandler}
										required
									/>
								</div>
								<div className={classes.rowElement}>
									<Input
										id="standard-adornment-height"
										type="number"
										required
										value={props.userState.physicals.height.feet}
										onChange={heightFeetChangeHandler}
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
									<Input
										id="standard-adornment-height-inches"
										type="number"
										required
										value={props.userState.physicals.height.inches}
										onChange={heightInchesChangeHandler}
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

									<TextField
										id="Weight"
										name="Weight"
										label="Weight (Kg)"
										type="number"
										value={props.userState.physicals.weight}
										onChange={weightChangeHandler}
										required
									/>
								</div>
								<div className={classes.rowElement}>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<KeyboardDatePicker
											required
											margin="normal"
											id="date-picker-dialog"
											label="Date of birth"
											format="MM/dd/yyyy"
											value={props.userState.physicals.dob}
											onChange={dobChangeHandler}
											maxDate={new Date()}
											KeyboardButtonProps={{
												"aria-label": "date of birth",
											}}
										/>
									</MuiPickersUtilsProvider>
								</div>

								<div id="profile-logout">
									<GoogleLogout
										clientId="547391741830-p8n5h72n96gqfedhp57rjbq82ggp00lj.apps.googleusercontent.com"
										buttonText="Logout"
										Style="display:none"
										className="logout"
										onLogoutSuccess={logout}
									></GoogleLogout>

									{CustomizedSnackbars("success", "Saved to database")}
								</div>
							</form>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Profile;
