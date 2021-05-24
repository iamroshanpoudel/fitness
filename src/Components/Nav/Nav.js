import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import {GoogleLogin, useGoogleLogout }from 'react-google-login';
import { responseFailGoogle,logout} from "../../util/googleLogin";


const Nav = (props) => {
	const defaultImage =
		"https://res.cloudinary.com/roshanpoudel/image/upload/v1620734424/userProfileImages/defaultImage.svg";
	///////////////////////////////////////Google Login Function////////////////////////////////////////////////
	const [image, setImage] = useState();
	//sign out hook
	const { signOut, signOutLoaded } = useGoogleLogout({
		clientId:"547391741830-p8ru0i3urt5bhnt5nqief36ns3n20gqv.apps.googleusercontent.com",
		buttonText:"Logout",
		Style:"display:none",
		className:"logout",
		onLogoutSuccess:{logout}
	})
	//signIn response
	const responseGoogle = (response) => {
		document.getElementById('googleLogin').style= 'display:none'
		document.getElementById('googleHide').style ='display:block'
		setImage(response.profileObj.imageUrl);
		//Timing to renew access token
		let expired_at = 24 * 60 * 1000; //One Day
		//add expiration information
		response.profileObj.expired_at = expired_at;
		//store in session Storage
		sessionStorage.setItem('userData', JSON.stringify(response.profileObj))
		const timeOut = async () =>{
			const sessionClear = () =>sessionStorage.removeItem('userData');
			await setTimeout(sessionClear,expired_at);
			await setTimeout(signOut,expired_at);
		}
		//start Counting
		timeOut().then(r =>{ console.log("session started")});
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	return (
		<div id="nav">
			<div id="links">
				<h2 className="logo">Day Logger</h2>
				<NavLink to="/" activeClassName="active-link" className="alink" exact>
					Log Day
				</NavLink>
				<NavLink
					to="questions"
					activeClassName="active-link"
					className="alink"
					exact
				>
					Edit Questions
				</NavLink>
				<NavLink
					to="/log"
					activeClassName="active-link link"
					className="alink"
					exact
				>
					View Data
				</NavLink>
				<div id='googleLogin'>
					<GoogleLogin
						clientId="547391741830-p8ru0i3urt5bhnt5nqief36ns3n20gqv.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseFailGoogle}
						cookiePolicy={'single_host_origin'}
						className='login'
						isSignedIn={true}
					/>
				</div>
				<p id='failure'></p>
				<div id='googleHide'>
				<NavLink to="/profile" exact>
					{image === undefined ? (
						<img src={defaultImage} id="image" alt="User" />
					) : (
						<img src={image} id="image" alt="User" />
					)}
				</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Nav;
