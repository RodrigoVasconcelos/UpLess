import React, { Component } from "react";
import material from '../../lib/material-service'

import Categories from "../../data/categories.json";

class EditMaterial extends Component {
  state = {
    material:"",
    name: "",
    description: "",
    amount: "", 
    price: "", 
    photo: "",
    category: "",
    disable: false,
  };

  componentDidMount(){
    this.setState({material: this.props.material})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, description, amount, price, photo } = this.state;
      console.log('nnnnnnnnnnnn',this.props.material)
      if (name !== "") {
       console.log(this.state.material);
        material.update({ name });
      } 
      if (description !== "") {
        material.update({ description });
      } 
      if (description !== "") {
        material.update({ description });
      } 
      if (amount !== "") {
        material.update({ amount });
      } 
      if (price !== "") {
        material.update({ price });
      } 
      if (photo !== "") {
        material.update({ photo });
      } 

    console.log(name, description, amount, price, photo)

      // document.location.reload(true);
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

  deleteMaterial = () => {
    const _id = this.state.material._id
    material.deleteMaterial(_id);
    window.location.href = "/";
  }

  render() {
    console.log('sssss',this.props);
    console.log('sssss',this.state);
    const { name, description, amount, price, category, disable } = this.state;
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
              Object.keys(Categories[0]).map( (oneCategory, index) => {
                return (
                  <option value={oneCategory}>{oneCategory}</option>
                )
                
              })

            }
          </select>

          <input type="file" onChange={this.fileOnchange}></input>
          {disable ? <input type="submit" disabled></input>: 
          <button type="submit" value="addMaterial" className="blue-button" >Edit</button>

          }

        </form>
        <button type="button" value="deleteMaterial" className="blue-button" onClick={this.deleteMaterial}>Delete</button>
      </div>
    );
  }
}

export default EditMaterial;
