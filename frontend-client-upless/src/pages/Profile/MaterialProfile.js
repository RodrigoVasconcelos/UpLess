import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import UserBar from "../../components/UserBar";
import Footer from "../../components/Footer";

import ButtonAdd from "../../components/ButtonAdd";

class MaterialProfile extends Component {
  render() {
    const { materials } = this.props.user;
    return (
      <div>
        <Navbar />

          <UserBar />
          <h3>hey</h3>

          <ButtonAdd />
        
        <Footer />
      </div>
    );
  }
}

export default withAuth(MaterialProfile);