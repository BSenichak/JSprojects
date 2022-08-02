import React, { Component } from "react";
import Post from "./Post";

export class Mypost extends Component {
  render() {
    return (
      <div>
        <p className="mypost_title">My posts</p>
        <div className="newpost">
          <textarea placeholder="Put your message"></textarea>
          <div>
            <button>Add post</button>
            <button>Clear</button>
          </div>
        </div>
        <div className="posts">
            <Post message="hi, how are you?"/>
            <Post message="It's my second post"/>
            <Post />
            <Post />
            <Post />
        </div>
      </div>
    );
  }
}

export default Mypost;
