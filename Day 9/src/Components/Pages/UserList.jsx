import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css';
// import dosa from '../../Asserts/Images/dosa.png';
import '../../Asserts/AddStaffPopup.css'
import '../../Asserts/UserList.css';
import axios from "axios";
import StaffPopup from "./AddStaffPopup";


const UserList = () => {

  const [usersData, setUsersData] =useState([]);
  const [showStaffPopup, setShowStaffPopup] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/user/get')
    .then(respone=>{
      setUsersData(respone.data);
    }).catch(error=>{
      console.log(error);
    })
},[]);


  




  
 return(
  <div className="main">
    <h1 className="user-title">STAFFS</h1>
    <div className="user-added">
      <a className="user-add" onClick={()=>setShowStaffPopup(true)}>Add Staff</a>
    </div>
    <div className="user-list">
    {usersData.length>0 && usersData ? usersData.map(user => (
        <div className="user-line" key={user.id}>
          <div className="user">
            <div className="user-profile">
                <img src={user.image} alt=""/>
            </div>
            <div className="user-details">
              <h1 className="user-name">{user.name}</h1>
              <h3 className="user-username">{user.staffId}</h3>
            </div>
          </div>
          <div className="user-status">
            <span></span>
            <p>{user.status}</p>
          </div>
          <div className="user-location">
            <p>{user.role}</p>
          </div>
          <div className="user-phone">
            <p>{user.mobile}</p>
          </div>
          <div className="user-contact">
            <a className="user-btn">Edit</a>
          </div>
          <div className="user-action">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )):(
        <h1 className="user-title">Empty Data</h1>
      )}
    </div>
    {showStaffPopup && <StaffPopup onStaffClose={()=>setShowStaffPopup(false)}/>}
  </div>
 );
};

export default UserList;
