import React, { useState } from "react";
import 'boxicons/css/boxicons.min.css';
import '../../Asserts/UserList.css';

const userList = [
  { id: 1, name: 'Sakthi Bala', role: 'Admin' },
  { id: 2, name: 'Srimithun',role: 'Chef' },
  { id: 3, name: 'Rahul' ,role: 'Waiter'},   
];

const UserList = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [idsortOrder, setIdsortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const toggleSortOrderId=()=>{
    setIdsortOrder(idsortOrder === 'asc' ? 'desc':'asc');
  }

  const sortedUsers = [...userList].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const idSortedUsers = [...userList].sort((a, b) => {
    if (idsortOrder === 'asc') {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });
  


  const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredUsers = sortedUsers.filter((user) => {
        return (
        user.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

  

  return (
    <div className="user-list">
      <h1>Staff List</h1>
      <div className="userlist-search-form">
      <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-btn" type="submit"><i className="bx bx-search"></i></button>
        </div>
        <button onClick={toggleSortOrder}>
         {sortOrder === 'asc' ?(
            <>
             <i className="bx bx-sort-z-a"></i> 
             <span>Asc</span>
            </>
             ):(
                <>
              <i className="bx bx-sort-a-z"></i>
              <span>Desc</span>
                </>
         )}
      </button>
        {/* <button onClick={toggleSortOrderId}>
         {idsortOrder === 'asc' ?(
            <>
             <i className="bx bx-sort-up"></i> 
             <span>Asc</span>
            </>
             ):(
                <>
              <i className="bx bx-sort-down"></i>
              <span>Desc</span>
                </>
         )}
      </button> */}
        <ul></ul>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <p>Staff Id : {user.id}</p>
            <p>Staff Name : {user.name}</p>
            <p>Role : {user.role}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
