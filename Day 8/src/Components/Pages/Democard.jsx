import React from "react";
import '../../Asserts/DemoCard.css';
import up from '../../Asserts/Images/7Up.png';

const Demo=()=>{
    return(
        <div className="demo-body">
            <div className="demo-card">
                <div className="demo-circle">
                    <i className="bx bxs-dish"></i>
                </div>
            <div className="demo-content">
                <h2>Customer</h2>
                <p>Orders Food</p>
                <a href="#">Select</a>
            </div>
                <i className="bx bxs-dish"></i>
            </div>
            <div className="demo-card">
                <div className="demo-circle">
                    <i className="fa-solid fa-user-large fa-l"></i>
                </div>
            <div className="demo-content">
                <h2>Customer</h2>
                <p>Orders Food</p>
                <a href="#">Select</a>
            </div>
                <i className="bx bxs-dish"></i>
            </div>
            <div className="demo-card">
                <div className="demo-circle">
                    <i className="fa-solid fa-user-tie"></i>
                </div>
            <div className="demo-content">
                <h2>Customer</h2>
                <p>Orders Food</p>
                <a href="#">Select</a>
            </div>
                <i className="bx bxs-dish"></i>
            </div>
        </div>
    );
}
export default Demo;