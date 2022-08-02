import React, { Component } from "react";
import Dialog from "./Dialogs/Dialog";
import Message from "./Dialogs/Message";

export class Dialogs extends Component {
  render() {
    return (
      <div className="content messages">
        <div className="dialogs">
          <Dialog
            id={1}
            image="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
            name="person 1"
            lastmessage="hello"
          />
          <Dialog
            id={2}
            image="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
            name="person 1"
            lastmessage="hello"
          />
          <Dialog
            id={3}
            image="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
            name="person 1"
            lastmessage="hello"
          />
          
        </div>
        <div className="chat">
          <Message username="bohdan" message="darova korova" time="16:45"/>
          <Message username="bohdan" message="darova korova" time="16:45"/>
          <Message username="bohdan" message="darova korova" time="16:45"/>
          <Message username="bohdan" message="darova korova" time="16:45"/>
        </div>
      </div>
    );
  }
}

export default Dialogs;
