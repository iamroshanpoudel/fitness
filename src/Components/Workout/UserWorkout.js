import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

function UserworkOut(props) {

    const [time, setTime] = useState(1);
    const [calorie, setCalorie] = useState(parseFloat(props.calories))

    const barstyle = {
        width: "450px",
        height: "150px",
        margin: "10px 25px",
        border: "0.5px solid #e1f1dd",
        borderRadius: "6px",
        backgroundColor: props.color,
        position: "relative"
    }

    const image = {
        width: "50px",
        height: "50px",
        borderRadius: "8px",
        position: "relative",
        right: "150px"
    }

    const minute = {
        position: "absolute",
        left: "180px",
        width: "100px",
        height: "200px",
        top: "3px",

    }

    const handleTime = (e) => {
        if (e.target.value > time) {
            setCalorie((parseFloat(props.calories) * e.target.value).toFixed(2))
            props.sendCaltoParent(props.calories, 1)
            setTime(e.target.value)
        }
        else if (e.target.value < time) {
            setCalorie((parseFloat(props.calories) * e.target.value).toFixed(2))
            props.sendCaltoParent(props.calories, 0)
            setTime(e.target.value)
        }
       

    }

    return (
        <div variant="outlined" style={barstyle} onClick={props.onClick}>
            <h5 style={{ position: "absolute", left: "25px", fontSize: "20px", top: "-15px" }}>{props.value} x </h5>
            <TextField
                id="outlined-number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{ inputProps: { min: 0, max: 1000 } }}
                variant="outlined"
                style={minute}
                value={time}
                onChange={handleTime}
            />
            <h5 style={{ position: "absolute", left: "290px", fontSize: "20px", top: "-15px" }}>min</h5>

            <p style={{ fontSize: "25px", position: "absolute", left: "180px", top: "50px" }}>{calorie} kcal</p>
            <IconButton aria-label="delete" style={{ position: "absolute", right: "45px", top: "60px" }} onClick={props.onDelete}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default UserworkOut;