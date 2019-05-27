import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import UserBar from "../../components/UserBar";
import Footer from "../../components/Footer";

import ButtonAdd from "../../components/ButtonAdd";
import MaterialCard from "../../components/materials/MaterialCard";

class AllMaterials extends Component {
  render() {
    console.log('ddddddddddd',this.props)
    const { material } = this.props;
    return (
      <div>
        <Navbar />

          <UserBar />
          <h3>Wall of Wastes</h3>
          <ButtonAdd />
        
        <Footer />
      </div>
    );
  }
}

export default withAuth(AllMaterials);