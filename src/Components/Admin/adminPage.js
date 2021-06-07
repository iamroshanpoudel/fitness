import React, { useState } from "react";
import Nav from "../Nav/Nav";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
	getAllUsersAPIMethod,
	deleteUserByEmailAPIMethod,
	deleteWorkoutRecordAPIMethod,
	deleteIntakeRecordAPIMethod,
	numberOfFoodRecordAPIMethod,
} from "../../api/client";
import DeleteIcon from "@material-ui/icons/Delete";
import deleteIcon from "../../images/delete.png";
const AdminPage = (props) => {
	let [userData, setUserData] = useState([]);
	let [count, setCount] = useState([]);
	let counts = [];
	let index = -1;
	if (userData.length <= 0) {
		getAllUsersAPIMethod().then((r) => {
			r.forEach((e) => {
				console.log(e._id);
				numberOfFoodRecordAPIMethod(e._id).then((r) => {
					counts.push(r);
				});
			});
			r.count = counts;
			setUserData(r);
		});
	}
	console.log(userData);

	const deleteFunction = (e) => {
		deleteUserByEmailAPIMethod(e.target.attributes.item(1).value).then((r) => {
			console.log(r);
			//     deleteIntakeRecordAPIMethod(e.target.attributes.item(2).value).then( (r) =>{
			//         console.log(r);
			//         deleteWorkoutRecordAPIMethod(e.target.attributes.item(2).value).then( (r)=>{
			//             console.log(r);
			//         }
			//     })
			// })
		});
	};
	return (
		<>
			<Nav
				userState={props.userState}
				loginState={props.loginState}
				loginStateFunction={props.loginStateFunction}
			/>
			<table
				cellSpacing="0"
				cellPadding="0"
				className="user-table"
				style={{ marginLeft: "18%", marginTop: "50px" }}
			>
				<tr id="user-table-top">
					<th>
						<h3>Name</h3>
					</th>
					<th>
						<h3>Email</h3>
					</th>
					{/* <th>
						<h3>Number Of Responses</h3>
					</th> */}
					<th>
						<h3>Delete User</h3>
					</th>
				</tr>
				{/*Data table*/}
				{userData.map((e) => {
					index++;
					console.log(index);
					return (
						<tr>
							<th>
								<h5>{e.name}</h5>
							</th>
							<th>
								<h5>{e.email}</h5>
							</th>
							<th>
								<h5>10</h5>
							</th>

							<th>
								<img
									src={deleteIcon}
									style={{ width: "30px" }}
									onClick={deleteFunction}
									value={e.email}
									userid={e._id}
								/>
							</th>
						</tr>
					);
				})}
				{/*End*/}
			</table>
		</>
	);
};
export default AdminPage;
