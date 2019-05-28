import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import UserBar from "../../components/UserBar";
import Footer from "../../components/Footer";
import material from "../../lib/material-service";

import ButtonAdd from "../../components/ButtonAdd";
import EditMaterial from "../../components/materials/EditMaterial";

class MaterialProfile extends Component {
  state = {
    material: null,
    editMaterial: false,
  }

  componentDidMount(){
    this.getMaterial()
  }

  handleEditChange = () => {
    this.setState({
      editMaterial: !this.state.editMaterial,
    })
  }

  getMaterial = () => {
    const { id } = this.props.match.params;
    console.log(id)
    
    material.getMaterial(id)
      .then((data) => {
        console.log(data)
        this.setState({
          material: data,
        })
      })
  }
  render() {
    console.log(this.state)
  
    //  const imageBackgroundUser = {
    //   backgroundImage: `url(${this.state.material.photo})`,
    // }
    return (
      <div>
        <Navbar />

        <div className="material-profile">
          <div className="material-profile-pic" style=
          {
            {/* imageBackgroundUser */}
            }>
          </div>
          { 
          }
          <h3>Material
            {/* {this.state.material.name} */}
            </h3>
          <div className="div-description">
            <p className="amount">amount</p>
            <p className="price">price</p>
            <p className="description">description</p>
          </div>

        </div>

        {
          this.state.editMaterial
          ? <EditMaterial />
          :<div className="display-edit">
            <button className="blue-button edit-button" onClick={this.handleEditChange}>Edit</button>
          </div>
        }

        <Footer />
      </div>
    );
  }
}

export default withAuth(MaterialProfile);