import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

import material from '../../lib/material-service';

import icon15 from './../../images/icon-15.png';
import Categories from "../../data/categories.json";

class AddMaterial extends Component {
  state = {
    name: "",
    description: "",
    amount: "", 
    price: "", 
    photo: "",
    category: "",

  };

  // componentDidMount(){
  //   this.setCategories();
  // }

  // setCategories = () => {
  //   this.setState({
  //     categories: Categories,
  //   })
  // }
  handleFormSubmit = event => {
    event.preventDefault();
    const { name, description, amount, price, photo, category } = this.state;
    console.log(this.state)
    material.addMaterial({ name, description, amount, price, photo, category })
    .then((newMaterial) => {
      console.log(newMaterial);
    })
    window.location.href = "/";
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
      })
    })
    .catch((error) => console.log(error.response))
  }

  render() {
    console.log(Categories[0]);
    
    const { name, description, amount, price } = this.state;
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

          <select name="category" className="grey-button" placeholder="Category" onChange={this.handleChange}>
            {
              Object.keys(Categories[0]).forEach( (oneCategory, index) => {
                return (
                  <option value={oneCategory}>{oneCategory}</option>
                )
                
              })

            }
          </select>

          {/* {
            this.state.category
            ? this.state.category.map( (oneCategory) => {
              return (
                  <option value={oneCategory}>{oneCategory}</option>
                
              )})
            : null
          } */}

          <input type="file" onChange={this.fileOnchange} className="grey-button" placeholder="Choose File"></input>

          <div className="submit-big-button" >
            <button type="submit" value="addMaterial" >
              <img src={icon15} alt=""/>
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default withAuth(AddMaterial);
