import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Dialog extends Component {
  render() {
    return (
        <NavLink to={`/dialogs/${this.props.id}`}>
      <div className="dialog_item">
        <img
          className="dialog_img"
          alt="dimg"
          src={this.props.image}
        />
        <div className="dialog_text">
          <p className="dialog_name">{this.props.name}</p>
          <p className="dialog_lastmessage">{this.props.lastmessage}</p>
        </div>
      </div>
      </NavLink>
    );
  }
}

export default Dialog;
