import React from "react";
import Nav from "../Nav/Nav";
import {
	uploadImageToCloudinaryAPIMethod,
	updateUserByAPIMethod,
} from "../../api/client";

import { GoogleLogout } from "react-google-login";
import { logout } from "../../util/googleLogin";

import TextField from '@material-ui/core/TextField';



const Profile = (props) => {
	const defaultImage =
		"https://res.cloudinary.com/roshanpoudel/image/upload/v1620734424/userProfileImages/defaultImage.svg";

	const onSubmitHandler = (e) => {
		e.preventDefault();
		updateUserByAPIMethod(props.userState, (response) => {
			console.log();
		});
	};
	const userData = JSON.parse(sessionStorage.getItem('userData'));

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
					profileImageURL: response.url,
				};
				props.setUserState(updatedUser);
				console.log(updatedUser);
				// Now we want to make sure this is updated on the server – either the
				// user needs to click the submit button, or we could trigger the server call here
			});
		}
	};

	const removeImageHandler = (e) => {
		e.preventDefault();
		const updatedUser = {
			...props.userState,
			profileImageURL: defaultImage,
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

	const streetAddressChangeHandler = (e) => {
		const updatedUser = {
			...props.userState,
		};
		updatedUser.address[0].streetAddress = e.target.value;
		props.setUserState(updatedUser);
	};

	const fullAddressChangeHandler = (e) => {
		const updatedUser = {
			...props.userState,
		};
		updatedUser.address[0].fullAddress = e.target.value;
		props.setUserState(updatedUser);
	};

	return (
		<div>
			<Nav userState={props.userState} />
			<div id="body-items">
				<div id="questions-title">
					<h2>Edit Your Profile</h2>
				</div>
				<div id="form-section">
					<form onSubmit={onSubmitHandler}>
						<div className="form-row">
							<div>
								<h3>Profile Photo</h3>
							</div>
							<div id="edit-image">
								<img
									src={userData.imageUrl || defaultImage}
									id="image"
									alt="User"
								/>
								<label htmlFor="file">Choose new image</label>
								<input
									type="file"
									name="file"
									accept="image/*"
									onChange={imageChangeHandler}
									id="file"
								/>

								<div className="underlined" onClick={removeImageHandler}>
									Remove Image
								</div>
							</div>
						</div>
						<div className="form-row">
							{/* <input
								type="text"
								name="user-name"
								value={userData.name || ""}
								placeholder="Your Name"
								onChange={nameChangeHandler}
								required
							></input> */}

							<TextField
								id="email"
								name="email"
								label="Name"
								value={userData.name || ""}
								onChange={nameChangeHandler}
								required
							/>

						</div>
						<div className="form-row">

							{/* <input
								type="email"
								name="user-email"
								className="input"
								value={userData.email || ""}
								placeholder="Your Email Address"
								onChange={emailChangeHandler}
								required
							></input> */}

							<TextField
								style={{ width: "300px" }}
								id="email"
								name="user-email"
								label="Email"
								value={userData.email || ""}
								onChange={emailChangeHandler}
								required
							/>

						</div>
						<div className="form-row">
							{/* <div>
								<h3>Address</h3>
							</div>
							<div>
								<input
									type="text"
									name="street-addr"
									placeholder="Street Address"
									// value={props.userState.address[0].streetAddress || ""}
									onChange={streetAddressChangeHandler}
									required
								></input>
							</div> */}

							{/* <div className="form-row-second">
								<input
									type="text"
									name="street-addr"
									placeholder="Full Address"
									// value={props.userState.address[0].fullAddress || ""}
									onChange={fullAddressChangeHandler}
									required
								></input>
							</div> */}

							<TextField
								style={{marginRight:"10px"}}
								id="street-addr"
								name="street-addr"
								label="Street Address"
								// value={props.userState.address[0].streetAddress || ""}
								onChange={streetAddressChangeHandler}
								required
							/>

							<TextField
								id="Zip code"
								name="street-addr"
								label="Full Address"
								// value={props.userState.address[0].fullAddress || ""}
								onChange={fullAddressChangeHandler}
								required
							/>

						</div>

						<div className="form-row">
							<TextField
								id="Zip code"
								name="Zip code"
								label="Zip code"
								value={""}
								// onChange={}
								required
							/>
						</div>

						<div className="form-row">
							<TextField
								id="Height"
								name="Height"
								label="Height"
								value={""}
								// onChange={}
								required
							/>
						</div>

						<div className="form-row">
							<TextField
								id="Weight"
								name="Weight"
								label="Weight"
								value={""}
								// onChange={}
								required
							/>
						</div>

						<div className="form-row">
							<TextField
								id="Date_of_Birth"
								name="Date of Birth"
								label="Date of Birth"
								value={""}
								// onChange={}
								required
							/>
						</div>

						<div className="form-row">
							<TextField
								id="Gender"
								name="Gender"
								label="Gender"
								value={""}
								// onChange={}
								required
							/>
						</div>

						<div id="profile-logout">
							<input type="submit" value="Save" className="save-button" />
							<GoogleLogout
								clientId="547391741830-p8n5h72n96gqfedhp57rjbq82ggp00lj.apps.googleusercontent.com"
								buttonText="Logout"
								Style="display:none"
								className="logout"
								onLogoutSuccess={logout}
							>
							</GoogleLogout>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Profile;
