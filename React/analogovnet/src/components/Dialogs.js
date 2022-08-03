import React, { Component } from "react";
import Dialog from "./Dialogs/Dialog";
import Message from "./Dialogs/Message";

export class Dialogs extends Component {
  constructor(props) {
    super(props);
    this.DialogsData = [
      {
        id: 1,
        name: "Bohdan",
        image:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
      },
      {
        id: 2,
        name: "Ihor",
        image:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
      },
      {
        id: 3,
        name: "Alex",
        image:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
      },
    ];
    this.messagesData = [
      {
        id: 1,
        username: "Bohdan",
        message:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        time: "16:15",
      },
      {
        id: 2,
        username: "Ihor",
        message:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        time: "16:15",
      },
      {
        id: 3,
        username: "Alex",
        message:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        time: "16:15",
      },
    ];
  }
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
