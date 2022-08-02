import React, { Component } from "react";
import Mypost from "./Mypost";

export class Profile extends Component {
  render() {
    return (
      <div className="content">
        <img
          src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg"
          alt="gg"
          className="content-header"
        />
        <div className="user">
          <img
            className="user_img"
            alt="gh"
            src="https://media.wired.com/photos/5954a299267cf6013d251f86/master/pass/catinbox_cally_by-helen-haden_4x31.jpg"
          />
          <div className="user_desc">
            <h3>{"Bohdan S."}</h3>
            <p>Date of birgth: {"15 january"}</p>
            <p>City: {"Kyiv"}</p>
            <p>Education: {"KNU'22, OMK'19"}</p>
            <p>Web Site: {"http://google.com"}</p>
          </div>  
        </div>
        <Mypost />
      </div>
    );
  }
}

export default Profile;
