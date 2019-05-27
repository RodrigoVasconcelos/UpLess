import React, { Component } from "react";
import { Switch } from "react-router-dom";

import './styles/App.css'

import Navbar from "./components/Navbar";
import Private from "./pages/Profile/Private";
import Signup from "./pages/Auths/Signup";
import Login from "./pages/Auths/Login";

import Homepage from "./pages/Auths/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import AddMaterialPage from "./pages/Profile/AddMaterialPage";
import SearchMaterialPage from "./pages/Profile/SearchMaterialPage";
import AllMaterials from "./pages/Profile/AllMaterials";
import MaterialProfile from "./pages/Profile/MaterialProfile";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute exact path="/" component={Homepage} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/add-material" component={AddMaterialPage} />
            <PrivateRoute path="/search-material" component={SearchMaterialPage} />
            <PrivateRoute path="/all-materials" component={AllMaterials} />
            <PrivateRoute path="/material/:id" component={MaterialProfile} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
