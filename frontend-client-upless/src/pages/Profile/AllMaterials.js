import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import UserBar from "../../components/UserBar";
import Footer from "../../components/Footer";

import ButtonAdd from "../../components/ButtonAdd";
import MaterialCard from "../../components/materials/MaterialCard";
import Material from "../../lib/material-service";

class AllMaterials extends Component {
  state = {
    allMaterials: [],
  }

  getAllMaterials = () => {
    
    Material.getAll()
      .then((data) => {
        console.log(data);
        this.setState({ listOfProjects: data })
      })
  }

  render() {
    console.log('ddddddddddd', this.props.user)
    // const { material } = this.props;
    return (
      <div>
        <Navbar />

          <UserBar />
          {}
          <ButtonAdd />
        
        <Footer />
      </div>
    );
  }
}

export default withAuth(AllMaterials);