import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import icon12 from './../images/icon-12.png';
import EditLogout from "./EditLogout";



class userBar extends Component {
  state = {
    edit: false,
    visibility: "visible",
  }

  haddleEditVisibel = () => {
    this.setState({
      edit: !this.state.edit,
      visibility: "visible"
    })
  }

  haddleEditHidden = () => {
    this.setState({
      edit: !this.state.edit,
      visibility: "hidden"
    })
  }

  render() {
    const { user } = this.props;
    const imageBackgroundUser = {
      backgroundImage: `url(${user.pictureUrl})`,
    }
    const visibility = {
      visibility: this.state.visibility,
    };
    console.log(user)
    return (
      <div className="margin-nav user-bar">

        


        <div className="user-discription">
          <button onClick={this.haddleEditHidden}><img src={icon12} alt="" className="edit-img"  style={visibility} /></button>
            <h2>{user.username}</h2>
            <p>{user.description}</p>
        </div>

        
        <div className="profile-pic" style={imageBackgroundUser}>
        </div>
        {
          this.state.edit 
          ? <div className="edit-logout">
              <button onClick={this.haddleEditVisibel} className="edit-img-true">
                <img src={icon12} alt="" />
              </button>
              <EditLogout />
            </div>
            : null
        }
      </div>
    );
  }
}

export default withAuth(userBar);
