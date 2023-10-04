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
import { useNavigate } from "react-router-dom";


const DashBoard=()=>{
    const nav = useNavigate();
    const user = useSelector(selectUser);

    const [isLogged, setisLogged] = useState(false);
    const [id, setId] = useState('');
    useEffect(() => {
        if (user && user.user) {
            setId(user.user.name);
            setisLogged(user.loggedIn);
        } else {
            setId("Guest");
            setisLogged(false);
        }
    }, [user]);

    const [paidOrders, setPaidOrders] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [tokensSold, setTokensSold] = useState(0);
    const [totalSales, setTotalSales] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPaidOrders(prev => Math.min(prev + 70, 1174)); 
            setCustomers(prev => Math.min(prev + 170, 3959)); 
            setTokensSold(prev => Math.min(prev + 570, 14721)); 
            setTotalSales(prev => Math.min(prev + 5050, 150000)); 
        }, 100);

        return () => clearInterval(interval);
    }, []);
    

    // if(!isLogged){
    //     nav('/home');     
    // }

    return(
        
        <>
             <main>
                <div className="admin-header">
                    <div className="admin-left">
                        <h1>Welcome {id}</h1>
                        <h2>DashBoard</h2>

                        <ul className="breadcrumb">
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
                                <h3>{paidOrders}</h3>
                                <p>Paid Order</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bx-user-circle"></i>
                            <span className="admin-info">
                                <h3>{customers}</h3>
                                <p>Customers</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bx-line-chart"></i>
                            <span className="admin-info">
                                <h3>{tokensSold}</h3>
                                <p>Tokens Sold</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bx-rupee"></i>
                            <span className="admin-info">
                                <h3>₹ {totalSales}</h3>
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
                                        <p>Add New Food Items</p>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>

                                <li className="pending">
                                    <div className="task-title">
                                        <i className="bx bx-error-circle"></i>
                                        <p>Hire Chefs</p>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>

                                <li className="not-completed">
                                    <div className="task-title">
                                        <i className="bx bx-x-circle"></i>
                                        <p>Hire FOH</p>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>
                            </ul>
                        </div>
                        {/* End of Reminders */}
                    </div>
            </main>
           
            </>
        
        
    );
       
}

export default DashBoard;