import React, { useState } from 'react';
import Table from '../Table/Table';




function Main() {
  
  const [user, setUser] = useState(0);

  return (
    <div className="container">
    <Table/> 
    </div>
  );


}

export default Main;