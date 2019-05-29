import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class EditLogout extends Component {
  state = {
    edit: true,
    hidde: "hidden",
    username: "",
    password: "",
    description: "",
    email: "", 
    pictureUrl: "",
    disable: true,
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, description, email, pictureUrl } = this.state;

    if (username !== "") {
      this.props.update({ username });
    } 
    if (password !== "") {
      this.props.update({ password });
    } 
    if (description !== "") {
      this.props.update({ description });
    } 
    if (email !== "") {
      this.props.update({ email });
    } 
    if (pictureUrl !== "") {
      this.props.update({ pictureUrl });
    } 

    document.location.reload(true);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)
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