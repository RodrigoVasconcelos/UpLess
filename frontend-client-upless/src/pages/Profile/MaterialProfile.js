import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { GoogleMap } from 'react-google-maps';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import material from "../../lib/material-service";
import auth from "../../lib/auth-service"

import EditMaterial from "../../components/materials/EditMaterial";

class MaterialProfile extends Component {
  state = {
    currentUser: "",
    material: "",
    editMaterial: false,
    sameUser: true,
  }
  
    componentDidMount(){
      auth.me()
      .then((user) => {
        this.setState({currentUser: user},()=>{this.getMaterial()})
      });
    }

  sameUser = () => {
    console.log(this.state.currentUser);
    const { _id } = this.state.material;

    this.state.currentUser.materials.forEach( (oneMaterial) => {
      if (oneMaterial._id === _id) {
        this.setState({
          sameUser: true
        })
      } else {
        this.setState({
          sameUser: false
        })
      }
    });
  }

  handleEditChange = () => {
    this.setState({
      editMaterial: !this.state.editMaterial,
    })
  }

  getMaterial = () => {
    const { id } = this.props.match.params;
    
    material.getMaterial(id)
      .then((data) => {
        this.setState({
          material: data,
        },()=>{this.sameUser()})
      })
  }
  render() {
    // console.log('---------',this.state.currentUser.materials);
    // console.log(this.state.currentUser.material.forEach( (oneMaterial) => {return oneMaterial}));
    console.log(this.state.material._id);
    console.log('-------',this.state.currentUser);
    console.log(this.state.sameUser);
    
    const imageBackgroundUser = {
      backgroundImage: `url(${this.state.material.photo})`,
    }
    return (
      <div>
        <Navbar />

        <div className="material-profile">
          <div className="material-profile-pic" style={imageBackgroundUser}>
          </div>
          { 
          }
          <h3>{this.state.material.name}</h3>
          <div className="div-description">
            <p className="amount">{this.state.material.amount}</p>
            <p className="price">{this.state.material.price}</p>
            <p className="description">{this.state.material.description}</p>
          </div>

        </div>

        {
          this.state.sameUser
            ?this.state.editMaterial
              ? <EditMaterial material={ this.state.material }/>
              :<div className="display-edit">
                <button className="blue-button edit-button" onClick={this.handleEditChange}>Edit</button>
              </div>
            :null
        }

        <Footer />
      </div>
    );
  }
}

export default withAuth(MaterialProfile);