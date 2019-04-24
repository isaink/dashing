import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LinkTo extends Component {
render() {
    return (
        <>
            <Link
              className="links"
              to={`/educational`}  
            >
              Educational Services
            </Link>
    
            <Link
              className="links"
              to={`/aboutus`}
            >
              About Us
            </Link>
        </>

    )}
};
