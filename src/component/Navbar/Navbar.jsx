import React from 'react';
import "../Navbar/style.css";

function Navbar() {


    return (
        <React.Fragment>
            <header>
                <nav className=" view navbar-expand-lg navbar-dark indigo col-12">
                    <div className="intro-2">
                        <div className="full-bg-img">
                            <div className="mask rgba-black-light flex-center">
                                <div className="container text-center white-text">
                                    <div className="white-text text-center wow fadeInUp">
                                        <br />
                                        <h1>Employee Directory</h1>
                                        <h5>Click on carrots to filter by heading or use the search box to narrow your result .</h5>
                                        <br />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </React.Fragment>
    )
}

export default Navbar;