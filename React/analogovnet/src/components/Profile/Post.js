import React, { Component } from "react";
import { AiOutlineLike } from "react-icons/ai";

export class Post extends Component {
  render() {
    return (
      <div className="post_item">
        <img
          alt="user"
          className="post_img"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
        />
        <p className="post_text">{this.props.message}</p>
        <p className="like_btn"><AiOutlineLike /></p>
      </div>
    );
  }
}

export default Post;
