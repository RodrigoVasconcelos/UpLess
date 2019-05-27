import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

import icon16 from './../../images/icon-16.png'

class SearchMaterial extends Component {

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, description, amount, price } = this.state;
    this.props.addMaterial({ name, description, amount, price });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="margin-nav">

        <form onSubmit={this.handleFormSubmit}>

        <button type="submit" value="addMaterial" className="submit-big-button" ><img src={icon16} alt=""/></button>

        </form>
      </div>
    );
  }
}

export default withAuth(SearchMaterial);
