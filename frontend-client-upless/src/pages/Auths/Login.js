import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="name"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="password"
          />
          <input input type="submit" value="login" className="blue-button"/>

        </form>

      </div>
    );
  }
}

export default withAuth(Login);
