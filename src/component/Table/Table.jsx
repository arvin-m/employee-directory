import React from 'react';


function Table (){
    

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
                <tr>
                    <th scope="row">1</th>
                    <td ><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt="img" className="rounded-circle" style={{height:70,width:70}} /></td>
                    <td>Sara</td>
                    <td>444 444 4444</td>
                    <td>@twitter</td>
                    <td>1-1-2020</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td ><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="img" className="rounded-circle" style={{height:70,width:70}} /></td>
                    <td>Sara</td>
                    <td>444 444 4444</td>
                    <td>@twitter</td>
                    <td>1-1-2020</td>
                </tr>
               
            </tbody>
        </table>
    </React.Fragment>
    )
}

export default Table;