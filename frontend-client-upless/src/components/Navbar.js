import React, { Component } from "react";
import { Link } from "react-router-dom";

import typo from './../images/upLess_typo-08.svg';
import icon13 from './../images/icon-13.png';


const navbar = () => {
    return (
      <div className="div-nav-bar">
        <nav className="navbar">
          <img src={typo} alt=""/>
          <div className="message">
            <Link to="/"><img src={icon13} alt=""/></Link>
          </div>
        </nav>
      </div>
    );
}

export default navbar;
