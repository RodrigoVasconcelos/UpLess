import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import icon12 from './../images/icon-12.png';
import icon13 from './../images/icon-13.png';
import icon14 from './../images/icon-14.png';
import EditLogout from "./EditLogout";



class userBar extends Component {
  state = {
    edit: false,
  }



  haddleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }

  render() {
    const { user } = this.props;
    const imageBackgroundUser = {
      backgroundImage: `url(${user.pictureUrl})`,
    }
    console.log(user)
    return (
      <div className="margin-nav user-bar">

        {
          this.state.edit ? <EditLogout /> : null
        }


        <div className="user-discription">
          <button onClick={this.haddleEdit}><img src={icon12} alt="" className="edit-img"/></button>
          <h2>{user.username}</h2>
          <p>{user.description}</p>
        </div>
        
        <div className="profile-pic" style={imageBackgroundUser}>
        </div>
      </div>
    );
  }
}

export default withAuth(userBar);
