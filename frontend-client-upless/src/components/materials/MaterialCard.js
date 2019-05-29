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
          <p className="amount">quantity: {props.amount}</p>
          <p className="description">{props.description}</p>
        </div>
        <p className="price">{props.price}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default withAuth(materialCard);
