import React from "react";
import Nav from "./Nav/Nav";


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
                </div>
            </div>
            <div className="main_body">
                <h1 className="mainText">Manage Your Day,</h1>
                <h1 className="mainText">Manage Your Life</h1>
            </div>

        </div>  
    );
}

export default Main;