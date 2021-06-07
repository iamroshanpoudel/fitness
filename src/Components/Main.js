import React from "react";
import Nav from "./Nav/Nav";


function Main(props) {
    console.log(props);
    return (
        <div>
            <div className="mainPage">
                <div className="top">
                    <Nav className="topNav" loginState={props.loginState} loginStateFunction ={props.loginStateFunction}/>
                    {/* <img src={main_img} alt="main_photo" className="main_photo" /> */}
                </div>
                <div className="main_body">
                    <div>
                        <h1 className="mainText">Fitness starts</h1>
                        <h1 className="mainText">With what you</h1>
                        <h1 className="mainText">Eat</h1>
                        <a href="/getstart">
                            <img id='fitIcon' src="https://buyflow-web-assets.noom.com/buyflow-client/9d981dcc24d0a1cee191bba67bd720884a7746c9/static/146f083a4184650bcac910747b113b38.png" alt="new" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;