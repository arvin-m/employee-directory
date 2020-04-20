import React, { useState, useEffect } from "react";
import API from '../../utils/API';



function Table (){
    
    const [users, setUsers] = useState([
        {
        
        picture:"",
        name: "" ,
        phone: "",
        email: "",
        dob: ""
      }]);
    
      useEffect(() => {
    
        API.getUsers().then((res) => {
    
          const data = res.data.results;
          const allUsers = data.map((user) => {
    
            return({
              
              picture: user.picture.medium,
              name: user.name.first +" "+ user.name.last,
              phone: user.phone,
              email: user.email,
              dob: user.dob.date
            })
          });
          setUsers(allUsers);
        });
        
    
      },[]);
    
    
    
      console.log('this is state 0 info ',users[0].name,users[0].phone,users[0].picture,users[0].email,users[0].dob)

    return(
    <React.Fragment>
        <table className="table table-striped table-dark">
            <thead >
                <tr>
                <th scope="col" style={{padding:20}}>#</th>
                <th scope="col" style={{padding:20}}>Image <span className="fas fa-sort ml-1"></span></th>
                <th scope="col" style={{padding:20}}>Name <span className="fas fa-sort ml-1"></span></th>
                <th scope="col" style={{padding:20}}>Phone <span className="fas fa-sort ml-1"></span></th>
                <th scope="col" style={{padding:20}}>Email <span className="fas fa-sort ml-1"></span></th>
                <th scope="col" style={{padding:20}}>DBO <span className="fas fa-sort ml-1"></span></th>
                </tr>
            </thead>
            <tbody>
                <React.Fragment>
                {users.map((user,index)=>(
                    <tr >
                    <th scope="row">1</th>
                    <td ><img src={user.picture} alt="img" className="rounded-circle" style={{ height: 70, width: 70 }} /></td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.dob}</td>
                    </tr>         

                ))}        
                </React.Fragment>
            </tbody>
        </table>
    </React.Fragment>
    )
}

export default Table;