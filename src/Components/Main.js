import { ExpansionPanelSummary } from "@material-ui/core";
import React from "react";
import Nav from "./Nav/Nav";
import main_img from "../images/main_img.jpg"

function Main() {

    return (
        <div>
            <div className="mainPage">
                <div className="top">
                    <Nav className="topNav" />
                    {/* <img src={main_img} alt="main_photo" className="main_photo" /> */}
                </div>
                <div className="main_body">
                    <div className="paragraph">
                        <p>Manage Your Day,</p>
                        <p>Manage Your Life</p>
                    </div>
                    <div>
                        <button className="btn main_button">Join Us</button>
                    </div>

                </div>
            </div>
            <div>
                <h1 className="mainPage2">Manage Your Daliy Calorie</h1>
            </div>
        </div>


    );
}

export default Main;