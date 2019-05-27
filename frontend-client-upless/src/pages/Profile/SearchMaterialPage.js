import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

import icon16 from './../../images/icon-16.png'

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ButtonAdd from "../../components/ButtonAdd";
import SearchMaterial from "../../components/Search/SearchMaterial";

class SearchMaterialPage extends Component {

  render() {
    return (
      <div className="">
        <Navbar />
        <h3>What do you wantto search?</h3>
        <SearchMaterial />
        <ButtonAdd />
        <Footer />
      </div>
    );
  }
}

export default withAuth(SearchMaterialPage);