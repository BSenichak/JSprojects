import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div>
          <a href="http://google.com">Profile</a>
        </div>
        <div>
          <a href="http://google.com">Messages</a>
        </div>
        <div>
          <a href="http://google.com">News</a>
        </div>
        <div>
          <a href="http://google.com">Music</a>
        </div>
        <div>
          <a href="http://google.com">Settings</a>
        </div>
      </nav>
    );
  }
}

export default Nav;
