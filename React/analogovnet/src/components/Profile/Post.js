import React, { Component } from "react";
import { AiOutlineLike } from "react-icons/ai";

export class Post extends Component {
  render() {
    return (
      <div className="post_item">
        <img
          alt="user"
          className="post_img"
          src={this.props.img}
        />
        <div className="post_text">
          <span className="post_username">{this.props.username}</span>
          <br />
          {this.props.message}
        </div>
        <div className="like_btn">
          <AiOutlineLike />
        </div>
      </div>
    );
  }
}

export default Post;
