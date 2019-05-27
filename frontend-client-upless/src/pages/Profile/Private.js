import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import UserBar from "../../components/UserBar";
import Footer from "../../components/Footer";

import ButtonAdd from "../../components/ButtonAdd";
import MaterialCard from "../../components/materials/MaterialCard";

import auth from "../../lib/auth-service"

class Private extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    auth.me()
    .then((user) => {
      this.setState({currentUser: user})
    })
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Navbar />

          <UserBar />
          <h3>My Wastes</h3>
          { 
            currentUser ? currentUser.materials.map( (oneMaterial, index) => {
            return (
              <MaterialCard key={index} {...oneMaterial}/>
            )}) : null
          }
          <ButtonAdd />
        
        <Footer />
      </div>
    );
  }
}

export default withAuth(Private);