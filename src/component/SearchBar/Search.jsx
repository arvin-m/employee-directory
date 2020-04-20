import React from 'react';
import '../SearchBar/style.css';


function SearchForm() {


    return (
        <React.Fragment>
            <form>
                <div className="form-row ">
                      <div className="col-md-6 mb-3 ">
                        <label>Search</label>
                       <div className="input-group">
                            <input type="text" className="form-control" name="search" onChange="" />
                            {/* <div className="input-group-prepend">
                                <button className="btn btn-dark" >Search</button>
                            </div> */}
                        </div>
                    </div>

                </div>
            </form>


        </React.Fragment>
    )
}

export default SearchForm;