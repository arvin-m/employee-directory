import React, { useState, useEffect } from "react";
import Navbar from './component/Navbar/Navbar';
import SearchForm from './component/SearchBar/Search';
import Main from './component/Main/Main';
// import API from './utils/API';


function App() {
  // const [error, setError] = useState("");
  

  return (
    <React.Fragment>
      <Navbar />
      <SearchForm />
      <Main />

    </React.Fragment>
  );
}

export default App;
