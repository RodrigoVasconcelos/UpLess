import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withAuth } from "../../lib/AuthProvider";

const materialCard = (props) => {
  const imageBackgroundUser = {
    backgroundImage: `url(${props.photo})`,
  }
  return (
    <React.Fragment>
      <div className="material-card">
        <Link to={`/material/${props._id}`}>
          <div className="material-img-div" style={imageBackgroundUser}>
          </div>
        </Link>
        <div className="material-description-div">
          <Link to={`/material/${props._id}`}>
            <h4>{props.name}</h4>
          </Link>
          <p>{props.amount}</p>
          <p>{props.description}</p>
          <p className="amount">{props.price}</p>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default withAuth(materialCard);
