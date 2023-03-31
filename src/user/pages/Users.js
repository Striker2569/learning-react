import React from "react";
import UserList from "../components/UserList";

const Users = ()=>{
    const USERS = [
    {
        id:'u1',
        name:'Harsh Chauhan',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0szgOQjoMtERPPGc94M59ryDj0IJgtUhlmALZEBY&s',
        places: 3, 
    }
];
return <UserList items= {USERS} />
        {/* <h2>UserList not working</h2> */}
}

export default Users;