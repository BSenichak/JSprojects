import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav_item">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className="nav_item">
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className="nav_item">
          <a href="http://google.com">News</a>
        </div>
        <div className="nav_item">
          <a href="http://google.com">Music</a>
        </div>
        <div className="nav_item">
          <a href="http://google.com">Settings</a>
        </div>
      </nav>
    );
  }
}
 
export default Nav;
