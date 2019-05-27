import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


import icon09 from './../images/icon-09.png';
import icon10 from './../images/icon-10.png';
import icon11 from './../images/icon-11.png';


class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Link to="/private" className="footer-link"><img src={icon11} alt="" /></Link>
          <Link to="/search-material" className="footer-link"><img src={icon10} alt="" /></Link>
          <Link to="/all-materials" className="footer-link"><img src={icon09} alt="" /></Link>
        </footer>
        <div className="footer-div"></div>
      </div>
    );
  }
}

export default withAuth(footer);
