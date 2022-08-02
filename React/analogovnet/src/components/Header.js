import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="./logo.png" alt="logo" />
        <span>Analo.gov.net</span>
      </header>
    );
  }
}

export default Header;
