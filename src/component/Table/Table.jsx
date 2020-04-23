import React, { useState, useEffect } from "react";
import '../Table/style.css'
import API from '../../utils/API';

function Table() {

  const [inputState, setInput] = useState('')

  const [search, setSearch] = useState([]);

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
    let newOrder;
    if (orderState.order === "asc") {
      newOrder = usersToshow.sort(function (a, b) {
        if (a[value] < b[value]) { return -1; }
        if (a[value] > b[value]) { return 1; }
        return 0;
      })
      setOrderState({ ...orderState, order: "dsc" });
    } else {
      newOrder = usersToshow.sort(function (a, b) {

        if (a[value] > b[value]) { return -1; }
        if (a[value] < b[value]) { return 1; }
        return 0;
      })
      setOrderState({ ...orderState, order: "asc" });
    }
    setUsers([...users]);
  };


  const handleUserSearch = (event, input) => {
    event.preventDefault();
    const Input = input.toLowerCase();
    const filterInput = users.filter(item => {
      return item.name.substring(0, Input.length).toLowerCase() === Input;
    });
    setInput(Input)
    setSearch(filterInput);
  }

  let usersToshow;
  console.log("Search ", search)
  console.log("users ", users)
  if (search.length === 0 && inputState.length > 0) {
    usersToshow = []
  } else if (search.length > 0) {
    usersToshow = search
  } else {
    usersToshow = users
  }

  let HandleTable = usersToshow.map((user) => (

    <tr key={user.id} >
      <td ><img src={user.picture} alt="img" className="rounded-circle" style={{ height: 70, width: 70 }} /></td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.dob}</td>
    </tr>

  ))


  console.log('Thos is the users state!!!', users)
  return (
    <React.Fragment>
      {/* <form> */}

      <div className="form-row search-wrapper col-md-12 col-sm-12">
        <div className="col-md-6"></div>
        <div className="col-md-6 mb-3 ">
          <label>Search</label>
          <div className="input-group ">
            <input type="text"
              className="form-control shadow-lg p-3 mb-5 bg-white rounded "
              name="search"
              placeholder="Search By users Name ..."
              onChange={(event) => handleUserSearch(event, event.target.value)} />
          </div>
        </div>
      </div>

      {/* </form> */}

      <table className="table table-striped table-dark">
        <thead >
          <tr>
            <th scope="col" className="">Image <span></span></th>
            <th scope="col" className="">Name <span name="name" className="fas fa-sort ml-1" onClick={event => { handleSort("name") }}></span></th>
            <th scope="col" className="">Phone <span name="phone" className="fas fa-sort ml-1" onClick={event => { handleSort("phone") }}></span></th>
            <th scope="col" className="">Email <span name="email" className="fas fa-sort ml-1" onClick={event => { handleSort("email") }}></span></th>
            <th scope="col" className="">DBO <span name="dbo" className="fas fa-sort ml-1" onClick={event => { handleSort("dbo") }}></span></th>
          </tr>

        </thead>
        <tbody>
          <React.Fragment>
            {HandleTable}
          </React.Fragment>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Table;