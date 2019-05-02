import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../Css/Navbar.css";
import account from "../../img/account.png";

export default class Account extends Component {

render() {
    return (
        <>

        {/* <nav role="navigation">
        <ul>

            <li>

                <li><a href="#" aria-haspopup="true">Account</a>
            <ul className="dropdown_account">
                <li><a href="#">Sub-1</a></li>
                <li><a href="#">Sub-2</a></li>
                <li><a href="#">Sub-3</a></li>
            </ul>
            </li>
            </li>
        </ul>
        </nav> */}

        <Link to='/new'>

        <button className="bttn_" type="button" data-hover="GET STARTED" >
          <img src={account} alt='user_account' style={{ height: '30px', background: 'white'}}/>
        </button>
        </Link>
      </>
    );
  }
}
