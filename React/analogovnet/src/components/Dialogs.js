import React, { Component } from "react";
import Dialog from "./Dialogs/Dialog";
import Message from "./Dialogs/Message";

export class Dialogs extends Component {
  render() {
    return (
      <div className="content messages">
        <div className="dialogs">
          {this.props.dialogsData.map((el) => {
            return (
              <Dialog
                key={el.id}
                id={el.id}
                image={el.image}
                name={el.name}
                lastmessage="hello"
              />
            );
          })}
        </div>
        <div className="chat">
          {this.props.messagesData.map((el) => {
            return (
              <Message
              key={el.id}
                username={el.username}
                message={el.message}
                time={el.time}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dialogs;
