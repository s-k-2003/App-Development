import axios from "axios";
import React, { useState } from "react";

const StaffPopup=({onStaffClose})=>{
    
    const [staffid, setStaffId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [mobile, setMobile] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] =useState("");

    const data = 
    {
        staffId: staffid,
        name: name,
        password: password,
        status: status,
        role: role,
        mobile: mobile,
        image: image
    };
    const handleAddUser = () => {

        axios.post('http://localhost:8181/api/v1/user/save',data);
        onStaffClose();
    }
  
    return (
        <div className="staff-popup">
        <div className="staff-popup-inner">
            <span className="fa-regular fa-circle-xmark" style={{color: "#000000", fontSize: 30}} onClick={onStaffClose}></span>
          <h2>Add Staff</h2>
            <label htmlFor="staffId">StaffId:</label>
            <input type="text" name="staffId" value={staffid} onChange={(e)=>setStaffId(e.target.value)} required />
  
            <label htmlFor="name">Name:</label>
            <input type="text"  name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
  
            <label htmlFor="password">Password:</label>
            <input type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
  
            <label htmlFor="status">Status:</label>
            <input type="text" name="status"  value={status} onChange={(e)=>setStatus(e.target.value)} required />
  
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} required />
  
            <label htmlFor="role">Role:</label>
            <input type="text" name="role" value={role} onChange={(e)=>setRole(e.target.value)} required />
  
            <label htmlFor="image">Image URL:</label>
            <input type="text"  name="image" value={image} onChange={(e)=>setImage(e.target.value)} required />
  
            <button  onClick={handleAddUser}>Submit</button>
            {/* <button  onClick={onClose}>Submit</button> */}

        </div>
      </div>
    );
}

export default StaffPopup;