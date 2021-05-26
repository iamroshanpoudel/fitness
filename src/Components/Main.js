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
                <div>
                    <h1 className="mainText">Manage Your Day,</h1>
                    <h1 className="mainText">Manage Your Life</h1>
                    <img id='fitIcon' src="https://buyflow-web-assets.noom.com/buyflow-client/9d981dcc24d0a1cee191bba67bd720884a7746c9/static/146f083a4184650bcac910747b113b38.png" alt="new" />
                </div>
                <div className="b2">
                    <h1>Description</h1>
                    <p>We are living in a so busy days, can't even know what we are eating,</p>
                    <p>we are here for you to support your healthy live.</p>
                    <p>Join us</p>
                </div>
            </div>

        </div>
    );
}

export default Main;