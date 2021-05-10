import React from "react";
import Nav from "../Nav/Nav";
import Image from "../../images/image.jpeg";

const Profile = () => {
	return (
		<div>
			<Nav />
			<div id="body-items">
				<div id="questions-title">
					<h2>Edit Profile</h2>
				</div>
				<div id="form-section">
					<div className="form-row">
						<div>
							<h3>Profile Photo</h3>
						</div>
						<div id="edit-image">
							<img src={Image} id="image" alt="User Image" />
							<input
								type="submit"
								value="Choose new image"
								id="image-chooser-btn"
							/>

							<a className="underlined">Remove Image</a>
						</div>
					</div>
					<div className="form-row">
						<h3>Name</h3>
						<input
							type="text"
							name="user-name"
							placeholder="Your Name"
							required
						></input>
					</div>
					<div className="form-row">
						<h3>Email</h3>
						<input
							type="text"
							name="user-email"
							placeholder="Your Email Address"
							required
						></input>
					</div>
					<div className="form-row">
						<div>
							<h3>Address</h3>
						</div>
						<div>
							<input
								type="text"
								name="street-addr"
								placeholder="Street Address"
								required
							></input>
						</div>

						<div className="form-row-second">
							<input
								type="text"
								name="street-addr"
								placeholder="Full Address"
								required
							></input>
						</div>
					</div>
					<input type="submit" value="Save" className="save-button" />
				</div>
			</div>
		</div>
	);
};

export default Profile;
