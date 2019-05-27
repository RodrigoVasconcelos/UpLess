import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import typo from './../images/upLess_typo-08.svg'

// import icon09 from './../images/icon-09.png';
// import icon10 from './../images/icon-10.png';
// import icon11 from './../images/icon-11.png';
// import icon12 from './../images/icon-12.png';
// import icon13 from './../images/icon-13.png';
// import icon14 from './../images/icon-14.png';


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="div-nav-bar">
        <nav className="navbar">
          <img src={typo} alt=""/>
        </nav>
      </div>
    );
  }
}

export default withAuth(Navbar);
