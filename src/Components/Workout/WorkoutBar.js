import React, { useState } from "react"
import pushup from "../../images/push-up.jpg"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

function WorkoutBar(props) {

    // const [workout, setWorkout] = useState("pushup");

    const barstyle = {
        width: "450px",
        height: "60px",
        margin: "10px 25px",
        border: "0.5px solid #e1f1dd",
        borderRadius: "6px",
        backgroundColor: props.color
    }

    const image = {
        width: "50px",
        height: "50px",
        borderRadius: "8px",
        position: "relative",
        right:"150px"
    }

    return (
            <Button variant="outlined" style={barstyle} onClick={props.onClick}>
                {/* <img src={pushup} style={image}></img> */}
                <h5 style={{ position: "relative", fontSize:"20px"}}>{props.value}</h5>
                <h5 style={{ marginLeft:"10px", fontSize:"20px"}}>{props.calories} kcal</h5>

         
            </Button>
    );
}

export default WorkoutBar;