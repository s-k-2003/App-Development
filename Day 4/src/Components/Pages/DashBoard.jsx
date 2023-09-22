import {React, useState }from "react";
import '../../Asserts/AdminPanel.css';
import dosa from '../../Asserts/Images/dosa.png';
import idly from '../../Asserts/Images/idly.png';
import poori from '../../Asserts/Images/poori.png';
import 'boxicons/css/boxicons.min.css';
import { useSelector } from 'react-redux';
import { selectUser } from "../Redux/UserSlice";
import { useEffect } from "react";
import '../../Asserts/DashBoard.css';

const DashBoard=()=>{
    const user = useSelector(selectUser);
    const [id, setId] = useState('');
    useEffect(()=>{
        if(user){
            setId(user.name);
        }else{
    
            if(!id){
                setId("Guest");
            }
        }
        
    },[user, id]);

    return(
        
             <main>
                <div className="admin-header">
                    <div className="admin-left">
                        <h1>Welcome {id}</h1>
                        <h2>DashBoard</h2>

                        <ul className="breadcrumb">
                            <li><a href="#">
                                Analytics
                            </a></li>
                            /
                            <li><a href="#" className="active">Shop</a></li>
                        </ul>
                    </div>
                    <a href="#" className="admin-report">
                        <i className="bx bx-cloud-download"></i>
                        <span>Download CSV</span>
                    </a>
                </div>
                <ul className="admin-insights">
                        <li>
                            <i className="bx bx-calendar-check"></i>
                            <span className="admin-info">
                                <h3>1074</h3>
                                <p>Paid Order</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bx-user-circle"></i>
                            <span className="admin-info">
                                <h3>3,944</h3>
                                <p>Customers</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bx-line-chart"></i>
                            <span className="admin-info">
                                <h3>14,721</h3>
                                <p>Tokens Sold</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bx-rupee"></i>
                            <span className="admin-info">
                                <h3>₹ 1,50,000</h3>
                                <p>Total Sales</p>
                             </span>
                        </li>
                    </ul>
                    {/* End of Insights */}

                    <div className="bottom-data">
                        <div className="admin-orders">
                            <div className="admin-header">
                                <i className="bx bx-receipt"></i>
                                <h3>Recent Orders</h3>
                                <i className="bx bx-filter"></i>
                                <i className="bx bx-search"></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order Item</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={dosa} alt="" />
                                            <p>Dosa</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className="status completed">Completed</span></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img src={idly} alt="" />
                                            <p>Idly</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img src={poori} alt="" />
                                            <p>Poori</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className="status process">Processing</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Reminders */}

                        <div className="reminders">
                            <div className="admin-header">
                                <i className="bx bx-note"></i>
                                <h3>Reminders</h3>
                                <i className="bx bx-filter"></i>
                                <i className="bx bx-plus"></i>
                            </div>
                            <ul className="task-list">
                                <li className="completed">
                                    <div className="task-title">
                                        <i className="bx bx-check-circle"></i>
                                        <p>Star Our Meeting</p>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>

                                <li className="completed">
                                    <div className="task-title">
                                        <i className="bx bx-check-circle"></i>
                                        <p>Analyze</p>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>

                                <li className="not-completed">
                                    <div className="task-title">
                                        <i className="bx bx-x-circle"></i>
                                        <p>Play FootBall</p>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>
                            </ul>
                        </div>
                        {/* End of Reminders */}
                    </div>
            </main>

        
        
    );
       
}

export default DashBoard;