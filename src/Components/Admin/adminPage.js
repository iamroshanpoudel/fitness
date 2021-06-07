import React,{useState} from "react";
import Nav from "../Nav/Nav";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {getAllUsersAPIMethod} from "../../api/client"
import DeleteIcon from "@material-ui/icons/Delete";

const AdminPage = (props) => {
    console.log(props);

    let [userData, setUserData] = useState([]);
    getAllUsersAPIMethod().then( (r) =>{
        setUserData(r);
    })

    return (
    <>
        <Nav
            userState={props.userState}
            loginState={props.loginState}
            loginStateFunction={props.loginStateFunction}
        />
        <table cellSpacing="0" cellPadding="0" className="user-table" style={{marginLeft: "18%",marginTop: "50px"}}>
            <tr id="user-table-top">
                <th>
                    <h3>Name</h3>
                </th>
                <th>
                    <h3>Email</h3>
                </th>
                <th>
                    <h3>Number Of Responses</h3>
                </th>
                <th>
                    <h3>Delete User</h3>
                </th>
            </tr>
            {/*Data table*/}
            {userData.map( (e) =>{
                return(
                    <tr>
                        <th>
                            <h5>{e.name}</h5>
                        </th>
                        <th>
                            <h5>{e.email}</h5>
                        </th>
                        <th>
                            <h5></h5>
                        </th>

                        <th>
                            <DeleteIcon
                                variant="outlined"
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ float: "right" }}
                            ></DeleteIcon>
                        </th>
                    </tr>
                )
            })}
            {/*End*/}
        </table>
    </>
);
};
export default AdminPage;