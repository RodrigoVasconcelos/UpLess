import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import icon15 from './../../images/icon-15.png'
import AddMaterial from "../../components/materials/AddMaterial";
import ButtonAdd from "../../components/ButtonAdd";

class AddMaterialPage extends Component {
  render() {
    return (
      <div className="AddMaterialPage">
        <Navbar />
        <div className="question">
          <h3 className="">What do you want to share?</h3>
        </div>
        <AddMaterial />
        <Footer />
      </div>
    );
  }
}

export default withAuth(AddMaterialPage);