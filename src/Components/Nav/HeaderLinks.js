/*eslint-disable*/
import React, { useState } from "react";
import { Offline, Online } from "react-detect-offline";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";
import { GoogleLogin, useGoogleLogout } from "react-google-login";
import { responseFailGoogle, logout } from "../../util/googleLogin";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import logo from "../../images/logo-2.jpg";
// core components
import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button.js";
import { getUserStateByEmailAPIMethod } from "../../api/client";
import styles from "../../util/headerLinkStyle";
import headerStyle from "../../util/headerStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const defaultImage =
		"https://res.cloudinary.com/roshanpoudel/image/upload/v1620734424/userProfileImages/defaultImage.svg";

	///////////////////////////////////////Google Login Function////////////////////////////////////////////////
	const profile = JSON.parse(sessionStorage.getItem("userData"));
	const [image, setImage] = useState(
		profile == null ? defaultImage : profile.imageUrl
	);
	const [connection, setConnection] = useState(window.navigator.onLine);

	//sign out hook
	const { signOut, signOutLoaded } = useGoogleLogout({
		clientId:
			"547391741830-p8n5h72n96gqfedhp57rjbq82ggp00lj.apps.googleusercontent.com",
		buttonText: "Logout",
		Style: "display:none",
		className: "logout",
		onLogoutSuccess: { logout },
	});

	// const isLoggined = window.location.pathname === '/' ? true : false;
	//signIn response
	const responseGoogle = (response) => {
		// document.getElementById("googleLogin").style = "display:none";
		// document.getElementById("googleHide").style = "display:block";
		document.getElementById("headerList").style = "display:block";
		//store in session Storage
		getUserStateByEmailAPIMethod(response.profileObj.email).then((r) => {
			//Timing to renew access token
			let expired_at = 24 * 60 * 1000; //One Day
			//add expiration information
			if (r !== null) {
				setImage(r.imageUrl);
				sessionStorage.setItem("userData", JSON.stringify(r));
			} else {
				response.profileObj.expired_at = expired_at;
				setImage(response.profileObj.imageUrl);
				sessionStorage.setItem("userData", JSON.stringify(response.profileObj));
			}

			const timeOut = async () => {
				const sessionClear = () => sessionStorage.removeItem("userData");
				await setTimeout(sessionClear, expired_at);
				await setTimeout(signOut, expired_at);
			};
			//start Counting
			timeOut().then((result) => {
				console.log("session started");
			});
			props.loginStateFunction(true);

			if (r === null) {
				window.location.href = "/getStarted";
			}
		});
	};
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	const classes = useStyles();

	let color;
	if (connection) {
		color = "#19ce60";
	} else {
		color = "#ee0000";
	}
	let show = "none";
	if (profile != null) {
		if (profile.address != null) {
			show = "block";
		}
	}
	const isAdmin = profile == null ? false : profile.isAdmin;

	return (
		<>
			<div className="outer-menu">
				<input className="checkbox-toggle" type="checkbox" />
				<div className="hamburger">
					<div></div>
				</div>
				<div className="menu">
					<div>
						<div>
							<ul>
								<li>
									<a href="/calories">Log Calories</a>
								</li>
								<li>
									<a href="/questions">Log Workout</a>
								</li>
								<li>
									<a href="/viewdata">View Data</a>
								</li>
								{isAdmin ? (
									<li>
										<a href="/admin">Admin</a>
									</li>
								) : (
									<></>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<NavLink to="/" activeClassName="active-link" className="logo alink">
				<h2 className="logo-text">Fitness++</h2>
			</NavLink>
			<List className={classes.list} id="headerList" style={{ display: show }}>
				<ListItem className={classes.listItem}>
					<Button
						href="/calories"
						color="transparent"
						className={classes.navLink}
					>
						Log Calories
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href="/questions"
						color="transparent"
						className={classes.navLink}
					>
						Log Workout
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						color="transparent"
						href="/viewdata"
						className={classes.navLink}
					>
						View Data
					</Button>
				</ListItem>
				{isAdmin ? (
					<ListItem className={classes.listItem}>
						<Button
							color="transparent"
							href="/admin"
							className={classes.navLink}
						>
							Admin Page
						</Button>
					</ListItem>
				) : (
					<></>
				)}
			</List>
			{sessionStorage.getItem("userData") === null ? (
				<div id="googleLogin" className="loginButton">
					<GoogleLogin
						clientId="547391741830-p8n5h72n96gqfedhp57rjbq82ggp00lj.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseFailGoogle}
						cookiePolicy={"single_host_origin"}
						className="login"
						isSignedIn={true}
						id="google"
						style={{ width: "100px" }}
					/>
					<p id="failure"></p>
				</div>
			) : (
				<div id="googleHide" style={{ display: "block" }}>
					<a href="./profile">
						<Online enabled={true} interval={5000}>
							<div
								className="dot"
								style={{
									backgroundColor: "#19ce60",
									boxShadow: "0px 0px 9px #19ce60",
								}}
							/>
						</Online>
						<Offline enabled={true} interval={5000}>
							<div
								className="dot"
								style={{
									backgroundColor: "#ee0000",
									boxShadow: "0px 0px 9px #ee0000",
								}}
							/>
						</Offline>
						{/*<div className="dot" style={{backgroundColor: color,boxShadow: '0px 0px 9px '+ color +'' }}/>*/}
						<img src={image} id="image" alt="User" />
					</a>
				</div>
			)}
		</>
	);
}
