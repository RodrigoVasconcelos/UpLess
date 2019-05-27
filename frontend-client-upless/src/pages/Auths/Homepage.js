import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";


import logo from './../../images/upLess_logo.svg';
import Signup from "./Signup";
import Login from "./Login";

class homePage extends Component {
  state = {
    signup: false,
    login: false,
    imageClass: "logo-homepage",
  };

  signupMenu = () => {
    console.log('hey');
    this.setState({
      signup: !this.state.signup,
      login: false,
      imageClass: "logo-sinlog",
    });
  }

  loginMenu = () => {
    console.log('hey');
    this.setState({
      signup:false,
      login: !this.state.login,
      imageClass: "logo-sinlog",
    });
  }
  
  render() {
    return (
      <div>
        <img src={logo} alt="" className={this.state.imageClass}/>
        <div>

          {
            this.state.signup 
            ? <Signup  /> 
            : <button type="button" className="button-homepage" onClick={this.signupMenu}>sign up</button>
           
          }
          {
            this.state.login 
            ? <Login  /> 
            :<button type="button" className="button-homepage" onClick={this.loginMenu}>log in</button>
          }
          <button className="button-homepage"><Link to="/"> facebook </Link></button>
        </div>
      </div>
    );
  }
}

export default withAuth(homePage);
