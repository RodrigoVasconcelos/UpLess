import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import material from '../../lib/material-service'
import icon15 from './../../images/icon-15.png'

class EditMaterial extends Component {
  state = {
    name: "",
    description: "",
    amount: "", 
    price: "", 
    photo: "",
    disable: false,
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, description, amount, price, photo } = this.state;
    console.log(this.state)
    material.addMaterial({ name, description, amount, price, photo })
    .then((newMaterial) => {
      console.log(newMaterial);
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)
    material.imageUploadMaterial(uploadData)
    .then((photo) => {
      console.log(photo)
      this.setState({
        photo,
        disable: true,
      })
    })
    .catch((error) => console.log(error.response))
  }

  render() {
    const { name, description, amount, price, disable } = this.state;
    return (
      <div className="margin-nav">

        <form onSubmit={this.handleFormSubmit}>


          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="name"
          />
          <input
            type="description"
            name="description"
            value={description}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="about the material"
          />
          <input
            type="amount"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="amount"
          />
          <input
            type="price"
            name="price"
            value={price}
            onChange={this.handleChange}
            className="grey-button"
            placeholder="price"
          />

          <input type="file" onChange={this.fileOnchange}></input>
          {disable ? <input type="submit" disabled></input>: 
          <button type="submit" value="addMaterial" className="blue-button" >Edit</button>

          }

        </form>
      </div>
    );
  }
}

export default withAuth(EditMaterial);
