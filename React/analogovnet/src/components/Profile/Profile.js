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
            src={this.props.profile.img}
          />
          <div className="user_desc">
            <h3>{this.props.profile.userName}</h3>
            <p>Date of birgth: {this.props.profile.dateOfByrgth}</p>
            <p>City: {this.props.profile.city}</p>
            <p>Education: {this.props.profile.education}</p>
            <p>Web Site: {this.props.profile.webSite}</p>
          </div>  
        </div>
        <Mypost postData={this.props.postData}/>
      </div>
    );
  }
}

export default Profile;
