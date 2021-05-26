
import React from "react";
import Nav from "./Nav/Nav";


function Main() {

    return (
        <div className="mainPage">
            <div className="top">
                <Nav className="topNav" />

            </div>
            <div className="main_body">
                <h1 className="mainText">Manage Your Day,</h1>
                <h1 className="mainText">Manage Your Life</h1>
                <img id='fitIcon' src="https://buyflow-web-assets.noom.com/buyflow-client/9d981dcc24d0a1cee191bba67bd720884a7746c9/static/146f083a4184650bcac910747b113b38.png"/>
            </div>

        </div>  
    );
}

export default Main;