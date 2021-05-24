import { ExpansionPanelSummary } from "@material-ui/core";
import React from "react";
import Nav from "./Nav/Nav";
import main_img from "../images/main_img.jpg"

function Main() {

    return (
        <div className="mainPage">
            <div className="top">
                <Nav className="topNav" />
                {/* <img src={main_img} alt="main_photo" className="main_photo" /> */}
            </div>
            <div className="main_body">
                <p>Manage Your Day,</p>
                <p>Manage Your Life</p>
                <button>Join Us</button>
            </div>
        </div>  
    );
}

export default Main;