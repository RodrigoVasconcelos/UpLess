import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import icon12 from './../images/icon-12.png';

class EditLogout extends Component {
  state = {
    edit: true,
    hidde: "hidden",
    username: "",
    password: "",
    description: "",
    email: "", 
    pictureUrl: "",
    disable: false,
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, description, email, pictureUrl } = this.state;
    this.props.signup({ username, password, description, email, pictureUrl });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)
    console.log(uploadData);
    this.props.imageUpload(uploadData,console.log('heyyyyyyyyy', uploadData))
    .then((pictureUrl) => {
      this.setState({
        pictureUrl,
        disable: false,
      })
    })
    .catch((error) => console.log(error.response))
  }
  
  haddleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }
  render() {
    const { logout } = this.props;
    const { username, password, description, email, disable } = this.state;

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
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="email"
          />
          <input
            type="description"
            name="description"
            value={description}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="about you"
          />

          <input type="file" onChange={this.fileOnchange}></input>
          {disable ? <input type="submit" disabled></input>: 
          <input type="submit" value="Edit" className="blue-button" placeholder="Edit"/>
          }

        </form>
      <button type="button" onClick={logout} className="blue-button">Logout</button>
      </div>
    );
  }
}

export default withAuth(EditLogout);