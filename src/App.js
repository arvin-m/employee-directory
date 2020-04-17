import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Form from './component/SearchBar/Search';
import Main from './component/Main/Main';



function App() {
  return (
    <React.Fragment>  
        <Navbar/>
        <Form/>
        <Main/>   
        
    </React.Fragment> 
  );
}

export default App;
