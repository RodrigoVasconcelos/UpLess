import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

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

  componentDidMount(){
    this.getAllMaterials();
  }
  
  getAllMaterials = () => {
    console.log("gettinf all materi")
    Material.getAll()
      .then((data) => {
        this.setState({ allMaterials: data })
      })
  }

  render() {
    console.log('ddddddddddd', this.state.allMaterials)
    return (
      <div>
        <Navbar />

          <UserBar />
          <div className="bar">
          <h3>Wall of Wastes</h3>
          </div>
          { 
            this.state.allMaterials.map( (oneMaterial, index) => {
            return (
              <MaterialCard key={index} {...oneMaterial}/>
            )})
          }
          <ButtonAdd />
        
        <Footer />
      </div>
    );
  }
}

export default withAuth(AllMaterials);