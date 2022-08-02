import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="./logo.png" alt="logo" className="header_img"/>
        <span>Analo.gov.net</span>
      </header>
    );
  }
}

export default Header;
