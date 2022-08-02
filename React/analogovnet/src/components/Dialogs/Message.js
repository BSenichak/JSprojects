import React, { Component } from 'react'

export class Message extends Component {
  render() {
    return (
        <div className="message">
            <p>{this.props.username}</p>
            <p>{this.props.message}</p>
            <p>{this.props.time}</p>
        </div>
    )
  }
}

export default Message