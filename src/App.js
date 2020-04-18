import React, { useState, useEffect } from "react";
import Navbar from './component/Navbar/Navbar';
import SearchForm from './component/SearchBar/Search';
import Main from './component/Main/Main';
import API from '../src/utils/API';


function App() {
  // const [error, setError] = useState("");

  const [state, setState] = useState({
    users: []
  });

  useEffect(() => {

    API.getUsers().then((res) => {

      const users = res.data.results;
      const allUsers = users.map(user => {

        return ({
          picture: user.picture.medium,
          Name: user.name.first + user.name.last,
          phone: user.phone,
          email: user.email,
          dob: user.dob
        })
      });
      setState(allUsers);
    });
    

  },[state.users]);

  // console.log('this is our STATE!!!! in app ', state)
  console.log('this is our STATE index [0] ', state[0])

  return (
    <React.Fragment>
      <Navbar />
      <SearchForm />
      <Main />

    </React.Fragment>
  );
}

export default App;
