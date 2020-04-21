import React from "react";
import Navbar from './component/Navbar/Navbar';
// import SearchForm from './component/SearchBar/Search';

import Table from './component/Table/Table';
// import API from './utils/API';



function App() {
  // const [error, setError] = useState("");
  

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
      <Table/> 
    </div>

    </React.Fragment>
  );
}

export default App;
