import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import icon15 from './../images/icon-15.png'
function buttonAdd () {

  return (
    <div className="button-add">
      <Link to="/add-material"><img src={icon15} alt=""/></Link>
    </div>
  );
}

export default withAuth(buttonAdd);
