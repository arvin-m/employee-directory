import React, { useState, useEffect } from "react";
import '../Table/style.css'
import API from '../../utils/API';



function Table() {

  const [users, setUsers] = useState([
    {
      id: "",
      picture: "",
      name: "",
      phone: "",
      email: "",
      dob: "",

    }]);


  const [orderState, setOrderState] = useState({ order: "asc" });

  useEffect(() => {

    API.getUsers().then((res) => {

      const data = res.data.results;
      const allUsers = data.map((user) => {

        return ({
          id: data.indexOf(user),
          picture: user.picture.medium,
          name: user.name.first + " " + user.name.last,
          phone: user.phone,
          email: user.email,
          dob: user.dob.date.slice(0, 10),

        })
      });
      console.log('this is all users on first update!!', allUsers)
      setUsers(allUsers);
    });


  }, []);

  const handleSort = (value) => {
    console.log(`You click on ${value} !`);
    let newOrder;

    if (orderState.order === "asc") {

      newOrder = users.sort(function (a, b) {

        if (a[value] < b[value]) { return -1; }
        if (a[value] > b[value]) { return 1; }
        return 0;
      })
      setOrderState({ ...orderState, order: "dsc" });
     

    } else {
      newOrder = users.sort(function (a, b) {

        if (a[value] > b[value]) { return -1; }
        if (a[value] < b[value]) { return 1; }
        return 0;
      })
      setOrderState({ ...orderState, order: "asc" });
      


    }
    console.log('this is our new order', newOrder)
    console.log('this is the old users!!!', users)
    setUsers([...users]);

  };
  function handleUserSearch(userName) {

    // users.filter(userName)
    console.log("This is user name have ben searched :", userName);
}


  console.log('Thos is the users state!!!', users)
  return (
    <React.Fragment>
      <form>
        
          <div className="form-row search-wrapper col-md-12 col-sm-12">
            <div className="col-md-6"></div>
              <div className="col-md-6 mb-3 ">
                  <label>Search</label>
                  <div className="input-group ">
                      <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded " name="search" onChange={(event) => { handleUserSearch(event.target.value) }} />
                      {/* <div className="input-group-prepend">
                          <button className="btn btn-dark" >Search</button>
                      </div> */}
                  </div>
              </div>

          </div>
        
      </form>

      <table className="table table-striped table-dark">
        <thead >
          <tr>
            {/* <th scope="col" style={{ padding: 20 }}>#</th> */}
            <th scope="col" className="">Image <span></span></th>
            <th scope="col" className="">Name <span name="name" className="fas fa-sort ml-1" onClick={event => { handleSort("name") }}></span></th>
            <th scope="col" className="">Phone <span name="phone" className="fas fa-sort ml-1" onClick={event => { handleSort("phone") }}></span></th>
            <th scope="col" className="">Email <span name="email" className="fas fa-sort ml-1" onClick={event => { handleSort("email") }}></span></th>
            <th scope="col" className="">DBO <span name="dbo" className="fas fa-sort ml-1" onClick={event => { handleSort("dbo") }}></span></th>
          </tr>

        </thead>
        <tbody>
          <React.Fragment>
            {users.map((user, index) => (
              <tr key={user.id} >
                {/* <th scope="row">{user.id + 1}</th> */}
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